'use client'
import { motion } from "framer-motion";
import Plan from "./components/Plan";
import Services from "./components/Services";
import Navbar from "./components/Navbar";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div>
      <Navbar/>
      <motion.div
        className="bg-hero-pattern bg-cover h-screen relative"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        transition={{ duration: 0.5 }}
      >
        
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="relative text-white py-20 sm:py-28 md:py-36 lg:py-40 xl:py-48 2xl:py-40 flex items-start flex-col px-8 sm:px-16 md:px-24 lg:px-32 xl:px-40 2xl:px-48 top-[20%] space-y-6 sm:space-y-8">
          <motion.p
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl uppercase"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Welcome to <span className="text-green-500 font-bold text-5xl">Solar Roof</span>
          </motion.p>
          <motion.h1
            className="mt-4 sm:mt-6 md:mt-8 lg:mt-10 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl max-w-full sm:max-w-[600px] md:max-w-[700px] lg:max-w-[800px] text-start font-bold"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            we find the highest and best use for all resources
          </motion.h1>
          <div className="space-x-2 sm:space-x-4">
            <motion.button
              className="border-2 border-green-500 px-6 sm:px-8 md:px-10 lg:px-12 py-2 sm:py-3 md:py-4 hover:bg-green-700"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              CONTACT US
            </motion.button>
            <motion.button
              className="border-2 border-green-500 px-4 sm:px-6 md:px-7 lg:px-8 py-2 sm:py-3 md:py-4 hover:bg-green-700"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              ABOUT COMPANY
            </motion.button>
          </div>
        </div>
      </motion.div>
      <Plan />
      <Services/>
    </div>
  );
}
