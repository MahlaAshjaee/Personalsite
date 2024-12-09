import { Tab, Tabs } from "@mui/material";

import { grey } from "@mui/material/colors";
import MainContext from "../../context";
import { useContext } from "react";
import { tabsData } from "../../constants/tabsData";
import { useTheme } from "@emotion/react";

const SidebarTabs = () => {
  const { pageNumber, handlePageNumber, setDrawerOpen } =
    useContext(MainContext);

  const theme = useTheme();
  const data = tabsData();
  return (
    <Tabs
      orientation="vertical"
      variant="scrollable"
      scrollButtons="auto"
      allowScrollButtonsMobile
      value={pageNumber}
      indicatorColor={theme.palette.mode === "dark" ? "secondary" : "primary"}
      textColor={theme.palette.mode === "dark" ? "secondary" : "primary"}
      onChange={handlePageNumber}
    >
      {data.map((tab, index) => (
        <Tab
          key={index}
          label={tab.label}
          icon={tab.icon}
          iconPosition="start"
          onClick={() => setDrawerOpen(false)}
          sx={{
            backgroundColor:
              theme.palette.mode === "dark" ? grey[800] : grey[500],
            color: "text.primary",
            borderRadius: 2,
            mx: 1,
            my: 0.5,
            "&.MuiTab-root": {
              minHeight: 50,
            },
          }}
          {...tab}
        />
      ))}
    </Tabs>
  );
};

export default SidebarTabs;
