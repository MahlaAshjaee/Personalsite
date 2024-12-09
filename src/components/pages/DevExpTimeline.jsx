import { HomeRepairServiceRounded } from "@mui/icons-material";
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from "@mui/lab";
import { Slide, Typography } from "@mui/material";
import { devEdu } from "../../constants/details";
import { useTheme } from "@emotion/react";
const DevExpTimeline = ({ loading }) => {
  const theme = useTheme();
  return (
    <Timeline position="right" sx={{ direction: "ltr" }}>
      {devEdu.map((item, index) => (
        <Slide
          direction="up"
          in={loading}
          // style={{
          //   transitionDelay: loading ? `${index + 3}99ms` : "0ms",
          // }}
          style={{ transformOrigin: "0 0 0" }}
          {...(loading ? { timeout: 1000 } : {})}
        >
          <TimelineItem key={index}>
            <TimelineSeparator>
              <TimelineDot
                sx={{ borderColor: "warning.main" }}
                variant="outline"
              >
                <HomeRepairServiceRounded color="warning" />
              </TimelineDot>
              {index !== 2 ? <TimelineConnector /> : null}
            </TimelineSeparator>
            <TimelineContent>
              <Typography
                variant="caption"
                color={theme.palette.text.secondary}
              >
                {item.year}
              </Typography>
              <Typography variant="body1" color="text.primary">
                {item.cert}
              </Typography>
              <Typography variant="body2" color="text.primary">
                {item.major}
              </Typography>
              <Typography variant="body2" color="text.primary">
                {item.place}
              </Typography>
            </TimelineContent>
          </TimelineItem>
        </Slide>
      ))}
    </Timeline>
  );
};

export default DevExpTimeline;
