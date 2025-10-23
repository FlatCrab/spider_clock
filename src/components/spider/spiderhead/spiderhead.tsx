import { calcMirror } from "../../../util/styleutil";

interface SpiderHeadProps {
    colour: string,
    rotation: number,
    mirrorX: boolean,
    mirrorY: boolean,
}

const SpiderHead = ({ colour, rotation, mirrorX, mirrorY }: SpiderHeadProps) => {
    return (
        <div style={{
            color: colour,
            clipPath: "polygon(50% 0%,80% 10%,95% 30%,85% 55%,70% 70%,60% 90%,50% 80%,40% 90%, 30% 70%, 15% 55%, 5% 30%, 20% 10% );",
            rotate: `${rotation}`,
            transform: calcMirror(mirrorX, mirrorY)
        }}>
        </div>
    );
};
export { SpiderHead };