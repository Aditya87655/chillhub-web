import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";

const Infrastructure = () => (
  <>
    <PageHero title="The Infrastructure of Drycool Systems" subtitle="Learn about our manufacturing capabilities" />

    <section className="py-20">
      <div className="container">
        <AnimatedSection>
          <SectionHeading title="The Infrastructure of Drycool Systems" centered={false} />
          <p className="text-muted-foreground leading-relaxed">
            We have progressed with great success in the competitive market by using our infrastructure which also includes the in-house design and manufacturing of the equipment. We are completely focused on offering high-end products to valuable customers which will give them ultimate satisfaction with our service. There are a few of the best components which are being used by the company for manufacturing cooling products which include double enhanced copper pipes, semi-hermetic screw compressor, microprocessor-based with the advance controlling, etc. Various components are also used by the company to be installed in various machines including building presses, welding machines, fabricating machines, drilling machines, milling machines, etc. We also offer customization on various parameters which include the uses of raw materials, along with the maintenance of proper design, shape, and size.
          </p>
        </AnimatedSection>
      </div>
    </section>
  </>
);

export default Infrastructure;
