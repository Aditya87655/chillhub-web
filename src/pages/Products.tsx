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
  { title: "Air Cooled Screw Chiller", slug: "air-cooled-screw-chiller", description: "Efficient air cooled screw chillers for industrial cooling, with capacities ranging from 30 Ton up to 1800 Ton.", image: "https://www.drycoolchillers.com/wp-content/uploads/2015/11/Slide011.jpg" },
  { title: "Water Cooled Screw Chiller", slug: "water-cooled-screw-chiller", description: "Specifically designed for extreme tropical weather, using high-quality Bitzer and Frascold compressors.", image: "https://drycoolchillers.com/wp-content/uploads/2015/10/Single-Water-Cooled-Screw-Chiller.jpg" },
  { title: "Air Cooled Scroll Chillers", slug: "air-cooled-scroll-chiller", description: "Highly energy-efficient, separate refrigeration circuits designed for maximum flexibility and performance.", image: "https://drycoolchillers.com/wp-content/uploads/2015/09/Multiple-Air-Cooled-Scroll-Chiller.jpg" },
  { title: "Water Cooled Scroll Chillers", slug: "water-cooled-scroll-chiller", description: "Compact and factory-assembled liquid scroll chillers for comfort and process-cooling applications.", image: "https://drycoolchillers.com/wp-content/uploads/2015/10/Multiple-Water-Cooled-Scroll-Chiller-3-1.jpg" },
  { title: "Inverter Scroll Chiller", slug: "inverter-scroll-chiller", description: "Integrated inverter technology for precise temperature control and maximum energy savings.", image: "https://www.drycoolchillers.com/wp-content/uploads/2015/10/Multiple-Water-Cooled-Scroll-Chiller-3-1.jpg" },
  { title: "Air Chiller", slug: "air-chiller", description: "Reliable industrial air chillers with precise temperature control and improved internal air quality.", image: "https://www.drycoolchillers.com/wp-content/uploads/2023/01/Air-cooled-Air-chiller.jpg" },
  { title: "Inverter Screw Chiller", slug: "inverter-screw-chiller", description: "Advanced permanent magnet motor and variable frequency drive for up to 50% energy savings.", image: "https://www.drycoolchillers.com/wp-content/uploads/2015/10/Multiple-Water-Cooled-Screw-Chiller-1-2.jpg" },
  { title: "Buy VFD Chiller", slug: "air-cooled-vfd-screw-chiller", description: "Variable frequency drive chillers for optimal pressure control and significant power reduction.", image: "https://www.drycoolchillers.com/wp-content/uploads/2015/10/Multiple-Water-Cooled-Screw-Chiller-2-1.jpg" },
  { title: "Water-cooled Reciprocating Chillers", slug: "water-cooled-reciprocating-chillers", description: "We Design and Manufacture Reciprocating chillers nipping shops up to(-) 40 Deg C with Water Cooled Type condensers.", image: "https://www.drycoolchillers.com/wp-content/uploads/2023/01/water-cooled-reciprocating-chillers.jpg" },
  { title: "Air-cooled Reciprocating Chillers", slug: "air-cooled-reciprocating-chillers", description: "We offer a range of Packaged Reciprocating Bite/ nipping Factories with Air cooled Type condensers.", image: "https://www.drycoolchillers.com/wp-content/uploads/2023/01/air-cooled-reciprocating-chillers.jpg" },
  { title: "Industrial Reciprocating Chillers", slug: "industrial-reciprocating-chillers", description: "Reciprocating chillers complete with Control Panel, Expansion Valves, and Interlocking Systems.", image: "https://www.drycoolchillers.com/wp-content/uploads/2023/01/industrial-reciprocating-chillers.jpg" },
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
