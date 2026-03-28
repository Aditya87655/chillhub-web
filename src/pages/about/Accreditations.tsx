import SectionHeading from "@/components/SectionHeading";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";

const Accreditations = () => (
  <>
    <PageHero 
      title="Accreditations" 
      subtitle="International Recognition for Manufacturing Standards" 
      backgroundImage="https://drycoolchillers.com/wp-content/uploads/2015/10/association.jpg"
    />

    <section className="py-20">
      <div className="container">
        <AnimatedSection>
          <SectionHeading title="Accreditations" centered={false} />
          <div className="space-y-6 text-muted-foreground leading-relaxed max-w-4xl">
            <p className="text-xl text-primary font-medium">
              Drycool Systems exports its products to over 50 countries including European Union and United States.
            </p>
            <p>
              We also handle projects in many countries particularly of large sizes as well as for various highly customised applications, like Oil & Gas, Concrete, Beverages, Pharmaceuticals, Chemicals etc.
            </p>
            <p>
              We are accredited with UL, ISO 14001:2004 and ISO 9001:2008 certifications, as well as are approved through various prestigious consultants and certifying bodies for specific and peculiar process cooling applications across the world.
            </p>
            <p>
              The design, fabrication, assembly and testing procedures at our factories conform to HTRI, ASME Section VIII/IX, TEMA C/B/R, SHELL DEP and ATEX standards, for an extensive set of specifications of the equipments and installations.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>

    <div className="container"><div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" /></div>

    <section className="py-20 bg-section-gradient">
      <div className="container">
        <AnimatedSection>
          <SectionHeading title="Certified Quality Standards" centered={false} />
          <p className="text-muted-foreground mb-12 max-w-2xl">
            In our design and manufacturing we strictly follow according to the following standards, associations and directories:
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              "HTRI", "ASME", "TEMA", "AHRI", "ISHRAE", 
              "ASHRAE", "CE", "EUROVENT", "ISO", "MSME"
            ].map((name, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <div className="aspect-video flex items-center justify-center p-6 rounded-xl bg-card border border-border/50 shadow-sm hover:border-accent/50 transition-colors group">
                  <span className="text-2xl font-bold text-muted-foreground/60 group-hover:text-primary transition-colors">{name}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>

    {/* Enrichment */}
    <section className="py-20">
      <div className="container space-y-12">
        <AnimatedSection>
          <SectionHeading title="International Standards & Compliance" centered={false} />
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Drycool Systems' commitment to international quality standards is demonstrated through comprehensive accreditations that span design, fabrication, testing, and environmental management. Our ISO 9001:2008 certification ensures that every manufacturing process follows documented quality procedures with full traceability from raw material procurement through final product testing and delivery. The ISO 14001:2004 environmental management certification reflects our dedication to minimizing the environmental impact of our manufacturing operations.
            </p>
            <p>
              Our UL listing and CE marking certify that our chiller products meet the rigorous safety and performance requirements of North American and European markets respectively. These certifications involve periodic factory audits, product testing by independent laboratories, and ongoing compliance monitoring to ensure that every unit shipped carries the assurance of internationally recognized quality standards.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <SectionHeading title="Engineering Standards in Manufacturing" centered={false} />
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Our design and fabrication processes conform to ASME Section VIII for pressure vessel construction and ASME Section IX for welding qualifications, ensuring structural integrity under demanding operating conditions. Heat exchanger designs follow TEMA (Tubular Exchanger Manufacturers Association) standards in C, B, and R classifications to match application severity. HTRI (Heat Transfer Research Inc.) validated thermal designs guarantee that our heat exchangers deliver specified performance across the full operating range.
            </p>
            <p>
              For installations in hazardous environments, our equipment complies with ATEX directives for explosion-proof construction. Shell DEP (Design and Engineering Practice) standards are followed for projects in the oil and gas sector, ensuring compatibility with the stringent requirements of major energy companies. AHRI certification provides independent third-party verification of chiller performance ratings, giving our clients confidence that published specifications accurately reflect real-world performance.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <SectionHeading title="Industry Associations & Recognition" centered={false} />
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Drycool Systems maintains active membership in leading industry bodies including ISHRAE (Indian Society of Heating, Refrigerating and Air Conditioning Engineers) and follows ASHRAE guidelines for system design and energy performance. Our participation in EUROVENT certification programs ensures that our products meet European market standards for energy efficiency and performance classification.
            </p>
            <p>
              Recognition from MSME (Micro, Small and Medium Enterprises) underscores our contribution to India's industrial manufacturing sector. These accreditations collectively demonstrate that Drycool Systems operates at the highest levels of engineering competence, quality assurance, and environmental responsibility, providing our clients with the confidence to specify our products for critical cooling applications in any regulatory environment worldwide.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>

    <section className="py-16 bg-teal-gradient">
      <div className="container text-center">
        <AnimatedSection>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground">Global Presence</h2>
          <p className="mt-3 text-primary-foreground/70 max-w-lg mx-auto">Exporting excellence to over 32 countries with world-class engineering standards.</p>
        </AnimatedSection>
      </div>
    </section>
  </>
);

export default Accreditations;
