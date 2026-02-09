"use client"

import { SpotService } from "@/src/application/services/spot.service";
import { DashboardCounterCard } from "@/src/components/dashboardCounterCard/DashboardCounterCard";
import { SportCard } from "@/src/components/spotCard/SpotCard";
import { SpotsData } from "@/src/infrastructure/data/spots";
import { useCounterStore } from "@/src/infrastructure/stores/spot";
import { useEffect, useState } from "react";

export default function Home() {

    const spotService = new SpotService();
    const { spots, saveSpots } = useCounterStore()

    useEffect(()=>{
        
        if (!spotService.getAllSpots())
        {
            spotService.saveSpots(SpotsData);
        }
        saveSpots(spotService.getAllSpots());
    }, [])

    const [selectedZone, setSelectedZone] = useState<'A' | 'B' | 'C' | 'D' | 'E'>('A')

    return (
        <div className="flex w-full h-full flex-col gap-y-5">
            <div className="flex items-center justify-between">
                <h1 className="font-semibold text-3xl text-[var(--background)]">Meu estacionamento</h1>
                <div className="flex gap-x-2">
                    <button className="h-13.75 rounded-full flex items-center justify-center gap-x-3 w-40 bg-[var(--background)] font-normal">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
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
                        Entrada</button>
                    <button className="h-13.75 rounded-full flex items-center justify-center gap-x-3 w-40 bg-[var(--background)] font-normal">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g clipPath="url(#clip0_4418_6163)">
                                <path d="M6 12H18" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </g>
                            <defs>
                                <clipPath id="clip0_4418_6163">
                                    <rect width="24" height="24" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        Saida</button>
                </div>
            </div>
            <div>
                <ul className="flex items-center justify-start gap-x-2">
                    <li><button onClick={()=>setSelectedZone('A')} className={`h-12 rounded-full flex items-center justify-center gap-x-3 px-6  font-normal ${selectedZone == 'A' ? "bg-[var(--background)] text-[var(--foreground)]" : "bg-[var(--foreground)] text-[var(--background)] border border-dashed"}`}>Zona A</button></li>
                    <li><button onClick={()=>setSelectedZone('B')} className={`h-12 rounded-full flex items-center justify-center gap-x-3 px-6  font-normal ${selectedZone == 'B' ? "bg-[var(--background)] text-[var(--foreground)]" : "bg-[var(--foreground)] text-[var(--background)] border border-dashed"}`}>Zona B</button></li>
                    <li><button onClick={()=>setSelectedZone('C')} className={`h-12 rounded-full flex items-center justify-center gap-x-3 px-6  font-normal ${selectedZone == 'C' ? "bg-[var(--background)] text-[var(--foreground)]" : "bg-[var(--foreground)] text-[var(--background)] border border-dashed"}`}>Zona C</button></li>
                    <li><button onClick={()=>setSelectedZone('D')} className={`h-12 rounded-full flex items-center justify-center gap-x-3 px-6  font-normal ${selectedZone == 'D' ? "bg-[var(--background)] text-[var(--foreground)]" : "bg-[var(--foreground)] text-[var(--background)] border border-dashed"}`}>Zona D</button></li>
                    <li><button onClick={()=>setSelectedZone('E')} className={`h-12 rounded-full flex items-center justify-center gap-x-3 px-6  font-normal ${selectedZone == 'E' ? "bg-[var(--background)] text-[var(--foreground)]" : "bg-[var(--foreground)] text-[var(--background)] border border-dashed"}`}>Zona E</button></li>
                </ul>
            </div>
            <div className="w-full flex-1 gap-x-4 flex">
                <div className=" w-[80%] rounded-2xl grid grid-cols-5 grid-rows-2 gap-2">
                    {spots && spots.filter((spot) => spot.zone == selectedZone).map((spot, _index) => (
                        <SportCard key={spot.id} spot={spot}/>
                    ))}
                </div>
                <div className="flex-1 rounded-2xl grid grid-cols-1 grid-rows-4 gap-y-4">
                    <DashboardCounterCard label="Total de vagas" value={20}/>
                    <DashboardCounterCard label="Vagas disponíveis" value={20}/>
                    <DashboardCounterCard label="Vagas ocupadas" value={20}/>
                    <DashboardCounterCard label="Veículos ativos" value={20}/>
                </div>
            </div>
        </div>
    );
}