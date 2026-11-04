import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const TiltCard = ({ children, className = "", maxTilt = 8, ...props }) => {
  const cardRef = useRef(null);

  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const springConfig = { damping: 28, stiffness: 320 };
  const smoothX = useSpring(x, springConfig);
  const smoothY = useSpring(y, springConfig);

  const rotateX = useTransform(smoothY, [0, 1], [maxTilt, -maxTilt]);
  const rotateY = useTransform(smoothX, [0, 1], [-maxTilt, maxTilt]);

  const handlePointerMove = (e) => {
    // Only calculate on devices with fine pointer
    if (window.matchMedia("(pointer: coarse)").matches) return;
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const clientX = e.clientX - rect.left;
    const clientY = e.clientY - rect.top;

    const normalizedX = clientX / rect.width;
    const normalizedY = clientY / rect.height;

    x.set(normalizedX);
    y.set(normalizedY);

    // Update local CSS variables for specular highlight
    cardRef.current.style.setProperty("--mx", `${normalizedX * 100}%`);
    cardRef.current.style.setProperty("--my", `${normalizedY * 100}%`);
  };

  const handlePointerLeave = () => {
    x.set(0.5);
    y.set(0.5);
    if (cardRef.current) {
      cardRef.current.style.setProperty("--mx", "50%");
      cardRef.current.style.setProperty("--my", "50%");
    }
  };

  return (
    <div style={{ perspective: 1000 }} className="h-full">
      <motion.div
        ref={cardRef}
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
          willChange: "transform",
        }}
        className={`glass rounded-3xl ${className}`}
        {...props}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default TiltCard;
