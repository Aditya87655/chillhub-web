import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";

const applicationItems = [
  { label: "Chiller For Plastic Industry", to: "/application/chiller-for-plastic-industry" },
  { label: "Cement Industry (Batching Plant)", to: "/application/batching-plant-chiller" },
  { label: "Brewery & Fermentation", to: "/application/chiller-for-brewery-and-fermentation" },
  { label: "Food & Beverage", to: "/application/chiller-for-food-beverage-industry" },
  { label: "Heavy Industrial", to: "/application/chiller-for-heavy-industrial-purpose" },
  { label: "Hydrogen Refueling", to: "/application/chiller-for-hydrogen-refueling-station" },
  { label: "Milk Industry", to: "/application/chillers-for-milk-industry" },
  { label: "Medical Device", to: "/application/chiller-for-medical-device" },
  { label: "CNC Cooling", to: "/application/chiller-for-cnc-cooling" },
  { label: "Printing & Packaging", to: "/application/chiller-for-printing-and-packaging" },
  { label: "BESS Chillers", to: "/application/battery-energy-storage-systems-bess-chillers" },
  { label: "Eyewash & Safety Showers", to: "/application/chillers-for-eyewash-and-safety-showers" },
];

const ApplicationPage = () => (
  <>
    <PageHero title="Application" subtitle="Industry-Specific Chiller Solutions" />

    <section className="py-20">
      <div className="container">
        <AnimatedSection>
          <SectionHeading title="Chiller Applications" subtitle="We manufacture customized chillers for a wide range of industrial applications" />
        </AnimatedSection>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {applicationItems.map((item, i) => (
            <AnimatedSection key={item.to} delay={i * 0.05}>
              <Link
                to={item.to}
                className="group flex items-center justify-between rounded-xl border border-border bg-card p-5 hover:shadow-lg hover:border-industrial-orange/30 transition-all duration-300"
              >
                <span className="font-medium text-foreground group-hover:text-industrial-orange transition-colors">{item.label}</span>
                <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-industrial-orange group-hover:translate-x-1 transition-all" />
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    <section className="py-16 bg-teal-gradient">
      <div className="container text-center">
        <AnimatedSection>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground">Need a Chiller for Your Industry?</h2>
          <p className="mt-3 text-primary-foreground/70 max-w-lg mx-auto">Our engineering team can design a cooling system tailored to your specific requirements.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 mt-6 rounded-lg bg-accent px-7 py-3.5 font-semibold text-accent-foreground hover:opacity-90 transition-opacity shadow-lg">
            Request a Quote <ArrowRight className="h-4 w-4" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  </>
);

export default ApplicationPage;
