import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";

const Mission = () => (
  <>
    <PageHero title="The Mission of Drycool Systems" subtitle="Our purpose and core mission" />

    <section className="py-20">
      <div className="container">
        <AnimatedSection>
          <SectionHeading title="The Mission of Drycool Systems" centered={false} />
          <p className="text-muted-foreground leading-relaxed">
            Drycool Systems is having a mission that completely highlights the major reason and the purpose of the company. The mission of the company is inspired by various creative values, movements of optimism, and innovation in the construction of equipment management. We ensure to offer the best possible services and be the best chiller supplier in India. We are completely determined to offer industrial chillers with high-end quality to increase the productivity of every industry and serve every organization.
          </p>
        </AnimatedSection>
      </div>
    </section>
  </>
);

export default Mission;
