export type TicketStatus = 'ACTIVE' | 'PAID';

export class Ticket {
    constructor(
        public id: string,
        public plate: string,
        public spotId: string,
        public entryTime: Date,
        public exitTime: Date | null,
        public price: number | null,
        public status: TicketStatus
    ) { }
}
