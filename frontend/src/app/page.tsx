"use client"

import CustomSection from "@/components/CustomSection"
import { useState, useEffect } from "react"
import Intro from "@/components/Intro"
import DotPlot from "@/components/DotPlot"
import { QPUCollection } from "@/types/components"

export default function Home() {
  const [data, setData] = useState<QPUCollection>()
  const [chosenContent, setChosenContent] = useState<string>()   

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

  if (!data) return

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
      {/* <div className="h-[100vh]"></div> */}
      <CustomSection data={data["Superconducting QPU"]} updateStickyContent={setChosenContent} />
      <CustomSection data={data["Trapped Ion QPU"]} updateStickyContent={setChosenContent} />
      <DotPlot {...chartdata} />
    </div>
  )
}