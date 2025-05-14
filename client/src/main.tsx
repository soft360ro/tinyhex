import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { motion } from "framer-motion";

// Configure framer-motion for reduced motion preference
motion.prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

createRoot(document.getElementById("root")!).render(<App />);
