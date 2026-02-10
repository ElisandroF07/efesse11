import { ITicketRepository } from "@/src/domain/repositories/ITicketRepository";
import { Ticket } from "@/src/domain/entities/Ticket";

export class GetHistoryUseCase {
    constructor(private ticketRepository: ITicketRepository) { }

    execute(): Ticket[] {
        const allTickets = this.ticketRepository.findAll();
        return allTickets.filter(ticket => ticket.status === 'PAID').sort((a, b) => b.exitTime!.getTime() - a.exitTime!.getTime());
    }
}
