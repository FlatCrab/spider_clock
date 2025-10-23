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

    function calcMirror() {

        return `${mirrorY ? "scaleY(-1)" : ""} ${mirrorX ? "scaleX(-1)" : ""}`;
    }
    return (
        <div style={{
            color: colour,
            clipPath: "clip-path: ellipse(36% 47% at 50% 50%)",
            rotate: `${rotation}`,
            transform: calcMirror()
        }}>

        </div>
    );
};
export { Spiderbody };