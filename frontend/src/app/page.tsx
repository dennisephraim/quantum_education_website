"use client"

import CustomSection from "@/components/CustomSection"
import { useState } from "react"
import Intro from "@/components/Intro"
import DotPlot from "@/components/DotPlot"

const superConductingData = [
  { x: 5, y: 0.1, label: '2006' },
  { x: 20, y: 0.02, label: '2009' },
  { x: 50, y: 0.03, label: '2012' },
  { x: 100, y: 0.03, label: '2014' },
  { x: 127, y: 0.0035, label: '2019' },
  { x: 433, y: 0.002, label: '2022' },
  { x: 1121, y: 0.001, label: '2024' },
]

const trappedIonData = [
  { x: 3, y: 0.4, label: '2003' },
  { x: 10, y: 0.08, label: '2005' },
  { x: 25, y: 0.07, label: '2016' },
  { x: 50, y: 0.025, label: '2018' },
  { x: 100, y: 0.001, label: '2023' },
  { x: 200, y: 0.0025, label: '2025?' },
]

export default function Home() {
  const sectionData = {
    "Superconducting QPU" : {
      topic: "Superconducting QPU",
      content: "Superconducting quantum processing units (QPUs) are among the most actively developed quantum technologies, with companies like IBM and Google leading the way. These QPUs use superconducting circuits cooled to near absolute zero to enable qubit operations. They benefit from rapid gate speeds and relatively straightforward integration with classical electronics. Recent improvements in coherence times and error rates suggest a promising scaling trend.",
      data: superConductingData,
      pointStyle: 'rect',
      backgroundColor: 'rgba(54,162,235,0.8)',
      pointRadius: 6
    },
    "Trapped Ion QPU" : {
      topic: "Trapped Ion QPU",
      content: "Trapped ion QPUs operate by confining ions using electromagnetic fields and manipulating their quantum states with laser pulses. They are known for their high-fidelity operations and long coherence times, making them excellent candidates for precise quantum computations. Companies like IonQ have developed systems with dozens of trapped ions arranged in tape-like structures.",
      data: trappedIonData,
      pointStyle: 'circle',
      backgroundColor: 'rgba(255,159,64,0.8)',
      pointRadius: 8
    }
  }

  const [content, setContent] = useState<{ topic: string; content: string; pointRadius: number; backgroundColor: string; pointStyle: string; data: { x: number; y: number }[] } | null>(null)
  const chartdata = {
    datasets: [{
      label: content?.topic || "Default Label",
      data: content?.data || [],
      pointStyle: content?.pointStyle,
      backgroundColor: content?.backgroundColor,
      pointRadius: content?.pointRadius,
    }]
  }  

  return (
    <div className="font-serif">
      <Intro />
      <CustomSection data={sectionData["Superconducting QPU"]} updateStickyContent={setContent} />
      <CustomSection data={sectionData["Trapped Ion QPU"]} updateStickyContent={setContent} /> 
      {content && <DotPlot {...chartdata} />}
    </div>
  )
}