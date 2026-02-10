import { CheckOutForm } from "@/src/presentation/components/CheckOutForm";

export default function CheckOutPage() {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center">
            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-[var(--background)] mb-2">Registrar Saída</h1>
                <p className="!text-[var(--background)] font-normal">Insira o ticket ou matrícula para calcular o pagamento</p>
            </div>
            <CheckOutForm />
        </div>
    )
}