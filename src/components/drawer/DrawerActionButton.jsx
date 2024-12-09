import { Box, Fab } from "@mui/material";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { useContext } from "react";
import MainContext from "../../context";

const DrawerActionButton = () => {
  const { setDrawerOpen } = useContext(MainContext);
  return (
    <Box
      sx={{
        position: "absolute",
        left: 2,
        display: {
          xs: "block",
          mx: "block",
          lg: "none",
          xl: "none",
          md: "none",
        },
      }}
    >
      <Fab
        color="primary"
        aria-label="sidebar"
        size="small"
        sx={{ m: 2 }}
        onClick={() => setDrawerOpen(true)}
      >
        <MenuRoundedIcon />
      </Fab>
    </Box>
  );
};

export default DrawerActionButton;
