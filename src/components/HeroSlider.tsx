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
    <section className="relative w-full overflow-hidden bg-muted" style={{ aspectRatio: "960/350" }}>
      {/* Background images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
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

      {/* Arrows */}
      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center h-10 w-10 rounded-full bg-foreground/10 backdrop-blur-sm text-foreground hover:bg-foreground/20 transition-colors"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center h-10 w-10 rounded-full bg-foreground/10 backdrop-blur-sm text-foreground hover:bg-foreground/20 transition-colors"
        aria-label="Next Slide"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex gap-1.5">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setDirection(i > current ? 1 : -1);
              setCurrent(i);
            }}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === current ? "w-6 bg-[hsl(var(--industrial-orange))]" : "w-2 bg-foreground/30 hover:bg-foreground/50"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
