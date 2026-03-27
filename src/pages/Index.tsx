import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Gauge, DollarSign, SlidersHorizontal, Zap, Cog, Users, Factory, Snowflake, ThermometerSun, Wind, Droplets } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import HeroSlider from "@/components/HeroSlider";
import { motion, useScroll, useTransform } from "framer-motion";

/* ─── Typewriter ─── */
const TypewriterEffect = () => {
  const words = ["Industrial Chiller", "Screw Chiller", "Scroll Chiller", "Inverter Chiller"];
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      const t = setTimeout(() => setReverse(true), 2000);
      return () => clearTimeout(t);
    }
    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((p) => (p + 1) % words.length);
      return;
    }
    const t = setTimeout(() => setSubIndex((p) => p + (reverse ? -1 : 1)), Math.max(reverse ? 40 : 80, Math.random() * 50 + 40));
    return () => clearTimeout(t);
  }, [subIndex, index, reverse]);

  return (
    <span className="text-gradient-navy relative inline-block min-w-[3ch]">
      {words[index].substring(0, subIndex)}
      <span className="animate-pulse text-primary/60 font-light absolute -right-3">|</span>
    </span>
  );
};

/* ─── Animated Counter ─── */
const Counter = ({ end, suffix = "" }: { end: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!started) return;
    let current = 0;
    const step = Math.ceil(end / 60);
    const timer = setInterval(() => {
      current += step;
      if (current >= end) { setCount(end); clearInterval(timer); }
      else setCount(current);
    }, 25);
    return () => clearInterval(timer);
  }, [end, started]);

  return (
    <motion.span onViewportEnter={() => setStarted(true)} viewport={{ once: true }} className="stat-number font-heading text-4xl md:text-5xl font-extrabold">
      {count}{suffix}
    </motion.span>
  );
};

/* ─── Product Data ─── */
const screwChillers = [
  { image: "/images/products/air-cooled-screw-multi.jpg", title: "Air Cooled Screw Chillers", desc: "ISO 9001:2008 certified with CFC-free refrigerants R-407C & R-134A. In-built process pump for high energy efficiency.", link: "/products/air-cooled-screw-chiller" },
  { image: "/images/products/air-cooled-screw-single.jpg", title: "Air Cooled Screw Chiller (Single)", desc: "Fully microprocessor based, suitable for process cooling from +20°C to -50°C across diverse industrial environments.", link: "/products/air-cooled-screw-chiller" },
  { image: "/images/products/water-cooled-screw-multi.jpg", title: "Water Cooled Screw Chiller", desc: "Designed for extreme weather conditions while maintaining peak energy efficiency. Best-in-class supplier quality.", link: "/products/water-cooled-screw-chiller" },
  { image: "/images/products/water-cooled-screw-single.jpg", title: "Water Cooled Screw Chiller (Single)", desc: "Premium compressors from Bitzer (Germany) & Frascold (Italy). Energy-efficient with minimal maintenance.", link: "/products/water-cooled-screw-chiller" },
];

const scrollChillers = [
  { image: "/images/products/air-cooled-scroll-multi.jpg", title: "Air Cooled Scroll Chillers", desc: "European compressors with multiple configurations for enhanced reliability, redundancy, and superior cooling.", link: "/products/air-cooled-scroll-chiller" },
  { image: "/images/products/air-cooled-scroll-single.jpg", title: "Air Cooled Scroll Chiller (Single)", desc: "Compact footprint with microprocessor controls for precise temperature regulation per international standards.", link: "/products/air-cooled-scroll-chiller" },
  { image: "/images/products/water-cooled-scroll-multi.jpg", title: "Water Cooled Scroll Chillers", desc: "Factory-assembled with individual refrigeration circuits. Quiet, vibration-free operation for sensitive environments.", link: "/products/water-cooled-scroll-chiller" },
  { image: "/images/products/water-cooled-scroll-single.jpg", title: "Water Cooled Scroll Chiller (Single)", desc: "Renowned compressors from Danfoss, Maneurop & Copeland. Reliable across wide temperature ranges.", link: "/products/water-cooled-scroll-chiller" },
];

