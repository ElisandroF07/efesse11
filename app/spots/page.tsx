"use client";

import { useParkingStore } from "@/src/presentation/store/useParkingStore";
import { useEffect, useState } from "react";
import { SportCard } from "@/src/presentation/components/spotCard/SpotCard";

export default function SpotsPage() {
    const { spots, fetchSpots, loading } = useParkingStore();
    const [filter, setFilter] = useState<'ALL' | 'LIVRE' | 'OCUPADO'>('ALL');

    useEffect(() => {
        fetchSpots();
    }, [fetchSpots]);

    const filteredSpots = spots.filter(spot => {
        if (filter === 'ALL') return true;
        return spot.status === filter;
    });

    return (
        <div className="flex w-full h-full flex-col gap-y-6">
            <header className="flex flex-col md:flex-row items-start md:items-center justify-between pb-6 sm:border-b border-gray-200 gap-4">
                <div>
                    <h1 className="font-bold text-3xl text-[var(--background)] tracking-tight">Vagas</h1>
                </div>

                <div className="flex bg-white p-1 rounded-full border border-gray-200 w-auto sm:justify-center">
                    <button
                        onClick={() => setFilter('ALL')}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${filter === 'ALL' ? 'bg-[var(--background)] text-white shadow' : 'text-gray-500 hover:text-[var(--background)]'}`}
                    >
                        Todas
                    </button>
                    <button
                        onClick={() => setFilter('LIVRE')}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${filter === 'LIVRE' ? 'bg-emerald-500 text-white shadow' : 'text-gray-500 hover:text-emerald-500'}`}
                    >
                        Livres
                    </button>
                    <button
                        onClick={() => setFilter('OCUPADO')}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${filter === 'OCUPADO' ? 'bg-red-500 text-white shadow' : 'text-gray-500 hover:text-red-500'}`}
                    >
                        Ocupadas
                    </button>
                </div>
            </header>

            <div className="flex-1 overflow-y-auto">
                {loading ? (
                    <div className="h-full flex items-center justify-center text-gray-500">Carregando vagas...</div>
                ) : (
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                        {filteredSpots.map((spot) => (
                            <SportCard key={spot.id} spot={spot} />
                        ))}
                        {filteredSpots.length === 0 && (
                            <div className="col-span-full text-center py-20 text-gray-500">
                                Nenhuma vaga encontrada com este filtro.
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}