import { CustomSectionProps } from "@/types/components"
import { motion } from "motion/react"

export default function CustomSection({ data, updateStickyContent }: CustomSectionProps) {

  return (
    <motion.section className="h-[100vh]">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{once: false, amount: 1, margin: "-100px 0px 10px 0px"}}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        onViewportEnter={() => updateStickyContent?.(
          (chosenContent) => chosenContent === data.topic ? chosenContent : data.topic
        )}
        className="bg-[#ededed] dark:bg-[#1d1d1d] p-4 w-100 flex text-center justify-center md:ml-[17%] flex-col items-center "
      >
        <h3 className="text-center text-sm md:text-sm lg:text-2xl">{data.topic}</h3>
        <p className="text-xs md:text-sm lg:text-lg ">{data.content}</p>
      </motion.div>
    </motion.section>
  )
}
