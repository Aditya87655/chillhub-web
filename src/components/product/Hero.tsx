import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

interface HeroProps {
  title: string;
  subtitle: string;
  image: string;
  imageAlt: string;
}

const Hero = ({ title, subtitle, image, imageAlt }: HeroProps) => (
  <section className="bg-hero-gradient py-20 md:py-28">
    <div className="container grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
      <AnimatedSection>
        <p className="text-sm uppercase tracking-[0.25em] text-primary-foreground/70">Industrial Cooling</p>
        <h1 className="mt-4 text-4xl font-bold text-primary-foreground md:text-5xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-primary-foreground/80">{subtitle}</p>
        <div className="mt-9 flex flex-wrap gap-4">
          <Link
            to="/contact/enquiry"
            className="inline-flex items-center gap-2 rounded-lg bg-[#f97316] px-7 py-3.5 font-semibold text-white shadow-lg shadow-orange-500/30 transition-all hover:-translate-y-0.5 hover:bg-[#ea580c]"
          >
            Request Proposal <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to="/contact/address"
            className="inline-flex items-center rounded-lg border border-primary-foreground/30 px-6 py-3 text-primary-foreground transition-colors hover:bg-primary-foreground/10"
          >
            Contact Engineering
          </Link>
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.12}>
        <img
          src={image}
          alt={imageAlt}
          loading="lazy"
          className="h-[330px] w-full rounded-2xl object-cover shadow-2xl shadow-primary/40"
        />
      </AnimatedSection>
    </div>
  </section>
);

export default Hero;
