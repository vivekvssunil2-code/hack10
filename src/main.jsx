import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { AIProvider } from "./context/AIContext";

// 👇 Add this
console.log("Vite Environment:", import.meta.env);
console.log("OpenRouter Key:", import.meta.env.VITE_OPENROUTER_API_KEY);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AIProvider>
      <App />
    </AIProvider>
  </StrictMode>
);