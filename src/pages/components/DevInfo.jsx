import { Typography } from "@mui/material";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";

const DevInfo = ({ children }) => {
  return (
    <Typography variant="body1" color="black" textAlign="left" sx={{ mt: 2 }}>
      <ArrowBackIosNewRoundedIcon
        sx={{ verticalAlign: "bottom", color: "primary.main" }}
      />
      {children}
    </Typography>
  );
};

export default DevInfo;
