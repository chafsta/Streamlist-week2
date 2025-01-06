import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';

const rootElement = document.getElementById('root'); // Ensure this ID matches index.html
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error("Target container is not a DOM element.");
}
