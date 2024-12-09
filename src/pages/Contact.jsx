import { AccountCircle } from "@mui/icons-material";
import { Card, CardContent, Grid2, Slide, Typography } from "@mui/material";
import worldMap from "../assets/map.svg";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import CustomDivider from "../components/common/CustomDivider";
import { ContactForm } from "../components/pages";
import { useTheme } from "@emotion/react";
import { grey } from "@mui/material/colors";

const Contact = ({ helmetTitle }) => {
  const theme = useTheme();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    return () => {
      setLoading(false);
    };
  }, []);

  return (
    <Card
      sx={{
        height: "100vh",
        backgroundColor: theme.palette.mode === "dark" ? grey[700] : grey[200],
        overflowY: "scroll",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Helmet>
        <title>{helmetTitle}</title>
      </Helmet>
      <CardContent>
        <CustomDivider
          bColor="warning.main"
          cColor="warning"
          icon={<AccountCircle />}
          align="center"
          text="ارتباط با من"
        />

        <Grid2 container spacing={2} sx={{ mt: 5 }}>
          <Slide
            direction="up"
            in={loading}
            style={{
              transitionDelay: loading ? "200ms" : "0ms",
            }}
          >
            <Grid2 size={{ xs: 12, sx: 12, md: 8 }}>
              <Card
                sx={{
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <ContactForm />
              </Card>
            </Grid2>
          </Slide>
          <Slide
            direction="up"
            in={loading}
            style={{
              transitionDelay: loading ? "200ms" : "0ms",
            }}
          >
            <Grid2
              size={{ xs: 0, sm: 0, md: 4 }}
              sx={{
                textAlign: "center",
                backgroundImage: `url(${worldMap})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              <Typography
                variant="h6"
                color="black"
                sx={{
                  fontFamily: "vazir",
                  mt: 4,
                  display: {
                    xs: "none",
                    sm: "none",
                    md: "block",
                  },
                }}
              >
                بیا در مورد همه چیز باهم صحبت کنیم
              </Typography>
              <Typography
                variant="body1"
                color="black"
                sx={{
                  mt: 2,
                  display: {
                    xs: "none",
                    sm: "none",
                    md: "block",
                  },
                }}
              >
                👋{" "}
                <a
                  href="mailto:younes.gh@chmail.ir"
                  alt="email"
                  style={{
                    color: "tomato",
                  }}
                >
                  ایمیل
                </a>{" "}
                بزن به من
              </Typography>
            </Grid2>
          </Slide>
        </Grid2>
      </CardContent>
    </Card>
  );
};

export default Contact;
