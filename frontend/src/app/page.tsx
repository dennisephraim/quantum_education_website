"use client"

import Timeline from "@/components/Timeline"
import CustomSection from "@/components/CustomSection"
import { useState } from "react"
import Intro from "@/components/Intro"
import DotPlot from "@/components/DotPlot"

export default function Home() {
  const sectionData = [
    {
      topic: "Superconducting QPU",
      content: "Superconducting quantum processing units (QPUs) are among the most actively developed quantum technologies, with companies like IBM and Google leading the way. These QPUs use superconducting circuits cooled to near absolute zero to enable qubit operations. They benefit from rapid gate speeds and relatively straightforward integration with classical electronics. Recent improvements in coherence times and error rates suggest a promising scaling trend, often referred to as Schoelkopf's Law, though challenges remain in maintaining low noise and high fidelity as the number of qubits increases."
    },
    {
      topic: "Trapped Ion QPU",
      content: "Trapped ion QPUs operate by confining ions using electromagnetic fields and manipulating their quantum states with laser pulses. They are known for their high-fidelity operations and long coherence times, making them excellent candidates for precise quantum computations. Companies like IonQ have developed systems with dozens of trapped ions arranged in tape-like structures. However, these systems can be slower than superconducting counterparts due to the nature of ion manipulation, although they offer superior connectivity and control at smaller scales."
    }
  ]

  const superConductingData = [
    { x: 10, y: 20 },
    { x: 19, y: 21 },
    { x: 4, y: 22 },
    { x: 15, y: 24 },
    { x: 7, y: 26 },
    { x: 9, y: 27 },
    { x: 10, y: 30 }
  ]

  const trappedIonData = [
    { x: 10, y: 20 },
    { x: 10, y: 20 },
    { x: 10, y: 20 },
    { x: 10, y: 20 },
    { x: 10, y: 20 },
    { x: 10, y: 20 },
    { x: 10, y: 20 }
  ]

  const chartdata = {
    datasets: [{
      label: "Scatter Dataset",
      data: superConductingData,
      backgroundColor: "rgb(255, 99, 132)"
    }]
  }

  const [stickyContent, setStickyContent] = useState<string[] | null>(null)
  console.log(stickyContent)

  return (
    <div className="font-serif">
      <Intro />
      <div className="grid grid-cols-2 min-h-[100vh] mb-45">
        <div className="flex flex-col items-center ml-20 gap-y-[120vh]">
          <CustomSection topic={sectionData[0].topic} content={sectionData[0].content} updateStickyContent={setStickyContent} />
          <CustomSection topic={sectionData[1].topic} content={sectionData[1].content} updateStickyContent={setStickyContent} /> 
        </div>
        {stickyContent && 
          <DotPlot {...chartdata} />
        }
      </div>
    </div>
  )
}