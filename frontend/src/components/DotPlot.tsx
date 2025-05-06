import 'chart.js/auto';
import { Scatter } from 'react-chartjs-2';
import { motion } from 'motion/react';
import { ChartData, Point } from 'chart.js/auto';
import { toSuperscript } from '@/utils/helpers';
import { useTheme } from '@/context/ThemeContext';

export default function DotPlot(data: ChartData<"scatter", (number | Point | null)[], unknown>) {
    const { theme } = useTheme()

    const gridColor = theme === 'light' ? 'white' : '#757272'
    const textColor = theme === 'light' ? 'black' : '#bebfc2'

    const options = {
        maintainAspectRatio: false,
        plugins: {
            title: {
                display: true,
                text: "*Size of data point indicates connectivity; larger means denser connectivity",
                color: textColor,
                position: "bottom" as const,
                padding: 10,
                font: {
                    size: 18,
                    weight: "normal" as const,
                    family: "'Roboto', serif"
                }
            },
            
            legend: {
                labels: {
                    usePointStyle: true,
                    color: textColor,
                    font: {
                        size: 20,
                        family: "'Roboto', serif"
                    }
                },
            }
        },
        scales: {
        x: {
            border: {
                display: false,
            },
            type: "logarithmic" as const,
            position: "bottom" as const,
            title: {
                display: true,
                color: textColor,
                text: ["Number of Physical Qubits", "System Size"],
                font: {
                    size: 16,
                    weight: "normal" as const,
                    family: "'Roboto', serif"
                }
            },
            min: 1,
            max: 100000,
            grid: {
                display: false,
                drawBorder: false, 
            },
            
            ticks: {
                stepSize: 1,
                color: textColor,
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
                color: gridColor,
                width: 2,
            },
            type: "logarithmic" as const, 
            position: "left" as const, 
            title: { 
                display: true,
                color: textColor,
                text: ["Error Tolerance", "Average two-qubit gate error rate"],
                font: {
                    size: 16,
                    weight: "normal" as const,
                    family: "'Roboto', serif",
                }
            }, 
            min: 0.0001,
            max: 1,
            reverse: true,
            grid: {
                display: true,
                color: gridColor,
                lineWidth: 2,
                drawBorder: false, 
            },
            ticks: {
                color: textColor,
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