import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 400);
          return 100;
        }
        return p + 2;
      });
    }, 30);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[hsl(var(--industrial-navy))]"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      {/* Rotating fan blades */}
      <motion.div
        className="relative w-24 h-24 mb-8"
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      >
        {[0, 60, 120, 180, 240, 300].map((deg) => (
          <div
            key={deg}
            className="absolute top-1/2 left-1/2 w-3 h-10 -ml-1.5 -mt-10 origin-bottom rounded-t-full"
            style={{
              transform: `rotate(${deg}deg)`,
              background: `linear-gradient(to top, hsl(var(--industrial-teal)), hsl(var(--industrial-orange)))`,
            }}
          />
        ))}
        <div className="absolute top-1/2 left-1/2 w-5 h-5 -ml-2.5 -mt-2.5 rounded-full bg-[hsl(var(--industrial-orange))]" />
      </motion.div>

      {/* Brand name */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="font-heading text-3xl font-bold text-white mb-6"
      >
        DRY<span className="text-[hsl(var(--industrial-orange))]">COOL</span>
      </motion.div>

      {/* Progress bar */}
      <div className="w-48 h-1 rounded-full bg-white/10 overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ background: "linear-gradient(90deg, hsl(var(--industrial-teal)), hsl(var(--industrial-orange)))" }}
          initial={{ width: "0%" }}
          animate={{ width: `${progress}%` }}
          transition={{ ease: "linear" }}
        />
      </div>

      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 0.5 }}
        className="mt-4 text-xs tracking-[0.3em] uppercase text-white/50"
      >
        Constructability | Sustainability
      </motion.p>
    </motion.div>
  );
};

export default Preloader;
