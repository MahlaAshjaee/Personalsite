import { Box, Divider } from "@mui/material";
import { SidebarHeader, SidebarFooter, SidebarTabs } from "./";

const SidebarContent = () => {
  return (
    <Box
      sx={{
        justifyContent: "center",
        textAlign: "center",
        mt: 2,
        direction: "rtl",
      }}
    >
      <SidebarHeader />
      <Divider variant="middle" />
      <SidebarTabs />
      <Divider variant="middle" sx={{ pt: 1 }} />
      <SidebarFooter />
    </Box>
  );
};

export default SidebarContent;
