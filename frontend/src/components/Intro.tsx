"use client"
import { motion } from 'motion/react';
import { useShowNavbarContext } from '@/context/NavbarContext';
import ToggleThemeButton from './ToggleThemeButton';
import { ArrowDown } from 'lucide-react'

const container = {
  hidden: { opacity: 0 },
  show: { 
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

export default function Intro() {
  const { showNavbar,setShowNavbar } = useShowNavbarContext()
  const text = "<Hello | Quantum | World>"

  return (
    <motion.div className={`relative h-[100vh] w-full bg-[#ededed] dark:bg-[#1d1d1d] ${showNavbar ? 'z-0' : 'z-20'}`}
      initial="hidden"
      whileInView="show"
      transition={{ duration: 0.3 }}
      viewport={{once: false, amount: 0.7}}
      onViewportLeave={() => setShowNavbar(true)}
      onViewportEnter={() => setShowNavbar(false)}
    >
      <div className="absolute inset-0" />
      <div className="absolute top-16 left-12 w-72 h-72 rounded-full bg-white dark:bg-white/10 animate-pulse" />
      <div className="absolute bottom-20 right-22 w-56 h-56 rounded-full bg-white dark:bg-white/5 animate-pulse" />
      <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-white dark:bg-white/40 animate-ping" />
      <motion.div
        variants={container}
        className='relative flex flex-col gap-y-[35%] items-center h-[100%] w-full text-center text-2xl md:text-4xl lg:text-6xl font-mono'
      >
        <div className='px-8 py-6 flex justify-end w-full'>
          <ToggleThemeButton />
        </div>
        <div className="flex space-x-2">
          {text.split(" ").map((word, i) => (
            <motion.span key={i} variants={item}>
              {word}
            </motion.span>
          ))}
        </div>
        <div
          className="absolute bottom-8 right-0 transform -translate-x-1/2 text-sm flex gap-x-4 animate-bounce"
        >
          Scroll to learn more!
          <ArrowDown size={20} />
        </div>

      </motion.div>
    </motion.div>
  );
}
