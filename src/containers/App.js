import MainLayout from "../layouts/MainLayout";
import { useEffect, useState } from "react";
import { Sidebar } from "../components/sidebar";
import { Typography, useMediaQuery } from "@mui/material";
import SidebarContainer from "./SidebarContainer";
import MainContext from "../context";
import PagesContainer from "./PagesContainer";
import { Page } from "../components/pages";
import { DrawerActionButton } from "../components/drawer";

import { useTheme } from "@mui/material/styles";
import { Projects, Home, Contact, About, Resume } from "../pages";

function App() {
  const [pageNumber, setPageNumber] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const [mode, setMode] = useState();

  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme:dark)");

  useEffect(() => {
    setMode(prefersDarkMode ? "dark" : "light");
  }, []);

  useEffect(() => {
    if (isMdUp) {
      setDrawerOpen(false);
    }
  }, [isMdUp]);

  const handlePageNumber = (event, newPage) => {
    setPageNumber(newPage);
  };

  const handleThemeChange = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };
  return (
    <MainContext.Provider
      value={{
        pageNumber,
        handlePageNumber,
        handleThemeChange,
        drawerOpen,
        setDrawerOpen,
      }}
    >
      <MainLayout mode={mode}>
        <DrawerActionButton />
        <PagesContainer>
          <Page pageNumber={pageNumber} index={0}>
            <Home helmetTitle="وب سایت شخصی مهلا حصاری" />
          </Page>
          <Page pageNumber={pageNumber} index={1}>
            <About helmetTitle="وب سایت شخصی | درباره من" mode={mode} />
          </Page>
          <Page pageNumber={pageNumber} index={2}>
            <Typography variant="h5" sx={{ textAlign: "center" }}>
              <Resume helmetTitle="وب سایت شخصی | رزومه من" />
            </Typography>
          </Page>
          <Page pageNumber={pageNumber} index={3}>
            <Typography variant="h5" sx={{ textAlign: "center" }}>
              <Projects helmetTitle="وب سایت شخصی | پروژ ه های من" />
            </Typography>
          </Page>

          <Page pageNumber={pageNumber} index={4}>
            <Typography variant="h5" sx={{ textAlign: "center" }}>
              <Contact helmetTitle="وب سایت شخصی | ارتباط با من" />
            </Typography>
          </Page>
        </PagesContainer>
        <SidebarContainer>
          <Sidebar />
        </SidebarContainer>
      </MainLayout>
    </MainContext.Provider>
  );
}

export default App;
