import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";

const screwProducts = [
  {
    title: "Air Cooled Screw Chiller",
    to: "/products/air-cooled-screw-chiller",
    image: "https://www.drycoolchillers.com/wp-content/uploads/2015/11/Slide011.jpg",
  },
  {
    title: "Water Cooled Screw Chiller",
    to: "/products/water-cooled-screw-chiller",
    image: "https://drycoolchillers.com/wp-content/uploads/2015/10/Single-Water-Cooled-Screw-Chiller.jpg",
  },
  {
    title: "Inverter Screw Chiller",
    to: "/products/inverter-screw-chiller",
    image: "https://www.drycoolchillers.com/wp-content/uploads/2015/10/Multiple-Water-Cooled-Screw-Chiller-1-2.jpg",
  },
  {
    title: "Buy VFD Chiller",
    to: "/products/air-cooled-vfd-screw-chiller",
    image: "https://www.drycoolchillers.com/wp-content/uploads/2015/10/Multiple-Water-Cooled-Screw-Chiller-2-1.jpg",
  },
];

const ScrewChillers = () => (
  <>
    <PageHero title="Screw Chillers" subtitle="Industrial Screw Chiller Manufacturer in India" />

    <section className="py-20">
      <div className="container">
        <AnimatedSection>
          <SectionHeading title="Screw Chiller" />
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {screwProducts.map((p, i) => (
            <AnimatedSection key={p.to} delay={i * 0.1}>
              <Link to={p.to} className="group block rounded-2xl overflow-hidden border border-border bg-card shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                </div>
                <div className="p-6 flex items-center justify-between">
                  <h3 className="font-heading text-lg font-bold text-foreground group-hover:text-industrial-orange transition-colors">{p.title}</h3>
                  <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-industrial-orange group-hover:translate-x-1 transition-all" />
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Enrichment */}
    <section className="py-20">
      <div className="container space-y-12">
        <AnimatedSection>
          <SectionHeading title="Understanding Screw Chiller Technology" centered={false} />
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Screw chillers represent the workhorse of industrial cooling, utilizing twin rotary screw compressors that deliver exceptional reliability and efficiency across a wide range of cooling capacities. Unlike reciprocating systems, screw compressors operate with continuous rotary motion, producing smoother refrigerant flow with minimal vibration and noise. This makes them ideal for applications requiring high-capacity cooling in environments where operational quietness and mechanical reliability are paramount.
            </p>
            <p>
              Drycool Systems manufactures screw chillers in both air-cooled and water-cooled configurations, with cooling capacities ranging from 30 TR to 1800 TR. Our systems incorporate premium compressors from globally recognized manufacturers including Bitzer and Frascold, paired with high-efficiency shell-and-tube heat exchangers designed for maximum thermal transfer with minimum pressure drop. The result is a chiller system that delivers superior energy performance while maintaining reliable operation across demanding industrial environments.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <SectionHeading title="VFD Technology & Energy Savings" centered={false} />
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Our inverter and VFD screw chiller range represents the cutting edge of energy-efficient cooling. By modulating compressor speed to precisely match the instantaneous cooling demand, variable frequency drive technology eliminates the energy waste associated with fixed-speed compressor cycling. Facilities installing Drycool VFD screw chillers typically achieve energy savings of 30 to 50 percent compared to conventional fixed-speed systems, with investment payback periods often under three years depending on operating hours and utility tariffs.
            </p>
            <p>
              Advanced microprocessor-based control systems monitor and optimize every aspect of chiller operation including compressor loading, condenser fan staging, evaporator approach temperatures, and oil management. Built-in diagnostics and trending capabilities enable facility operators to track performance metrics over time, identify efficiency degradation early, and schedule preventive maintenance proactively. Remote monitoring connectivity allows our service team to provide technical support and performance optimization assistance without the delays and costs of on-site visits.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <SectionHeading title="Applications & Industry Solutions" centered={false} />
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Drycool screw chillers serve critical cooling functions across diverse industry sectors including commercial HVAC for office buildings, hotels, and hospitals; process cooling for chemical plants, pharmaceutical manufacturing, and food processing; and specialized applications such as concrete batching plant cooling, brewery fermentation temperature control, and data center thermal management. Each application benefits from our ability to customize system specifications to match exact process requirements.
            </p>
            <p>
              Our engineering team provides comprehensive project support from initial cooling load calculations and equipment selection through installation supervision, commissioning, and ongoing maintenance. With ISO 9001:2008 certified manufacturing, rigorous factory testing exceeding 48 hours per unit, and a nationwide service network, Drycool screw chillers deliver the performance, reliability, and support that industrial facilities demand for their most critical cooling applications.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>

    <section className="py-16 bg-teal-gradient">
      <div className="container text-center">
        <AnimatedSection>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground">Need a Screw Chiller?</h2>
          <p className="mt-3 text-primary-foreground/70 max-w-lg mx-auto">Contact us for the best pricing and custom configurations.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 mt-6 rounded-lg bg-accent px-7 py-3.5 font-semibold text-accent-foreground hover:opacity-90 transition-opacity shadow-lg">
            Get a Quote <ArrowRight className="h-4 w-4" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  </>
);

export default ScrewChillers;
