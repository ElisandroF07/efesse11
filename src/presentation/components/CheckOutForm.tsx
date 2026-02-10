"use client";

import { useParkingStore } from "@/src/presentation/store/useParkingStore";
import { useState } from "react";
import { Ticket } from "@/src/domain/entities/Ticket";
import z from 'zod'
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const CheckInFormSchema = z.object({
    plate: z.string().regex(/^[A-Z]{2}-[0-9]{2}-[0-9]{2}-[A-Z]{2}$/, {
        message: "Formato esperado: LD-00-00-AA"
    })
})

type CheckInFormType = z.infer<typeof CheckInFormSchema>

export function CheckOutForm() {
    const { checkOut, loading, error, clearError } = useParkingStore();
    const [processedTicket, setProcessedTicket] = useState<Ticket | null>(null);

    
        const { formState: { errors }, register, handleSubmit } = useForm({
            resolver: zodResolver(CheckInFormSchema)
        })
    

    const submit = (data: CheckInFormType) => {
        if (!data.plate) return;
        setProcessedTicket(null);

        try {
            const ticket = checkOut(data.plate);
            if (ticket) {
                setProcessedTicket(ticket);
            }
        } catch (e) {
        }
    };

    return (
        <div className="w-full max-w-md mx-auto p-6 bg-white rounded-2xl border border-dashed border-gray-300 shadow-sm">
            <h2 className="text-xl font-semibold mb-6 !text-[var(--background)] flex items-center gap-2">
                Saída de Veículo
            </h2>

            {error && (
                <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm font-normal flex justify-between items-center">
                    <span>{error}</span>
                    <button onClick={clearError} className="hover:text-red-800">✕</button>
                </div>
            )}

            {processedTicket ? (
                <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 rounded-xl space-y-3 animate-in fade-in slide-in-from-bottom-4">
                    <div className="flex justify-between items-center pb-2 border-b border-emerald-100">
                        <span className="text-emerald-700 font-medium">Pagamento Confirmado</span>
                        <span className="bg-emerald-100 text-emerald-800 text-xs px-2 py-1 rounded-full">{processedTicket.status}</span>
                    </div>
                    <div className="space-y-2 text-sm font-normal">
                        <div className="flex justify-between text-gray-600">
                            <span>Matrícula:</span>
                            <span className="font-mono !text-[var(--background)]">{processedTicket.plate}</span>
                        </div>
                        <div className="flex justify-between text-gray-600">
                            <span>Entrada:</span>
                            <span className="!text-[var(--background)]">{processedTicket.entryTime.toLocaleTimeString()}</span>
                        </div>
                        <div className="flex justify-between text-gray-600">
                            <span>Saída:</span>
                            <span className="!text-[var(--background)]">{processedTicket.exitTime?.toLocaleTimeString()}</span>
                        </div>
                        <div className="flex justify-between text-gray-600">
                            <span>Preço:</span>
                            <span className="text-xl font-bold text-emerald-600">{processedTicket.price} Kz</span>
                        </div>
                    </div>
                    <button
                        onClick={() => setProcessedTicket(null)}
                        className="w-full mt-4 py-2 bg-emerald-100 hover:bg-emerald-200 text-emerald-700 text-sm rounded-lg transition-colors font-semibold"
                    >
                        Novo Pagamento
                    </button>
                </div>
            ) : (
                <form onSubmit={handleSubmit(submit)} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium !text-[var(--background)] mb-1.5">Ticket ID ou Matrícula</label>
                        <input
                            type="text"
                            placeholder="ID ou Matrícula"
                            {...register('plate')}
                            className="w-full px-4 py-3 bg-gray-50 border border-dashed border-gray-200 rounded-xl text-[var(--background)] placeholder-gray-400 focus:outline-none  focus:border-zinc-400 transition-all font-mono tracking-wider"
                        />
                            {errors.plate?.message &&
                                <span className="w-full px-4 bg-red-100 !text-red-500
                            ">
                                {errors.plate.message}
                            </span>
                            }
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-3.5 px-4 bg-[var(--background)] hover:bg-black/80 text-white font-medium rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-gray-200 active:scale-[0.98]"
                    >
                        {loading ? "Calculando..." : "Calcular e Pagar"}
                    </button>
                </form>
            )}
        </div>
    );
}
