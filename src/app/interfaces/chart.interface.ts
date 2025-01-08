export interface LineData {
    label: string;
    value: number;
}
export interface ChartData {
    yrange: number,
    lineData: LineData[]
}