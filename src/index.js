import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { installTwicPics } from "@twicpics/components/react";
import "@twicpics/components/style.css";
installTwicPics({
  domain: "https://mohammedmuti.github.io.twic.pics",
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
