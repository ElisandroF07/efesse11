interface IDashboardCounterCard {
    label: string;
    value: number;
}

function DashboardCounterCard ({ label, value}: IDashboardCounterCard) {
    return (
        <div className="w-full h-full border border-dashed rounded-2xl p-4 flex flex-col items-start justify-start text-[var(--background)] bg-white">
            <p className="font-normal">{ label }</p>
            <div className="flex items-center justify-center w-full flex-1">
                <p className="font-semibold text-7xl"> { value } </p>
            </div>
        </div>
    )
}

export { DashboardCounterCard }