import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import AnimatedSection from "@/components/AnimatedSection";
import GlassCard from "@/components/GlassCard";
import HeroSlider from "@/components/HeroSlider";
import { motion } from "framer-motion";

/* ─── Screw Chiller Product Cards (exact original text) ─── */
const screwChillers = [
  {
    image: "/images/products/air-cooled-screw-multi.jpg",
    title: "Air Cooled Screw Chillers",
    desc: "Our company offers Air Cooled Screw Chiller – Multiple Compressors, which is fabricated in our ISO 9001:2008 certified manufacturing unit factory with an option of using cfc free refrigerants r-407c & r-134a complete with in-built process pump…",
    link: "/products/air-cooled-screw-chiller",
  },
  {
    image: "/images/products/air-cooled-screw-single.jpg",
    title: "Air Cooled Screw Chillers (Single Compressor)",
    desc: "We are engaged in manufacturing Air Cooled Screw Chiller – Single Compressor, which is fully microprocessor based suitable for process cooling applications from (+) 20°c up to 40°c and for low lower temp of up to (-) 50°C…",
    link: "/products/air-cooled-screw-chiller",
  },
  {
    image: "/images/products/water-cooled-screw-multi.jpg",
    title: "Water Cooled Screw Chiller",
    desc: "Drycool System's water cooled screw chiller is specially designed to work even in extreme weather conditions. They will still maintain energy efficiency in any weather condition. We will offer the best possible equipment being the best chiller supplier in India…..",
    link: "/products/water-cooled-screw-chiller",
  },
  {
    image: "/images/products/water-cooled-screw-single.jpg",
    title: "Water Cooled Screw Chillers (Single Compressor)",
    desc: "We are engaged in offering a wide range of Water Cooled Screw Chiller – Single Compressor, which is manufactured using quality screw compressors from bitzer (Germany) , frascold (Italy) and Many others",
    link: "/products/water-cooled-screw-chiller",
  },
];

/* ─── Scroll Chiller Product Cards (exact original text) ─── */
const scrollChillers = [
  {
    image: "/images/products/air-cooled-scroll-multi.jpg",
    title: "Air Cooled Scroll Chillers",
    desc: "The Air-cooled Scroll Chillers are highly energy efficient and are perfectly designed to work within extreme tropical weather conditions. Supported with European origin compressors, these chillers are designed…",
    link: "/products/air-cooled-scroll-chiller",
  },
  {
    image: "/images/products/air-cooled-scroll-single.jpg",
    title: "Air Cooled Scroll Chillers (Single Compressor)",
    desc: "The Air Cooled Chillers are suitable for working in extreme weather conditions with maintaining energy and operational efficiency. The equipment is designed and manufactured in compliance with…",
    link: "/products/air-cooled-scroll-chiller",
  },
  {
    image: "/images/products/water-cooled-scroll-multi.jpg",
    title: "Water Cooled Scroll Chillers",
    desc: "Drycool Scroll chillers are state-of-the-art liquid chiller for a wide range of comfort and process-cooling applications. These scroll chillers are complete, factory-assembled liquid chiller that offers…",
    link: "/products/water-cooled-scroll-chiller",
  },
  {
    image: "/images/products/water-cooled-scroll-single.jpg",
    title: "Water Cooled Scroll Chillers ( Single Compressor)",
    desc: "We are offering Water Cooled Scroll Chiller which are fabricated with globally renowned scroll compressors from danfoss(Denmark), maneurop and Copeland.",
    link: "/products/water-cooled-scroll-chiller",
  },
];

/* ─── Why Us items (exact original text) ─── */
const whyUsItems = [
  {
    title: "Accurate Monitoring",
    desc: "The accurate monitoring system is being integrated to have the proper tracking of suction pressure and other types of system variables.",
  },
  {
    title: "Cost-Effective",
    desc: "It will offer the most cost-effective functionality due to the 50% less usage of energy. High-end temperature control with energy-saving benefits without much requirement for maintenance.",
  },
  {
    title: "Get Accurate Adjustment",
    desc: "Get accurate adjustment of compressor motor speed according to the requirement of the industry. With the implementation of proper monitoring functionality according to the functionality.",
  },
  {
    title: "Optimum Performance",
    desc: "Various new additional imports are being included which will help in offering the optimum performance by adjustment of the compressor speed.",
  },
  {
    title: "Compressor in the chiller",
    desc: "We are engaged in offering a wide range of Industrial Chillers – Compressors, which are manufactured using quality screw compressors from Bitzer (Germany) and Frascold (Italy).",
  },
  {
    title: "Expert Engineers",
    desc: "Get high-quality products from our line of expert engineers to have the best high-end customer experience.",
  },
];

