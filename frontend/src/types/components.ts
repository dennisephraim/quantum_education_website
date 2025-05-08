export interface QPUDataPoint {
    x: number
    y: number
    label: string
}

export interface ChartData {
    topic: string
    content: string
    data: QPUDataPoint[]
    pointRadius: number
    backgroundColor: string
    pointStyle: string
}

export interface QPUCollection {
    [qpuName: string]: ChartData
}

export interface CustomSectionProps {
    data: ChartData;
    updateStickyContent?: React.Dispatch<React.SetStateAction<string | undefined>>
}