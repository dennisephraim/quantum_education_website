import { AnimatePresence, motion } from "motion/react"

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
      className="h-[80vh]"
    >
      <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{once: false, amount: 0.8, margin: "-10px 0px 10px 0px"}}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          onViewportEnter={() => updateStickyContent(data)}
          onViewportLeave={() => updateStickyContent(null)}
          className="bg-[#ededed] dark:bg-[#0a0a0a]  backdrop-blur-sm p-4 w-100 flex ml-[15%] flex-col items-center rounded-lg shadow-lg"
      >
          <h1 className="text-center text-2xl">{data.topic}</h1>
          <p>{data.content}</p>
      </motion.div>
    </motion.section>
  )
}
