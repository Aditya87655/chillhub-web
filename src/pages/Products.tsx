import SectionHeading from "@/components/SectionHeading";
import ProductCard from "@/components/ProductCard";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import screwImg from "@/assets/product-screw-chiller.jpg";
import scrollImg from "@/assets/product-scroll-chiller.jpg";
import ammoniaImg from "@/assets/product-ammonia-chiller.jpg";
import oilImg from "@/assets/product-oil-chiller.jpg";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const allProducts = [
  { title: "Air Cooled Screw Chillers", description: "Multiple compressor configuration, fabricated in ISO 9001:2008 certified units with CFC-free refrigerants R-407C & R-134A, complete with in-built process pump.", image: screwImg },
  { title: "Water Cooled Screw Chillers", description: "Specially designed to work in extreme weather while maintaining energy efficiency. Best-in-class chiller with superior standards.", image: screwImg },
  { title: "Air Cooled Scroll Chillers", description: "Highly energy-efficient, designed for extreme tropical weather with European origin compressors and separate refrigeration circuits.", image: scrollImg },
  { title: "Water Cooled Scroll Chillers", description: "State-of-the-art liquid chiller for comfort and process-cooling applications, factory-assembled with complete quality assurance.", image: scrollImg },
  { title: "Ammonia Chillers", description: "Skid-mounted, compact ammonia chillers for medium to low temperature ranges — ideal for food processing, pharmaceutical, and cold storage.", image: ammoniaImg },
  { title: "Oil Chillers", description: "Specially designed to cool oil directly via refrigerant-to-oil heat exchanging circuits. Available in air-cooled and water-cooled variants.", image: oilImg },
  { title: "Inverter Screw Chillers", description: "Variable frequency drive technology for optimal compressor speed adjustment, delivering up to 50% energy savings.", image: screwImg },
  { title: "VFD Chillers", description: "Advanced variable frequency drive chillers offering precise temperature control with significantly reduced power consumption.", image: scrollImg },
];

const Products = () => (
  <>
    <PageHero title="Products & Solutions" subtitle="Complete range of industrial cooling systems engineered for performance" />

    <section className="py-20">
      <div className="container">
        <AnimatedSection>
          <SectionHeading title="Our Product Range" subtitle="Engineered for performance, built for reliability" />
        </AnimatedSection>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {allProducts.map((p, i) => (
            <AnimatedSection key={p.title} delay={i * 0.08}>
              <ProductCard {...p} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-16 bg-hero-gradient">
      <div className="container text-center">
        <AnimatedSection>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground">
            Need a Custom Chiller Solution?
          </h2>
          <p className="mt-3 text-primary-foreground/70 max-w-lg mx-auto">
            Our engineering team can design a cooling system tailored to your specific requirements.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 mt-6 rounded-lg bg-accent px-7 py-3.5 font-semibold text-accent-foreground hover:opacity-90 transition-opacity shadow-lg"
          >
            Request a Quote <ArrowRight className="h-4 w-4" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  </>
);

export default Products;
