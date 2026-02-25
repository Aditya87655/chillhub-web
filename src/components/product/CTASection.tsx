import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";

interface CTASectionProps {
  title: string;
}

const CTASection = ({ title }: CTASectionProps) => (
  <section className="py-20">
    <div className="container">
      <AnimatedSection>
        <div className="rounded-2xl bg-primary p-10 text-center shadow-2xl md:p-16">
          <h2 className="text-3xl font-bold text-primary-foreground md:text-4xl">Need {title} Support?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/80">
            Share your process duty conditions and utility profile. Our engineering team will deliver a suitable industrial cooling configuration.
          </p>
          <Link
            to="/contact/enquiry"
            className="mt-8 inline-flex rounded-lg bg-[#f97316] px-8 py-3.5 font-semibold text-white shadow-lg shadow-orange-500/30 transition-all hover:-translate-y-0.5 hover:bg-[#ea580c]"
          >
            Get a Detailed Quote
          </Link>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default CTASection;
