import React from "react";
import ReactDOM from "react-dom/client";
import { ErrorBoundary } from "react-error-boundary";
import { Analytics } from "@vercel/analytics/react"

import App from "./App.tsx";
import "./index.css";
import ErrorFallback from "./components/ErrorFallback";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => window.location.replace("/")}>
      <Analytics />
      <App />
    </ErrorBoundary>
  </React.StrictMode >,
);
