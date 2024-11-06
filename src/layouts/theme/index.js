import { createTheme } from "@mui/material";

export const theme = createTheme({
  direction: "rtl",
  palette: {
    mode: "dark",
    primary: {
      main: "#8BE9FD",
    },
    secondary: {
      main: "#BD93F9",
    },
    error: {
      main: "#FF5555",
    },
  },
  typography: {
    fontFamily: "Vazir, Roboto",
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
});
