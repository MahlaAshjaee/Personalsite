import { FavoriteRounded } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";

const SidebarFooter = () => {
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
      <Typography variant="subtitle2" color="whitesmoke">
        طراحی شده با{" "}
        <FavoriteRounded
          sx={{ verticalAlign: "middle", color: "tomato", height: 20 }}
        />
      </Typography>
    </Box>
  );
};

export default SidebarFooter;
