import { useTheme } from "@emotion/react";
import { Grid2 } from "@mui/material";
import { grey } from "@mui/material/colors";

const SidebarContainer = ({ children }) => {
  const theme = useTheme();
  return (
    <Grid2
      size={{ xs: 0, ms: 0, md: 3, lg: 2, xl: 2 }}
      sx={{
        backgroundColor: theme.palette.mode === "dark" ? grey[900] : grey[400],
        height: "100vh",
        overflowY: "auto",
        overflowX: "hidden",
      }}
    >
      {children}
    </Grid2>
  );
};

export default SidebarContainer;
