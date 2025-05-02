import 'chart.js/auto';
import { Scatter } from 'react-chartjs-2';
import { motion } from 'motion/react';
import { ChartData, Point } from 'chart.js/auto';

const options = {
    scales: {
      x: {
        type: "linear" as const,
        position: "bottom" as const
      }
    }
  }

export default function DotPlot(data: ChartData<"scatter", (number | Point | null)[], unknown>) {
    return (
        <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{opacity: 1, x: 0}}
            transition={{ duration: 0.5}}
            className="bg-white/80 backdrop-blur-sm p-4 h-[50%] w-[40%] fixed right-30 top-40 items-center rounded-lg shadow-lg"
        >
            <Scatter 
                data={data}
                options={options}
            />
        </motion.div> 
    )
}