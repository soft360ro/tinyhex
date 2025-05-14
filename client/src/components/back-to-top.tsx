import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScroll } from "@/hooks/use-scroll";

const BackToTop: React.FC = () => {
  const scrollY = useScroll();
  const isVisible = scrollY > 300;
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          className="fixed bottom-6 right-6 bg-primary hover:bg-accent text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-colors z-40"
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.2 }}
        >
          <i className="fas fa-arrow-up"></i>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;