/* ─── Industries links (exact from original) ─── */
const industryLinks = [
  { label: "Chiller For Injection Molding Machine", to: "/application/chiller-for-plastic-industry" },
  { label: "Pet Blow Molding Chiller", to: "/application/chiller-for-plastic-industry" },
  { label: "Food & beverages industries", to: "/application/chiller-for-food-beverage-industry" },
  { label: "Chiller For Lamination Plant", to: "/application/chiller-for-plastic-industry" },
  { label: "Chiller for Sole Molding", to: "/application/chiller-for-plastic-industry" },
  { label: "Chiller For Tape Plant", to: "/application/chiller-for-plastic-industry" },
  { label: "Chiller For Blow Molding", to: "/application/chiller-for-plastic-industry" },
  { label: "Rubber Molding Chiller", to: "/application/chiller-for-plastic-industry" },
  { label: "Chiller For Pipe Industries", to: "/customized/chiller-for-hdpe-cpvc-upvc-pipes" },
  { label: "Chiller For Pharma & chemicals industries", to: "/customized/chiller-for-chemical-pharmaceutical" },
  { label: "Chillers For Hydrogen Refueling Station", to: "/application/chiller-for-hydrogen-refueling-station" },
  { label: "Batching Plant Chiller", to: "/customized/batching-plant-chiller" },
  { label: "Inverter Screw Chiller", to: "/products/inverter-screw-chiller" },
  { label: "Inverter Scroll Chiller", to: "/products/inverter-scroll-chiller" },
  { label: "Bio Gas Chillers", to: "/customized/bio-gas-chillers" },
  { label: "Brine Chillers", to: "/customized/brine-chillers" },
  { label: "VFD Chiller", to: "/products/air-cooled-vfd-screw-chiller" },
  { label: "Chiller for Extrusion Lines", to: "/application/chiller-for-plastic-industry" },
  { label: "Chiller for Multi Layer/pp films industry", to: "/application/chiller-for-plastic-industry" },
  { label: "Anodizing industries", to: "/customized/anodizing-chillers" },
  { label: "Hazardous Area Chiller", to: "/customized/hazardous-area-chiller" },
  { label: "Chiller For HVAC System", to: "/customized/hvac-chiller" },
];

/* ─── Client logos ─── */
const clientLogos = [
  { src: "/images/clients/hero-logo.jpg", alt: "Hero" },
  { src: "/images/clients/delhi-metro.jpg", alt: "Delhi Metro" },
  { src: "/images/clients/patanjali.jpg", alt: "Patanjali" },
  { src: "/images/clients/ultratech.jpg", alt: "UltraTech" },
  { src: "/images/clients/moon.jpg", alt: "Moon" },
  { src: "/images/clients/teri.jpg", alt: "TERI" },
  { src: "/images/clients/hal.jpg", alt: "HAL" },
  { src: "/images/clients/anmol.jpg", alt: "Anmol" },
  { src: "/images/clients/frooti.jpg", alt: "Frooti" },
  { src: "/images/clients/jaypee.jpg", alt: "Jaypee" },
  { src: "/images/clients/anand.jpg", alt: "Anand" },
  { src: "/images/clients/npl-india.jpg", alt: "NPL India" },
  { src: "/images/clients/haldiram.jpg", alt: "Haldiram" },
  { src: "/images/clients/new-project.png", alt: "Client" },
  { src: "/images/clients/new-project-1.png", alt: "Client" },
  { src: "/images/clients/new-project-2.png", alt: "Client" },
  { src: "/images/clients/new-project-3.jpg", alt: "Client" },
];

