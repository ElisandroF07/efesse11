import { CheckInForm } from "@/src/presentation/components/CheckInForm";

export default function CheckInPage() {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center">
            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-[var(--background)] mb-2">Registrar Entrada</h1>
                <p className="!text-[var(--background)] font-normal">Insira a matrícula do veículo para iniciar o estacionamento</p>
            </div>
            <CheckInForm />
        </div>
    )
}