/* ─── Why Us ─── */
const whyUsItems = [
  { icon: Gauge, title: "Accurate Monitoring", desc: "Integrated monitoring for precise tracking of suction pressure and critical system variables in real-time." },
  { icon: DollarSign, title: "Cost-Effective", desc: "50% less energy usage with high-end temperature control, energy-saving benefits, and minimal maintenance." },
  { icon: SlidersHorizontal, title: "Precise Adjustment", desc: "Accurate compressor motor speed adjustment with proper monitoring matching industry requirements." },
  { icon: Zap, title: "Optimum Performance", desc: "Advanced systems for peak performance through intelligent compressor speed and load optimization." },
  { icon: Cog, title: "Premium Compressors", desc: "Quality screw compressors from Bitzer (Germany) and Frascold (Italy) for world-class reliability." },
  { icon: Users, title: "Expert Engineers", desc: "Dedicated team of expert engineers delivering high-quality products with the best customer experience." },
];

/* ─── Industries ─── */
const industryLinks = [
  { label: "Injection Molding", to: "/application/chiller-for-plastic-industry", icon: Factory },
  { label: "Pet Blow Molding", to: "/application/chiller-for-plastic-industry", icon: Wind },
  { label: "Food & Beverages", to: "/application/chiller-for-food-beverage-industry", icon: Snowflake },
  { label: "Pharma & Chemicals", to: "/customized/chiller-for-chemical-pharmaceutical", icon: ThermometerSun },
  { label: "Hydrogen Refueling", to: "/application/chiller-for-hydrogen-refueling-station", icon: Zap },
  { label: "Batching Plants", to: "/customized/batching-plant-chiller", icon: Factory },
  { label: "Pipe Industries", to: "/customized/chiller-for-hdpe-cpvc-upvc-pipes", icon: Cog },
  { label: "Bio Gas", to: "/customized/bio-gas-chillers", icon: Wind },
  { label: "Brine Chillers", to: "/customized/brine-chillers", icon: Droplets },
  { label: "HVAC Systems", to: "/customized/hvac-chiller", icon: ThermometerSun },
  { label: "Anodizing", to: "/customized/anodizing-chillers", icon: Zap },
  { label: "Hazardous Area", to: "/customized/hazardous-area-chiller", icon: Factory },
];

const moreIndustries = [
  { label: "Lamination Plant", to: "/application/chiller-for-plastic-industry" },
  { label: "Sole Molding", to: "/application/chiller-for-plastic-industry" },
  { label: "Tape Plant", to: "/application/chiller-for-plastic-industry" },
  { label: "Blow Molding", to: "/application/chiller-for-plastic-industry" },
  { label: "Rubber Molding", to: "/application/chiller-for-plastic-industry" },
  { label: "Inverter Screw Chiller", to: "/products/inverter-screw-chiller" },
  { label: "Inverter Scroll Chiller", to: "/products/inverter-scroll-chiller" },
  { label: "VFD Chiller", to: "/products/air-cooled-vfd-screw-chiller" },
  { label: "Extrusion Lines", to: "/application/chiller-for-plastic-industry" },
  { label: "Multi Layer/PP Films", to: "/application/chiller-for-plastic-industry" },
];

/* ─── Client logos ─── */
const clientLogos = [
  { src: "/images/clients/hero-logo.jpg", alt: "Hero" },
  { src: "/images/clients/delhi-metro.jpg", alt: "Delhi Metro" },
  { src: "/images/clients/patanjali.jpg", alt: "Patanjali" },
  { src: "/images/clients/ultratech.jpg", alt: "UltraTech" },
  { src: "/images/clients/moon.jpg", alt: "Moon" },
  { src: "/images/clients/teri.jpg", alt: "TERI" },
  { src: "/images/clients/hal.jpg", alt: "HAL" },
  { src: "/images/clients/anmol.jpg", alt: "Anmol" },
  { src: "/images/clients/frooti.jpg", alt: "Frooti" },
  { src: "/images/clients/jaypee.jpg", alt: "Jaypee" },
  { src: "/images/clients/anand.jpg", alt: "Anand" },
  { src: "/images/clients/npl-india.jpg", alt: "NPL India" },
  { src: "/images/clients/haldiram.jpg", alt: "Haldiram" },
  { src: "/images/clients/new-project.png", alt: "Client" },
  { src: "/images/clients/new-project-1.png", alt: "Client" },
  { src: "/images/clients/new-project-2.png", alt: "Client" },
  { src: "/images/clients/new-project-3.jpg", alt: "Client" },
];

