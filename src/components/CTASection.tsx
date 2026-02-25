import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  to?: string;
}

const CTASection = ({
  title = "Need a Custom Chiller Solution?",
  subtitle = "Our engineering team can design a cooling system tailored to your specific requirements.",
  buttonText = "Request a Quote",
  to = "/contact/enquiry",
}: CTASectionProps) => (
  <section className="py-16 bg-hero-gradient">
    <div className="container text-center">
      <AnimatedSection>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground">
          {title}
        </h2>
        <p className="mt-3 text-primary-foreground/70 max-w-lg mx-auto">{subtitle}</p>
        <Link
          to={to}
          className="inline-flex items-center gap-2 mt-6 rounded-lg bg-[hsl(var(--industrial-orange))] px-7 py-3.5 font-semibold text-white hover:opacity-90 transition-opacity shadow-lg"
        >
          {buttonText} <ArrowRight className="h-4 w-4" />
        </Link>
      </AnimatedSection>
    </div>
  </section>
);

export default CTASection;
