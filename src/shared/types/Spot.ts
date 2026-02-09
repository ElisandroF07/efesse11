export type Spot = {
    id: string;
    status: "LIVRE" | "OCUPADO";
    zone: 'A' | 'B' | 'C' | 'D' | 'E'
}