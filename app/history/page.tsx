import { HistoryTable } from "@/src/presentation/components/HistoryTable";

export default function HistoryPage() {
    return (
        <div className="w-full h-full flex flex-col gap-6">
            <div>
                <h1 className="text-3xl font-bold text-[var(--background)] mb-2">Histórico</h1>
            </div>
            <div className="flex-1 min-h-0 overflow-y-auto">
                <HistoryTable />
            </div>
        </div>
    )
}