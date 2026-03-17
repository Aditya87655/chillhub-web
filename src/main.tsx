import { createRoot } from "react-dom/client";
import { useState, useCallback } from "react";
import { AnimatePresence } from "framer-motion";
import App from "./App.tsx";
import Preloader from "./components/Preloader.tsx";
import "./index.css";

const Root = () => {
  const [loading, setLoading] = useState(true);
  const handleComplete = useCallback(() => setLoading(false), []);

  return (
    <AnimatePresence mode="wait">
      {loading ? <Preloader key="preloader" onComplete={handleComplete} /> : <App key="app" />}
    </AnimatePresence>
  );
};

createRoot(document.getElementById("root")!).render(<Root />);
