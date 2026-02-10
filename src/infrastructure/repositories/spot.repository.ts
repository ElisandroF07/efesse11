import { ISpotRepository } from "@/src/domain/repositories/ISpotRepository";
import { Spot } from "@/src/domain/entities/Spot";
import { SpotsData } from "../data/spots";
import { isBrowser } from "@/src/utils/verifySSR";

export class SpotRepository implements ISpotRepository {
    
    private storageKey = "parking_spots";

    constructor() {
        if (!isBrowser()) return;

        if (!localStorage.getItem(this.storageKey)) {
            this.saveSpots(SpotsData);
        }
    }

    getSpots(): Spot[] {
        if (!isBrowser()) return SpotsData;

        const data = localStorage.getItem(this.storageKey);
        if (!data) return SpotsData;

        return this.toEntities(JSON.parse(data));
    }

    getSpotById(id: string): Spot | null {
        return this.getSpots().find(s => s.id === id) ?? null;
    }

    updateSpot(spot: Spot): void {
        const spots = this.getSpots().map(s =>
            s.id === spot.id ? spot : s
        );

        this.saveSpots(spots);
    }

    saveSpots(spots: Spot[]) {
        if (isBrowser()) {
            localStorage.setItem(this.storageKey, JSON.stringify(spots));
        }
    }

    toEntities(data: any[]): Spot[] {
        return data.map(s => new Spot(s.id, s.status, s.zone));
    }

    
}
