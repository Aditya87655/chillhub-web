import SectionHeading from "@/components/SectionHeading";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";

const OurTeam = () => (
  <>
    <PageHero 
      title="Our Team" 
      subtitle="The Experts Driving Innovation in Cooling Technology" 
      backgroundImage="https://www.drycoolchillers.com/wp-content/uploads/2022/09/WhatsApp-Image-2022-09-16-at-4.48.30-PM-3.jpeg"
    />

    <section className="py-20">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <SectionHeading title="The Team of Drycool Systems" centered={false} />
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Drycool Systems is one of the best chiller manufacturer in India for commercial refrigeration and industrial sectors. We are equipped with the state of the art infrastructure and MEP designers with more than 25 years of experience.
              </p>
              <p>
                Here, at Drycool we are empowering latest innovations in smart technology to mitigate climate changes, eliminate electricity deficit, improve the environment, generate great returns and manufacture world class equipment and contractual energy Management.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-border/50">
              <img 
                src="https://www.drycoolchillers.com/wp-content/uploads/2022/09/WhatsApp-Image-2022-09-16-at-4.48.30-PM-3.jpeg" 
                alt="Drycool Systems Team" 
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>

    <div className="container"><div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" /></div>

    <section className="py-20 bg-section-gradient">
      <div className="container">
        <AnimatedSection>
          <SectionHeading title="Our Experts" centered={true} />
        </AnimatedSection>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-12">
          {[
            "Marketing and sales experts",
            "Expert Engineers",
            "Procurement agent",
            "Quality assurance and quality control team members",
            "Researchers",
            "Technicians"
          ].map((expert, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="p-6 rounded-xl bg-card border border-border/50 shadow-lg text-center hover:border-accent/40 transition-colors">
                <p className="font-heading font-semibold text-foreground">{expert}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Enrichment */}
    <section className="py-20">
      <div className="container space-y-12">
        <AnimatedSection>
          <SectionHeading title="Building Expertise Through Collaboration" centered={false} />
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              The strength of Drycool Systems lies in the collective expertise of a team that brings together decades of experience across mechanical engineering, refrigeration science, electrical system design, and industrial project management. Our engineers hold specialized qualifications in HVAC system design and are continuously updated on the latest developments in compressor technology, heat exchanger optimization, and energy-efficient control strategies.
            </p>
            <p>
              Our marketing and sales team operates with deep technical knowledge, enabling them to understand complex client requirements and translate them into precise engineering specifications. This technical sales capability ensures that every project proposal is accurately scoped, competitively priced, and aligned with the client's operational objectives, whether the requirement is for a single compact chiller or a multi-unit industrial cooling plant.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <SectionHeading title="Service Excellence & Field Operations" centered={false} />
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Our service and maintenance team comprises factory-trained technicians stationed across India's major industrial regions, providing rapid response capabilities for both scheduled maintenance and emergency breakdown situations. Each technician undergoes rigorous training on all chiller types in our product portfolio, including screw, scroll, and reciprocating compressor systems, ensuring competent and efficient service delivery regardless of equipment configuration.
            </p>
            <p>
              The procurement and supply chain team maintains strategic relationships with leading component manufacturers worldwide, ensuring the availability of genuine spare parts and high-quality raw materials essential for maintaining our production schedules and quality standards. Our quality control specialists conduct incoming material inspections, in-process quality checks, and final product verification testing to uphold the zero-defect manufacturing philosophy that defines Drycool Systems.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <SectionHeading title="Continuous Learning & Growth Culture" centered={false} />
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Drycool Systems fosters a culture of continuous learning and professional development. Regular internal training programs, participation in industry conferences such as ISHRAE and ASHRAE events, and exposure to international best practices keep our workforce at the cutting edge of HVAC technology. Our research team actively explores emerging technologies including IoT-based chiller monitoring, artificial intelligence for predictive maintenance, and advanced refrigerants with lower environmental impact.
            </p>
            <p>
              This commitment to team development directly benefits our clients through higher quality products, more innovative solutions, and more responsive service. By investing in our people, we ensure that every interaction with Drycool Systems reflects our core values of technical excellence, customer commitment, and professional integrity.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  </>
);

export default OurTeam;
