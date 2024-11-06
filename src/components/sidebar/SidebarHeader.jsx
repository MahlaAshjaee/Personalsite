import { Avatar, Typography } from "@mui/material";
import avatar from "../../assets/avater.jpg";

const SidebarHeader = () => {
  return (
    <>
      <Avatar
        variant="rounded"
        src={avatar}
        sx={{
          height: 200,
          width: 200,
          margin: "0 auto",
          display: {
            xs: "none",
            ms: "none",
            lg: "block",
            xl: "block",
            md: "block",
          },
        }}
      />
      <Typography variant="h6" color="whitesmoke">
        مهلا حصاری
      </Typography>
      <Typography variant="caption" color="whitesmoke">
        در حال اموزش برنامه نویسی
      </Typography>
    </>
  );
};

export default SidebarHeader;
