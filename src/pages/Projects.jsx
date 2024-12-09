import { TerminalRounded } from "@mui/icons-material";
import { Card, CardContent, Grid2, useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import CustomDivider from "./../components/common/CustomDivider";
import { ShowProjects } from "../components/pages";
import { grey } from "@mui/material/colors";

const Projects = ({ helmetTitle }) => {
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
          bColor="primary.main"
          cColor="primary"
          icon={<TerminalRounded />}
          align="center"
          text="پروژه های من"
        />

        <Grid2 container>
          <ShowProjects loading={loading} />
        </Grid2>
      </CardContent>
    </Card>
  );
};

export default Projects;
