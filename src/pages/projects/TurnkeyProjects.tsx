import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import GlassCard from "@/components/GlassCard";

const adaniActivities = [
  "We Installed 240 TR ( Nominal Capacity) screw chiller, evaporative condenser, pumps, MCC panels, PLC panels.",
  "Process & Hydraulic Design of Complete Industrial Process Cooling Package.",
  "Sizing of equipment's / auxiliaries & Piping system within Package Battery Limit.",
  "Selection and process design of internals to meet the performance guarantee.",
  "Mechanical Design & Structural design of equipment's / auxiliaries & piping supports within Package Battery Limit.",
  "Complete Engineering activities including piping routing, preparation of isometrics, stress analysis, design of supports, furnishing the pipe support foundation loads, Piping MTO for fabrication, etc.",
  "Procurement of raw materials including bought out items & fabrication of package in compliance with project requirements.",
  "Design of Anchor Bolts (Nos., location & size)",
  "Participation in Kick off meeting, Design review, HAZOP, SIL review, Model Review meeting.",
  "Assembly of all items in Package as per requisition from client",
  "Drawings and documentation for clients.",
  "Pickling & Passivation for stainless steel material and welds wherever applicable",
  "Positive Material Identification (PMI) for stainless steel and high alloy materials",
  "Performance Guarantees and Mechanical Warrantees as per Project Specifications.",
  "Mechanical / Performance Test for equipment within Package as per Drycool approved ITP / QAP.",
  "Factory acceptance test, Complete unit tests, Noise, and vibration test for compressors, Pumps as per ITP",
  "Manufacturing and assembly",
  "Third party verification and certification for bought out items.",
  "Inspection, Testing & Non-Destructive Examination (NDE) in accordance with Drycool QAP.",
  "Hydrotest of Equipment & piping",
  "Delivery and transport documentation",
  "Supervision during installation, pre-commissioning, commissioning & Performance Guarantee test at site.",
  "Adjustment and/or alignment of work.",
];

const TurnkeyProjects = () => (
  <>
    <PageHero 
      title="Turnkey Projects" 
      subtitle="Complete turnkey Project for setting up of chilling plants" 
    />

    <section className="py-20">
      <div className="container text-center max-w-4xl">
        <AnimatedSection>
          <SectionHeading 
            title="Chiller Turnkey Projects" 
            subtitle="Expertise in industrial and commercial refrigeration"
          />
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            We have executed several turnkey projects in industrial and commercial refrigeration ranging from 30 TR – 4500 TR refrigeration capacity. We do turnkey projects for chillers in India. We are experts to do complete projects to set up a chiller plant.
          </p>
        </AnimatedSection>
      </div>
    </section>

    <div className="container">
      <div className="relative rounded-3xl overflow-hidden aspect-[21/9] shadow-2xl mb-20">
        <img 
          src="https://www.drycoolchillers.com/wp-content/uploads/2023/01/turnkey-project-for-chiller.png" 
          alt="Turnkey Projects Overview"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-12">
          <p className="text-white text-xl font-medium max-w-2xl">
            "We specialize in undertaking global turnkey projects for setting up of chilling plants & chilled water systems starting from concept to commissioning."
          </p>
        </div>
      </div>
    </div>

    <section className="py-20 bg-section-gradient">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <AnimatedSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-6">Adani Turnkey Project 2022</h2>
            <h3 className="font-heading text-xl font-semibold text-accent mb-8">We Successfully Completed Our turnkey project for Adani Group</h3>
            <div className="space-y-3">
              {adaniActivities.slice(0, 12).map((activity, i) => (
                <div key={i} className="flex gap-3 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-5 w-5 text-accent shrink-0" />
                  <span>{activity}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="space-y-3 lg:mt-20">
              {adaniActivities.slice(12).map((activity, i) => (
                <div key={i} className="flex gap-3 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-5 w-5 text-accent shrink-0" />
                  <span>{activity}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>

    <section className="py-20">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-8">
          <AnimatedSection>
            <div className="space-y-6">
              <h2 className="font-heading text-3xl font-bold text-foreground">Our Turnkey Projects in Moon Beverages</h2>
              <p className="text-muted-foreground leading-relaxed">
                We installed 700 TR Water Cooled VFD Screw Chiller Complete Project including Cooling towers, Pumps, MCC Panels, PLC panel with Piping in Moon Beverages (COCA COLA).
              </p>
              <div className="relative rounded-2xl overflow-hidden aspect-video shadow-lg">
                <img 
                  src="https://www.drycoolchillers.com/wp-content/uploads/2023/09/Moon-Beverages-turnkey-works.png" 
                  alt="Moon Beverages Project"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="space-y-6">
              <h2 className="font-heading text-3xl font-bold text-foreground">Global Reach</h2>
              <p className="text-muted-foreground leading-relaxed">
                We specialize in undertaking global turnkey projects for setting up of chilling plants & chilled water systems. We have executed several large projects – many of them on turnkey basis – valuing even more than 8 crores (INR).
              </p>
              <div className="relative rounded-2xl overflow-hidden aspect-video shadow-lg">
                <img 
                  src="https://www.drycoolchillers.com/wp-content/uploads/2015/10/ChillPlantRoom.png" 
                  alt="Global Project Execution"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>

    <section className="py-16 bg-hero-gradient">
      <div className="container text-center">
        <AnimatedSection>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground">Start Your Turnkey Project</h2>
          <Link to="/contact" className="inline-flex items-center gap-2 mt-6 rounded-lg bg-accent px-7 py-3.5 font-semibold text-accent-foreground hover:opacity-90 transition-opacity shadow-lg">
            Discuss Your Project <ArrowRight className="h-4 w-4" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  </>
);

export default TurnkeyProjects;
