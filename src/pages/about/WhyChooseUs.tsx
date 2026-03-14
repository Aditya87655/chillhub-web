import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";

const WhyChooseUs = () => (
  <>
    <PageHero title="Reason to Choose Drycool Systems" subtitle="Why we are the leading choice" />

    <section className="py-20">
      <div className="container">
        <AnimatedSection>
          <SectionHeading title="Reason to Choose Drycool Systems" centered={false} />
          <p className="text-muted-foreground leading-relaxed mb-4">
            We are always having the age of our competitors in the market as we are offering various attributes which we have mentioned below.
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2">
            <li>Prompt delivery</li>
            <li>Reliability</li>
            <li>Ethical business policies</li>
            <li>Unmatched quality equipment</li>
            <li>Complete customer satisfaction</li>
            <li>High Team spirit.</li>
          </ul>
        </AnimatedSection>
      </div>
    </section>
  </>
);

export default WhyChooseUs;
