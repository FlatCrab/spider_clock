import { calcMirror } from "../../../util/styleutil";

interface SpiderLegProps {
    colour?: string;
    rotation?: number;
    mirrorX?: boolean;
    mirrorY?: boolean;
}

const SpiderLeg = ({
    colour = "white",
    rotation = 0,
    mirrorX = false,
    mirrorY = false,
}: SpiderLegProps) => {
    return (
        <div
            style={{
                backgroundColor: colour,
                clipPath: "polygon(25% 0%,28% 2%,54% 49%,48% 78%,25% 100%,41% 62%)",
                transform: `${calcMirror(mirrorX, mirrorY)} rotate(${rotation}deg)`,
                width: "80px",
                height: "20px",
            }}
            className="relative"
        ></div>
    );
};

export { SpiderLeg };
