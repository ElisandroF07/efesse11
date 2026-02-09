import { Spot } from "@/src/shared/types/Spot";

export class SpotRepository {

    getSpots():Spot[] {
        const spots = JSON.parse(localStorage.getItem('spots')!) as Spot[];
        return (spots);
    }

    getSpotById(id: string):Spot | null {
        const spots = this.getSpots();
        const spot = spots.find((spot) => { spot.id = id })
        return (spot ? spot : null);
    }

    updateSpot(id: string, data: Spot):Spot | null {
        const spot = this.getSpotById(id);
        if (spot) {
            spot.status = data.status;
            return (spot);
        }
        return (null);
    }

    saveSpots(dataList: Spot[]):Spot[] {
        localStorage.setItem('spots', JSON.stringify(dataList));
        return (dataList);
    }
}