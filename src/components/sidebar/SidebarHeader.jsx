import { Box, IconButton, Typography } from "@mui/material";
import avatar from "../../assets/avater.jpg";
import { socialIcons } from "../../constants/socialIcons";
import ThemeActinButton from "../ThemeActionButton";
import { useTheme } from "@emotion/react";
import { CustomAvatar } from "../common";

const SidebarHeader = () => {
  const theme = useTheme();
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <ThemeActinButton />
      </Box>
      <CustomAvatar avatar={avatar} size={200} fallback="YG" />

      <Typography
        variant="h6"
        color={theme.palette.mode === "dark" ? "whitesmoke" : "grey[900]"}
      >
        مهلا حصاری
      </Typography>
      <Typography
        variant="caption"
        color={theme.palette.mode === "dark" ? "grey" : "grey[700]"}
      >
        برنامه نویس فرانت اند و جویای کار
      </Typography>
      <Box component="div" sx={{ m: "0 auto", textAlign: "center" }}>
        {socialIcons.map((icon, index) => (
          <IconButton key={index} aria-label={icon.label}>
            <a href={icon.link} target="_blank" rel="noopener noreferrer">
              {icon.icon}
            </a>
          </IconButton>
        ))}
      </Box>
    </>
  );
};

export default SidebarHeader;
