import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ProgressProvider } from "./store/Progress";
import Container from "./components/common/Container";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Container>
    <ProgressProvider>
      <App />
    </ProgressProvider>
  </Container>
);
