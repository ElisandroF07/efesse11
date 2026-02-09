import { Spot } from "@/src/shared/types/Spot"
import Image from "next/image"
import SportCarImage from '@/src/assets/images/spotCardImages/spotCarImage.png'

interface ISportCardProps {
    spot: Spot
}

function SportCard({spot}: ISportCardProps) {
    return (
        <div className={`rounded-xl text-slate-300 font-normal flex items-center justify-center border border-dashed ${spot.status == "OCUPADO" ? 'bg-red-50 border-red-400' : 'bg-green-50  border-green-400'}`}>
            {
                spot.status == "OCUPADO" ? (
                    <Image src={SportCarImage} alt="SpotCarImage" width={400} />
                )
                :
                <>
                    <span className="text-green-600">{spot.id}</span>
                </>
            }
        </div>
    )
}

export { SportCard }