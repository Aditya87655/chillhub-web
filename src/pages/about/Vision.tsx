import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";

const Vision = () => (
  <>
    <PageHero title="The Vision of Drycool Systems" subtitle="Our vision for sustainable growth" />

    <section className="py-20">
      <div className="container">
        <AnimatedSection>
          <SectionHeading title="The Vision of Drycool Systems" centered={false} />
          <p className="text-muted-foreground leading-relaxed">
            We are determined to serve as the framework to increase sustainable growth and also it objectively describes the business. Drycool Systems is having the vision of threefold duty for portfolio, people, and productivity which will help us to have the most effective and progressive organization.
          </p>
        </AnimatedSection>
      </div>
    </section>
  </>
);

export default Vision;
