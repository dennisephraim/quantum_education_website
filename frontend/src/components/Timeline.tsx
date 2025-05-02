// components/AutoScrollTimeline.tsx
"use client"

import { motion } from "motion/react"
import Image from "next/image"

const timelineItems = [
  { year: 2010, img: "/Picture1.jpg" },
  { year: 2012, img: "/Picture2.jpg" },
  { year: 2014, img: "/Picture3.jpg" },
  { year: 2016, img: "/Picture4.jpg" },
  { year: 2018, img: "/Picture5.jpg" },
  { year: 2020, img: "/Picture6.jpg" },
  { year: 2022, img: "/Picture7.jpg" },
  { year: 2025, img: "/Picture8.jpg" },
]

export default function AutoScrollTimeline() {
  const items = [...timelineItems, ...timelineItems]
  const connectorLen = 40

  return (
    <div className="relative w-[600px] h-64 overflow-hidden mx-auto">
      {/* static center line */}
      <div className="absolute inset-x-0 top-1/2 h-px bg-gray-300" />

      {/* auto-scrolling row */}
      <motion.div
        className="absolute top-0 left-0 flex h-full"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 20, ease: "linear", repeat: Infinity }}
      >
        {items.map((item, idx) => {
          const isTop = idx % 2 === 0

          return (
            <div
              key={idx}
              className="flex-shrink-0 w-48 h-full flex flex-col items-center justify-center"
            >
              {isTop ? (
                <>
                  {/* connector up from line */}
                  <motion.div
                    className="w-px bg-gray-500 mb-2"
                    initial={{ height: 0 }}
                    animate={{ height: connectorLen }}
                    transition={{ delay: 0.2 + idx * 0.1, duration: 0.5, ease: "easeOut" }}
                  />
                  {/* image above line */}
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + idx * 0.1, duration: 0.4 }}
                  >
                    <Image
                      src={item.img}
                      alt={`${item.year}`}
                      width={80}
                      height={80}
                      className="rounded-lg shadow"
                    />
                  </motion.div>
                </>
              ) : (
                <>
                  {/* image below line */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + idx * 0.1, duration: 0.4 }}
                  >
                    <Image
                      src={item.img}
                      alt={`${item.year}`}
                      width={80}
                      height={80}
                      className="rounded-lg shadow"
                    />
                  </motion.div>
                  {/* connector down from line */}
                  <motion.div
                    className="w-px bg-gray-500 mt-2"
                    initial={{ height: 0 }}
                    animate={{ height: connectorLen }}
                    transition={{ delay: 0.2 + idx * 0.1, duration: 0.5, ease: "easeOut" }}
                  />
                </>
              )}

              {/* year label */}
              <motion.span
                className="mt-2 text-gray-700 font-medium"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + idx * 0.1, duration: 0.4 }}
              >
                {item.year}
              </motion.span>
            </div>
          )
        })}
      </motion.div>
    </div>
  )
}
