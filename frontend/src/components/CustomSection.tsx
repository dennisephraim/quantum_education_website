import { Parallax } from "react-scroll-parallax"
import { motion } from "motion/react"
import { useState, useEffect } from "react"

interface CustomSectionProps {
  topic: string;
  content: string;
  updateStickyContent: (content: string[] | null) => void;
}

export default function CustomSection({ topic, content, updateStickyContent }: CustomSectionProps) {
  const [entered, setEntered] = useState(false)

  useEffect(() => {
    updateStickyContent(entered ? [content] : null)
  }, [entered, updateStickyContent])

  return (
    <Parallax
      onEnter={() => setEntered(true)}
      onExit={() => setEntered(false)}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{once: false, amount: 0.2}}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="bg-yellow-200 backdrop-blur-sm p-4 h-90 w-100 flex flex-col items-center rounded-lg shadow-lg"
      >
        <h1 className="text-center text-2xl">{topic}</h1>
        <p>{content}</p>
      </motion.div>
    </Parallax>
  )
}
