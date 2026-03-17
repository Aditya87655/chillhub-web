import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import HeroSlider from "@/components/HeroSlider";
import { motion, useScroll, useTransform } from "framer-motion";

/* ─── Typewriter Component for Hero Heading ─── */
const TypewriterEffect = () => {
  const words = ["Industrial Chiller", "Screw Chiller", "Scroll Chiller", "Inverter Chiller"];
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      const timeout = setTimeout(() => setReverse(true), 2000);
      return () => clearTimeout(timeout);
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, Math.max(reverse ? 40 : 80, Math.random() * 50 + 40));

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  return (
    <span className="text-industrial-orange relative inline-block">
      {words[index].substring(0, subIndex)}
      <span className="animate-pulse text-foreground font-light absolute -right-4">|</span>
    </span>
  );
};

/* ─── Screw Chiller Product Cards ─── */
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

/* ─── Scroll Chiller Product Cards ─── */
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

/* ─── Why Us items ─── */
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

/* ─── Industries links ─── */
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

/* ─── Advanced 3D Flip Product Card Component ─── */
const FlipProductCard = ({
  image,
  title,
  desc,
  link,
  index,
}: {
  image: string;
  title: string;
  desc: string;
  link: string;
  index: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
    className="group relative w-full h-[400px] perspective-[1500px]"
  >
    <div className="relative w-full h-full transition-transform duration-[800ms] [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] shadow-md group-hover:shadow-[0_20px_40px_rgba(234,88,12,0.15)] rounded-[2rem]">

      {/* 🌟 Front Side (Image + Bottom Gradient Title) 🌟 */}
      <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] rounded-[2rem] overflow-hidden bg-card/60 backdrop-blur-xl border border-border/30">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full p-8 text-left">
          <h5 className="font-heading text-2xl font-bold text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] leading-tight">
            {title}
          </h5>
        </div>
      </div>

      {/* 🌟 Back Side (Description + Button) 🌟 */}
      <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-[2rem] bg-card/95 backdrop-blur-2xl border border-industrial-orange/40 p-8 flex flex-col justify-center items-center text-center">
        <h5 className="font-heading text-xl font-bold text-industrial-orange mb-4 line-clamp-2">
          {title}
        </h5>
        <p className="text-sm text-foreground/80 font-medium leading-relaxed mb-8 flex-1 line-clamp-4">
          {desc}
        </p>
        <Link
          to={link}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-industrial-orange to-[#ff7b00] px-7 py-3 text-sm font-bold text-white hover:shadow-[0_0_25px_rgba(234,88,12,0.5)] hover:scale-105 transition-all duration-300 group/btn"
        >
          More Info
          <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
        </Link>
      </div>

    </div>
  </motion.div>
);

/* ─── Premium Modern Divider ─── */
const PremiumDivider = () => (
  <div className="w-full flex justify-center items-center py-16">
    <div className="h-[1px] w-full max-w-6xl bg-gradient-to-r from-transparent via-border/50 to-transparent relative">
      <div className="absolute left-1/2 -translate-x-1/2 -top-1.5 w-3 h-3 rotate-45 border border-border/50 bg-background/80 backdrop-blur-md shadow-[0_0_10px_rgba(0,0,0,0.1)]" />
    </div>
  </div>
);

const Index = () => {
  const { scrollY } = useScroll();

  // Advanced Parallax & Pin Effect Settings
  const imageScale = useTransform(scrollY, [0, 800], [1.1, 0.9]);
  const imageY = useTransform(scrollY, [0, 800], ['0%', '25%']);
  const imageOpacity = useTransform(scrollY, [0, 400], [0.15, 0.4]);

  return (
    <>
      {/* 🌟 3D FIXED SCROLL-PIN BACKGROUND LAYER 🌟 */}
      <div className="fixed inset-0 z-[-1] h-screen w-full overflow-hidden bg-background flex justify-center items-center">
        <motion.img
          style={{ y: imageY, scale: imageScale, opacity: imageOpacity }}
          src="/images/buy-chiller.png"
          alt="3D Industrial Chiller Background"
          className="absolute w-full max-w-5xl lg:max-w-7xl h-[120%] -top-[10%] object-contain object-center transition-opacity duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/60 to-background/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background" />
      </div>

      {/* 🎬 1. Hero / Intro Section */}
      <section className="relative overflow-hidden pt-20 pb-32 lg:pt-28 lg:pb-48 bg-transparent">
        <div className="container relative z-10">

          <AnimatedSection direction="up">
            <div className="flex flex-col gap-1 mb-8">
              <span className="font-heading text-xl md:text-2xl text-industrial-orange font-bold uppercase tracking-widest drop-shadow-sm">
                All Type of Chillers Manufacturer
              </span>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-7xl font-extrabold text-foreground leading-tight tracking-tight max-w-5xl flex flex-wrap items-center gap-x-4">
                <span className="drop-shadow-sm">BUY</span>
                <TypewriterEffect />
              </h1>
            </div>
          </AnimatedSection>

          {/* Magazine-style split layout for intro text */}
          <AnimatedSection direction="up" delay={0.2}>
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 mt-12">
              <div className="lg:col-span-5 space-y-6">
                <p className="text-lg md:text-xl text-foreground/90 font-medium leading-relaxed backdrop-blur-md bg-background/40 p-6 rounded-2xl border border-border/20 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                  Drycool Systems India Private Limited ("Drycool") is one of oldest and leading chiller manufacturers in India as well as other parts of the world. Drycool is a pioneer in manufacturing of industrial chillers like screw chiller, <Link to="/products/water-cooled-scroll-chiller" className="text-industrial-orange font-bold hover:underline transition-colors">scroll chiller</Link>, water cooled screw chiller, air cooled screw chiller, air cooled scroll chiller, water cooled scroll chiller, ammonia chillers, brine chiller, batching plant chiller, inverter screw chiller, inverter scroll chiller, oil chiller, water chiller, air chillers.
                </p>
                <div className="h-1.5 w-24 bg-gradient-to-r from-industrial-orange to-transparent rounded-full" />
              </div>

              <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
                <div className="bg-card/50 backdrop-blur-xl rounded-[2rem] p-8 border border-border/40 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:bg-card/70 transition-all duration-300">
                  <p className="text-sm md:text-base text-foreground/80 font-medium leading-relaxed">
                    The chillers manufactured and supplied by Drycool are CFC free and contain an energy saving component which is integral for the conservation of the environment. The engineering and design simplicity utilized by Drycool in manufacturing the chillers provides an added advantage to the customer in utilizing the chillers.
                  </p>
                </div>
                <div className="bg-card/50 backdrop-blur-xl rounded-[2rem] p-8 border border-border/40 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:bg-card/70 transition-all duration-300">
                  <p className="text-sm md:text-base text-foreground/80 font-medium leading-relaxed">
                    Drycool is an industry expert in manufacturing chillers for a variety of industries such as injection molding, blow molding, vacuum forming, thermoforming, extrusion, petrochemicals, chemicals &amp; pharmaceuticals, anodizing, medical equipment, HVAC, food &amp; beverages, milk, biogas, ready mix concrete/batching plants, brewery &amp; distillery, multilayer &amp; PP films and non-woven fabrics.
                  </p>
                </div>
                <div className="sm:col-span-2 bg-gradient-to-br from-industrial-navy/10 to-industrial-navy/5 backdrop-blur-xl rounded-[2rem] p-8 border border-industrial-navy/20 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-industrial-orange/20 rounded-full blur-3xl" />
                  <p className="text-sm md:text-base text-foreground font-semibold leading-relaxed relative z-10">
                    Drycool manufactures chillers in Noida and supply in Delhi, Gurgaon, Noida, Mumbai, Kolkata, Chennai, Bangalore, Hyderabad, Ahmedabad, Pune, Visakhapatnam, Surat, Jaipur, Coimbatore, Kanpur, Nagpur, Raipur, Kochi, Madurai, Salem, Thiruvananthapuram, Jamnagar, Sri City, Rajahmundry, Dibrugarh, Bhilai, Raigarh, Vadodara, Sonipat, Baddi …All over India. We export chillers in countries like UAE, Saudi Arabia, Qatar, kuwait, Oman, Yemen, Egypt, and all African Countries.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Hero Slider */}
      <div className="container relative z-20 -mt-20 lg:-mt-32 mb-8">
        <AnimatedSection direction="up" delay={0.4}>
          <div className="rounded-[2.5rem] p-2 bg-background/50 backdrop-blur-3xl border border-white/20 shadow-[0_30px_60px_rgba(0,0,0,0.15)]">
            <div className="rounded-[2rem] overflow-hidden">
              <HeroSlider />
            </div>
          </div>
        </AnimatedSection>
      </div>

      <PremiumDivider />

      {/* Screw Chillers Section */}
      <section className="pb-16 pt-8 bg-transparent">
        <div className="container">
          <AnimatedSection direction="left">
            <div className="flex items-center gap-4 mb-12">
              <div className="w-2 h-10 bg-industrial-orange rounded-full" />
              <h3 className="font-heading text-4xl font-bold text-foreground tracking-tight backdrop-blur-md bg-background/40 px-5 py-2 rounded-2xl border border-border/20">
                Screw Chillers
              </h3>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {screwChillers.map((p, i) => (
              <FlipProductCard key={p.title} {...p} index={i} />
            ))}
          </div>
        </div>
      </section>

      <PremiumDivider />

      {/* Scroll Chillers Section */}
      <section className="pb-16 pt-8 bg-transparent">
        <div className="container">
          <AnimatedSection direction="left">
            <div className="flex items-center gap-4 mb-12">
              <div className="w-2 h-10 bg-industrial-orange rounded-full" />
              <h3 className="font-heading text-4xl font-bold text-foreground tracking-tight backdrop-blur-md bg-background/40 px-5 py-2 rounded-2xl border border-border/20">
                <Link to="/products/water-cooled-scroll-chiller" className="hover:text-industrial-orange transition-colors duration-300">
                  Scroll Chillers
                </Link>
              </h3>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {scrollChillers.map((p, i) => (
              <FlipProductCard key={p.title} {...p} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-24 relative bg-background/40 backdrop-blur-xl border-y border-border/30">
        <div className="container relative z-10">
          <AnimatedSection direction="up">
            <div className="text-center mb-16">
              <span className="text-industrial-orange font-bold tracking-wider uppercase text-sm mb-3 block drop-shadow-md">Our Advantages</span>
              <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-foreground drop-shadow-sm">Why Us</h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyUsItems.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.1} direction="up">
                <div className="group relative h-full rounded-[2rem] bg-card/40 backdrop-blur-2xl p-10 shadow-lg border border-border/40 hover:border-industrial-orange/50 hover:-translate-y-2 transition-all duration-500 overflow-hidden">
                  <div className="absolute -right-10 -top-10 w-40 h-40 bg-industrial-orange/20 rounded-full blur-3xl group-hover:bg-industrial-orange/30 transition-colors duration-700" />
                  <div className="w-14 h-1.5 rounded-full bg-gradient-to-r from-industrial-orange to-industrial-orange/30 mb-8 transform origin-left group-hover:scale-x-150 transition-transform duration-500" />
                  <h3 className="font-heading text-2xl font-bold text-foreground mb-4 group-hover:text-industrial-orange transition-colors">{item.title}</h3>
                  <p className="text-foreground/80 font-medium leading-relaxed relative z-10">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-32 relative overflow-hidden bg-transparent">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <AnimatedSection direction="left">
              <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-foreground mb-8 relative inline-block">
                <span className="backdrop-blur-sm bg-background/30 px-3 py-1 rounded-xl">Introduction</span>
                <span className="absolute -bottom-3 left-0 w-1/2 h-1.5 rounded-full bg-gradient-to-r from-industrial-orange to-transparent" />
              </h2>
              <div className="space-y-6 text-lg text-foreground/90 font-medium leading-relaxed bg-background/40 backdrop-blur-xl p-8 rounded-[2rem] border border-border/20 shadow-[0_8px_30px_rgb(0,0,0,0.06)]">
                <p>Our Industrial Chillers are now with latest Technologies, we are the top most chiller manufacturer, supplier and export all over the world. Buy Industrial chiller from us with very good quality &amp; with the best price also in Industry.</p>
                <p>Get the unmatched quality range along with high demand nationwide which ensure the quality, durability, high performance along with the ability to protect products, people, and process from various coming from air contamination. Drycool Systems is one of the best chiller manufacturers in India. We will be offering the best solution which includes designing, manufacturing, installing, and also validating clean rooms to offer flawless products to valuable clients.</p>
                <p>Being the best chiller supplier in India, we will ensure that every system is completely superior in temperature and pressure range, it will be meeting the demands. They will offer all the reasonable efforts for having various advantages for being the renowned chiller plant manufacturer. We are experienced in manufacturing and designing sophisticated dehumidifiers, refrigeration systems as being the best-Customized Chiller Supplier in India.</p>
                <p>We will ensure to offer effective solutions to control temperature and humidity for your processes and products. We are proficient in quality, system design, and performance. Our company is completely expert in catering to various industrial and commercial sectors.</p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" className="relative hidden lg:block">
              <div className="absolute -inset-10 bg-gradient-to-tr from-industrial-orange/30 via-transparent to-industrial-teal/30 blur-3xl rounded-full opacity-60" />
              <div className="relative rounded-[3rem] p-3 bg-background/30 backdrop-blur-2xl border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.15)] transform rotate-2 hover:rotate-0 transition-transform duration-700">
                <motion.img
                  src="/images/buy-chiller.png"
                  alt="Buy chiller"
                  className="w-full rounded-[2.5rem] shadow-inner"
                  loading="lazy"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <PremiumDivider />

      {/* Detailed Product Descriptions */}
      <section className="py-24 bg-background/50 backdrop-blur-2xl border-y border-border/30">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
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
              <AnimatedSection key={item.title} delay={i * 0.05} direction="up">
                <div className="group relative bg-card/50 backdrop-blur-xl rounded-[2rem] p-8 md:p-10 border border-border/40 shadow-sm hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-500 overflow-hidden z-10 h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-muted/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                  <h3 className="font-heading text-2xl font-bold text-foreground mb-5 flex items-center gap-4">
                    <div className="w-1.5 h-8 bg-industrial-orange rounded-full transform origin-bottom scale-y-50 group-hover:scale-y-100 transition-transform duration-300" />
                    <Link to={item.link} className="hover:text-industrial-orange transition-colors">
                      {item.title}
                    </Link>
                  </h3>
                  <p className="text-base text-foreground/80 font-medium leading-relaxed">{item.text}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Industries / Applications note */}
      <section className="py-24 relative bg-transparent">
        <div className="container">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto text-center mb-12">
              <p className="text-lg md:text-xl text-foreground font-semibold leading-relaxed bg-background/40 backdrop-blur-xl p-6 rounded-2xl border border-border/20 shadow-[0_8px_30px_rgb(0,0,0,0.06)]">
                All equipment and systems are properly engineered to ensure cost-effective installation, less power consumption along advanced technologies. We will be offering our advanced cooling solutions to various industries which include
              </p>
              <div className="h-1 w-24 bg-industrial-orange mx-auto mt-8 rounded-full" />
            </div>
          </AnimatedSection>

          <div className="flex flex-wrap justify-center gap-4 mt-12">
            {industryLinks.map((ind, i) => (
              <motion.div
                key={ind.label}
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.02 }}
              >
                <Link
                  to={ind.to}
                  className="relative inline-flex items-center justify-center px-6 py-3.5 rounded-full text-sm font-bold overflow-hidden group border border-border/40 bg-card/70 backdrop-blur-xl hover:border-industrial-orange/50 shadow-sm hover:shadow-[0_0_20px_rgba(234,88,12,0.25)] hover:-translate-y-1 transition-all duration-300"
                >
                  <span className="relative z-10 text-foreground group-hover:text-industrial-orange transition-colors">{ind.label}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-industrial-orange/0 via-industrial-orange/10 to-industrial-orange/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <PremiumDivider />

      {/* Our Clients */}
      <section className="py-16 pb-24 overflow-hidden relative bg-background/70 backdrop-blur-3xl border-t border-border/30">
        <div className="container">
          <AnimatedSection>
            <h3 className="font-heading text-3xl md:text-4xl font-extrabold text-foreground mb-16 text-center drop-shadow-sm">Trusted By Global Leaders</h3>
          </AnimatedSection>
        </div>

        <div
          className="group flex overflow-hidden whitespace-nowrap py-4 w-full"
          style={{ maskImage: 'linear-gradient(to right, transparent 0, black 15%, black 85%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to right, transparent 0, black 15%, black 85%, transparent 100%)' }}
        >
          <div className="animate-marquee group-hover:[animation-play-state:paused] flex gap-8 px-4 items-center">
            {[...clientLogos, ...clientLogos].map((logo, i) => (
              <div
                key={`${logo.alt}-${i}`}
                className="flex shrink-0 items-center justify-center p-6 bg-card/80 backdrop-blur-xl rounded-[2rem] border border-border/40 hover:shadow-[0_10px_30px_rgba(0,0,0,0.12)] hover:border-industrial-orange/40 hover:-translate-y-1 transition-all duration-500 w-[180px] md:w-[220px] h-[120px]"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-h-16 w-auto object-contain mx-auto opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;