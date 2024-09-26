'use client';
import { motion } from "framer-motion";
import { FaPhone } from "react-icons/fa";
import { Link as ScrollLink } from 'react-scroll';

const Hero = () => {
  // Define containerVariants correctly
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  }; // <-- Added missing closing bracket and semicolon here

  return (
    <motion.div
      className="bg-hero-pattern bg-cover bg-center relative lg:h-screen h-[70vh]"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Content Section */}
      <div className="relative text-white py-12 px-4 sm:py-16 sm:px-8 md:py-20 md:px-16 lg:py-24 lg:px-32 xl:py-32 xl:px-40 2xl:py-40 2xl:px-48 top-[20%] space-y-4 sm:space-y-6 md:space-y-8">
        <motion.p
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl uppercase"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          Welcome to <span className="text-green-500 font-bold text-5xl">Solar Roof</span>
        </motion.p>

        <motion.h1
          className="mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl max-w-full sm:max-w-[600px] md:max-w-[700px] lg:max-w-[800px] text-start font-bold"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          We find the highest and best use for all resources
        </motion.h1>

        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 font-bold">
          <motion.button
            className="w-fit flex items-center justify-center border-2 border-green-500 px-4 sm:px-6 py-2 sm:py-3  hover:bg-green-700 text-center"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            CONTACT US
            <FaPhone className="ml-2 text-base sm:text-lg" />
          </motion.button>

          <ScrollLink to="services-section" smooth={true} duration={500} offset={-70}>
            <motion.button
              className="border-2 border-green-500 px-4 sm:px-6 py-2 sm:py-3 hover:bg-green-700"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              OUR SERVICES
            </motion.button>
          </ScrollLink>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
