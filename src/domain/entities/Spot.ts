export type SpotStatus = 'LIVRE' | 'OCUPADO';
export type SpotZone = 'A' | 'B' | 'C' | 'D' | 'E';

export class Spot {
  constructor(
    public id: string,
    public status: SpotStatus,
    public zone: SpotZone,
    public plate?: string
  ) { }
}
