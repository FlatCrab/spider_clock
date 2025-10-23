import { calcMirror } from "../../../util/styleutil";

interface SpiderLegProps {
    colour: string,
    rotation: number,
    mirrorX: boolean,
    mirrorY: boolean,
};
const SpiderLeg = ({
    colour,
    rotation,
    mirrorX,
    mirrorY
}: SpiderLegProps) => {

    return (
        <div style={{
            color: colour,
            clipPath: "polygon(25% 0%, 28% 2%, 54% 49%, 48% 78%, 25% 100%, 41% 62%)",
            rotate: `${rotation}`,
            transform: calcMirror(mirrorX, mirrorY)
        }}>

        </div>
    );
};
export { SpiderLeg };