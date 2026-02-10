"use client";

import { useParkingStore } from "@/src/presentation/store/useParkingStore";
import { useEffect, useState } from "react";
import { SportCard } from "@/src/presentation/components/spotCard/SpotCard";
import { DashboardCounterCard } from "@/src/presentation/components/dashboardCounterCard/DashboardCounterCard";
import Link from "next/link";

export default function Home() {

    const { spots, stats, fetchSpots, fetchStats } = useParkingStore();

    useEffect(() => {
        fetchSpots();
        fetchStats();
    }, [fetchSpots, fetchStats])

    const [selectedZone, setSelectedZone] = useState<'A' | 'B' | 'C' | 'D' | 'E'>('A')

    return (
        <div className="flex w-full h-full flex-col gap-y-5">
            <div className="flex flex-col md:flex-row items-start sm:items-center justify-between gap-4">
                <h1 className="font-semibold text-2xl md:text-3xl text-[var(--background)]">Meu estacionamento</h1>
                <div className="hidden sm:flex gap-x-2 w-full md:w-auto">
                    <Link href="/check-in" className="h-12 md:h-13.75 flex-1 md:flex-none rounded-full flex items-center justify-center gap-x-2 md:gap-x-3 w-auto md:w-40 bg-[var(--background)] font-normal text-white text-sm md:text-base px-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                            <g clipPath="url(#clip0_4418_9825)">
                                <path d="M6 12H18" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M12 18V6" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </g>
                            <defs>
                                <clipPath id="clip0_4418_9825">
                                    <rect width="24" height="24" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        Entrada</Link>
                    <Link href="/check-out" className="h-12 md:h-13.75 flex-1 md:flex-none rounded-full flex items-center justify-center gap-x-2 md:gap-x-3 w-auto md:w-40 bg-[var(--background)] font-normal text-white text-sm md:text-base px-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                            <g clipPath="url(#clip0_4418_6163)">
                                <path d="M6 12H18" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </g>
                            <defs>
                                <clipPath id="clip0_4418_6163">
                                    <rect width="24" height="24" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        Saida</Link>
                </div>
            </div>
            <div className="overflow-x-auto pb-2 -mx-4 px-4 md:mx-0 md:px-0">
                <ul className="flex items-center justify-start gap-x-2 min-w-max">
                    <li><button onClick={() => setSelectedZone('A')} className={`h-10 md:h-12 rounded-full flex items-center justify-center gap-x-3 px-4 md:px-6 font-normal text-sm md:text-base ${selectedZone == 'A' ? "bg-[var(--background)] text-[var(--foreground)]" : "bg-[var(--foreground)] text-[var(--background)] border border-dashed"}`}>Zona A</button></li>
                    <li><button onClick={() => setSelectedZone('B')} className={`h-10 md:h-12 rounded-full flex items-center justify-center gap-x-3 px-4 md:px-6 font-normal text-sm md:text-base ${selectedZone == 'B' ? "bg-[var(--background)] text-[var(--foreground)]" : "bg-[var(--foreground)] text-[var(--background)] border border-dashed"}`}>Zona B</button></li>
                    <li><button onClick={() => setSelectedZone('C')} className={`h-10 md:h-12 rounded-full flex items-center justify-center gap-x-3 px-4 md:px-6 font-normal text-sm md:text-base ${selectedZone == 'C' ? "bg-[var(--background)] text-[var(--foreground)]" : "bg-[var(--foreground)] text-[var(--background)] border border-dashed"}`}>Zona C</button></li>
                    <li><button onClick={() => setSelectedZone('D')} className={`h-10 md:h-12 rounded-full flex items-center justify-center gap-x-3 px-4 md:px-6 font-normal text-sm md:text-base ${selectedZone == 'D' ? "bg-[var(--background)] text-[var(--foreground)]" : "bg-[var(--foreground)] text-[var(--background)] border border-dashed"}`}>Zona D</button></li>
                    <li><button onClick={() => setSelectedZone('E')} className={`h-10 md:h-12 rounded-full flex items-center justify-center gap-x-3 px-4 md:px-6 font-normal text-sm md:text-base ${selectedZone == 'E' ? "bg-[var(--background)] text-[var(--foreground)]" : "bg-[var(--foreground)] text-[var(--background)] border border-dashed"}`}>Zona E</button></li>
                </ul>
            </div>
            <div className="w-full flex-1 gap-4 flex flex-col-reverse sm:flex-col lg:flex-row min-h-0">
                <div className="w-full lg:w-[80%] rounded-2xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 auto-rows-min gap-2 overflow-y-auto min-h-[300px] lg:min-h-0 ">
                    {spots && spots.filter((spot) => spot.zone == selectedZone).map((spot, _index) => (
                        <SportCard key={spot.id} spot={spot} />
                    ))}
                </div>
                <div className="w-full lg:flex-1 rounded-2xl grid grid-cols-2 lg:grid-cols-1 gap-4 h-fit lg:h-full">
                    <DashboardCounterCard label="Total de vagas" value={stats.totalSpots} />
                    <DashboardCounterCard label="Vagas disponíveis" value={stats.availableSpots} />
                    <DashboardCounterCard label="Vagas ocupadas" value={stats.occupiedSpots} />
                    <DashboardCounterCard label="Veículos ativos" value={stats.activeVehicles} />
                </div>
            </div>
        </div>
    );
}