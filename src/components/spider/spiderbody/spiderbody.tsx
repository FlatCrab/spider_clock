import { calcMirror } from "../../../util/styleutil";

interface SpiderbodyProps {
    colour: string,
    rotation: number,
    mirrorX: boolean,
    mirrorY: boolean,
};
const Spiderbody = ({
    colour,
    rotation,
    mirrorX,
    mirrorY
}: SpiderbodyProps) => {

    return (
        <div style={{
            color: colour,
            clipPath: "clip-path: ellipse(36% 47% at 50% 50%)",
            rotate: `${rotation}`,
            transform: calcMirror(mirrorX, mirrorY)
        }}>

        </div>
    );
};
export { Spiderbody };