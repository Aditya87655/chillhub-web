import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";

const introText = [
  "A scroll chiller is a type of refrigeration system that uses a scroll compressor to compress the refrigerant and remove heat from a specific area or space. The system typically consists of a compressor, a condenser, an evaporator, and a refrigerant. We manufacture scroll chillers like water-cooled scroll chillers and air-cooled scroll chillers. The scroll compressor is a type of positive displacement compressor that uses two spiral-shaped scrolls, one fixed and one orbiting, to compress the refrigerant and move it through the system.",
  "One of the main advantages of a scroll chiller is its efficiency. Scroll compressors are known for their high coefficient of performance (COP), which means they can produce more cooling output per unit of energy input compared to other types of compressors. we are one of the best scroll chiller manufacturers in India. This can lead to significant energy savings over time, especially in large commercial or industrial settings where cooling demands are high.",
];

const aboutText = [
  "An industrial chiller is a type of refrigeration equipment that is used to cool large industrial processes or facilities. A scroll type industrial chiller, in particular, uses a scroll compressor to compress and circulate refrigerant throughout the system.",
  "The scroll compressor is a type of positive displacement compressor that uses two spiral-shaped elements, called scrolls, to compress the refrigerant. One scroll is stationary, while the other is attached to a moving mechanism that orbits around the stationary scroll. As the orbiting scroll moves, it draws in refrigerant and compresses it between the two scrolls. This compression process raises the temperature and pressure of the refrigerant, making it suitable for use in the cooling process.",
  "Scroll type industrial chillers are also designed to handle a wide range of refrigerants, including R-134a, R-407C, R-410A, and others, making them suitable for use in different types of industrial applications. They are also available in a variety of sizes and cooling capacities, from small portable units to large, industrial-scale systems.",
  "Another advantage of scroll chillers is their reliability. Scroll compressors have fewer moving parts than other types of compressors, which means they have less wear and tear and are less likely to break down. This can result in lower maintenance costs and fewer unexpected downtime.",
];

const applicationText = "In terms of applications, scroll chillers are used in a wide variety of settings, including commercial and industrial buildings, hospitals, hotels, and residential buildings. They are often used for air conditioning, process cooling, and refrigeration. Some examples include:";

const applications = [
  { title: "Air conditioning", desc: "Scroll chillers are used in large commercial and industrial buildings to cool the air in the building. They can also be used in residential buildings to cool individual rooms or apartments." },
  { title: "Process cooling", desc: "Scroll chillers are used in a variety of industrial settings to remove heat from process equipment, such as in chemical plants, food processing facilities, and manufacturing plants." },
  { title: "Refrigeration", desc: "Scroll chillers are used in commercial and industrial settings to keep food and other perishable items cold, such as in supermarkets, restaurants, and food processing facilities." },
];

const summaryText = [
  "Scroll chillers are also known for their low noise levels. Because scroll compressors have fewer moving parts and operate at slower speeds than other types of compressors, they tend to produce less noise. This makes them a good choice for applications where noise levels need to be kept to a minimum, such as in hospitals, hotels, and other commercial or residential buildings.",
  "The refrigerant then flows through a condenser, where it releases its heat to the surrounding air or water, and is cooled back down to a liquid state. It then passes through an expansion valve, which lowers the pressure and temperature of the refrigerant, causing it to expand and evaporate. This evaporated refrigerant then absorbs heat from the industrial process or facility being cooled, and the cycle repeats.",
  "One of the main advantages of scroll type industrial chillers is their high efficiency and reliability. The scroll compressor is a simple and robust design with few moving parts, which reduces the chances of mechanical failure and maintenance requirements. Additionally, the scroll compressor is able to achieve a high compression ratio with minimal leakage, which helps to improve the overall efficiency of the chiller system.",
  "Another advantage of scroll type industrial chillers is their ability to handle a wide range of cooling loads. The scroll compressor can easily adjust its compression ratio to match the cooling demand, which allows the chiller to operate efficiently at both full and partial loads. This is particularly useful for industrial processes or facilities that have varying cooling needs, such as a manufacturing facility that operates at different production levels throughout the day.",
  "In summary, scroll chillers are a type of refrigeration system that use a scroll compressor to compress refrigerant and remove heat from a specific area or space. They are known for their efficiency, reliability, and low noise levels, making them a good choice for a wide range of applications, including air conditioning, process cooling, and refrigeration in commercial, industrial, and residential settings.",
];

