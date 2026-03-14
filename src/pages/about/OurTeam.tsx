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
  </>
);

export default OurTeam;
