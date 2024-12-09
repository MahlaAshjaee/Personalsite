import { Card, CardContent, Grid2 } from "@mui/material";
import SelfImprovementRoundedIcon from "@mui/icons-material/SelfImprovementRounded";
import CodeRoundedIcon from "@mui/icons-material/CodeRounded";
import avatar from "../assets/avater.jpg";
import { DevInfo, DevWorkCount, Skills } from "../components/pages";
import { Helmet } from "react-helmet-async";
import { CustomAvatar, CustomDivider } from "../components/common";
import { useTheme } from "@mui/material/styles";
import { grey } from "@mui/material/colors";

const About = ({ helmetTitle }) => {
  const theme = useTheme();
  return (
    <Card
      sx={{
        height: "100vh",
        backgroundColor: theme.palette.mode === "dark" ? grey[700] : grey[200],
        overflow: "auto",
      }}
    >
      <Helmet>
        <title>{helmetTitle}</title>
      </Helmet>
      <CardContent>
        <Grid2
          container
          sx={{
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <Grid2 size={{ xs: 12, sm: 12, md: 8, xl: 8 }}>
            <CustomDivider
              bColor="primary.main"
              cColor="primary"
              icon={<CodeRoundedIcon />}
              align="right"
              text="کارجو برنامه نویسی"
            />
            <Grid2 container>
              <Grid2
                size={{ xs: 4, sm: 4, md: 3, lg: 3 }}
                sx={{
                  mt: 3,
                  display: {
                    xs: "none",
                    sm: "block",
                    md: "block",
                  },
                }}
              >
                <DevWorkCount />
              </Grid2>
              <Grid2 size={{ xs: 12, sm: 8, md: 9 }}>
                <DevInfo />
              </Grid2>
            </Grid2>
          </Grid2>
          <Grid2 size={{ xs: 0, sm: 0, md: 4, lg: 4 }}>
            <CustomAvatar avatar={avatar} size={250} fallback="YG" />
          </Grid2>
        </Grid2>
        <Grid2 container>
          <Grid2 sx={{ width: 1, mt: 3 }}>
            <CustomDivider
              bColor="secondary.main"
              cColor="secondary"
              icon={<SelfImprovementRoundedIcon />}
              align="center"
              text="مهارت های من"
            />
            <Skills />
          </Grid2>
        </Grid2>
      </CardContent>
    </Card>
  );
};

export default About;
