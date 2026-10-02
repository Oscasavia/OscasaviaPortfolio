import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef, ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
}

const AnimatedSection = ({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: AnimatedSectionProps) => {
  const ref = useRef(null);
  const reducedMotion = useReducedMotion();
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const directionOffset = {
    up: { y: 60, x: 0 },
    down: { y: -60, x: 0 },
    left: { y: 0, x: 60 },
    right: { y: 0, x: -60 },
    none: { y: 0, x: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial={
        reducedMotion
          ? false
          : {
              opacity: 0,
              y: directionOffset[direction].y,
              x: directionOffset[direction].x,
            }
      }
      animate={{
        opacity: isInView || reducedMotion ? 1 : 0,
        y: isInView || reducedMotion ? 0 : directionOffset[direction].y,
        x: isInView || reducedMotion ? 0 : directionOffset[direction].x,
      }}
      transition={{
        duration: 0.8,
        delay: delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
