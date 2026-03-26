import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";

const introText = [
  "We Design and Manufacture Reciprocating chillers nipping shops up to (-) 40 Deg C, The System is designed in agreement with rearmost National and International norms.",
  "We offer a range of Packaged Reciprocating Bite/ nipping Factories with Air cooled/ Water Cooled Type condensers, deep, Semi-Hermetic, Open Type Reciprocating, etc. type compressors, Evaporators, repaying Chillers Complete Control Panel, Expansion Valves, Electrical Panels with Complete Interlocking Systems and fault suggestion. The Packaged Chillers are tested for further than 48 hours under our strict quality control System. Physical examination and performance run trial of Packaged Chillers, is always claimed to the customer before dispatch.",
  "You would know our character among the stylish service providers for large-scale artificial or lower-packed chillers in India. We've been one of the forerunners in bringing the domestic request transnational norms of Industrial Reciprocating Chillers; Indian diligence and manufacturing companies taking our numerous unique digitalization and customizing services. We aren't only among the most prestigious names as manufacturers of repaying chillers in India, but our credentials and moxie reach well beyond Indian props.",
  "For all your conditions in packaged chillers, or custom design and installation of the most effective and cost-effective reciprocating chillers and cooling units; Drycool Systems will be your most willing seller and service provider. communicate with us in case you're installing new reciprocating chillers or packaged chillers units, or looking for service providers and repaying bite manufacturers to contemporize and upgrade your old units.",
  "We ensure customized services, and can insure you the stylish quality, service guarantee, and pricing for all nipping halls and artificial cooling results and indeed give small-scale repaying chillers! Indian companies bear a flexible service provider and a tone- manufacturing brand; and at Drycool Systems, we're about to bring unique results for this new age in Indian industrialization and profitable bounty.",
  "Optimum Operating Parameters With Drycool Chillers Capacities, Temperature, Refrigerant and the choice of ancillaries can be acclimatized to individual conditions. Variable Packaged Contents Dependent on the client's wishes the Packaged can include factors say for illustration the Compressor, Drive Motors, Pumps, Panels etc.",
  "Compact Package Drycool Systems Packages are delivered complete with the internal pipeline, instrumentation, and jotting and ready for connection to the client system incontinently on appearance at the point. Simple Operating System All Operation and conservation rudiments are accessible from one side for easy operation and conservation. On-Site Utilities Drycool Systems Packages doesn't bear any point and are Ready to use type.",
];

const recipProducts = [
  {
    title: "Water Cooled Reciprocating Chillers",
    to: "/products/water-cooled-reciprocating-chillers",
    image: "https://www.drycoolchillers.com/wp-content/uploads/2023/01/water-cooled-reciprocating-chillers.jpg",
  },
  {
    title: "Air Cooled Reciprocating Chillers",
    to: "/products/air-cooled-reciprocating-chillers",
    image: "https://www.drycoolchillers.com/wp-content/uploads/2023/01/air-cooled-reciprocating-chillers.jpg",
  },
  {
    title: "Industrial Reciprocating Chillers",
    to: "/products/industrial-reciprocating-chillers",
    image: "https://www.drycoolchillers.com/wp-content/uploads/2023/01/industrial-reciprocating-chillers.jpg",
  },
];

const ReciprocatingChillers = () => (
  <>
    <PageHero title="Reciprocating Chiller" subtitle="Reciprocating Chiller Manufacturer in India" />

    <section className="py-20">
      <div className="container max-w-4xl">
        <AnimatedSection>
          <SectionHeading title="Reciprocating Chiller" />
          {introText.map((p, i) => (
            <p key={i} className="text-muted-foreground leading-relaxed mb-4">{p}</p>
          ))}
        </AnimatedSection>

        <div className="my-10">
          <img
            src="https://www.drycoolchillers.com/wp-content/uploads/2015/10/Single-Air-Cooled-Screw-Chiller.jpg"
            alt="Reciprocating Chiller"
            className="w-full rounded-2xl shadow-lg"
            loading="lazy"
          />
        </div>
      </div>
    </section>

    <section className="py-16 bg-muted/30">
      <div className="container">
        <AnimatedSection>
          <SectionHeading title="Our Reciprocating Chiller Range" />
        </AnimatedSection>
        <div className="grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {recipProducts.map((p, i) => (
            <AnimatedSection key={p.to} delay={i * 0.1}>
              <Link to={p.to} className="group block rounded-2xl overflow-hidden border border-border bg-card shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                </div>
                <div className="p-5 flex items-center justify-between">
                  <h3 className="font-heading text-base font-bold text-foreground group-hover:text-industrial-orange transition-colors">{p.title}</h3>
                  <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-industrial-orange transition-colors" />
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    <section className="py-16 bg-hero-gradient">
      <div className="container text-center">
        <AnimatedSection>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground">Need a Reciprocating Chiller?</h2>
          <Link to="/contact" className="inline-flex items-center gap-2 mt-6 rounded-lg bg-accent px-7 py-3.5 font-semibold text-accent-foreground hover:opacity-90 transition-opacity shadow-lg">
            Contact Us <ArrowRight className="h-4 w-4" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  </>
);

export default ReciprocatingChillers;
