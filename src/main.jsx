import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import "./index.css";
import "@esri/calcite-components/dist/calcite/calcite.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/calcite-undefined-repro">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
