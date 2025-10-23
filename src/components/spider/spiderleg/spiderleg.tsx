import { calcMirror } from "../../../util/styleutil";

interface SpiderLegProps {
    colour?: string;
    rotation?: number;
    mirrorX?: boolean;
    mirrorY?: boolean;
    width?: number;
    height?: number;

}

const SpiderLeg = ({
    colour = "white",
    rotation = 0,
    mirrorX = false,
    mirrorY = false,
    width = 100,
    height = 150,
}: SpiderLegProps) => {
    return (
        <div
            style={{
                backgroundColor: colour,
                clipPath: "polygon(25% 0%,28% 2%,54% 49%,48% 78%,25% 100%,41% 62%)",
                transform: `${calcMirror(mirrorX, mirrorY)} rotate(${rotation}deg)`,
                transformOrigin: "top center",
                width: `${width}px`,
                height: `${height}px`,
            }}
            className="relative origin-top"
        ></div>
    );
};

export { SpiderLeg };
