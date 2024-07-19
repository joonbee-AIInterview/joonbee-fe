import Image from "next/image";

interface Props {
    imageName: string;
}
export default function Card({ imageName }: Props) {
    return (
        <div className="w-[158px] h-[92px] rounded-lg shadow-card flex items-center justify-center">
            <Image src={`/icons/logo/${imageName}.png`} alt="laptop" width={120} height={10} />
        </div>
    )
}