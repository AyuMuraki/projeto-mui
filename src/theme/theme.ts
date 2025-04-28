// src/theme/theme.ts
import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2", // azul MUI
    },
    secondary: {
      main: "#f50057", // rosa
    },
  },
  shape: {
    borderRadius: 8,
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
});
