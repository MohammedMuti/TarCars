import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ContextReducer from "./MainComponents/Context/ContextReducer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ContextReducer>
      <App />
    </ContextReducer>
  </React.StrictMode>
);
