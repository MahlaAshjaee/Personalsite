import { Box } from "@mui/material";
import { SidebarDrawer } from "../drawer";
import { SidebarContent } from "./";

const Sidebar = () => {
  return (
    <>
      <Box sx={{ zIndex: 1, position: "relative" }}>
        <SidebarContent />

        <SidebarDrawer />
      </Box>
    </>
  );
};

export default Sidebar;
