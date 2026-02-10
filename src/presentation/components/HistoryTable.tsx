"use client";

import { useParkingStore } from "@/src/presentation/store/useParkingStore";
import { useEffect } from "react";

export function HistoryTable() {
    const { history, fetchHistory, loading } = useParkingStore();

    useEffect(() => {
        fetchHistory();
    }, [fetchHistory]);

    if (loading && history.length === 0) {
        return <div className="text-center py-10 text-gray-500">Carregando histórico...</div>
    }

    return (
        <div className="w-full sm:rounded-2xl sm:border border-dashed border-gray-300 sm:bg-white overflow-hidden font-normal">
            <div className="overflow-x-auto w-full">
                <table className="hidden sm:inline-table w-full text-left border-collapse min-w-[600px]">
                    <thead>
                        <tr className="border-b border-gray-200 bg-gray-50">
                            <th className="p-4 text-xs font-medium text-gray-500 uppercase tracking-widest">Matrícula</th>
                            <th className="p-4 text-xs font-medium text-gray-500 uppercase tracking-widest">Entrada</th>
                            <th className="p-4 text-xs font-medium text-gray-500 uppercase tracking-widest">Saída</th>
                            <th className="p-4 text-xs font-medium text-gray-500 uppercase tracking-widest">Vaga</th>
                            <th className="p-4 text-xs font-medium text-gray-500 uppercase tracking-widest text-right">Valor</th>
                            <th className="p-4 text-xs font-medium text-gray-500 uppercase tracking-widest text-center">Status</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {history.map((ticket) => (
                            <tr key={ticket.id} className="hover:bg-gray-50 transition-colors group">
                                <td className="p-4 font-mono text-[var(--background)]">{ticket.plate}</td>
                                <td className="p-4 text-gray-600 text-sm whitespace-nowrap">{ticket.entryTime.toLocaleString()}</td>
                                <td className="p-4 text-gray-600 text-sm whitespace-nowrap">{ticket.exitTime?.toLocaleString() || '-'}</td>
                                <td className="p-4 text-gray-600 text-sm whitespace-nowrap">{ticket.spotId}</td>
                                <td className="p-4 text-right font-medium text-emerald-600 font-mono">
                                    {ticket.price ? `${ticket.price} Kz` : '-'}
                                </td>
                                <td className="p-4 text-center">
                                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${ticket.status === 'PAID'
                                        ? 'bg-emerald-100 text-emerald-700 border border-emerald-200'
                                        : 'bg-blue-100 text-blue-700 border border-blue-200'
                                        }`}>
                                        {ticket.status === 'PAID' ? 'Pago' : 'Ativo'}
                                    </span>
                                </td>
                            </tr>
                        ))}
                        {history.length === 0 && (
                            <tr>
                                <td colSpan={6} className="p-12 text-center text-gray-500 font-normal">
                                    Nenhum registro encontrado no histórico.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
                <div className="flex sm:hidden flex-col gap-y-2">
                    {history.map((ticket) => (
                            <div key={ticket.id} className="bg-white w-full h-[40px] !text-black flex items-center justify-between  px-4 py-8 rounded-2xl border border-dashed">
                                <p>{ticket.plate}</p>
                                <div className="flex">
                                    <p>{ticket.spotId}-</p>
                                    <p className="font-semibold !text-green-400 ">{ticket.status == "PAID" ? "Pago" : "Pendente"}</p>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
}
