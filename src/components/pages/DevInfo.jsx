import { Typography } from "@mui/material";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";

const Info = ({ children }) => {
  return (
    <Typography variant="body1" color="black" textAlign="left" sx={{ mt: 2 }}>
      {children}
      <ArrowBackIosNewRoundedIcon
        sx={{ verticalAlign: "bottom", color: "primary.main" }}
      />
    </Typography>
  );
};

const DevInfo = () => {
  return (
    <>
      <Info>نام و نام خانوادگی : مهلا حصاری</Info>
      <Info>سن : 29</Info>
      <Info>شهر : گرگان</Info>
      <Info>آدرس ایمیل : asshjaee74@gmail.com </Info>
      <Info>شماره همراه : 09111112233 </Info>
    </>
  );
};

export default DevInfo;