/* ─── Product Descriptions ─── */
const productDescriptions = [
  { title: "Screw Chillers", link: "/products", text: "Air-cooled & water-cooled versions for tropical conditions with superior standards, fitted with the most efficient European compressors." },
  { title: "Scroll Chillers", link: "/products/air-cooled-scroll-chiller", text: "High energy-efficient design available in Water-Cooled & Air-Cooled variants, backed by skilled engineers with international approvals." },
  { title: "Water Cooled Scroll", link: "/products/water-cooled-scroll-chiller", text: "Eco-friendly with individual refrigeration circuits. Multiple compressor configuration ensuring reliability and easy maintenance." },
  { title: "Ammonia Chillers", link: "/customized/ammonia-chillers", text: "Skid mounted, compact for medium to low temperature ranges. Ideal for food, pharma, cold storage, chemical and dairy use." },
  { title: "Air Cooled Screw", link: "/products/air-cooled-screw-chiller", text: "Engineered for harsh tropical weather with eco-friendly design. Tested by international parameters before supply." },
  { title: "Air Cooled Scroll", link: "/products/air-cooled-scroll-chiller", text: "European compressors with multiple configurations and individual refrigeration circuits. Fluid pump and skid installation included." },
  { title: "Water Cooled Screw", link: "/products/water-cooled-screw-chiller", text: "Best design for extreme conditions with highest energy efficiency. Operation-friendly with complete engineering team support." },
  { title: "Oil Chillers", link: "/customized/oil-chiller", text: "Cools oil directly using refrigerant-to-oil heat exchanging. Available in air-cooled and water-cooled variants with mounted oil pumps." },
];

