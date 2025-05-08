'use client';

import { motion, AnimatePresence } from 'motion/react';
import { useShowNavbarContext } from '@/context/NavbarContext';
import ToggleThemeButton from './ToggleThemeButton';

export default function Navbar() {
  const { showNavbar } = useShowNavbarContext()

  return (
    <>
    {showNavbar && 
        <div className='w-full flex items-center z-50 fixed top-0 left-0'>
            <div
                className=" md:w-[70%] w-[90%] h-16 mx-auto backdrop-blur-sm shadow-lg flex items-center 
                        justify-center mt-4 rounded-lg"
            >
                <AnimatePresence>
                    <motion.section
                        initial={{ opacity: 0, y: 20, scale: 1 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        className="font-mono text-xs xs:text-sm md:text-lg flex w-full items-center flex-row p-3 justify-between"
                    >
                        <div>
                            {"<Hello | Quantum | World>"}
                        </div>
                        <ToggleThemeButton />
                    </motion.section>
                </AnimatePresence>
            </div>
        </div>
    }
    </>
  );
}
