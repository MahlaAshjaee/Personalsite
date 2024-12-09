import { Chip, Tooltip, Typography } from "@mui/material";
import { Box } from "@mui/system";
import CountUp from "react-countup";
import { devWorkInfo } from "../../constants/details";

const DevWorkCount = () => {
  return (
    <>
      {devWorkInfo.map((item, index) => (
        <Box key={index} component="div" sx={{ width: 1, mb: 1 }}>
          <Tooltip title={item.tooltipTitle} placement="right">
            <Chip
              icon={item.icon}
              label={
                <Typography variant="body1" color="whitesmoke">
                  <CountUp start={0} end={item.total} duration={2} />
                </Typography>
              }
              sx={{
                backgroundColor: item.color,
                width: 1,
              }}
            />
          </Tooltip>
        </Box>
      ))}
    </>
  );
};

export default DevWorkCount;
