import { useContext } from "react";
import MainContext from "../context";
import { useTheme } from "@mui/material/styles";
import { NightlightOutlined, WbSunnyOutlined } from "@mui/icons-material";
import { Fab, Box } from "@mui/material";

const ThemeActinButton = () => {
  const theme = useTheme();
  const { handleThemeChange } = useContext(MainContext);
  return (
    <Box
      sx={{
        position: "absolute",
        display: {
          xs: "none",
          md: "block",
        },
      }}
    >
      <Fab
        aria-label="ThemeChange"
        variant="extended"
        size="small"
        color="secondary"
        onClick={handleThemeChange}
        sx={{ ml: 2, color: "whitesmoke" }}
      >
        {theme.palette.mode === "dark" ? (
          <WbSunnyOutlined />
        ) : (
          <NightlightOutlined />
        )}{" "}
        {theme.palette.mode === "dark" ? "تم روز" : "تم شب"}
      </Fab>
    </Box>
  );
};

export default ThemeActinButton;
