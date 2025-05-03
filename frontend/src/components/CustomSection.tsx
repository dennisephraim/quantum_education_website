import { Parallax } from "react-scroll-parallax"
import { motion } from "motion/react"

interface CustomSectionProps {
    data: {
      topic: string;
      content: string;
      data: { x: number; y: number }[];
      pointRadius: number; 
      backgroundColor: string; 
      pointStyle: string;
    };
    updateStickyContent: React.Dispatch<React.SetStateAction<{
      topic: string;
      content: string;
      data: { x: number; y: number }[];
      pointRadius: number; 
      backgroundColor: string; 
      pointStyle: string;
    } | null>>
  }

export default function CustomSection({ data, updateStickyContent }: CustomSectionProps) {

  return (
    <motion.section
        className="h-[100vh] flex items-center justify-center"
    >
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{once: false, amount: 0.5}}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            onViewportEnter={() => updateStickyContent(data)}
            className="bg-white/80 backdrop-blur-sm p-4 w-100 flex mr-[40%] flex-col items-center rounded-lg shadow-lg"
        >
            <h1 className="text-center text-2xl">{data.topic}</h1>
            <p>{data.content}</p>
        </motion.div>
    </motion.section>
  )
}
