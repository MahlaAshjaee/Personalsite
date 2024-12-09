import {
  HomeRepairServiceRounded,
  SchoolRounded,
  SettingsEthernetRounded,
} from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";

import { Card, CardContent, Grid2 } from "@mui/material";

import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";
import CustomDivider from "../components/common/CustomDivider";
import { DevEduTimeline, DevExpTimeline } from "../components/pages";
import { grey } from "@mui/material/colors";

const Resume = ({ helmetTitle }) => {
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
        overflow: "scroll",
      }}
    >
      <Helmet>
        <title>{helmetTitle}</title>
      </Helmet>
      <CardContent>
        <CustomDivider
          bColor="secondary.main"
          cColor="secondary"
          align="center"
          icon={<SettingsEthernetRounded />}
          text="رزومه ی من"
        />

        <Grid2 container sx={{ mt: 4, justifyContent: "space-around" }}>
          <Grid2 item size={{ xs: 6 }}>
            <CustomDivider
              bColor="warning.main"
              cColor="warning"
              align="center"
              icon={<HomeRepairServiceRounded />}
              text="تجربیات"
            />
            <DevExpTimeline loading={loading} />
          </Grid2>
          <Grid2 item size={{ xs: 6 }}>
            <CustomDivider
              bColor="info.main"
              cColor="info"
              align="center"
              icon={<SchoolRounded />}
              text="تحصیلات"
            />
            <DevEduTimeline loading={loading} />
          </Grid2>
        </Grid2>
      </CardContent>
    </Card>
  );
};

export default Resume;
