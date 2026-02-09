import { Spot } from "@/src/shared/types/Spot";
import { create } from "zustand";

interface SpotsState {
  spots: Spot[];
  saveSpots: (spots: Spot[]) => void;
}

export const useCounterStore = create<SpotsState>((set) => ({
  spots: [],
  saveSpots: (spots: Spot[]) => set((state) => ({ spots: spots})),
}));