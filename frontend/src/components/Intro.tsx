import { motion } from 'motion/react';
import { Parallax } from 'react-scroll-parallax';

export default function Intro() {
    return (
        <motion.div
          initial={{opacity: 0, y: -50}}
          viewport={{once: false}}
          transition={{duration: 0.5}}
          animate={{opacity: 1, y: 0}}
          className='text-6xl h-[100vh] w-[100%] mb-100 flex items-center justify-center text-center'
        >
            {"<Hello | Quantum | World>"}
        </motion.div>
    );
  }