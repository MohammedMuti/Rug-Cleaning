import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import posthog from "posthog-js";

posthog.init("phc_G2BVkUKXekAAbhaTzV4SO4tVzxSzVZx6zmTnMWJ8gcc", {
  api_host: "https://app.posthog.com",
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
