"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import arjavImage from "./assets/arjav.jpg";
import { Header } from "../components/header";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <main className="h-screen overflow-y-auto scroll-smooth custom-scrollbar">
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 0;
          display: none;
        }

        /* For Firefox */
        .custom-scrollbar {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
      `}</style>

      <Header />
      <motion.div 
        className="flex flex-col items-center justify-start pt-20 min-h-screen bg-white text-black"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        {/* Name */}
        <motion.div 
          className="text-5xl md:text-6xl font-serif font-light mb-4"
          variants={fadeInUp}
        >
          Arjav Badjate
        </motion.div>

        {/* Image with hover effect */}
        <motion.div 
          className="my-4"
          variants={fadeInUp}
          whileHover={{ scale: 1.05, rotate: 0 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Image
            src={arjavImage}
            alt="Arjav Badjate"
            width={200}
            height={200}
            className="rounded-sm shadow-lg"
          />
        </motion.div>

        {/* Title with slide effect */}
        <motion.div 
          className="text-5xl md:text-7xl font-bold tracking-wide"
          variants={fadeInUp}
          whileHover={{ scale: 1.02 }}
        >
          PORTFOLIO
        </motion.div>

        {/* Subtitle with fade effect */}
        <motion.div 
          className="text-xs text-gray-700 mt-2 tracking-wider"
          variants={fadeInUp}
        >
          Business and Designer
        </motion.div>
        
        {/* Sections with scroll animations */}
        <motion.div 
          className="mt-20 w-full"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <About />
        </motion.div>

        <motion.div 
          className="mt-20 w-full"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Projects />
        </motion.div>

        <motion.div 
          className="mt-20 w-full"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Skills />
        </motion.div>

        <motion.div 
          className="mt-20 w-full"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Contact />
        </motion.div>
      </motion.div>
    </main>
  );
}