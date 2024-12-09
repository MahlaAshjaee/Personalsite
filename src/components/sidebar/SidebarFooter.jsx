import { useTheme } from "@emotion/react";
import { FavoriteRounded } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";

const SidebarFooter = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        flexGrow: 1,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        height: 95,
      }}
    >
      <Typography
        variant="subtitle2"
        color={theme.palette.mode === "dark" ? "whitesmoke" : "grey[900]"}
      >
        <FavoriteRounded
          sx={{ verticalAlign: "middle", color: "tomato", height: 20 }}
        />
        طراحی شده با{" "}
      </Typography>
    </Box>
  );
};

export default SidebarFooter;
