import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./main.css";
import App from "./App.tsx";
import { createTheme, ThemeProvider } from "@mui/material";
import "./i18n.tsx";

const THEME = createTheme({
  typography: {
    fontFamily: `"Literata"`,
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={THEME}>
      <App />
    </ThemeProvider>
  </StrictMode>
);
