import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid2,
  Slide,
  Typography,
} from "@mui/material";
import { projects } from "../../constants/projects";
import EllipsisText from "react-ellipsis-text";

const ShowProjects = ({ loading }) => {
  return (
    <>
      {projects.map((project, index) => (
        <Grid2
          key={index}
          size={{ xs: 12, sm: 6, md: 6, lg: 4, xl: 4 }}
          sx={{ px: 2, mt: 3 }}
        >
          <Slide
            direction="up"
            in={loading}
            style={{
              transitionDelay: loading ? `${index + 3}99ms` : "0ms",
            }}
          >
            <Card sx={{ maxWidth: 345, backgroundColor: "steelblue" }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="250"
                  width="200"
                  image={project.img}
                  alt={project.title}
                />
                <CardContent>
                  <Typography variant="body1" textAlign="left" gutterBottom>
                    {project.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    textAlign="left"
                    gutterBottom
                    sx={{ direction: "ltr" }}
                  >
                    <EllipsisText text={project.info} length={"90"} />
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button href={project.link} size="small" target="_blank">
                  اطلاعات بیشتر
                </Button>
              </CardActions>
            </Card>
          </Slide>
        </Grid2>
      ))}
    </>
  );
};

export default ShowProjects;
