import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import "./index.css";

// Get the root element from index.html
const rootElement = document.getElementById("root");
if (!rootElement) {
  console.error("Root element not found. Ensure index.html contains a div with id='root'.");
} else {
  // Create the React root and render the App
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );

  // Register the service worker
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker
        .register("/service-worker.js")
        .then((registration) => {
          console.log("ServiceWorker registered: ", registration);
        })
        .catch((error) => {
          console.error("Service Worker registration failed: ", error);
        });
    });
  }
}
