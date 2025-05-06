export interface QPUDataPoint {
  x: number
  y: number
  label: string
}

export interface QPUCollection {
  [qpuName: string]: {
    topic: string
    content: string
    pointStyle: string
    backgroundColor: string
    pointRadius: number
    data: QPUDataPoint[]
  }
}

export interface CustomSectionProps {
    data: {
      topic: string;
      content: string;
      data: { x: number; y: number }[];
      pointRadius: number; 
      backgroundColor: string; 
      pointStyle: string;
    };
    updateStickyContent: React.Dispatch<React.SetStateAction<string | undefined>>
  }