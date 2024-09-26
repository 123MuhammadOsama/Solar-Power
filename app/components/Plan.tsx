'use client';
import { motion } from 'framer-motion';

const Plane = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className='flex flex-col md:flex-row py-10 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-64 bg-gray-800 gap-6 md:gap-16 lg:gap-32'
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      transition={{ duration: 0.5 }}
    >
      <motion.h1
        className='text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl'
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        Go Solar & Save 10-30%* on Your Energy Rate
      </motion.h1>
      <motion.button
        className='border-2 border-green-500 text-white hover:bg-green-500 px-6 sm:px-2 md:px-10 lg:px-12 py-2 sm:py-0 md:py-4'
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        CHOOSE A PLAN
      </motion.button>
    </motion.div>
  );
};

export default Plane;
