import React from "react";
import { createRoot } from "react-dom/client";
import MyRoutes from "./routes/routes";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

const root = document.getElementById("root");
const rootElement = createRoot(root);

rootElement.render(
  <React.StrictMode>
    <MyRoutes />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
