// 'use client';
// import { motion } from "framer-motion";
import Plan from "./components/Plan";
import Services from "./components/Services";
import Navbar from "./components/Navbar";
// import { FaPhone } from "react-icons/fa";
// import Testimonials from "./components/Testimonals";
import About from "./components/About";
// import { Link as ScrollLink } from 'react-scroll';
import Hero from "./components/Hero";
// import { useRouter } from "next/navigation";


export default function Home() {
  // const containerVariants = {
  //   hidden: { opacity: 0, y: 50 },
  //   visible: { opacity: 1, y: 0 },
  // };

  // const router = useRouter();

  return (
    <div className="overflow-hidden">
      <Navbar />
      <Hero/>
      <About/>
      <Plan />
      <Services />
      {/* <Testimonials/>    */}
    </div>
  );
}
