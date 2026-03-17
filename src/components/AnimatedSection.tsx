import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
}

const AnimatedSection = ({ children, className = "", delay = 0, direction = "up" }: AnimatedSectionProps) => {
  const initial = direction === "up"
    ? { opacity: 0, y: 40 }
    : direction === "left"
    ? { opacity: 0, x: -40 }
    : direction === "right"
    ? { opacity: 0, x: 40 }
    : { opacity: 0 };

  const animate = direction === "up"
    ? { opacity: 1, y: 0 }
    : direction === "left" || direction === "right"
    ? { opacity: 1, x: 0 }
    : { opacity: 1 };

  return (
    <motion.div
      initial={initial}
      whileInView={animate}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
