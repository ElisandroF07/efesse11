import { create } from 'zustand';
import { Spot } from '@/src/domain/entities/Spot';
import { Ticket } from '@/src/domain/entities/Ticket';
import { CheckInUseCase } from '@/src/application/usecases/CheckInUseCase';
import { CheckOutUseCase } from '@/src/application/usecases/CheckOutUseCase';
import { GetDashboardStatsUseCase, DashboardStats } from '@/src/application/usecases/GetDashboardStatsUseCase';
import { GetHistoryUseCase } from '@/src/application/usecases/GetHistoryUseCase';
import { GetSpotsUseCase } from '@/src/application/usecases/GetSpotsUseCase';
import { SpotRepository } from '@/src/infrastructure/repositories/spot.repository';
import { TicketRepository } from '@/src/infrastructure/repositories/ticket.repository';

const spotRepository = new SpotRepository();
const ticketRepository = new TicketRepository();

const checkInUseCase = new CheckInUseCase(spotRepository, ticketRepository);
const checkOutUseCase = new CheckOutUseCase(spotRepository, ticketRepository);
const getDashboardStatsUseCase = new GetDashboardStatsUseCase(spotRepository);
const getHistoryUseCase = new GetHistoryUseCase(ticketRepository);
const getSpotsUseCase = new GetSpotsUseCase(spotRepository);

interface ParkingState {
    spots: Spot[];
    history: Ticket[];
    stats: DashboardStats;
    loading: boolean;
    error: string | null;

    fetchSpots: () => void;
    fetchHistory: () => void;
    fetchStats: () => void;
    checkIn: (plate: string) => Ticket | null;
    checkOut: (identifier: string) => Ticket | null;
    clearError: () => void;
}

export const useParkingStore = create<ParkingState>((set, get) => ({
    spots: [],
    history: [],
    stats: {
        totalSpots: 0,
        availableSpots: 0,
        occupiedSpots: 0,
        activeVehicles: 0,
    },
    loading: false,
    error: null,

    fetchSpots: () => {
        set({ loading: true, error: null });
        try {
            const spots = getSpotsUseCase.execute();
            set({ spots, loading: false });
        } catch (e: any) {
            set({ error: e.message, loading: false });
        }
    },

    fetchHistory: () => {
        set({ loading: true, error: null });
        try {
            const history = getHistoryUseCase.execute();
            set({ history, loading: false });
        } catch (e: any) {
            set({ error: e.message, loading: false });
        }
    },

    fetchStats: () => {
        try {
            const stats = getDashboardStatsUseCase.execute();
            set({ stats });
        } catch (e: any) {
            console.error("Failed to fetch stats", e);
        }
    },

    checkIn: (plate: string) => {
        set({ loading: true, error: null });
        try {
            const ticket = checkInUseCase.execute(plate);
            get().fetchSpots();
            get().fetchStats();
            set({ loading: false });
            return ticket;
        } catch (e: any) {
            set({ error: e.message, loading: false });
            throw e;
        }
    },

    checkOut: (identifier: string) => {
        set({ loading: true, error: null });
        try {
            const ticket = checkOutUseCase.execute(identifier);
            get().fetchSpots();
            get().fetchStats();
            get().fetchHistory();
            set({ loading: false });
            return ticket;
        } catch (e: any) {
            set({ error: e.message, loading: false });
            throw e;
        }
    },

    clearError: () => set({ error: null }),
}));
