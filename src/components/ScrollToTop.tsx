import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ArrowUp } from "lucide-react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const [visible, setVisible] = useState(false);
  const { scrollYProgress } = useScroll();

  // Force scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 left-6 z-40 flex items-center justify-center h-12 w-12 rounded-full bg-primary/90 backdrop-blur-sm text-primary-foreground shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300 group"
          aria-label="Scroll to top"
        >
          {/* Progress ring */}
          <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 48 48">
            <circle
              cx="24" cy="24" r="22"
              fill="none"
              stroke="hsl(var(--industrial-orange))"
              strokeWidth="2"
              strokeDasharray={`${138.23}`}
              strokeDashoffset="0"
              className="opacity-30"
            />
            <motion.circle
              cx="24" cy="24" r="22"
              fill="none"
              stroke="hsl(var(--industrial-orange))"
              strokeWidth="2"
              strokeLinecap="round"
              style={{
                pathLength: scrollYProgress,
                strokeDasharray: "1",
                strokeDashoffset: "0",
              }}
            />
          </svg>
          <ArrowUp className="h-5 w-5 group-hover:-translate-y-0.5 transition-transform" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