const scrollProducts = [
  { title: "Air Cooled Scroll chiller", to: "/products/air-cooled-scroll-chiller", image: "https://www.drycoolchillers.com/wp-content/uploads/2023/01/Air-cooled-scroll-chiller.jpg" },
  { title: "Water Cooled Scroll Chiller", to: "/products/water-cooled-scroll-chiller", image: "https://www.drycoolchillers.com/wp-content/uploads/2023/01/water-cooled-Scroll-chillers.jpg" },
  { title: "Inverter Scroll Chiller", to: "/products/inverter-scroll-chiller" },
];

const ScrollChillers = () => (
  <>
    <PageHero title="Scroll Chiller" subtitle="Scroll Chiller Manufacturer in India" />

    <section className="py-20">
      <div className="container max-w-4xl">
        <AnimatedSection>
          <SectionHeading title="Scroll Chiller" />
          {introText.map((p, i) => (
            <p key={i} className="text-muted-foreground leading-relaxed mb-4">{p}</p>
          ))}
        </AnimatedSection>

        <div className="my-10">
          <img src="https://www.drycoolchillers.com/wp-content/uploads/2023/01/Scroll-chiller.jpg" alt="Scroll Chiller" className="w-full rounded-2xl shadow-lg" loading="lazy" />
        </div>

        <AnimatedSection>
          <h2 className="font-heading text-2xl font-bold text-foreground mb-6">About Scroll Chiller</h2>
          {aboutText.map((p, i) => (
            <p key={i} className="text-muted-foreground leading-relaxed mb-4">{p}</p>
          ))}
        </AnimatedSection>

        <AnimatedSection>
          <h3 className="font-heading text-xl font-semibold text-foreground mt-10 mb-4">{applicationText}</h3>
          <div className="space-y-6">
            {applications.map((a) => (
              <div key={a.title}>
                <h4 className="font-heading text-lg font-bold text-industrial-orange mb-2">{a.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 gap-6 my-10">
          <img src="https://www.drycoolchillers.com/wp-content/uploads/2023/01/Air-cooled-scroll-chiller.jpg" alt="scroll chiller" className="w-full rounded-2xl shadow-lg" loading="lazy" />
          <img src="https://www.drycoolchillers.com/wp-content/uploads/2023/01/water-cooled-Scroll-chillers.jpg" alt="scroll chiller" className="w-full rounded-2xl shadow-lg" loading="lazy" />
        </div>

        <AnimatedSection>
          {summaryText.map((p, i) => (
            <p key={i} className="text-muted-foreground leading-relaxed mb-4">{p}</p>
          ))}
        </AnimatedSection>
      </div>
    </section>

    <section className="py-16 bg-muted/30">
      <div className="container">
        <AnimatedSection>
          <SectionHeading title="Our Scroll Chiller Range" />
        </AnimatedSection>
        <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {scrollProducts.map((p, i) => (
            <AnimatedSection key={p.to} delay={i * 0.1}>
              <Link to={p.to} className="group block rounded-2xl overflow-hidden border border-border bg-card shadow-sm hover:shadow-xl transition-all duration-300">
                {p.image && (
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                  </div>
                )}
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
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground">Need a Scroll Chiller?</h2>
          <Link to="/contact" className="inline-flex items-center gap-2 mt-6 rounded-lg bg-accent px-7 py-3.5 font-semibold text-accent-foreground hover:opacity-90 transition-opacity shadow-lg">
            Contact Us <ArrowRight className="h-4 w-4" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  </>
);

export default ScrollChillers;
