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
                <div className="absolute inset-0 flex items-center justify-center">
                    <SpiderBody colour={colour} />
                </div>

                <div className="absolute top-[20%] left-1/2 -translate-x-1/2">
                    <SpiderHead colour={colour} />
                </div>


                <div
                    className="absolute top-1/2 left-1/2"
                    style={{
                        transform: `translate(-50%, -50%) rotate(${-110}deg)`,
                    }}
                >
                    <SpiderLeg
                        colour={colour}
                        rotation={-110}
                    />
                </div>
                <div
                    className="absolute top-1/2 left-1/2"
                    style={{
                        transform: `translate(-50%, -50%) rotate(${-110}deg)`,
                    }}
                >
                    <SpiderLeg
                        colour={colour}
                        rotation={-60}
                    />
                </div>
                <div
                    className="absolute top-1/2 left-1/2"
                    style={{
                        transform: `translate(-50%, -50%) rotate(${-110}deg)`,
                    }}
                >
                    <SpiderLeg
                        colour={colour}
                        rotation={-25}
                    />
                </div>
                <div
                    className="absolute top-1/2 left-1/2"
                    style={{
                        transform: `translate(-50%, -50%) rotate(${-110}deg)`,
                    }}
                >
                    <SpiderLeg
                        colour={colour}
                        rotation={calcHours()}
                    />
                </div>
                <div
                    className="absolute top-1/2 left-1/2"
                    style={{
                        transform: `translate(-50%, -50%) rotate(${-110}deg)`,
                    }}
                >
                    <SpiderLeg
                        colour={colour}
                        rotation={calcMinutes()}
                        mirrorX={true}
                    />
                </div>
                <div
                    className="absolute top-1/2 left-1/2"
                    style={{
                        transform: `translate(-50%, -50%) rotate(${-110}deg)`,
                    }}
                >
                    <SpiderLeg
                        colour={colour}
                        rotation={155}
                        mirrorX={true}
                    />
                </div>
                <div
                    className="absolute top-1/2 left-1/2"
                    style={{
                        transform: `translate(-50%, -50%) rotate(${-110}deg)`,
                    }}
                >
                    <SpiderLeg
                        colour={colour}
                        rotation={205}
                        mirrorX={true}
                    />
                </div>
                <div
                    className="absolute top-1/2 left-1/2"
                    style={{
                        transform: `translate(-50%, -50%) rotate(${-110}deg)`,
                    }}
                >
                    <SpiderLeg
                        colour={colour}
                        rotation={150}
                        mirrorX={true}
                    />
                </div>

            </div>
        </div>
    );
};
export { Spider };