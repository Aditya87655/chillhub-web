import SectionHeading from "@/components/SectionHeading";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import GlassCard from "@/components/GlassCard";
import { Factory, Beaker, Utensils, Droplets, Fuel, Wind, Building2, FlaskConical, Pipette, Milk, Hammer, Leaf } from "lucide-react";
import { Link } from "react-router-dom";
import { ArrowRight, Globe } from "lucide-react";

const industries = [
  { icon: Factory, name: "Injection Molding", desc: "Precision cooling for plastic injection molding machines" },
  { icon: Wind, name: "Blow Molding", desc: "Temperature control for PET and blow molding operations" },
  { icon: Utensils, name: "Food & Beverages", desc: "Hygienic cooling solutions for food processing plants" },
  { icon: Beaker, name: "Pharma & Chemicals", desc: "Compliant cooling for pharmaceutical manufacturing" },
  { icon: Building2, name: "HVAC Systems", desc: "Central cooling for commercial and residential HVAC" },
  { icon: Pipette, name: "Extrusion Lines", desc: "Continuous cooling for plastic and metal extrusion" },
  { icon: Hammer, name: "Batching Plants", desc: "Concrete cooling for ready-mix batching plants" },
  { icon: Fuel, name: "Petrochemicals", desc: "Industrial grade cooling for petrochemical processes" },
  { icon: Milk, name: "Dairy & Milk", desc: "Rapid chilling for milk processing and storage" },
  { icon: Leaf, name: "Biogas Plants", desc: "Temperature regulation for biogas production" },
  { icon: FlaskConical, name: "Anodizing", desc: "Precise cooling for anodizing and surface treatment" },
  { icon: Droplets, name: "Brewery & Distillery", desc: "Fermentation and process cooling for beverages" },
];

const globalRegions = [
  { region: "UAE & Middle East", desc: "Industrial chillers for extreme desert conditions" },
  { region: "Africa", desc: "Robust cooling solutions across African nations" },
  { region: "Indonesia & SE Asia", desc: "Tropical climate optimized chillers" },
  { region: "Nepal & Bangladesh", desc: "Regional cooling infrastructure" },
];

const Industries = () => (
  <>
    <PageHero title="Industries & Applications" subtitle="Advanced cooling across diverse sectors worldwide" />

    <section className="py-20">
      <div className="container">
        <AnimatedSection>
          <SectionHeading title="Industries We Serve" subtitle="Tailored cooling solutions for every industrial application" />
        </AnimatedSection>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind, i) => (
            <AnimatedSection key={ind.name} delay={i * 0.05}>
              <GlassCard className="flex gap-4 bg-card">
                <div className="shrink-0 flex items-center justify-center h-14 w-14 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                  <ind.icon className="h-7 w-7 text-accent" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-bold text-foreground">{ind.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{ind.desc}</p>
                </div>
              </GlassCard>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Section Divider */}
    <div className="container"><div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" /></div>

    <section id="global" className="py-20 bg-section-gradient">
      <div className="container">
        <AnimatedSection>
          <SectionHeading title="Global Footprints" subtitle="Serving clients across continents" />
        </AnimatedSection>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {globalRegions.map((r, i) => (
            <AnimatedSection key={r.region} delay={i * 0.1}>
              <GlassCard className="text-center py-8 bg-card">
                <Globe className="h-8 w-8 text-accent mx-auto mb-3" />
                <h3 className="font-heading text-lg font-bold text-foreground">{r.region}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{r.desc}</p>
              </GlassCard>
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
            Need Cooling Solutions for Your Industry?
          </h2>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 mt-6 rounded-lg bg-accent px-7 py-3.5 font-semibold text-accent-foreground hover:opacity-90 transition-opacity shadow-lg"
          >
            Get in Touch <ArrowRight className="h-4 w-4" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  </>
);

export default Industries;
