import { Ticket } from "../entities/Ticket";

export interface ITicketRepository {
    save(ticket: Ticket): void;
    findById(id: string): Ticket | null;
    findByPlate(plate: string): Ticket | null;
    findAll(): Ticket[];
    update(ticket: Ticket): void;
}
