"use client"

import CustomSection from "@/components/CustomSection"
import { useState, useEffect } from "react"
import Intro from "@/components/Intro"
import DotPlot from "@/components/DotPlot"
import { QPUCollection } from "@/types/components"
import { motion } from "motion/react"

export default function Home() {
  const [data, setData] = useState<QPUCollection>()
  const [chosenContent, setChosenContent] = useState<string>()   
  const [ showDotPlot, setShowDotPlot ] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001/getData');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.log(error)
      }
    };

    fetchData();
  }, [])

  if (!data) return null

  let chartdata
  chosenContent ? chartdata = {
    datasets: [{
      label: data[chosenContent].topic,
      data: data[chosenContent].data,
      pointStyle: data[chosenContent].pointStyle,
      backgroundColor: data[chosenContent].backgroundColor,
      pointRadius: data[chosenContent].pointRadius,
    }]
  } : chartdata = {datasets: [{
    label: "DefaultLabel",
    data: [],
  }]}

  return (
    <div className="font-serif">
      <Intro />
      <motion.div
        onViewportEnter={() => setShowDotPlot(true)}
        onViewportLeave={() => setShowDotPlot(false)}
      >
        <CustomSection data={data["Superconducting QPU"]} updateStickyContent={setChosenContent} />
        <CustomSection data={data["Trapped Ion QPU"]} updateStickyContent={setChosenContent} />
      </motion.div>
      {showDotPlot && <DotPlot {...chartdata} />}
    </div>
  )
}