import { calcMirror } from "../../../util/styleutil";

interface SpiderBodyProps {
    colour?: string;
    rotation?: number;
    mirrorX?: boolean;
    mirrorY?: boolean;
    width?: number;
    height?: number;
}

const SpiderBody = ({
    colour = "white",
    rotation = 0,
    mirrorX = false,
    mirrorY = false,
    width = 100,
    height = 100,
}: SpiderBodyProps) => {
    return (
        <div
            style={{
                backgroundColor: colour,
                clipPath: "ellipse(36% 47% at 50% 50%)",
                transform: `${calcMirror(mirrorX, mirrorY)} rotate(${rotation}deg)`,
                width: `${width}px`,
                height: `${height}px`,
            }}
            className="relative"
        ></div>
    );
};

export { SpiderBody };