/* ─── Product Card ─── */
const ProductCard = ({ image, title, desc, link, index }: { image: string; title: string; desc: string; link: string; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-40px" }}
    transition={{ duration: 0.5, delay: index * 0.08 }}
  >
    <Link to={link} className="group block h-full">
      <div className="relative h-full rounded-2xl bg-white border border-slate-100 overflow-hidden shadow-[0_2px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgba(99,102,241,0.12)] transition-all duration-500 hover:-translate-y-1.5">
        <div className="aspect-square overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100 relative">
          <img src={image} alt={title} className="product-card-img w-full h-full object-contain p-5" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
            <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm text-xs font-bold text-primary">
              View Details <ArrowRight className="h-3 w-3" />
            </span>
          </div>
        </div>
        <div className="p-5">
          <h4 className="font-heading text-base font-bold text-foreground mb-1.5 group-hover:text-primary transition-colors line-clamp-1">{title}</h4>
          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">{desc}</p>
        </div>
      </div>
    </Link>
  </motion.div>
);

/* ─── Section Header ─── */
const SectionHeader = ({ badge, title, subtitle }: { badge?: string; title: string; subtitle?: string }) => (
  <div className="text-center mb-14">
    {badge && (
      <motion.span initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-4">
        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
        {badge}
      </motion.span>
    )}
    <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground">{title}</h2>
    {subtitle && <p className="text-muted-foreground text-lg mt-3 max-w-2xl mx-auto">{subtitle}</p>}
  </div>
);

/* ═══════════════════════════════════════════════════
   INDEX PAGE
   ═══════════════════════════════════════════════════ */
const Index = () => {
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 1000], ["0%", "30%"]);
  const bgOpacity = useTransform(scrollY, [0, 600], [0.06, 0.15]);

  return (
    <>
      {/* Fixed subtle background */}
      <div className="fixed inset-0 z-[-1] overflow-hidden">
        <motion.img style={{ y: bgY, opacity: bgOpacity }} src="/images/buy-chiller.png" alt="" className="absolute w-full max-w-5xl left-1/2 -translate-x-1/2 top-0 h-auto object-contain pointer-events-none" />
        <div className="absolute inset-0 mesh-gradient" />
      </div>

      {/* ═══ HERO SLIDER ═══ */}
      <section className="pt-20 lg:pt-24 pb-6">
        <div className="container">
          <AnimatedSection direction="up">
            <div className="rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-slate-100">
              <HeroSlider />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══ HERO HEADING + STATS ═══ */}
      <section className="py-16 lg:py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection direction="up">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                India's Leading Chiller Manufacturer
              </span>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-[1.1] tracking-tight mb-6">
                BUY <TypewriterEffect />
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Drycool Systems India Private Limited — one of the oldest and leading chiller manufacturers in India, pioneering industrial cooling solutions with world-class engineering.
              </p>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.15}>
              <div className="flex flex-wrap justify-center gap-4 mt-10">
                <Link to="/products" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-primary text-white font-bold text-sm hover:bg-primary/90 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-0.5">
                  Explore Products <ArrowRight className="h-4 w-4" />
                </Link>
                <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-white text-foreground font-bold text-sm border border-slate-200 hover:border-primary/30 hover:bg-primary/5 shadow-sm transition-all duration-300 hover:-translate-y-0.5">
                  Get Quote
                </Link>
              </div>
            </AnimatedSection>
          </div>

          {/* Stats */}
          <AnimatedSection direction="up" delay={0.25}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
              {[
                { value: 25, suffix: "+", label: "Years Experience" },
                { value: 5000, suffix: "+", label: "Chillers Delivered" },
                { value: 500, suffix: "+", label: "Happy Clients" },
                { value: 30, suffix: "+", label: "Countries Export" },
              ].map((s) => (
                <div key={s.label} className="text-center p-5 rounded-2xl bg-white/70 backdrop-blur-sm border border-slate-100 shadow-sm">
                  <Counter end={s.value} suffix={s.suffix} />
                  <p className="text-xs font-semibold text-muted-foreground mt-1.5 uppercase tracking-wider">{s.label}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══ ABOUT INTRO ═══ */}
      <section className="py-16 bg-gradient-to-b from-slate-50/80 to-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <AnimatedSection direction="left">
              <div className="space-y-6">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-primary text-xs font-bold uppercase tracking-wider">About Drycool</span>
                <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-foreground leading-tight">
                  Pioneering Industrial Cooling <span className="text-gradient-navy">Since Inception</span>
                </h2>
                <div className="space-y-4 text-base text-muted-foreground leading-relaxed">
                  <p>Our chillers are CFC-free with integrated energy-saving components for environmental conservation. The engineering simplicity in our manufacturing provides added advantage to customers.</p>
                  <p>We are industry experts manufacturing chillers for injection molding, blow molding, vacuum forming, petrochemicals, pharmaceuticals, anodizing, HVAC, food & beverages, biogas, batching plants, and many more industries.</p>
                </div>
                <div className="flex flex-wrap gap-4 pt-2">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center"><Snowflake className="h-4 w-4 text-primary" /></div>
                    <span className="text-sm font-semibold">CFC-Free</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center"><Zap className="h-4 w-4 text-primary" /></div>
                    <span className="text-sm font-semibold">Energy Saving</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center"><Factory className="h-4 w-4 text-primary" /></div>
                    <span className="text-sm font-semibold">ISO Certified</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="relative">
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-primary/10 to-accent/10 blur-2xl" />
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-100">
                  <img src="/images/buy-chiller.png" alt="Drycool Industrial Chiller" className="w-full" loading="lazy" />
                </div>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection direction="up" delay={0.1}>
            <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 border border-primary/10">
              <p className="text-sm text-foreground/80 font-medium leading-relaxed text-center">
                <strong className="text-foreground">Pan-India & Global Supply:</strong> Delhi, Mumbai, Kolkata, Chennai, Bangalore, Hyderabad, Ahmedabad, Pune, Jaipur, Coimbatore, and all major Indian cities. Exports to UAE, Saudi Arabia, Qatar, Kuwait, Oman, Egypt, and all African countries.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══ SCREW CHILLERS ═══ */}
      <section className="py-20">
        <div className="container">
          <AnimatedSection>
            <SectionHeader badge="Our Products" title="Screw Chillers" subtitle="Industrial-grade screw chillers engineered for maximum efficiency and reliability" />
          </AnimatedSection>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
            {screwChillers.map((p, i) => <ProductCard key={p.title} {...p} index={i} />)}
          </div>
        </div>
      </section>

      {/* ═══ SCROLL CHILLERS ═══ */}
      <section className="py-20 bg-gradient-to-b from-slate-50/80 to-white">
        <div className="container">
          <AnimatedSection>
            <SectionHeader badge="Our Products" title="Scroll Chillers" subtitle="Energy-efficient scroll chillers with European compressors for precise temperature control" />
          </AnimatedSection>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
            {scrollChillers.map((p, i) => <ProductCard key={p.title} {...p} index={i} />)}
          </div>
        </div>
      </section>

      {/* ═══ WHY US ═══ */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient" />
        <div className="container relative z-10">
          <AnimatedSection>
            <SectionHeader badge="Our Advantages" title="Why Choose Drycool?" subtitle="Decades of excellence in industrial cooling technology" />
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUsItems.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.08} direction="up">
                <div className="group h-full p-7 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-[0_12px_40px_rgba(99,102,241,0.1)] hover:border-primary/20 transition-all duration-500 hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PRODUCT DETAILS GRID ═══ */}
      <section className="py-24 bg-gradient-to-b from-slate-50/80 to-white">
        <div className="container">
          <AnimatedSection>
            <SectionHeader badge="Complete Range" title="Our Chiller Range" subtitle="Comprehensive cooling solutions for every industrial application" />
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {productDescriptions.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.05} direction="up">
                <Link to={item.link} className="group block h-full">
                  <div className="h-full p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-[0_12px_40px_rgba(99,102,241,0.1)] hover:border-primary/20 transition-all duration-500 hover:-translate-y-1 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                    <h3 className="font-heading text-base font-bold text-foreground mb-3 group-hover:text-primary transition-colors flex items-center gap-2">
                      {item.title}
                      <ArrowRight className="h-3.5 w-3.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ INDUSTRIES ═══ */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient" />
        <div className="container relative z-10">
          <AnimatedSection>
            <SectionHeader badge="Applications" title="Industries We Serve" subtitle="Advanced cooling solutions engineered for cost-effective installation and low power consumption" />
          </AnimatedSection>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
            {industryLinks.map((ind, i) => (
              <motion.div key={ind.label} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.03 }}>
                <Link to={ind.to} className="group flex items-center gap-3 p-4 rounded-xl bg-white border border-slate-100 hover:border-primary/20 hover:shadow-[0_8px_30px_rgba(99,102,241,0.08)] transition-all duration-300 hover:-translate-y-0.5">
                  <div className="shrink-0 w-9 h-9 rounded-lg bg-primary/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <ind.icon className="h-4 w-4 text-primary/70 group-hover:text-primary transition-colors" />
                  </div>
                  <span className="text-sm font-semibold text-foreground/80 group-hover:text-primary transition-colors">{ind.label}</span>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-2.5">
            {moreIndustries.map((ind, i) => (
              <motion.div key={ind.label} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: i * 0.02 }}>
                <Link to={ind.to} className="inline-flex items-center px-4 py-2 rounded-full text-xs font-bold bg-white border border-slate-200 text-foreground/70 hover:border-primary/30 hover:text-primary hover:bg-primary/5 shadow-sm transition-all duration-300">
                  {ind.label}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TRUSTED CLIENTS ═══ */}
      <section className="py-20 bg-gradient-to-b from-slate-50/80 to-white overflow-hidden">
        <div className="container">
          <AnimatedSection>
            <SectionHeader badge="Our Clients" title="Trusted By Industry Leaders" />
          </AnimatedSection>
        </div>

        <div
          className="group flex overflow-hidden whitespace-nowrap py-3"
          style={{ maskImage: "linear-gradient(to right, transparent 0, black 10%, black 90%, transparent 100%)", WebkitMaskImage: "linear-gradient(to right, transparent 0, black 10%, black 90%, transparent 100%)" }}
        >
          <div className="animate-marquee group-hover:[animation-play-state:paused] flex gap-6 px-3 items-center">
            {[...clientLogos, ...clientLogos].map((logo, i) => (
              <div key={`${logo.alt}-${i}`} className="flex shrink-0 items-center justify-center px-8 py-5 bg-white rounded-xl border border-slate-100 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-400 w-[160px] md:w-[180px] h-[90px]">
                <img src={logo.src} alt={logo.alt} className="max-h-12 w-auto object-contain mx-auto opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ BOTTOM CTA ═══ */}
      <section className="py-20">
        <div className="container">
          <AnimatedSection>
            <div className="relative rounded-3xl overflow-hidden p-12 md:p-16 text-center bg-gradient-to-br from-primary via-primary/95 to-accent">
              <div className="absolute inset-0 bg-[url('/images/buy-chiller.png')] bg-center bg-no-repeat bg-contain opacity-5" />
              <div className="relative z-10">
                <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4">Ready to Get Your Chiller?</h2>
                <p className="text-white/80 text-lg max-w-xl mx-auto mb-8">Get a customized cooling solution engineered for your specific industrial requirements with the best price in the market.</p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-white text-primary font-bold text-sm hover:bg-white/90 shadow-lg transition-all duration-300 hover:-translate-y-0.5">
                    Request Quote <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link to="/products" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-white/10 text-white font-bold text-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-0.5">
                    Browse All Products
                  </Link>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default Index;
