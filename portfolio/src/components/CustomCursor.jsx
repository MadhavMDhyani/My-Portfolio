import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

const CustomCursor = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 350 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Only enable on desktop with fine pointer and no reduced motion preference
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!finePointer || reducedMotion) return;

    setIsVisible(true);

    const handlePointerMove = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);

      // Track cursor position on interactive elements for CSS --mx and --my
      const target = e.target.closest(".glass, .btn-primary, .btn-secondary, button, a");
      if (target) {
        const rect = target.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        target.style.setProperty("--mx", `${x}%`);
        target.style.setProperty("--my", `${y}%`);
      }
    };

    const handlePointerOver = (e) => {
      if (e.target.closest("button, a, input, textarea, [role='button'], .cursor-pointer")) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerover", handlePointerOver);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerover", handlePointerOver);
    };
  }, [cursorX, cursorY]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[100] rounded-full mix-blend-screen"
      style={{
        x: smoothX,
        y: smoothY,
        translateX: "-50%",
        translateY: "-50%",
      }}
      aria-hidden="true"
    >
      <motion.div
        animate={{
          width: isHovered ? 44 : 20,
          height: isHovered ? 44 : 20,
          backgroundColor: isHovered
            ? "rgba(122, 104, 224, 0.28)"
            : "rgba(247, 247, 255, 0.4)",
          borderColor: isHovered ? "#7A68E0" : "rgba(247, 247, 255, 0.8)",
        }}
        transition={{ duration: 0.18, ease: "easeOut" }}
        className="rounded-full border border-white/60 backdrop-blur-[2px] shadow-[0_0_15px_rgba(122,104,224,0.5)]"
      />
    </motion.div>
  );
};

export default CustomCursor;
