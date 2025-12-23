import "bootstrap/dist/css/bootstrap.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import Snowfall from "react-snowfall";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <>
      <Snowfall
        color="white"
        style={{
          position: "fixed",
          inset: 0,
          pointerEvents: "none",
          zIndex: 9999,
          width: "100vw",
          height: "100vh",
        }}
      />

      <App />
    </>
  </StrictMode>
);
