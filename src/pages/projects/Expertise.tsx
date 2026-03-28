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

    {/* Enrichment */}
    <section className="py-20 bg-section-gradient">
      <div className="container space-y-12">
        <AnimatedSection>
          <SectionHeading title="Deep Industry Knowledge & Technical Mastery" centered={false} />
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Our expertise in industrial cooling extends across a comprehensive range of applications, from high-precision pharmaceutical process cooling to heavy-duty petrochemical and refinery installations. Each project benefits from our team's accumulated knowledge of industry-specific requirements, including regulatory compliance, material compatibility, safety standards, and operational best practices. This deep domain expertise enables us to anticipate potential challenges and design solutions that address them proactively.
            </p>
            <p>
              In the food processing and beverage industry, our cooling systems support critical operations including product chilling, fermentation temperature control, blast freezing, and cold storage maintenance. Our engineers understand the stringent hygiene requirements and temperature precision demanded by food safety regulations, designing systems with sanitary construction features, food-grade fluid compatibility, and fail-safe temperature controls that protect product quality.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <SectionHeading title="From Concept to Commissioning" centered={false} />
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              The Drycool project execution methodology follows a structured five-phase approach: conceptualization, detailed engineering, manufacturing and procurement, installation and commissioning, and post-handover support. Each phase includes defined deliverables, quality checkpoints, and client approval milestones that ensure the project stays on track and the final installation meets all performance specifications and operational requirements.
            </p>
            <p>
              Our manufacturing expertise allows us to control quality at every stage of equipment production, from raw material inspection and precision fabrication through assembly, wiring, refrigerant charging, and factory performance testing. This vertical integration eliminates quality risks associated with outsourced manufacturing and enables faster delivery timelines for even the most complex custom-engineered cooling systems.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <SectionHeading title="Continuous Improvement & Innovation" centered={false} />
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Drycool Systems continually invests in expanding our engineering expertise through staff training, technology partnerships, and participation in international HVAC conferences and exhibitions. Our R&D team evaluates emerging technologies including magnetic bearing compressors, absorption chillers, and district cooling systems to broaden our solution portfolio and address evolving market demands for higher efficiency and lower environmental impact cooling technologies.
            </p>
            <p>
              This commitment to continuous improvement ensures that our clients always have access to the most advanced and cost-effective cooling solutions available. Whether the challenge is reducing energy consumption in an existing facility, designing a zero-emission cooling plant for a green building project, or engineering a custom chiller for a unique industrial process, Drycool Systems has the expertise and manufacturing capability to deliver outstanding results.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>

    <section className="py-16 bg-teal-gradient">
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