/* ─── Product Card Component ─── */
const ProductCardOriginal = ({
  image,
  title,
  desc,
  link,
}: {
  image: string;
  title: string;
  desc: string;
  link: string;
}) => (
  <div className="rounded-xl border border-border bg-card overflow-hidden industrial-shadow hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col">
    <div className="relative overflow-hidden" style={{ paddingBottom: "56.25%" }}>
      <Link to={link}>
        <img
          src={image}
          alt={title}
          className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </Link>
    </div>
    <div className="p-5 flex flex-col flex-1">
      <Link to={link}>
        <h5 className="font-heading text-lg font-bold text-foreground group-hover:text-[hsl(var(--industrial-orange))] transition-colors">
          {title}
        </h5>
      </Link>
      <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">{desc}</p>
      <Link
        to={link}
        className="mt-4 inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
      >
        More Info
      </Link>
    </div>
  </div>
);

const Index = () => {
  return (
    <>
      {/* Title Bar - matching original site's top section */}
      <section className="bg-card py-10">
        <div className="container">
          <AnimatedSection>
            <h1 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
              Buy Industrial Chiller | Screw Chiller | Scroll Chiller | Inverter Chiller | Chillers Manufacturer
            </h1>
            <div className="mt-6 space-y-4 text-sm md:text-base text-muted-foreground leading-relaxed">
              <p>
                Drycool Systems India Private Limited ("Drycool") is one of oldest and leading chiller manufacturers in India as well as other parts of the world. Drycool is a pioneer in manufacturing of industrial chillers like screw chiller, <Link to="/products/water-cooled-scroll-chiller" className="text-[hsl(var(--industrial-teal))] hover:underline">scroll chiller</Link>, water cooled screw chiller, air cooled screw chiller, air cooled scroll chiller, water cooled scroll chiller, ammonia chillers, brine chiller, batching plant chiller, inverter screw chiller, inverter scroll chiller, oil chiller, water chiller, air chillers.
              </p>
              <p>
                The chillers manufactured and supplied by Drycool are CFC free and contain an energy saving component which is integral for the conservation of the environment. The engineering and design simplicity utilized by Drycool in manufacturing the chillers provides an added advantage to the customer in utilizing the chillers.
              </p>
              <p>
                Drycool is an industry expert in manufacturing chillers for a variety of industries such as injection molding, blow molding, vacuum forming, thermoforming, extrusion, petrochemicals, chemicals &amp; pharmaceuticals, anodizing, medical equipment, HVAC, food &amp; beverages, milk, biogas, ready mix concrete/batching plants, brewery &amp; distillery, multilayer &amp; PP films and non-woven fabrics.
              </p>
              <p>
                Drycool manufactures chillers in Noida and supply in Delhi, Gurgaon, Noida, Mumbai, Kolkata, Chennai, Bangalore, Hyderabad, Ahmedabad, Pune, Visakhapatnam, Surat, Jaipur, Coimbatore, Kanpur, Nagpur, Raipur, Kochi, Madurai, Salem, Thiruvananthapuram, Jamnagar, Sri City, Rajahmundry, Dibrugarh, Bhilai, Raigarh, Vadodara, Sonipat, Baddi …All over India. We export chillers in countries like UAE, Saudi Arabia, Qatar, kuwait, Oman, Yemen, Egypt, and all African Countries.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Hero Slider */}
      <HeroSlider />

      {/* Divider */}
      <div className="container"><div className="h-px bg-border my-10" /></div>

      {/* Screw Chillers Section */}
      <section className="pb-10">
        <div className="container">
          <AnimatedSection>
            <h3 className="font-heading text-2xl font-bold text-foreground mb-8 border-b-2 border-border pb-2 inline-block">
              Screw Chillers
            </h3>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {screwChillers.map((p, i) => (
              <AnimatedSection key={p.title} delay={i * 0.1}>
                <ProductCardOriginal {...p} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container"><div className="h-px bg-border my-6" /></div>

      {/* Scroll Chillers Section */}
      <section className="pb-10">
        <div className="container">
          <AnimatedSection>
            <h3 className="font-heading text-2xl font-bold text-foreground mb-8 border-b-2 border-border pb-2 inline-block">
              <Link to="/products/water-cooled-scroll-chiller" className="hover:text-[hsl(var(--industrial-orange))] transition-colors">
                Scroll Chillers
              </Link>
            </h3>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {scrollChillers.map((p, i) => (
              <AnimatedSection key={p.title} delay={i * 0.1}>
                <ProductCardOriginal {...p} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container"><div className="h-px bg-border my-6" /></div>

      {/* Why Us */}
      <section className="py-14 bg-section-gradient">
        <div className="container">
          <AnimatedSection>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-10 text-center">Why Us</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUsItems.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.08}>
                <GlassCard className="bg-card group">
                  <h3 className="font-heading text-lg font-bold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </GlassCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-14">
        <div className="container">
          <AnimatedSection>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">Introduction</h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="space-y-4 text-sm md:text-base text-muted-foreground leading-relaxed">
              <p>Our Industrial Chillers are now with latest Technologies, we are the top most chiller manufacturer, supplier and export all over the world. Buy Industrial chiller from us with very good quality &amp; with the best price also in Industry.</p>
              <p>Get the unmatched quality range along with high demand nationwide which ensure the quality, durability, high performance along with the ability to protect products, people, and process from various coming from air contamination. Drycool Systems is one of the best chiller manufacturers in India. We will be offering the best solution which includes designing, manufacturing, installing, and also validating clean rooms to offer flawless products to valuable clients.</p>
              <p>Being the best chiller supplier in India, we will ensure that every system is completely superior in temperature and pressure range, it will be meeting the demands. They will offer all the reasonable efforts for having various advantages for being the renowned chiller plant manufacturer. We are experienced in manufacturing and designing sophisticated dehumidifiers, refrigeration systems as being the best-Customized Chiller Supplier in India.</p>
              <p>We will ensure to offer effective solutions to control temperature and humidity for your processes and products. We are proficient in quality, system design, and performance. Our company is completely expert in catering to various industrial and commercial sectors.</p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2} className="mt-8">
            <img
              src="/images/buy-chiller.png"
              alt="Buy chiller"
              className="w-full max-w-4xl mx-auto rounded-xl"
              loading="lazy"
            />
          </AnimatedSection>
        </div>
      </section>

      {/* Detailed Product Descriptions */}
      <section className="py-14 bg-section-gradient">
        <div className="container space-y-10">
          {[
            {
              title: "Screw Chillers",
              link: "/products",
              text: "Screw Chillers are available in two different versions air-cooled screw chillers and water-cooled screw chillers. It will work properly in tropical conditions which will be completely operational and maintain the energy efficiently. It is completely manufactured and designed to deliver superior designing and manufacturing standards. Industrial screw chillers are properly designed with the combination of metallurgy along with qualitative material which is a unique design and it's fitted with the most efficient compressors that come from Europe.",
            },
            {
              title: "Scroll Chillers",
              link: "/products/air-cooled-scroll-chiller",
              text: "Scroll Chillers is a unique design to offer high energy-efficient working conditions even in extreme tropical weather. There are two different types of scroll chillers available in the market including Water-Cooled Scroll Chillers & Air-Cooled Scroll Chillers. They are completely friendly to be operational and easy to install which is being completely backed up by a team of skilled engineers. They are properly designed, manufactured, and tested with approval from International parameters to ensure the best quality of equipment.",
            },
            {
              title: "Water Cooled Scroll Chillers",
              link: "/products/water-cooled-scroll-chiller",
              text: "Water-Cooled Scroll Chillers are completely eco-friendly and much easier to install with the proper functioning to work properly in extreme tropical weather conditions. The compressor is having utilization capacity along with individual refrigeration circuits and separate refrigeration circuits. It will also offer the best reliability due to the multiple compressor configuration in the machinery. The refrigeration circuits which are installed in the Water-Cooled Scroll Chillers are completely separate and it can be so it can be easy maintenance even if the other working modules are on duty.",
            },
            {
              title: "Ammonia Chillers",
              link: "/customized/ammonia-chillers",
              text: "Drycool Systems is one of the best ammonia chiller manufacturers in India and we are responsible for the manufacturing and supplying of the best ammonia chiller which is skid mounted and compact and suitable for use in a wide temperature range. The temperature range can be maintained between medium to low according to the cooling application required for productivity. It is most suitable for food processing, pharmaceutical, cold storage, chemical, dairy, industrial gases, etc. We ensure the best choice of equipment and accessories which are being proposed to every client by our engineering team.",
            },
            {
              title: "Air Cooled Screw Chillers",
              link: "/products/air-cooled-screw-chiller",
              text: "Air Cooled Screw Chiller is the best for working in harsh tropical weather while maintaining operational efficiency and energy. Drycool Systems is one of the best chiller manufacturers in India who is completely equipped with the best engineers to design and manufacture while maintaining superior standards. It is completely eco-friendly and much easy to install and all the test is being completed by the international parameters before it is being supplied to the industries.",
            },
            {
              title: "Air Cooled Scroll Chillers",
              link: "/products/air-cooled-scroll-chiller",
              text: "Air Cooled Scroll Chiller is completely energy efficient which is designed to work even in extreme tropical weather conditions. It is having European compressors and even all the chillers are designed and manufactured along with the test is being done by international standards. Drycool Systems is one of the best chiller plant manufacturers which uses an easy installation process and an operation-friendly engineering team to ensure you with the best equipment. It is having multiple compressive configurations which will offer the individual separate refrigeration circuit unit. It is equipped with a fluid pump and storage tank with the skid installation.",
            },
            {
              title: "Water Cooled Screw Chillers",
              link: "/products/water-cooled-screw-chiller",
              text: "Water Cooled Screw Chiller is having the best design to which time the extreme tropical weather conditions even maintain the highest energy efficiency. The design of the government is to with identical conditions with superior standards. Drycool Systems offers the best chillers in India responsible for maintaining the highest standards of manufacturing and testing with high-quality facilities. We try to maintain the international standards which make us the best chiller manufacturers in India. The equipment is completely operation friendly and can be easily installed and it is being completely backed up by the engineering team to maintain the advantages during the industrial operation.",
            },
            {
              title: "Oil Chillers",
              link: "/customized/oil-chiller",
              text: "Oil Chillers is having specially designed equipment that will cool the oil directly using the refrigerant to oil heat exchanging circuits. It is designed in a unique way that can handle the oil while entering the evaporator even when the temperature is higher than normal. Now temperature of the oil will also be higher than normal and it uses the standard preparation to cool. Oil Chillers also have two different types of models including the water-cooled variant and air-cooled variant. Oil Chillers are compact which is have mounted oil pumps and speed and are properly tested according to the international factory standards.",
            },
          ].map((item, i) => (
            <AnimatedSection key={item.title} delay={i * 0.05}>
              <div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                  <Link to={item.link} className="hover:text-[hsl(var(--industrial-orange))] transition-colors">
                    {item.title}
                  </Link>
                </h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{item.text}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Industries / Applications note */}
      <section className="py-14">
        <div className="container">
          <AnimatedSection>
            <p className="text-sm md:text-base text-foreground font-semibold mb-6">
              All equipment and systems are properly engineered to ensure cost-effective installation, less power consumption along advanced technologies. We will be offering our advanced cooling solutions to various industries which include
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {industryLinks.map((ind, i) => (
              <AnimatedSection key={ind.label} delay={i * 0.03}>
                <Link
                  to={ind.to}
                  className="block rounded-lg border border-border bg-card p-4 text-sm font-medium text-foreground hover:bg-[hsl(var(--industrial-orange))] hover:text-white hover:border-[hsl(var(--industrial-orange))] transition-all duration-300 text-center"
                >
                  {ind.label}
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Our Clients */}
      <section className="py-14 bg-section-gradient">
        <div className="container">
          <AnimatedSection>
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-10 text-center">Our Clients</h3>
          </AnimatedSection>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 items-center">
            {clientLogos.map((logo, i) => (
              <AnimatedSection key={`${logo.alt}-${i}`} delay={i * 0.03}>
                <div className="flex items-center justify-center p-3 bg-card rounded-lg border border-border hover:shadow-md transition-shadow">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="max-h-16 w-auto object-contain"
                    loading="lazy"
                  />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-14">
        <div className="container max-w-2xl">
          <AnimatedSection>
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">Contact Form</h3>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <form className="space-y-4 bg-card rounded-xl border border-border p-8 industrial-shadow">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Your Name:</label>
                <input type="text" className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Company Name:</label>
                <input type="text" className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">City:</label>
                <input type="text" className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Phone:</label>
                <input type="tel" className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Your Email:</label>
                <input type="email" className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Subject:</label>
                <input type="text" className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Your Message:</label>
                <textarea rows={4} className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none" />
              </div>
              <button
                type="submit"
                className="w-full rounded-lg bg-[hsl(var(--industrial-orange))] px-6 py-3 font-semibold text-white hover:opacity-90 transition-opacity"
              >
                Submit
              </button>
            </form>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default Index;
