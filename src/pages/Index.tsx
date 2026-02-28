import { Link } from "react-router-dom";
import { ArrowRight, Gauge, DollarSign, Settings, Zap, Cog, Users } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import ProductCard from "@/components/ProductCard";
import AnimatedSection from "@/components/AnimatedSection";
import GlassCard from "@/components/GlassCard";
import HeroSlider from "@/components/HeroSlider";
import screwImg from "@/assets/product-screw-chiller.jpg";
import scrollImg from "@/assets/product-scroll-chiller.jpg";
import ammoniaImg from "@/assets/product-ammonia-chiller.jpg";
import oilImg from "@/assets/product-oil-chiller.jpg";
import { motion } from "framer-motion";

const whyUsItems = [
  { icon: Gauge, title: "Accurate Monitoring", desc: "Integrated tracking of suction pressure and system variables." },
  { icon: DollarSign, title: "Cost-Effective", desc: "50% less energy usage with high-end temperature control." },
  { icon: Settings, title: "Accurate Adjustment", desc: "Compressor motor speed tuned to industry requirements." },
  { icon: Zap, title: "Optimum Performance", desc: "Advanced imports for peak compressor speed adjustment." },
  { icon: Cog, title: "Quality Compressors", desc: "Bitzer (Germany) and Frascold (Italy) screw compressors." },
  { icon: Users, title: "Expert Engineers", desc: "Skilled engineering team for the best customer experience." },
];

const products = [
  { title: "Screw Chillers", description: "Air cooled & water cooled screw chillers designed for tropical conditions with superior manufacturing standards and European compressors.", image: screwImg },
  { title: "Scroll Chillers", description: "High energy-efficient scroll chillers available in air-cooled and water-cooled variants, backed by skilled engineering support.", image: scrollImg },
  { title: "Ammonia Chillers", description: "Skid-mounted ammonia chillers suitable for food processing, pharmaceutical, cold storage, and dairy applications.", image: ammoniaImg },
  { title: "Oil Chillers", description: "Specially designed to cool oil directly using refrigerant-to-oil heat exchanging circuits in air-cooled and water-cooled variants.", image: oilImg },
];

const industries = [
  "Injection Molding", "Blow Molding", "Food & Beverages", "Pharma & Chemicals",
  "HVAC Systems", "Extrusion Lines", "Batching Plants", "Petroleum & Gas",
];

const stats = [
  { value: "30+", label: "Years Experience" },
  { value: "5000+", label: "Chillers Installed" },
  { value: "50+", label: "Countries Served" },
  { value: "200+", label: "Expert Engineers" },
];

const Index = () => {
  return (
    <>
      {/* Hero Slider */}
      <HeroSlider />

      {/* Stats */}
      <section className="relative -mt-16 z-10 pb-8">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((s, i) => (
              <AnimatedSection key={s.label} delay={i * 0.1}>
                <GlassCard className="text-center py-8 bg-card">
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="font-heading text-3xl md:text-4xl font-bold text-accent"
                  >
                    {s.value}
                  </motion.div>
                  <div className="mt-1 text-sm text-muted-foreground font-medium">{s.label}</div>
                </GlassCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-20 bg-section-gradient">
        <div className="container">
          <AnimatedSection>
            <SectionHeading title="Why Choose Us" subtitle="Decades of expertise in industrial cooling solutions" />
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUsItems.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.08}>
                <GlassCard className="flex gap-4 bg-card group">
                  <div className="shrink-0 flex items-center justify-center h-12 w-12 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                    <item.icon className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-bold text-foreground">{item.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </GlassCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-20">
        <div className="container">
          <AnimatedSection>
            <SectionHeading title="Our Products" subtitle="Comprehensive range of industrial chillers for every application" />
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((p, i) => (
              <AnimatedSection key={p.title} delay={i * 0.1}>
                <ProductCard {...p} />
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection className="text-center mt-10">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-7 py-3.5 font-semibold text-primary-foreground hover:opacity-90 transition-opacity shadow-lg"
            >
              View All Products <ArrowRight className="h-4 w-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Section Divider */}
      <div className="container">
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      {/* Industries */}
      <section className="py-20 bg-hero-gradient">
        <div className="container">
          <AnimatedSection>
            <SectionHeading title="Industries We Serve" subtitle="Advanced cooling solutions across diverse sectors" light />
          </AnimatedSection>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {industries.map((ind, i) => (
              <AnimatedSection key={ind} delay={i * 0.05}>
                <div className="rounded-xl border border-primary-foreground/10 bg-primary-foreground/5 backdrop-blur-sm p-6 text-center hover:bg-primary-foreground/10 hover:border-accent/30 hover:scale-[1.03] transition-all duration-300">
                  <span className="font-heading text-base font-semibold text-primary-foreground">{ind}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-section-gradient">
        <div className="container text-center">
          <AnimatedSection>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-gradient-navy">
              Ready to Get Started?
            </h2>
            <p className="mt-4 text-muted-foreground max-w-lg mx-auto text-lg">
              Contact us today for a custom cooling solution tailored to your industry needs.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 mt-8 rounded-lg bg-[hsl(var(--industrial-orange))] px-8 py-4 font-semibold text-white hover:opacity-90 transition-opacity shadow-lg"
            >
              Contact Us <ArrowRight className="h-4 w-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default Index;
