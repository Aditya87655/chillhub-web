import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import GlassCard from "@/components/GlassCard";

const expertiseObjectives = [
  "Setting superior but achievable objectives.",
  "Adept conceptualization of the project.",
  "Meticulous planning to execute.",
  "Timely and effective execution.",
  "Realisation of the objectives.",
];

const Expertise = () => (
  <>
    <PageHero 
      title="Expertise" 
      subtitle="Specialize in Engineering, Manufacturing, Contracting, Servicing & Maintenance" 
    />

    <section className="py-20">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <AnimatedSection>
            <SectionHeading 
              title="Our Engineering Excellence" 
              subtitle="Customized cooling solutions for diverse industries"
            />
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Drycool Specialize in Engineering, Manufacturing, Contracting, Servicing & Maintenance, having expertise in engineering customised solution for cooling process, in Printing Packaging, Food processing & beverages, Plastics, Anodising, chemical industry, construction etc.
              </p>
              <p>
                Project handling requires mature expertise and experience besides proper knowledge and exposure to the specific industry and environment, since the benefits of proper project execution to the organisation can be realised only through expert handling of the project, from conceptualisation to commissioning, within the specified timeframe, meeting objectives convincingly.
              </p>
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={0.2}>
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl">
              <img 
                src="https://www.drycoolchillers.com/wp-content/uploads/2022/08/Dark-Picnic-with-Friends-Photo-Collage.jpg" 
                alt="Our Expertise"
                className="w-full h-full object-cover"
              />
            </div>
          </AnimatedSection>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection delay={0.4} className="order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl">
              <img 
                src="http://drycoolchillers.com/wp-content/uploads/2013/08/20131017_140001.jpg" 
                alt="Project Execution"
                className="w-full h-full object-cover"
              />
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.6} className="order-1 lg:order-2">
            <h3 className="font-heading text-2xl font-bold text-foreground mb-6">Project Execution Objectives</h3>
            <div className="grid gap-4">
              {expertiseObjectives.map((objective, i) => (
                <GlassCard key={i} className="flex items-center gap-4 py-4 bg-card/50" hover={false}>
                  <div className="h-8 w-8 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="h-5 w-5 text-accent" />
                  </div>
                  <span className="text-foreground font-medium">{objective}</span>
                </GlassCard>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>

    <section className="py-16 bg-hero-gradient">
      <div className="container text-center">
        <AnimatedSection>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground">Our some new Projects</h2>
          <Link to="/contact" className="inline-flex items-center gap-2 mt-6 rounded-lg bg-accent px-7 py-3.5 font-semibold text-accent-foreground hover:opacity-90 transition-opacity shadow-lg">
            Discuss Your Project <ArrowRight className="h-4 w-4" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  </>
);

export default Expertise;
