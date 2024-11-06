import {
  Avatar,
  Card,
  CardContent,
  Divider,
  Grid2,
  Typography,
} from "@mui/material";
import Chip from "@mui/material/Chip";
import SelfImprovementRoundedIcon from "@mui/icons-material/SelfImprovementRounded";
import CodeRoundedIcon from "@mui/icons-material/CodeRounded";
import avatar from "../../assets/avater.jpg";
import DevInfo from "./DevInfo";

const About = () => {
  return (
    <Card sx={{ height: "100vh", backgroundColor: "whitesmoke" }}>
      <CardContent>
        <Grid2 container sx={{ px: 3 }}>
          <Grid2
            xs={12}
            sm={12}
            md={4}
            lg={4}
            xl={4}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Avatar
              src={avatar}
              variant="rounded"
              sx={{
                height: 250,
                width: 250,
                margin: "0 auto",
                display: {
                  xl: "block",
                  lg: "block",
                  md: "block",
                  sm: "nooe",
                  xs: "none",
                },
                px: 3,
              }}
            >
              YG
            </Avatar>
          </Grid2>
          <Grid2 xs={12} sm={12} md={8} lg={8} xl={8}>
            <Divider
              textAlign="left"
              sx={{
                "&::before, &::after": {
                  borderColor: "primary.main",
                },
              }}
            >
              <Chip
                color="primary"
                label={
                  <Typography
                    variant="body1"
                    color="black"
                    sx={{ display: "flex", textAlign: "center" }}
                  >
                    کارجو برنامه نویسی
                    <CodeRoundedIcon sx={{ marginLeft: 1 }} />
                  </Typography>
                }
                sx={{ p: 3 }}
              />
            </Divider>
            <DevInfo>نام و نام خانوادگی : مهلا حصاری</DevInfo>
            <DevInfo>سن : 29</DevInfo>
            <DevInfo>شهر : گرگان</DevInfo>
            <DevInfo>آدرس ایمیل : asshjaee74@gmail.com </DevInfo>
            <DevInfo>شماره همراه : 09111112233 </DevInfo>
          </Grid2>
        </Grid2>
        <Grid2 container>
          <Grid2 sx={{ width: 1, mt: 1 }}>
            <Divider
              textAlign="center"
              sx={{
                "&::before, &::after": {
                  borderColor: "secondary.main",
                },
              }}
            >
              <Chip
                color="secondary"
                label={
                  <Typography
                    variant="body1"
                    color="black"
                    sx={{ display: "flex", textAlign: "center" }}
                  >
                    مهارت های من
                    <SelfImprovementRoundedIcon sx={{ marginLeft: 1 }} />
                  </Typography>
                }
                sx={{ p: 3 }}
              />
            </Divider>
          </Grid2>
        </Grid2>
      </CardContent>
    </Card>
  );
};

export default About;
