import { ISpotRepository } from "@/src/domain/repositories/ISpotRepository";
import { ITicketRepository } from "@/src/domain/repositories/ITicketRepository";
import { Ticket } from "@/src/domain/entities/Ticket";

export class CheckInUseCase {
    constructor(
        private spotRepository: ISpotRepository,
        private ticketRepository: ITicketRepository
    ) { }

    execute(plate: string): Ticket {
        const vehicle = this.spotRepository.getSpots().find(spot => spot.plate === plate && spot.status === 'OCUPADO');
        if (vehicle) {
            throw new Error(`Veículo com matrícula ${plate} já está estacionado na vaga ${vehicle.id}`);
        }

        const spots = this.spotRepository.getSpots();
        const availableSpot = spots.find(spot => spot.status === 'LIVRE');

        if (!availableSpot) {
            throw new Error("Não há vagas disponíveis.");
        }

        const ticket: Ticket = {
            id: crypto.randomUUID(),
            plate: plate,
            entryTime: new Date(),
            spotId: availableSpot.id,
            exitTime: null,
            price: null,
            status: 'ACTIVE'
        };

        availableSpot.status = 'OCUPADO';
        availableSpot.plate = plate;
        this.spotRepository.updateSpot(availableSpot);

        this.ticketRepository.save(ticket);
        return ticket;
    }
}
