import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";  // If you have global CSS or Tailwind imports here

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
