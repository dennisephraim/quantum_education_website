import { motion } from "motion/react";
import FlipCard from "./FlipCard";

export default function CardRow() {
  return (
    <motion.div
      className="w-[70%] mx-auto flex space-x-6 overflow-x-scroll scrollbar-none overflow-y-hidden"
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.5 }}
      variants={{
        hidden: {},
        show: {
          transition: {
            delayChildren: 0.2,
            staggerChildren: 0.3,
          },
        },
      }}
    >
      {[1,2,3,4,5,6,7,8].map((i) => (
        <motion.div
          key={i}
          variants={{
            hidden: { opacity: 0, y: 50 },
            show:   { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.2 }}
        >
          <FlipCard
            backDescription="Test"
            backTitle="QC ION"
            frontImage={`/Picture${i}.jpg`}
          />
        </motion.div>
      ))}
    </motion.div>
  );
}
