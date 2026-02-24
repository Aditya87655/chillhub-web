import { Link } from "react-router-dom";
import { ArrowRight, Globe, MapPin } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import GlassCard from "@/components/GlassCard";

const regions = [
  { region: "Middle East", countries: ["UAE", "Saudi Arabia", "Qatar", "Kuwait", "Oman", "Yemen", "Bahrain"], desc: "Heavy industrial and HVAC chiller installations across the Gulf region." },
  { region: "Africa", countries: ["Egypt", "Nigeria", "Kenya", "South Africa", "Tanzania", "Ethiopia"], desc: "Robust cooling solutions for mining, manufacturing, and food processing." },
  { region: "South Asia", countries: ["Nepal", "Bangladesh", "Sri Lanka", "Myanmar"], desc: "Regional cooling infrastructure for diverse industrial applications." },
  { region: "Southeast Asia", countries: ["Indonesia", "Vietnam", "Thailand", "Philippines"], desc: "Tropical climate-optimized chillers for industrial and commercial use." },
];

const indianCities = [
  "Delhi", "Mumbai", "Kolkata", "Chennai", "Bangalore", "Hyderabad",
  "Ahmedabad", "Pune", "Jaipur", "Noida", "Gurgaon", "Coimbatore",
  "Surat", "Kanpur", "Nagpur", "Raipur", "Kochi", "Vadodara",
];

const GlobalFootprints = () => (
  <>
    <PageHero title="Global Footprints" subtitle="Delivering world-class cooling solutions across 50+ countries" />

    <section className="py-20">
      <div className="container">
        <AnimatedSection>
          <SectionHeading title="International Presence" subtitle="Exporting industrial chillers worldwide" />
        </AnimatedSection>
        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {regions.map((r, i) => (
            <AnimatedSection key={r.region} delay={i * 0.1}>
              <GlassCard className="bg-card">
                <div className="flex items-center gap-3 mb-4">
                  <Globe className="h-6 w-6 text-accent" />
                  <h3 className="font-heading text-xl font-bold text-foreground">{r.region}</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">{r.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {r.countries.map((c) => (
                    <span key={c} className="inline-flex items-center gap-1 rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                      <MapPin className="h-3 w-3" /> {c}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    <div className="container"><div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" /></div>

    <section className="py-20 bg-section-gradient">
      <div className="container">
        <AnimatedSection>
          <SectionHeading title="Pan-India Network" subtitle="Serving all major cities across India" />
        </AnimatedSection>
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 max-w-4xl mx-auto">
          {indianCities.map((c, i) => (
            <AnimatedSection key={c} delay={i * 0.03}>
              <div className="rounded-lg border border-border bg-card px-3 py-2.5 text-center text-xs font-medium text-foreground">
                {c}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    <section className="py-16 bg-hero-gradient">
      <div className="container text-center">
        <AnimatedSection>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground">Need Chillers Delivered Globally?</h2>
          <Link to="/contact" className="inline-flex items-center gap-2 mt-6 rounded-lg bg-accent px-7 py-3.5 font-semibold text-accent-foreground hover:opacity-90 transition-opacity shadow-lg">
            Contact Our Export Team <ArrowRight className="h-4 w-4" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  </>
);

export default GlobalFootprints;
