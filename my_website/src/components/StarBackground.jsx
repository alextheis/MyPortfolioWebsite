import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useEffect, useState } from "react";

const StarBackground = () => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const options = {
        background: { color: { value: "#0d1117" } }, // Deep space blue/black
        particles: {
            number: { value: 160, density: { enable: true } },
            color: { value: "#ffffff" },
            shape: { type: "circle" },
            opacity: {
                value: { min: 0.1, max: 0.8 },
                animation: { enable: true, speed: 1, sync: false }
            },
            size: { value: { min: 1, max: 3 } },
            move: { enable: true, speed: 0.5, direction: "none" }
        }
    };

    if (init) {
        return <Particles id="tsparticles" options={options} />;
    }

    return null;
};

export default StarBackground;