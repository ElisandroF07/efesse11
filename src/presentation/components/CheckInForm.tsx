"use client";

import { useParkingStore } from "@/src/presentation/store/useParkingStore";
import { useState } from "react";
import Image from "next/image";

export function CheckInForm() {
    const [plate, setPlate] = useState("");

    const { checkIn, loading, error, clearError } = useParkingStore();
    const [ticket, setTicket] = useState<any | null>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!plate) return;
        setTicket(null);
        clearError();

        try {
            const newTicket = checkIn(plate);
            if (newTicket) {
                setTicket(newTicket);
                setPlate("");
            }
        } catch (e) {
        }
    };

    return (
        <div className="w-full max-w-md mx-auto p-6 bg-white rounded-2xl border border-dashed border-gray-300">
            <h2 className="text-xl font-semibold mb-6 !text-[var(--background)] flex items-center gap-2">
                Entrada de Veículo
            </h2>

            {error && (
                <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm flex justify-between items-center">
                    <span>{error}</span>
                    <button onClick={clearError} className="hover:text-red-800">✕</button>
                </div>
            )}

            {ticket ? (
                <div className="mb-6 p-4 bg-green-50 border border-dashed border-green-400 rounded-xl space-y-3 animate-in fade-in slide-in-from-bottom-4">
                    <div className="flex justify-between items-center pb-2 ">
                        <span className="text-green-700 font-medium">Ticket Gerado</span>
                        <span className="bg-green-100 text-green-800 text-xs font-normal px-2 py-1 rounded-full">ATIVO</span>
                    </div>
                    <div className="space-y-2 text-sm">
                        <div className="flex justify-between text-gray-600">
                            <span className="font-normal">Matrícula:</span>
                            <span className="font-mono text-[var(--background)]">{ticket.plate}</span>
                        </div>
                        <div className="flex justify-between text-gray-600">
                            <span className="font-normal">Vaga:</span>
                            <span className="font-normal text-green-600">{ticket.spotId}</span>
                        </div>
                        <div className="flex justify-between text-gray-600">
                            <span className="font-normal">Entrada:</span>
                            <span className="text-[var(--background)] font-normal">{ticket.entryTime.toLocaleTimeString()}</span>
                        </div>
                    </div>
                    <button
                        onClick={() => setTicket(null)}
                        className="w-full mt-4 py-2 bg-green-100 hover:bg-green-200 text-green-700 text-sm rounded-lg transition-colors font-semibold"
                    >
                        Novo Registro
                    </button>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium !text-[var(--background)]  mb-1.5">Matrícula</label>
                        <input
                            type="text"
                            value={plate}
                            onChange={(e) => setPlate(e.target.value.toUpperCase())}
                            placeholder="LD-00-00-AA"
                            className="w-full px-4 py-3 bg-gray-50 border border-dashed border-gray-200 rounded-xl text-[var(--background)] placeholder-gray-400 focus:outline-none  focus:border-zinc-400 transition-all font-mono tracking-wider"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading || !plate}
                        className="w-full py-3.5 px-4 bg-[var(--background)] hover:bg-black/80 text-white font-medium rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-gray-200 active:scale-[0.98]"
                    >
                        {loading ? "Processando..." : "Confirmar Entrada"}
                    </button>
                </form>
            )}
        </div>
    );
}
