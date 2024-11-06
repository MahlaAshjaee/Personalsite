import { Box, Divider, Typography } from "@mui/material";
import Chip from "@mui/material/Chip";

import wallhaven from "../assets/wallhaven-39edky.jpg";
import { useCallback, useEffect, useRef } from "react";
import Typed from "typed.js";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { mouseAttraction } from "../constants/Particles";

const Home = () => {
  const nameEl = useRef(null);
  const infoEl = useRef(null);

  const strings = [
    "من یک برنامه نویس هستم.",
    "من یک فرانت اند هستم.",
    "من یک کارجو هستم.",
  ];
  useEffect(() => {
    const typeName = new Typed(nameEl.current, {
      strings: ["[[مهلا حصاری]]"],
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 50,
      showCursor: false,
    });
    const typedInfo = new Typed(infoEl.current, {
      strings: strings,
      startDelay: 1500,
      typeSpeed: 80,
      backDelay: 50,
      loop: true,
      showCursor: false,
    });

    return () => {
      typeName.destroy();
      typedInfo.destroy();
    };
  }, []);

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <Box
      sx={{
        backgroundImage: `url(${wallhaven})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={mouseAttraction}
      />

      <Typography ref={nameEl} variant="h3" color="#00838f"></Typography>

      <Typography
        ref={infoEl}
        variant="h4"
        color="whitesmoke"
        sx={{
          textDecoration: "underline",
          textDecorationColor: "#ff8a65",
        }}
      ></Typography>
    </Box>
  );
};

export default Home;
