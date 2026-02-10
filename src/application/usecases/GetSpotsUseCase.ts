import { ISpotRepository } from "@/src/domain/repositories/ISpotRepository";
import { Spot } from "@/src/domain/entities/Spot";

export class GetSpotsUseCase {
    constructor(private spotRepository: ISpotRepository) { }

    execute(): Spot[] {
        return this.spotRepository.getSpots();
    }
}
