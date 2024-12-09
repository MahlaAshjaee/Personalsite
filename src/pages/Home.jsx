import { Box, Typography } from "@mui/material";

import wallhaven from "../assets/wallhaven-39edky.jpg";
import { useCallback, useEffect, useRef, useState } from "react";
import Typed from "typed.js";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { mouseAttraction } from "../constants/Particles";
import TextTransition, { presets } from "react-text-transition";
import { Helmet } from "react-helmet-async";

const Home = ({ helmetTitle }) => {
  const [index, setIndex] = useState(0);
  const nameEl = useRef(null);

  const strings = [
    "  برنامه نویس هستم",
    " فرانت اند کار هستم ",
    "  کارجو هستم ",
  ];
  useEffect(() => {
    const typeName = new Typed(nameEl.current, {
      strings: ["مهلا حصاری"],
      typeSpeed: 110,
      backSpeed: 80,
      backDelay: 50,
      showCursor: false,
    });

    const stringsTransition = setInterval(() => {
      setIndex((index) => index + 1);
    }, 3000);

    return () => {
      typeName.destroy();
      clearInterval(stringsTransition);
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
      <Helmet>
        <title>{helmetTitle}</title>
      </Helmet>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={mouseAttraction}
      />
      <Box component="div" sx={{ display: "flex" }}>
        <Typography variant="h3" color="#f50057">
          {"{{"}
        </Typography>
        <Typography ref={nameEl} variant="h3" color="#00838f"></Typography>
        <Typography variant="h3" color="#f50057">
          {"}}"}
        </Typography>
      </Box>
      <Box component="div" sx={{ display: "flex" }}>
        <TextTransition springConfig={presets.wobbly}>
          <Typography
            variant="h4"
            color="whitesmoke"
            sx={{
              textDecoration: "underline",
              textDecorationColor: "#f50057",
              mt: 4,
            }}
          >
            {strings[index % strings.length]}
          </Typography>
        </TextTransition>
        <Typography variant="h4" color="whitesmoke" sx={{ mr: 1, mt: 4 }}>
          من یک
        </Typography>
      </Box>
    </Box>
  );
};

export default Home;
