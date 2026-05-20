// src/main.tsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

// Styles Sheets — Don't edit the order of these imports, it will break the styling of the app
import "./styles/global.css";
import "./styles/components.css";

import "./styles/footer.css";
import "./styles/nav.css";

import "./styles/pages/home.css";
import "./styles/pages/about.css";
import "./styles/pages/treatments.css";
import "./styles/pages/doctors.css";
import "./styles/pages/beforeAfter.css";
import "./styles/pages/booking.css";

import "./styles/animations.css";
import "./styles/responsive.css";

import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);