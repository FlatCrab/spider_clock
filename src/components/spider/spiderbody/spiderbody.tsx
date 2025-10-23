import { calcMirror } from "../../../util/styleutil";

interface SpiderBodyProps {
    colour?: string;
    rotation?: number;
    mirrorX?: boolean;
    mirrorY?: boolean;
}

const SpiderBody = ({
    colour = "white",
    rotation = 0,
    mirrorX = false,
    mirrorY = false,
}: SpiderBodyProps) => {
    return (
        <div
            style={{
                backgroundColor: colour,
                clipPath: "ellipse(36% 47% at 50% 50%)",
                transform: `${calcMirror(mirrorX, mirrorY)} rotate(${rotation}deg)`,
                width: "100px",
                height: "100px",
            }}
            className="relative"
        ></div>
    );
};

export { SpiderBody };
