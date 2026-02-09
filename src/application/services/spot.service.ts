import { SpotRepository } from "@/src/infrastructure/repositories/spot.repository";
import { Spot } from "@/src/shared/types/Spot";

export class SpotService {

    
    spotRepository = new SpotRepository();
    

    getAllSpots():Spot[] {
        return this.spotRepository.getSpots();
    }

    getSpotById(id: string):Spot | null {
        return this.spotRepository.getSpotById(id);
    }

    updateSpot(id: string, data: Spot):Spot | null {
        return this.spotRepository.updateSpot(id, data);
    }

    saveSpots(data: Spot[]):Spot[] {
        return this.spotRepository.saveSpots(data);
    }

}