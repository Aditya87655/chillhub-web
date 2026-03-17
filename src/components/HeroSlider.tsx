import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  { image: "/images/slider/smart-chiller.png", alt: "Smart Chiller" },
  { image: "/images/slider/vfd-chiller.jpg", alt: "VFD chiller" },
  { image: "/images/slider/production-facilities.png", alt: "Chillers-Production-Facilities" },
  { image: "/images/slider/inverter-screw-chiller.png", alt: "Inverter Screw chiller" },
  { image: "/images/slider/flooded-screw-chiller.png", alt: "Flooded Screw chiller" },
  { image: "/images/slider/water-cooled-screw-chiller.jpg", alt: "Water Cooled Screw Chiller" },
  { image: "/images/slider/air-cooled-screw-chiller.jpg", alt: "Air cooled screw chiller" },
  { image: "/images/slider/water-cooled-scroll-chiller.jpg", alt: "water cooled scroll chiller" },
  { image: "/images/slider/air-cooled-scroll-chiller.jpg", alt: "Air cooled scroll chiller" },
  { image: "/images/slider/cooling-tower.jpg", alt: "cooling tower manufacturer" },
  { image: "/images/slider/drycool-intelligence.jpg", alt: "Drycool Intelligence" },
  { image: "/images/slider/turnkey-project.jpg", alt: "turnkey project" },
];

const slideVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? 300 : -300, opacity: 0, scale: 1.05 }),
  center: { x: 0, opacity: 1, scale: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -300 : 300, opacity: 0, scale: 0.95 }),
};

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((p) => (p + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((p) => (p - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const id = setInterval(next, 4000);
    return () => clearInterval(id);
  }, [next]);

  const slide = slides[current];

  return (
    <section className="relative w-full overflow-hidden bg-muted rounded-xl mx-auto" style={{ aspectRatio: "960/350" }}>
      {/* Background images */}
      <AnimatePresence custom={direction} mode="wait">
        <motion.div
          key={current}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="absolute inset-0"
        >
          <img
            src={slide.image}
            alt={slide.alt}
            className="h-full w-full object-contain"
            loading={current === 0 ? "eager" : "lazy"}
          />
        </motion.div>
      </AnimatePresence>

      {/* Gradient overlays for depth */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-foreground/5 to-transparent" />

      {/* Arrows */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center h-11 w-11 rounded-full bg-card/30 backdrop-blur-md text-foreground hover:bg-card/60 transition-all duration-300 border border-border/20"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="h-5 w-5" />
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center h-11 w-11 rounded-full bg-card/30 backdrop-blur-md text-foreground hover:bg-card/60 transition-all duration-300 border border-border/20"
        aria-label="Next Slide"
      >
        <ChevronRight className="h-5 w-5" />
      </motion.button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2 bg-card/20 backdrop-blur-md rounded-full px-3 py-1.5">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setDirection(i > current ? 1 : -1);
              setCurrent(i);
            }}
            className={`h-2 rounded-full transition-all duration-400 ${
              i === current ? "w-7 bg-industrial-orange" : "w-2 bg-foreground/30 hover:bg-foreground/50"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
