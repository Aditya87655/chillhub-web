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
  </>
);

export default Clients;
