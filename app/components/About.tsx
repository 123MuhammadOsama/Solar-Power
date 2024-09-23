'use client'

import Image from 'next/image'
import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'

const About = () => {
  const leftControls = useAnimation();
  const rightControls = useAnimation();

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;

    // If scroll is more than 20% of the window height
    if (scrollPosition > windowHeight * 0.2) {
      leftControls.start({ x: 0 });
      rightControls.start({ x: 0 });
    }
  };

  useEffect(() => {
    // Add the scroll event listener
    window.addEventListener('scroll', handleScroll);

    return () => {
      // Clean up the event listener when component unmounts
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='flex flex-col md:flex-row gap-10 lg:gap-20 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 2xl:px-32 py-10 h-auto bg-green-200'>
      
      {/* Left Div (About Company) */}
      <motion.div
        className='flex flex-col items-center md:items-center text-center md:text-left gap-6 md:gap-10 w-full md:w-1/2'
        initial={{ x: '-100vw' }}
        animate={leftControls}
        transition={{ type: 'spring', stiffness: 50 }}
      >
        <h1 className='text-2xl sm:text-3xl lg:text-4xl font-bold mt-10'>About Company</h1>
        <Image
          src='/about.webp'
          alt='solar'
          width={800}
          height={800}
          className='w-full h-auto max-w-md lg:max-w-lg 2xl:max-w-xl'
        />
      </motion.div>

      {/* Right Div (About Solar Roof) */}
      <motion.div
        className='flex flex-col text-center md:center gap-6 md:gap-10 w-full md:w-1/2 justify-center'
        initial={{ x: '100vw' }}
        animate={rightControls}
        transition={{ type: 'spring', stiffness: 50 }}
      >
        <h1 className='text-2xl sm:text-3xl lg:text-4xl font-bold mt-10 underline'>About Solar Roof</h1>
        <div className='text-base sm:text-lg md:text-xl'>
          <p className='mt-6 sm:mt-8 lg:mt-10'>
            At V-Energy, we’re driven by the vision of a world powered by renewable energy. Our roots in quality and customer-centric service guide our mission to provide tailored solar solutions.
          </p>
          <p className='mt-6 sm:mt-8 lg:mt-10'>
            Recognizing the urgent need for environmental change, we’re committed to being a force for good, offering affordable and efficient solar energy to all, regardless of location.
          </p>
          <p className='mt-6 sm:mt-8 lg:mt-10'>
            Our goal is to enhance lives by reducing energy bills, increasing reliance on clean energy, and ensuring a seamless customer experience. Join us in our mission to light up homes across Pakistan with sustainable, cutting-edge solar technology.
          </p>
        </div>
      </motion.div>
    </div>
  )
}

export default About
