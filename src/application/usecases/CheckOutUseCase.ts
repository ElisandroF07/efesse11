import { ISpotRepository } from "@/src/domain/repositories/ISpotRepository";
import { ITicketRepository } from "@/src/domain/repositories/ITicketRepository";
import { Ticket } from "@/src/domain/entities/Ticket";

export class CheckOutUseCase {
    constructor(
        private spotRepository: ISpotRepository,
        private ticketRepository: ITicketRepository
    ) { }

    execute(id: string): Ticket {
        const tickets = this.ticketRepository.findAll();
        const ticket = tickets.find(ticket =>
            (ticket.id === id || ticket.plate === id) && ticket.status === 'ACTIVE'
        );

        if (!ticket) {
            throw new Error("Ticket não encontrado.");
        }

        const exitTime = new Date();
        const durationMs = exitTime.getTime() - ticket.entryTime.getTime();
        const durationHours = Math.ceil(durationMs / (1000 * 60 * 60));

        let price = 0;
        if (durationHours <= 6) {
            price = durationHours * 300;
        } else {
            price = (6 * 300) + ((durationHours - 6) * 200);
        }

        ticket.exitTime = exitTime;
        ticket.price = price;
        ticket.status = 'PAID';

        this.ticketRepository.update(ticket);

        const spots = this.spotRepository.getSpots();
        const spot = spots.find(s => s.id === ticket.spotId);
        if (spot) {
            spot.status = 'LIVRE';
            spot.plate = undefined;
            this.spotRepository.updateSpot(spot);
        }

        return ticket;
    }
}
