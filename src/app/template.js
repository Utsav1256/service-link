"use client";
import { motion, AnimatePresence } from "framer-motion";

export default function Template({ children }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={typeof window !== "undefined" ? location.pathname : "ssr"}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.2, 0.8, 0.2, 1] } }}
        exit={{ opacity: 0, y: -8, transition: { duration: 0.35 } }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
