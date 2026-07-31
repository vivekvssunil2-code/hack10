import { createContext, useContext, useState } from "react";

const AIContext = createContext();

export function AIProvider({ children }) {
  const [analysis, setAnalysis] = useState("");

  return (
    <AIContext.Provider value={{ analysis, setAnalysis }}>
      {children}
    </AIContext.Provider>
  );
}

export function useAI() {
  return useContext(AIContext);
}