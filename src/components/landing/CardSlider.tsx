import Card from "./Card";
import clsx from "clsx";
interface Props {
    direction : "left" | "right";
    imageNames: [string, string, string, string, string, string];
}

export default function CardSlider({ direction, imageNames }: Props ) {
    return (
        <div className={clsx("w-[1187px] flex flex-row  gap-10", {
            "animate-marqueeLeft": direction === "left",
            "animate-marqueeRight": direction === "right"
        })}>
            <div className=" flex flex-row gap-10 h-[100px]">
                <Card imageName={imageNames[0]}/>
                <Card imageName={imageNames[1]}/>
                <Card imageName={imageNames[2]}/>
                <Card imageName={imageNames[3]}/>
                <Card imageName={imageNames[4]}/>
                <Card imageName={imageNames[5]}/>
            </div>
            <div className="flex flex-row gap-10">
                <Card imageName={imageNames[0]}/>
                <Card imageName={imageNames[1]}/>
                <Card imageName={imageNames[2]}/>
                <Card imageName={imageNames[3]}/>
                <Card imageName={imageNames[4]}/>
                <Card imageName={imageNames[5]}/>
            </div>
            <div className="flex flex-row gap-10">
                <Card imageName={imageNames[0]}/>
                <Card imageName={imageNames[1]}/>
                <Card imageName={imageNames[2]}/>
                <Card imageName={imageNames[3]}/>
                <Card imageName={imageNames[4]}/>
                <Card imageName={imageNames[5]}/>
            </div>
        </div>
    );
}