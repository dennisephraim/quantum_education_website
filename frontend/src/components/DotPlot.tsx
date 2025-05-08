"use client"

import 'chart.js/auto';
import { Scatter } from 'react-chartjs-2';
import { motion, AnimatePresence } from 'motion/react';
import { ChartData, Point, Chart, TooltipItem } from 'chart.js/auto';
import { toSuperscript } from '@/utils/helpers';
import { useTheme } from '@/context/ThemeContext';
import { QPUDataPoint } from '@/types/components';
import { useEffect, useState } from 'react';

export default function DotPlot(data: ChartData<"scatter", (number | Point | null)[], unknown>) {
    const { theme } = useTheme()
    const [winW, setWinW] = useState(
        typeof window !== "undefined" ? window.innerWidth : 0
    )
    
    useEffect(() => {
        const onResize = () => setWinW(window.innerWidth)
        window.addEventListener("resize", onResize)
        return () => window.removeEventListener("resize", onResize)
    }, [])
    const windowLimit = 1200

    useEffect(() => {
        import('chartjs-plugin-zoom').then((ZoomPlugin) => {
          Chart.register(ZoomPlugin.default);
        });
    }, []);

    const gridColor = theme === 'light' ? '#FFFFFF' : '#757272'
    const textColor = theme === 'light' ? '#000000' : '#bebfc2'
    const staticPointColor = '#757272'
    const tooltipBgColor = gridColor + "CC"

    const staticPoints: QPUDataPoint[] = [
        { x: 110,  y: 0.003, label: 'RCS (NISQ)' },
        { x: 807, y: 0.004, label: 'QEC (FT)' },
        { x: 1005, y: 0.002, label: 'Quantum Optimizations (NISQ)' },
        { x: 30800, y: 0.0002, label: 'Quantum Simulation (FT): ~10⁴, ~10⁻⁴' },
        { x: 80900, y: 0.0001, label: "Grover's Algo (FT): ~10⁶, ~10⁻⁵" },
        { x: 120000, y: 0.00002, label: "Shor's Algo (FT): ~10⁶, ~10⁻⁵" },
    ];

    const chartData: ChartData<'scatter'> = {
        datasets: [
            ...(data.datasets as any[]),
            {
                label: 'Large-Scale App Requirements',
                data: staticPoints,
                pointStyle: 'triangle',
                radius: 8,
                backgroundColor: staticPointColor,
                borderColor: textColor,
                hoverRadius: 12,
                showInLegend: false,
            }
        ]
    };

    const options = {
        maintainAspectRatio: false,
        interaction: {
            mode: 'nearest' as const, 
            axis: 'xy' as const,
            intersect: false,
        },
        elements: {
            point: {
                hoverRadius: 10,
                radius: 6,
                hoverBorderWidth: 2,
                borderColor: textColor,
                hoverBorderColor: '#FF0000'
            }
        },
        plugins: {
            title: {
                display: true,
                text: "*Size of data point indicates connectivity; larger means denser connectivity",
                color: textColor,
                position: "bottom" as const,
                padding: 10,
                font: {
                    size: winW < windowLimit ? 12 : 18,
                    weight: "normal" as const,
                    family: "'Roboto', serif"
                }
            },
            zoom: {
                pan: {
                    enabled: true,
                    mode: 'xy' as const,
                },
                zoom: {
                    // wheel: {
                    //     enabled: true,
                    // },
                    pinch: {
                        enabled: true
                    },
                    mode: 'xy' as const,
                }
            },
            legend: {
                labels: {
                    usePointStyle: true,
                    color: textColor,
                    font: {
                        size: winW < windowLimit ? 12 : 18,
                        family: "'Roboto', serif"
                    },
                    // filter: (legendItem: { text: string }) => {
                    //     return legendItem.text !== "Benchmarks";
                    // }
                },
            },
            tooltip: {
                enabled: true,
                backgroundColor: tooltipBgColor,
                titleColor: textColor,
                bodyColor: textColor,
                callbacks: {
                    title: (tooltipItems: TooltipItem<"scatter">[]) => {
                        const raw = tooltipItems[0].raw as { label?: string };
                        return raw?.label || '';
                    },
                    label: (ctx: { parsed: { x: number; y: number; }; }) => {
                        const { x, y } = ctx.parsed as { x: number; y: number };
                        return `Qubits: ${x}, Error rate: ${y}`;
                    }
                
                }
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
                        size: winW < windowLimit ? 10 : 16,
                        weight: "normal" as const,
                        family: "'Roboto', serif"
                    }
                },
                min: 1,
                max: 1000000,
                grid: {
                    display: false,
                    drawBorder: false, 
                },
                
                ticks: {
                    stepSize: 1,
                    color: textColor,
                    fixedStep: 1,
                    maxTicksLimit: 7,
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
                        size: winW < windowLimit ? 10 : 16,
                        weight: "normal" as const,
                        family: "'Roboto', serif",
                    }
                }, 
                min: 0.00001,
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
        },
    }
    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0, x: 60 }}
                animate={{opacity: 1, x: 0}}
                transition={{ duration: 0.5}}
                viewport={{ once: false }}
                exit={{opacity: 0, x: -60}}
                className={`p-4 lg:h-[70%] lg:w-[40%] w-[100%] h-[100%] lg:right-50 lg:top-33 lg:fixed relative justify-center items-center rounded-lg `}
            >
                <Scatter 
                    data={chartData}
                    options={options}
                />
            </motion.div>
        </AnimatePresence>
    )
}