import { Link } from "react-router-dom";
import { ArrowRight, Gauge, DollarSign, Settings, Zap, Cog, Users } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import ProductCard from "@/components/ProductCard";
import heroImage from "@/assets/hero-chiller.jpg";
import screwImg from "@/assets/product-screw-chiller.jpg";
import scrollImg from "@/assets/product-scroll-chiller.jpg";
import ammoniaImg from "@/assets/product-ammonia-chiller.jpg";
import oilImg from "@/assets/product-oil-chiller.jpg";

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

const Index = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Industrial Chiller" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-primary/80" />
        </div>
        <div className="container relative z-10 py-20">
          <div className="max-w-2xl animate-fade-in-up">
            <span className="inline-block rounded-full bg-accent/20 px-4 py-1.5 text-sm font-semibold text-accent mb-6">
              Leading Chiller Manufacturer in India
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight">
              Energy Efficient
              <br />
              <span className="text-accent">Smart Chillers</span>
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/80 max-w-lg leading-relaxed">
              Pioneer in manufacturing industrial chillers — screw, scroll, inverter, and ammonia chillers — with CFC-free, energy-saving technology.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/products"
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 font-semibold text-accent-foreground hover:opacity-90 transition-opacity"
              >
                View Products <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-lg border border-primary-foreground/30 px-6 py-3 font-semibold text-primary-foreground hover:bg-primary-foreground/10 transition-colors"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-20 bg-section-gradient">
        <div className="container">
          <SectionHeading title="Why Choose Us" subtitle="Decades of expertise in industrial cooling solutions" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyUsItems.map((item) => (
              <div key={item.title} className="flex gap-4 p-6 rounded-lg bg-card industrial-shadow">
                <div className="shrink-0 flex items-center justify-center h-12 w-12 rounded-lg bg-accent/10">
                  <item.icon className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-bold text-foreground">{item.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-20">
        <div className="container">
          <SectionHeading title="Our Products" subtitle="Comprehensive range of industrial chillers for every application" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((p) => (
              <ProductCard key={p.title} {...p} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
            >
              View All Products <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 bg-primary">
        <div className="container">
          <SectionHeading title="Industries We Serve" subtitle="Advanced cooling solutions across diverse sectors" light />
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {industries.map((ind) => (
              <div key={ind} className="rounded-lg border border-primary-foreground/15 bg-primary-foreground/5 p-6 text-center hover:bg-primary-foreground/10 transition-colors">
                <span className="font-heading text-base font-semibold text-primary-foreground">{ind}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-section-gradient">
        <div className="container text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-gradient-navy">
            Ready to Get Started?
          </h2>
          <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
            Contact us today for a custom cooling solution tailored to your industry needs.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 mt-8 rounded-lg bg-accent px-8 py-4 font-semibold text-accent-foreground hover:opacity-90 transition-opacity"
          >
            Contact Us <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
};

export default Index;
