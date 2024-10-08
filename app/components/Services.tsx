'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

const fadeInLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
}

const fadeInRight = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
}

const ServiceWithTimeline = () => {
  return (
    <div id="services-section" className='relative flex flex-col items-center gap-20 my-40 bg-white'>
      <div className='flex flex-col text-center'>
        <h1 className='text-4xl font-bold'>Our Services</h1>
        <p className='w-96 mt-10 mx-auto text-base sm:text-lg'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis commodi fugiat placeat asperiores dicta perspiciatis explicabo aperiam odio sunt similique? Consequatur unde doloremque quibusdam corrupti velit ipsa tempore voluptatem ut.
        </p>
      </div>

      {/* Center timeline line - Hidden on small screens */}
      <div className='hidden md:block absolute left-1/2 transform -translate-x-1/2 top-64 bottom-0 w-1 bg-gray-300'></div>

      {/* First section */}
      <motion.div 
        className='flex flex-col md:flex-row my-10 px-5 items-center w-full max-w-6xl'
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className='flex flex-col md:flex-row w-full justify-between items-center gap-10'>
          {/* Image on the left */}
          <motion.div className='w-full md:w-1/2' variants={fadeInLeft}>
            <Image
              src='/s1.jpeg'
              alt='solar'
              width={600}
              height={300}
              className='object-cover w-full h-auto rounded-lg shadow-md'
            />
          </motion.div>
          {/* Text on the right with left border */}
          <motion.div className='pl-0 md:pl-8 w-full md:w-1/2 text-center md:text-left' variants={fadeInRight}>
            <h1 className='text-2xl font-semibold'>Free Consultations</h1>
            <p className='mt-5 text-gray-700'>
              Start your solar journey with our complimentary consultations. Our knowledgeable advisors take the time to understand your energy needs and provide personalized recommendations, ensuring you choose the right solar solutions for your home. Experience a tailored approach that empowers you to make informed decisions about your energy future.
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Second section */}
      <motion.div 
        className='flex flex-col md:flex-row my-10 px-5 items-center w-full max-w-6xl'
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className='flex flex-col md:flex-row w-full justify-between items-center gap-10'>
          {/* Text on the left with right border */}
          <motion.div className='pr-0 md:pr-8 w-full md:w-1/2 text-center md:text-right' variants={fadeInLeft}>
            <h1 className='text-2xl font-semibold'>Expert Installations</h1>
            <p className='mt-5 text-gray-700'>
              Our team of skilled professionals ensures that your solar panels are installed with precision and care. We handle the entire installation process, from start to finish, so you can enjoy the benefits of solar energy without any hassle.
            </p>
          </motion.div>
          {/* Image on the right */}
          <motion.div className='w-full md:w-1/2' variants={fadeInRight}>
            <Image
              src='/s2.jpeg'
              alt='solar'
              width={600}
              height={300}
              className='object-cover w-full h-auto rounded-lg shadow-md'
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Third section */}
      <motion.div 
        className='flex flex-col md:flex-row my-10 px-5 items-center w-full max-w-6xl'
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className='flex flex-col md:flex-row w-full justify-between items-center gap-10'>
          {/* Image on the left */}
          <motion.div className='w-full md:w-1/2' variants={fadeInLeft}>
            <Image
              src='/s3.jpeg'
              alt='solar'
              width={600}
              height={300}
              className='object-cover w-full h-auto rounded-lg shadow-md'
            />
          </motion.div>
          {/* Text on the right with left border */}
          <motion.div className='pl-0 md:pl-8 w-full md:w-1/2 text-center md:text-left' variants={fadeInRight}>
            <h1 className='text-2xl font-semibold'>After Sale Services</h1>
            <p className='mt-5 text-gray-700'>
              Start your solar journey with our complimentary consultations. Our knowledgeable advisors take the time to understand your energy needs and provide personalized recommendations, ensuring you choose the right solar solutions for your home. Experience a tailored approach that empowers you to make informed decisions about your energy future.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

export default ServiceWithTimeline
