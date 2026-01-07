import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import AllWrapper from "./all-wrapper.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AllWrapper />
  </StrictMode>
);
