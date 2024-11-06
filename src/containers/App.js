import MainLayout from "../layouts/MainLayout";
import { useState } from "react";
import { Sidebar } from "../components/sidebar";
import { Typography } from "@mui/material";
import SidebarContainer from "./SidebarContainer";
import MainContext from "../context";
import PagesContainer from "./PagesContainer";
import Page from "../pages/components/Page";
import { DrawerActionButton } from "../components/drawer";
import { Home } from "../pages";
import About from "../pages/components/About";

function App() {
  const [pageNumber, setPageNumber] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handlePageNumber = (event, newPage) => {
    setPageNumber(newPage);
  };

  return (
    <MainContext.Provider
      value={{ pageNumber, handlePageNumber, drawerOpen, setDrawerOpen }}
    >
      <MainLayout>
        <SidebarContainer>
          <Sidebar />
        </SidebarContainer>
        <DrawerActionButton />
        <PagesContainer>
          <Page pageNumber={pageNumber} index={0}>
            <Home />
          </Page>
          <Page pageNumber={pageNumber} index={1}>
            <About />
          </Page>
          <Page pageNumber={pageNumber} index={2}>
            <Typography variant="h5" sx={{ textAlign: "center" }}>
              رزومه من
            </Typography>
          </Page>
          <Page pageNumber={pageNumber} index={3}>
            <Typography variant="h5" sx={{ textAlign: "center" }}>
              نمونه کارها
            </Typography>
          </Page>
          <Page pageNumber={pageNumber} index={4}>
            <Typography variant="h5" sx={{ textAlign: "center" }}>
              نظرات دانشجویان
            </Typography>
          </Page>
          <Page pageNumber={pageNumber} index={5}>
            <Typography variant="h5" sx={{ textAlign: "center" }}>
              ارتباط با من
            </Typography>
          </Page>
        </PagesContainer>
      </MainLayout>
    </MainContext.Provider>
  );
}

export default App;
