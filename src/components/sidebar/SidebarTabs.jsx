import { Tab, Tabs } from "@mui/material";

import { grey } from "@mui/material/colors";
import MainContext from "../../context";
import { useContext } from "react";
import { tabsData } from "../data/tabsData.sidebar";

const SidebarTabs = () => {
  const { pageNumber, handlePageNumber, setDrawerOpen } =
    useContext(MainContext);

  const data = tabsData();
  return (
    <Tabs
      orientation="vertical"
      variant="scrollable"
      scrollButtons="auto"
      allowScrollButtonsMobile
      value={pageNumber}
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
            "&.MuiTab-root": {
              backgroundColor: grey[800],
              borderRadius: 2,
              mx: 1,
              my: 0.5,
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
