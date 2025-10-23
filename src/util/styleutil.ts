function calcMirror(mirrorX: boolean, mirrorY: boolean) {

    return `${mirrorY ? "scaleY(-1)" : ""} ${mirrorX ? "scaleX(-1)" : ""}`;
}
export { calcMirror };