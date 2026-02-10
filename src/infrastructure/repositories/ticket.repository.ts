import { ITicketRepository } from "@/src/domain/repositories/ITicketRepository";
import { Ticket } from "@/src/domain/entities/Ticket";
import { isBrowser } from "@/src/utils/verifySSR";

export class TicketRepository implements ITicketRepository {
    private storageKey = "parking_tickets";

    save(ticket: Ticket): void {
        const tickets = this.read();
        this.write([...tickets, ticket]);
    }

    findById(id: string): Ticket | null {
        return this.read().find(t => t.id === id) ?? null;
    }

    findByPlate(plate: string): Ticket | null {
        return this.read().find(
            t => t.plate === plate && t.status === "ACTIVE"
        ) ?? null;
    }

    findAll(): Ticket[] {
        return this.read();
    }

    update(ticket: Ticket): void {
        const tickets = this.read().map(t =>
            t.id === ticket.id ? ticket : t
        );

        this.write(tickets);
    }

    private read(): Ticket[] {
        if (!isBrowser()) return [];

        const data = localStorage.getItem(this.storageKey);
        if (!data) return [];

        return this.toEntities(JSON.parse(data));
    }

    private write(tickets: Ticket[]) {
        if (!isBrowser()) return;
        localStorage.setItem(this.storageKey, JSON.stringify(tickets));
    }

    private toEntities(data: any[]): Ticket[] {
        return data.map(t => new Ticket(
            t.id,
            t.plate,
            t.spotId,
            new Date(t.entryTime),
            t.exitTime ? new Date(t.exitTime) : null,
            t.price,
            t.status
        ));
    }
}
