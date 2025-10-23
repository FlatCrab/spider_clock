import { calcMirror } from "../../../util/styleutil";

interface SpiderHeadProps {
    colour?: string;
    rotation?: number;
    mirrorX?: boolean;
    mirrorY?: boolean;
    width?: number;
    height?: number;
}

const SpiderHead = ({
    colour = "white",
    rotation = 0,
    mirrorX = false,
    mirrorY = false,
    width = 60,
    height = 60,
}: SpiderHeadProps) => {
    return (
        <div
            style={{
                backgroundColor: colour,
                clipPath:
                    "polygon(50% 0%,80% 10%,95% 30%,85% 55%,70% 70%,60% 90%,50% 80%,40% 90%,30% 70%,15% 55%,5% 30%,20% 10%)",
                transform: `${calcMirror(mirrorX, mirrorY)} rotate(${rotation}deg)`,
                width: `${width}px`,
                height: `${height}px`,
            }}
            className="relative"
        ></div>
    );
};

export { SpiderHead };
