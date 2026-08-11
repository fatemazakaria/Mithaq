import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.v4.css"; // <-- this import is what actually applies Tailwind

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
