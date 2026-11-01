import { motion, useScroll, useSpring } from "framer-motion";

const ScrollProgressBar = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-indigo-400 via-indigo-200 to-ghost origin-left z-[60] shadow-[0_0_12px_rgba(122,104,224,0.8)]"
      style={{ scaleX }}
    />
  );
};

export default ScrollProgressBar;
