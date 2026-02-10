import { ISpotRepository } from "@/src/domain/repositories/ISpotRepository";

export interface DashboardStats {
    totalSpots: number;
    availableSpots: number;
    occupiedSpots: number;
    activeVehicles: number;
}

export class GetDashboardStatsUseCase {
    constructor(private spotRepository: ISpotRepository) { }

    execute(): DashboardStats {
        const spots = this.spotRepository.getSpots();
        const totalSpots = spots.length;
        const availableSpots = spots.filter(spot => spot.status === 'LIVRE').length;
        const occupiedSpots = spots.filter(spot => spot.status === 'OCUPADO').length;
        const activeVehicles = occupiedSpots;

        return {
            totalSpots,
            availableSpots,
            occupiedSpots,
            activeVehicles
        };
    }
}
