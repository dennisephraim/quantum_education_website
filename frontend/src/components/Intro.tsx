"use client"
import { motion } from 'motion/react';
import { useShowNavbarContext } from '@/context/NavbarContext';
import ToggleThemeButton from './ToggleThemeButton';

export default function Intro() {
  const { setShowNavbar } = useShowNavbarContext()

  return (
    <motion.div className="relative h-screen w-full z-10 bg-[#ededed] dark:bg-[#1d1d1d]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1}}
        transition={{ duration: 0.5 }}
        viewport={{once: false, amount: 0.7}}
        onViewportLeave={() => setShowNavbar(true)}
        onViewportEnter={() => setShowNavbar(false)}
    >
      <div className="absolute inset-0" />
      <div className="absolute top-16 left-12 w-72 h-72 rounded-full bg-white dark:bg-white/10  animate-ping" />
      <div className="absolute bottom-20 right-16 w-56 h-56 rounded-full bg-white dark:bg-white/5 animate-pulse" />
      <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-white dark:bg-white/40 animate-ping" />
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0}}
        transition={{ duration: 0.5}}
        viewport={{once: false, amount: 0.5}}
        className="relative z-10 flex flex-col gap-y-[35%] items-center h-full w-full text-6xl font-mono"
      >
        <div className='px-8 py-6 flex justify-end w-full'>
          <ToggleThemeButton />
        </div>
        {"<Hello | Quantum | World>"}
      </motion.div>
    </motion.div>
  );
}
