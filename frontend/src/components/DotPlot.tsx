import 'chart.js/auto';
import { Scatter } from 'react-chartjs-2';
import { motion } from 'motion/react';
import { ChartData, Point } from 'chart.js/auto';

const superscriptMap: Record<string,string> = {
    '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴',
    '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹',
    '-': '⁻'
};
  
function toSuperscript(n: number): string {
    // turn -3 into "⁻³", 4 into "⁴", etc.
    return String(n)
      .split('')
      .map(ch => superscriptMap[ch] || ch)
      .join('');
}

const options = {
    maintainAspectRatio: false,
    plugins: {
        title: {
            display: true,
            text: "*Size of data point indicates connectivity; larger means denser connectivity",
            position: "bottom" as const,
            padding: 10
        }
    },
    scales: {
      x: {
        border: {
            color: '#B0B9BF',
        },
        type: "logarithmic" as const,
        position: "bottom" as const,
        title: {
            display: true,
            text: ["Number of Physical Qubits", "System Size"],
        },
        min: 1,
        max: 100000,
        grid: {
            display: true,
            color: '#B0B9BF',
            lineWidth: 3,
            drawBorder: false, 
          },
        
        ticks: {
            stepSize: 1,
            fixedStep: 1,
            maxTicksLimit: 6,
            padding: 10,
            callback: function (tickValue: string | number) {
                if (typeof tickValue === 'number') {
                    const exponent = Math.log10(tickValue);
                    if (exponent === 0) return 1
                    return `10${toSuperscript(exponent)}`;
                }
                return tickValue;
            },
        }
      },
      y: {
        border: {
            display: false
        },
        type: "logarithmic" as const, 
        position: "left" as const, 
        title: { 
            display: true,
            text: ["Error Tolerance", "Average two-qubit gate error rate"]
        }, 
        min: 0.0001,
        max: 1,
        reverse: true,
        grid: {
            display: false,
            border: false,
        },
        ticks: {
            stepSize: 1,
            fixedStep: 1,
            maxTicksLimit: 5,
            padding: 10,
            callback: function (tickValue: string | number) {
                if (typeof tickValue === 'number') {
                    const exponent = Math.log10(tickValue);
                    if (exponent === 0) return 1
                    return `10${toSuperscript(exponent)}`;
                }
                return tickValue;
            },
        }
      }, 
    },
}

export default function DotPlot(data: ChartData<"scatter", (number | Point | null)[], unknown>) {
    return (
        <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{opacity: 1, x: 0}}
            transition={{ duration: 0.5}}
            viewport={{ once: false }}
            className="p-4 h-[60%] w-[40%] right-50 fixed top-36 items-center rounded-lg"
        >
            <Scatter 
                data={data}
                options={options}
            />
        </motion.div> 
    )
}