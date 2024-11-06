import { Grid2 } from "@mui/material";

const PagesContainer = ({ children }) => {
  return (
    <Grid2
      size={{ xs: 12, ms: 12, md: 9, lg: 10, xl: 10 }}
      sx={{ backgroundColor: "whitesmoke" }}
    >
      {children}
    </Grid2>
  );
};

export default PagesContainer;
