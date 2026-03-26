import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";

const screwProducts = [
  {
    title: "Air Cooled Screw Chiller",
    to: "/products/air-cooled-screw-chiller",
    image: "https://www.drycoolchillers.com/wp-content/uploads/2015/11/Slide011.jpg",
  },
  {
    title: "Water Cooled Screw Chiller",
    to: "/products/water-cooled-screw-chiller",
    image: "https://drycoolchillers.com/wp-content/uploads/2015/10/Single-Water-Cooled-Screw-Chiller.jpg",
  },
  {
    title: "Inverter Screw Chiller",
    to: "/products/inverter-screw-chiller",
    image: "https://www.drycoolchillers.com/wp-content/uploads/2015/10/Multiple-Water-Cooled-Screw-Chiller-1-2.jpg",
  },
  {
    title: "Buy VFD Chiller",
    to: "/products/air-cooled-vfd-screw-chiller",
    image: "https://www.drycoolchillers.com/wp-content/uploads/2015/10/Multiple-Water-Cooled-Screw-Chiller-2-1.jpg",
  },
];

const ScrewChillers = () => (
  <>
    <PageHero title="Screw Chillers" subtitle="Industrial Screw Chiller Manufacturer in India" />

    <section className="py-20">
      <div className="container">
        <AnimatedSection>
          <SectionHeading title="Screw Chiller" />
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {screwProducts.map((p, i) => (
            <AnimatedSection key={p.to} delay={i * 0.1}>
              <Link to={p.to} className="group block rounded-2xl overflow-hidden border border-border bg-card shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                </div>
                <div className="p-6 flex items-center justify-between">
                  <h3 className="font-heading text-lg font-bold text-foreground group-hover:text-industrial-orange transition-colors">{p.title}</h3>
                  <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-industrial-orange group-hover:translate-x-1 transition-all" />
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    <section className="py-16 bg-hero-gradient">
      <div className="container text-center">
        <AnimatedSection>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground">Need a Screw Chiller?</h2>
          <p className="mt-3 text-primary-foreground/70 max-w-lg mx-auto">Contact us for the best pricing and custom configurations.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 mt-6 rounded-lg bg-accent px-7 py-3.5 font-semibold text-accent-foreground hover:opacity-90 transition-opacity shadow-lg">
            Get a Quote <ArrowRight className="h-4 w-4" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  </>
);

export default ScrewChillers;
