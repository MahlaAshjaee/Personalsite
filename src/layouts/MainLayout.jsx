import { CacheProvider, ThemeProvider } from "@emotion/react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { prefixer } from "stylis";
import stylisRTLPlugin from "stylis-plugin-rtl";
import { theme } from "./theme";
import createCache from "@emotion/cache";
import { Grid2 } from "@mui/material";

const cacheRTL = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, stylisRTLPlugin],
});
const MainLayout = ({ children, name }) => {
  return (
    <CacheProvider value={cacheRTL}>
      <ThemeProvider theme={theme}>
        <HelmetProvider>
          <Helmet>
            <title>وب سایت شخصی مهلا حصاری</title>
          </Helmet>
          <Grid2 container sx={{ height: "100vh" }}>
            {children}
          </Grid2>
        </HelmetProvider>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default MainLayout;
