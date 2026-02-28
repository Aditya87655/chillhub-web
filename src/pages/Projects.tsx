import { Link } from "react-router-dom";
import { ArrowRight, Building2, Factory, Zap, Thermometer, Globe, Award, CheckCircle } from "lucide-react";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import GlassCard from "@/components/GlassCard";
import CTASection from "@/components/CTASection";

const projectCategories = [
  {
    icon: Building2,
    title: "Commercial HVAC Projects",
    desc: "Complete chiller installations for hotels, hospitals, IT parks, shopping malls, and commercial complexes across India and abroad.",
    count: "500+",
  },
  {
    icon: Factory,
    title: "Industrial Process Cooling",
    desc: "Turnkey cooling solutions for manufacturing plants, chemical processing, pharmaceutical production, and food & beverage industries.",
    count: "2000+",
  },
  {
    icon: Zap,
    title: "Energy Optimization Projects",
    desc: "VFD chiller retrofits and energy-saving upgrades delivering up to 50% reduction in power consumption for existing installations.",
    count: "300+",
  },
  {
    icon: Globe,
    title: "International Installations",
    desc: "Chiller systems exported and commissioned in UAE, Africa, Indonesia, Nepal, Bangladesh, and other countries worldwide.",
    count: "50+ Countries",
  },
];

const featuredProjects = [
  { name: "Reliance Industries", sector: "Petrochemical", capacity: "1200 TR", location: "Gujarat, India" },
  { name: "Apollo Hospitals", sector: "Healthcare", capacity: "800 TR", location: "Chennai, India" },
  { name: "Taj Hotels Group", sector: "Hospitality", capacity: "600 TR", location: "Multiple Locations" },
  { name: "Coca-Cola Bottling", sector: "Food & Beverage", capacity: "500 TR", location: "Uttar Pradesh, India" },
  { name: "Dr. Reddy's Laboratories", sector: "Pharmaceutical", capacity: "400 TR", location: "Hyderabad, India" },
  { name: "Dubai Industrial City", sector: "Industrial Zone", capacity: "2000 TR", location: "Dubai, UAE" },
  { name: "Haldiram's", sector: "Food Processing", capacity: "350 TR", location: "Noida, India" },
  { name: "Motherson Sumi Systems", sector: "Automotive", capacity: "450 TR", location: "Noida, India" },
];

const sectors = [
  "Petrochemical & Refinery", "Pharmaceutical & Healthcare", "Food & Beverage Processing",
  "Automotive Manufacturing", "Cement & Construction", "Textile & Garments",
  "Plastic & Injection Molding", "Data Centers & IT", "Hospitality & Hotels",
  "Cold Storage & Warehousing", "Brewery & Fermentation", "Chemical Processing",
];

const stats = [
  { value: "5000+", label: "Chillers Installed" },
  { value: "50+", label: "Countries Served" },
  { value: "30+", label: "Years Experience" },
  { value: "98%", label: "Client Satisfaction" },
];

const Projects = () => (
  <>
    <PageHero title="Our Projects" subtitle="Delivering world-class cooling solutions across industries and geographies" />

    {/* Stats */}
    <section className="relative -mt-12 z-10 pb-8">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <AnimatedSection key={s.label} delay={i * 0.1}>
              <GlassCard className="text-center py-8 bg-card">
                <div className="font-heading text-3xl md:text-4xl font-bold text-[hsl(var(--industrial-orange))]">{s.value}</div>
                <div className="mt-1 text-sm text-muted-foreground font-medium">{s.label}</div>
              </GlassCard>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Project Categories */}
    <section className="py-20 bg-section-gradient">
      <div className="container">
        <AnimatedSection>
          <SectionHeading title="Project Categories" subtitle="Comprehensive cooling solutions across diverse sectors" />
        </AnimatedSection>
        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {projectCategories.map((cat, i) => (
            <AnimatedSection key={cat.title} delay={i * 0.1}>
              <GlassCard className="bg-card h-full">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 flex items-center justify-center h-14 w-14 rounded-xl bg-[hsl(var(--industrial-orange)/0.1)]">
                    <cat.icon className="h-7 w-7 text-[hsl(var(--industrial-orange))]" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-bold text-foreground">{cat.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{cat.desc}</p>
                    <div className="mt-3 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary">{cat.count} Projects</div>
                  </div>
                </div>
              </GlassCard>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Featured Projects */}
    <section className="py-20">
      <div className="container">
        <AnimatedSection>
          <SectionHeading title="Featured Installations" subtitle="Some of our prestigious project references" />
        </AnimatedSection>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {featuredProjects.map((p, i) => (
            <AnimatedSection key={p.name} delay={i * 0.05}>
              <GlassCard className="bg-card text-center">
                <Award className="h-8 w-8 text-[hsl(var(--industrial-orange))] mx-auto mb-3" />
                <h4 className="font-heading text-lg font-bold text-foreground">{p.name}</h4>
                <p className="text-xs text-muted-foreground mt-1">{p.sector}</p>
                <div className="mt-3 space-y-1 text-xs">
                  <div className="flex items-center justify-center gap-1 text-muted-foreground">
                    <Thermometer className="h-3 w-3" /> {p.capacity}
                  </div>
                  <div className="flex items-center justify-center gap-1 text-muted-foreground">
                    <Globe className="h-3 w-3" /> {p.location}
                  </div>
                </div>
              </GlassCard>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Sectors */}
    <section className="py-20 bg-hero-gradient">
      <div className="container">
        <AnimatedSection>
          <SectionHeading title="Sectors We Serve" subtitle="Cooling solutions across every major industry" light />
        </AnimatedSection>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {sectors.map((s, i) => (
            <AnimatedSection key={s} delay={i * 0.04}>
              <div className="flex items-center gap-2 rounded-xl border border-primary-foreground/10 bg-primary-foreground/5 backdrop-blur-sm px-4 py-4 hover:bg-primary-foreground/10 transition-all">
                <CheckCircle className="h-4 w-4 text-accent shrink-0" />
                <span className="text-sm font-medium text-primary-foreground">{s}</span>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Explore Links */}
    <section className="py-20 bg-section-gradient">
      <div className="container text-center">
        <AnimatedSection>
          <SectionHeading title="Explore More" subtitle="Dive deeper into our project portfolio and expertise" />
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link
              to="/projects/expertise"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-7 py-3.5 font-semibold text-primary-foreground hover:opacity-90 transition-opacity shadow-lg"
            >
              Our Expertise <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/projects/turnkey"
              className="inline-flex items-center gap-2 rounded-lg bg-[hsl(var(--industrial-orange))] px-7 py-3.5 font-semibold text-white hover:opacity-90 transition-opacity shadow-lg"
            >
              Turnkey Projects <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>

    <CTASection />
  </>
);

export default Projects;
