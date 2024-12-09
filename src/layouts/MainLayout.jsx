import { CacheProvider, ThemeProvider } from "@emotion/react";
import { HelmetProvider } from "react-helmet-async";
import { prefixer } from "stylis";
import stylisRTLPlugin from "stylis-plugin-rtl";
import { lightTheme, darkTheme } from "./theme";
import createCache from "@emotion/cache";
import { Grid2 } from "@mui/material";

const cacheRTL = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, stylisRTLPlugin],
});

const MainLayout = ({ children, name, mode }) => {
  const theme = mode === "dark" ? darkTheme : lightTheme;
  return (
    <CacheProvider value={cacheRTL}>
      <ThemeProvider theme={theme}>
        <HelmetProvider>
          <Grid2 container sx={{ height: "100vh", direction: "rtl" }}>
            {children}
          </Grid2>
        </HelmetProvider>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default MainLayout;
