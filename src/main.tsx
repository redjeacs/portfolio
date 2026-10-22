import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import ThemeProvider from "./contexts/ThemeProvider";
import "./styles/globals.css";
import "./i18n";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <Suspense fallback={<div style={{ padding: "20px" }}></div>}>
        <App />
      </Suspense>
    </ThemeProvider>
  </StrictMode>,
);
