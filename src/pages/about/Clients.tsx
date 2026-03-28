import SectionHeading from "@/components/SectionHeading";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";

const clientCategories = [
  {
    category: "Chemicals & Fertilizers",
    clients: ["Hindustan Insecticide Ltd. (H.O. - New Delhi)", "R.P. Chemicals Ltd. (Goa)", "Hindustan Fluorocarbons Ltd. (Hyderabad)", "Indo-Gulf Fertilizers & Chemicals (Lucknow)"]
  },
  {
    category: "Pharmaceuticals",
    clients: ["Piramal Health Care Ltd.", "Dr. Reddy's Lab (A.P.)", "Ankur Drugs & Pharma (Baddi)", "Venus Pharma (Baddi)"]
  },
  {
    category: "Engineering & Plastic",
    clients: ["Supreme Industries Ltd. (H.O. - Mumbai)", "Essen Deinki (Chandigarh)", "Nilkamal Plastics Ltd. (Pondicherry)", "Bajaj Auto Ltd. (New Delhi)"]
  },
  {
    category: "Automotive & Mechanical",
    clients: ["TATA Motors Ltd. (Lucknow)", "Ashok Leyland Ltd. (Chennai)", "Hero Moto Corp Ltd. (Gurgaon)", "Honda Cars India Ltd. (Noida)"]
  },
  {
    category: "Commercial Air Conditioning",
    clients: ["Voltas Ltd. (H.O. - Mumbai)", "Blue Star Ltd. (New Delhi)", "Carrier Aircon Ltd. (Gurgaon)", "Daikin Airconditioning India (Noida)"]
  },
  {
    category: "Rice & Other Mills",
    clients: ["LT Foods Ltd. (Daawat Rice)", "KRBL Ltd. (India Gate Rice)", "Satnam Overseas (H.O. - New Delhi)", "Amira Pure Foods (Gurgaon)"]
  }
];

const Clients = () => (
  <>
    <PageHero 
      title="Our Clients" 
      subtitle="Trusted by Industry Leaders Worldwide" 
      backgroundImage="https://drycoolchillers.com/wp-content/uploads/2013/08/about2.jpg"
    />

    <section className="py-20">
      <div className="container">
        <AnimatedSection>
          <SectionHeading title="Global Client Base" centered={true} />
          <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-16">
            We take pride in serving some of the most prestigious names across diverse industries globally. Our commitment to quality and service has earned us the trust of market leaders.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clientCategories.map((cat, idx) => (
            <AnimatedSection key={idx} delay={idx * 0.1}>
              <div className="h-full p-8 rounded-2xl bg-card border border-border/50 shadow-xl hover:border-accent/40 transition-all group">
                <div className="mb-6 inline-flex items-center justify-center p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-accent/10 group-hover:text-accent transition-colors">
                  <span className="font-bold text-sm tracking-wider uppercase">{cat.category}</span>
                </div>
                <ul className="space-y-3">
                  {cat.clients.map((client, cIdx) => (
                    <li key={cIdx} className="flex items-start gap-2 text-muted-foreground group-hover:text-foreground transition-colors">
                      <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
                      <span className="text-sm leading-relaxed">{client}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 bg-section-gradient">
      <div className="container text-center">
        <AnimatedSection>
          <SectionHeading title="And Many More..." centered={true} />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our portfolio includes over 2000+ satisfied clients across 32+ countries in sectors ranging from Food Processing and Textiles to IT and Construction.
          </p>
        </AnimatedSection>
      </div>
    </section>

    {/* Enrichment */}
    <section className="py-20">
      <div className="container space-y-12">
        <AnimatedSection>
          <SectionHeading title="Trusted Across Diverse Industries" centered={false} />
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              The breadth of Drycool Systems' client portfolio reflects our versatility in delivering cooling solutions tailored to the unique demands of each industry sector. In the chemicals and fertilizers segment, our chillers support critical process cooling for reaction temperature control, product crystallization, and solvent recovery operations. Our equipment is designed to handle aggressive chemical environments with corrosion-resistant materials and specialized heat exchanger configurations.
            </p>
            <p>
              Pharmaceutical clients choose Drycool for our ability to deliver GMP-compliant cooling systems with precise temperature control, comprehensive validation documentation, and clean-room compatible installation capabilities. Our systems support drug manufacturing processes including API synthesis, tablet coating, lyophilization, and cold storage, where temperature accuracy directly impacts product quality and regulatory compliance.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <SectionHeading title="Engineering & Automotive Sector Partnerships" centered={false} />
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Our partnerships with major engineering and automotive companies demonstrate our capability to deliver high-capacity, high-reliability cooling systems for demanding manufacturing environments. Automotive manufacturing plants require consistent cooling for CNC machining operations, hydraulic press cooling, paint shop temperature control, and testing facility climate management — all areas where Drycool has proven expertise and track record.
            </p>
            <p>
              The commercial air conditioning sector trusts Drycool as a reliable OEM partner for chiller supply and system integration. Our collaborative relationships with leading HVAC brands enable us to deliver complete cooling solutions for large commercial projects including shopping malls, corporate office complexes, hospital campuses, and hotel chains across India and international markets.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <SectionHeading title="Long-Term Client Relationships & Support" centered={false} />
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              What distinguishes Drycool Systems in the competitive chiller market is not just the quality of our products but the depth and continuity of our client relationships. Many of our key clients have been partnering with us for over a decade, continuously expanding their cooling infrastructure with Drycool equipment based on the consistent performance and responsive service they have experienced. This repeat business from industry leaders is the strongest endorsement of our commitment to quality and customer satisfaction.
            </p>
            <p>
              Our dedicated key account management team ensures that major clients receive personalized attention for their cooling requirements, from initial consultation and system design through installation supervision, commissioning, and ongoing maintenance support. This comprehensive approach has made Drycool the preferred chiller partner for organizations that prioritize operational reliability and long-term equipment value.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  </>
);

export default Clients;
