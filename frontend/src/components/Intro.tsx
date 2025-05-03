import { motion } from 'motion/react';

export default function Intro() {
  return (
    <motion.div className="relative h-screen w-full z-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1}}
        transition={{ duration: 0.5 }}
        viewport={{once: false, amount: 0.8}}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-700" />
      <div className="absolute top-16 left-12 w-72 h-72 rounded-full bg-white/10 animate-ping" />
      <div className="absolute bottom-20 right-16 w-56 h-56 rounded-full bg-white/5 animate-pulse" />
      <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-white/40 animate-ping" />
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0}}
        transition={{ duration: 0.5 }}
        viewport={{once: false, amount: 0.5}}
        className="relative z-10 flex items-center justify-center h-full w-full text-6xl text-white font-mono"
      >
        {"<Hello | Quantum | World>"}
      </motion.div>
    </motion.div>
  );
}
