"use client"
import { motion } from 'motion/react';
import ToggleThemeButton from './ToggleThemeButton';
import CardRow from './CardRow';
import { useShowNavbarContext } from '@/context/NavbarContext';

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

interface IntroProps {
  setShowDotPlot: (value: boolean) => void;
}

export default function Intro({ setShowDotPlot }: IntroProps) {
  const text = "<Hello | Quantum | World>"
  const { setShowNavbar } = useShowNavbarContext()

  return (
    <motion.div className={`relative h-[200vh] w-full bg-[#ededed] dark:bg-[#1d1d1d] `}
      initial="hidden"
      whileInView="show"
      transition={{ duration: 0.3 }}
      viewport={{once: false, amount: 0.3}}
      onViewportEnter={() => { 
        setShowDotPlot(false)
        setShowNavbar(false)
      }}
      onViewportLeave={() => {
        setShowNavbar(true)
        setShowDotPlot(true)
      }}
    >
      <div className="absolute inset-0" />
      <div className="absolute top-16 left-12 w-72 h-72 rounded-full bg-white dark:bg-white/10 animate-pulse" />
      <div className="absolute bottom-20 right-22 w-56 h-56 rounded-full bg-white dark:bg-white/5 animate-pulse" />
      <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-white dark:bg-white/40 animate-ping" />
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        transition={{ duration: 0.3 }}
        viewport={{once: false}}
        className='flex flex-col gap-y-[35%] items-center h-[100vh] w-full bottom-0 text-center text-2xl md:text-4xl lg:text-6xl font-mono'
      >
        <div className='px-8 py-6 flex justify-end w-full'>
          <ToggleThemeButton />
        </div>
        <motion.h1 
          transition={{once: false, duration: 0.5}} 
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          viewport={{once: false, amount: 0.5, margin: "-100px 0px 10px 0px"}}
          className="flex space-x-2"
        >
          {text.split(" ").map((word, i) => (
            <motion.span key={i} variants={item}>
              {word}
            </motion.span>
          ))}
        </motion.h1>
      </motion.div>
      <motion.h2
        transition={{ delay: 0.1 }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1}}
        viewport={{ once: false, amount: 1, margin: "-100px 0px 100px 0px" }}
        className='justify-center flex pb-20 text-3xl'
      >
        History of Emerging Quantum Computers
      </motion.h2>
      <CardRow />
      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{once: false, amount: 1, margin: "-30px 0px 50px 0px"}}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className='px-[20%] pt-20 text-center text-xs md:text-sm lg:text-lg'
      >
        Quantum Technologies have been improved over the years but there is a gap 
        between the current developed Technologies and the requirements for the applications that use them. 
        The gap is in terms of the Number of Qubits available and the Error rate.
      </motion.p>
    </motion.div>
  );
}
