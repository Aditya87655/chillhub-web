import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import heroImage from "@/assets/hero-chiller.jpg";
import factoryImage from "@/assets/factory-floor.jpg";
import screwImg from "@/assets/product-screw-chiller.jpg";

const slides = [
  {
    image: heroImage,
    badge: "Leading Chiller Manufacturer in India",
    title: "Energy Efficient",
    highlight: "Smart Chillers",
    description:
      "Pioneer in manufacturing industrial chillers — screw, scroll, inverter, and ammonia chillers — with CFC-free, energy-saving technology.",
    cta: { label: "View Products", to: "/products" },
    cta2: { label: "Get a Quote", to: "/contact/enquiry" },
  },
  {
    image: factoryImage,
    badge: "30+ Years of Excellence",
    title: "World-Class",
    highlight: "Manufacturing",
    description:
      "State-of-the-art manufacturing facility with ISO 9001:2015 certification, producing 5000+ chillers installed across 50+ countries worldwide.",
    cta: { label: "Our Infrastructure", to: "/infrastructure" },
    cta2: { label: "About Us", to: "/about" },
  },
  {
    image: screwImg,
    badge: "European Compressor Technology",
    title: "Industrial",
    highlight: "Screw Chillers",
    description:
      "Air cooled & water cooled screw chillers featuring Bitzer (Germany) and Frascold (Italy) compressors, designed for extreme tropical conditions.",
    cta: { label: "Explore Screw Chillers", to: "/products/air-cooled-screw-chiller" },
    cta2: { label: "Contact Us", to: "/contact" },
  },
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
    const id = setInterval(next, 6000);
    return () => clearInterval(id);
  }, [next]);

  const slide = slides[current];

  const variants = {
    enter: (d: number) => ({ opacity: 0, x: d > 0 ? 60 : -60 }),
    center: { opacity: 1, x: 0 },
    exit: (d: number) => ({ opacity: 0, x: d > 0 ? -60 : 60 }),
  };

  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Background images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <img
            src={slide.image}
            alt={slide.highlight}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-primary/40" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="container relative z-10 py-20">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <span className="inline-block rounded-full border border-accent/30 bg-accent/10 backdrop-blur-sm px-5 py-2 text-sm font-semibold text-accent mb-6">
              {slide.badge}
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-7xl font-bold text-primary-foreground leading-[1.1]">
              {slide.title}
              <br />
              <span className="text-accent">{slide.highlight}</span>
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/80 max-w-lg leading-relaxed">
              {slide.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to={slide.cta.to}
                className="inline-flex items-center gap-2 rounded-lg bg-[hsl(var(--industrial-orange))] px-7 py-3.5 font-semibold text-white hover:opacity-90 transition-opacity shadow-lg"
              >
                {slide.cta.label} <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to={slide.cta2.to}
                className="inline-flex items-center gap-2 rounded-lg border border-primary-foreground/30 bg-primary-foreground/5 backdrop-blur-sm px-7 py-3.5 font-semibold text-primary-foreground hover:bg-primary-foreground/10 transition-colors"
              >
                {slide.cta2.label}
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center h-10 w-10 rounded-full bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground hover:bg-primary-foreground/20 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center h-10 w-10 rounded-full bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground hover:bg-primary-foreground/20 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2.5">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setDirection(i > current ? 1 : -1);
              setCurrent(i);
            }}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              i === current ? "w-8 bg-accent" : "w-2.5 bg-primary-foreground/40 hover:bg-primary-foreground/60"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
