import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
// import { loadAll } from "@/tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.

const ParticlesComponent = (props) => {

  const [, setInit] = useState(false);
  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };


  const options = useMemo(
  () => ({
    background: {
      color: {
        value: "#FFFFFF",
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "repulse",
        },
        onHover: {
          enable: true,
          mode: "grab",
        },
      },
      modes: {
        push: {
          distance: 200,
          duration: 15,
        },
        grab: {
          distance: 150,
        },
      },
    },
    particles: {
      color: {
        value: "#FE9900", // Firefly color
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce", // Bubbles bounce off edges
        },
        random: true,
        speed: { min: 0.2, max: 1 }, // Slow, floating speed like bubbles
        straight: false,
      },
      number: {
        density: {
          enable: true,
        },
        value: 100, // Fewer particles for bubble-like effect
      },
      opacity: {
        value: { min: 0.1, max: 1 }, // Range to simulate glow and transparency of bubbles
        animation: {
          enable: true,
          speed: 1.5, // Glow speed
          minimumValue: 0.1, // Bubbles should not fully disappear
          startValue: "random",
          sync: false, // Each bubble glows independently
        },
      },
      shape: {
        type: "circle", // Bubble shape
      },
      size: {
        value: { min: 3, max: 5 }, // Larger size to resemble bubbles
        animation: {
          enable: true,
          speed: 5, // Slow size change for dynamic bubble effect
          minimumValue: 5, // Ensure bubbles don't shrink too much
          sync: false, // Size animation not synchronized
        },
      },
      stroke: {
        width: 1, // Optional stroke for bubble outline
        color: "#FFF", // Light outline around bubbles
      },
    },
    detectRetina: true,
  }),
  [],
);

  return <Particles id={props.id} init={particlesLoaded} options={options} />; 
};

export default ParticlesComponent;