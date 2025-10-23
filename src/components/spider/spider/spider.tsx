import { useEffect, useState } from "react";
import { SpiderBody } from "../spiderbody/spiderbody";
import { SpiderHead } from "../spiderhead/spiderhead";
import { SpiderLeg } from "../spiderleg/spiderleg";

interface SpiderProps {
    colour?: string;
}

const Spider = ({ colour = "#222" }: SpiderProps) => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(interval);
    }, []);

    function calcMinutes() {
        const seconds = time.getSeconds();
        const minutes = time.getMinutes() + seconds / 60;
        const secDeg = seconds / 5;
        const minDeg = minutes * 6 - 5;
        return minDeg + secDeg;
    }

    function calcHours() {
        const seconds = time.getSeconds();
        const minutes = time.getMinutes() + seconds / 60;
        const hours = (time.getHours() % 12) + minutes / 60;
        const minDeg = minutes / 6;
        const hourDeg = (hours % 12) * 30 - 10;
        return minDeg + hourDeg;
    }

    return (
        <div className="relative flex items-center justify-center w-screen h-screen bg-slate-900">
            <div className="relative" style={{ width: "300px", height: "300px" }}>
                {/* Spider Body */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <SpiderBody colour={colour} />
                </div>

                {/* Spider Head */}
                <div className="absolute bottom-[20%] left-1/2 -translate-x-1/2">
                    <SpiderHead colour={colour} />
                </div>

                {/* ==== LEFT SIDE LEGS ==== */}
                <div
                    className="absolute top-1/2 left-[60%] w-fit h-fit"
                    style={{ transform: "translate(-50%, -50%) rotate(-120deg)" }}
                >
                    <SpiderLeg colour={colour} rotation={-120} />
                </div>

                <div
                    className="absolute top-[40%] left-[28%] w-fit h-fit"
                    style={{ transform: "translate(-50%, -50%) rotate(-70deg)" }}
                >
                    <SpiderLeg colour={colour} rotation={-70} />
                </div>

                {/* Moving time-based legs to slightly side positions */}
                <div
                    className="absolute top-[55%] left-[31%] w-fit h-fit"
                    style={{
                        transform: `translate(-50%, -50%) rotate(${calcHours()}deg)`,
                    }}
                >
                    <SpiderLeg colour={"blue"} rotation={calcHours()} />
                </div>

                <div
                    className="absolute top-[60%] left-[35%] w-fit h-fit"
                    style={{
                        transform: `translate(-50%, -50%) rotate(${calcMinutes()}deg)`,
                    }}
                >
                    <SpiderLeg colour={"red"} rotation={calcMinutes()} />
                </div>

                {/* ==== RIGHT SIDE LEGS ==== */}
                <div
                    className="absolute top-1/2 right-[30%] w-fit h-fit"
                    style={{ transform: "translate(50%, -50%) rotate(120deg)" }}
                >
                    <SpiderLeg colour={colour} rotation={120} mirrorX />
                </div>

                <div
                    className="absolute top-[40%] right-[28%] w-fit h-fit"
                    style={{ transform: "translate(50%, -50%) rotate(160deg)" }}
                >
                    <SpiderLeg colour={colour} rotation={160} mirrorX />
                </div>

                <div
                    className="absolute top-[55%] right-[32%] w-fit h-fit"
                    style={{ transform: "translate(50%, -50%) rotate(200deg)" }}
                >
                    <SpiderLeg colour={colour} rotation={200} mirrorX />
                </div>

                <div
                    className="absolute top-[60%] right-[35%] w-fit h-fit"
                    style={{ transform: "translate(50%, -50%) rotate(150deg)" }}
                >
                    <SpiderLeg colour={colour} rotation={150} mirrorX />
                </div>
            </div>
        </div>
    );
};

export { Spider };