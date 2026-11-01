import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { personalInfo } from "../utils/data";

const IntroReveal = () => {
  const [showIntro, setShowIntro] = useState(() => {
    try {
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReducedMotion) return false;
      const seen = sessionStorage.getItem("portfolio_intro_seen");
      return !seen;
    } catch {
      return false;
    }
  });

  const finishIntro = () => {
    try {
      sessionStorage.setItem("portfolio_intro_seen", "true");
    } catch {
      // safe fallback
    }
    setShowIntro(false);
  };

  useEffect(() => {
    if (!showIntro) return;
    const timer = setTimeout(() => {
      finishIntro();
    }, 1150);

    const handleKeyDown = (e) => {
      if (e.key === "Escape" || e.key === " ") {
        finishIntro();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [showIntro]);

  return (
    <AnimatePresence>
      {showIntro && (
        <motion.div
          key="intro-modal"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-indigo-950 text-ghost select-none overflow-hidden"
          onClick={finishIntro}
        >
          {/* Subtle liquid background light */}
          <div className="absolute w-[45vw] h-[45vw] rounded-full bg-indigo-400/20 blur-[100px] animate-pulse" />

          {/* Liquid glass card container */}
          <motion.div
            initial={{ scale: 0.88, opacity: 0, y: 15 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="glass-strong px-8 py-6 sm:px-12 sm:py-8 rounded-3xl text-center max-w-md mx-4 relative"
          >
            <span className="text-xs uppercase tracking-[0.25em] text-indigo-200 font-semibold mb-2 block">
              Portfolio
            </span>
            <h1 className="font-display-title text-4xl sm:text-6xl text-ghost tracking-wide leading-none">
              {personalInfo.name}
            </h1>
            <p className="text-xs sm:text-sm text-indigo-200/90 mt-2 font-medium">
              {personalInfo.role}
            </p>
          </motion.div>

          <button
            onClick={finishIntro}
            className="absolute bottom-8 text-xs text-indigo-300 hover:text-ghost transition-colors tracking-widest uppercase py-2 px-4 rounded-full glass-pill min-h-[44px] flex items-center justify-center"
            aria-label="Skip intro animation"
          >
            Skip [Esc]
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroReveal;
