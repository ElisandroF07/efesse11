import { Spot } from "../entities/Spot";

export interface ISpotRepository {
    getSpots(): Spot[];
    getSpotById(id: string): Spot | null;
    updateSpot(spot: Spot): void;
    saveSpots(spots: Spot[]): void;
}
