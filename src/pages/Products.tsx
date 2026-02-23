import SectionHeading from "@/components/SectionHeading";
import ProductCard from "@/components/ProductCard";
import screwImg from "@/assets/product-screw-chiller.jpg";
import scrollImg from "@/assets/product-scroll-chiller.jpg";
import ammoniaImg from "@/assets/product-ammonia-chiller.jpg";
import oilImg from "@/assets/product-oil-chiller.jpg";

const allProducts = [
  { title: "Air Cooled Screw Chillers", description: "Multiple compressor configuration, fabricated in ISO 9001:2008 certified units with CFC-free refrigerants R-407C & R-134A, complete with in-built process pump.", image: screwImg },
  { title: "Water Cooled Screw Chillers", description: "Specially designed to work in extreme weather while maintaining energy efficiency. Best-in-class chiller with superior standards.", image: screwImg },
  { title: "Air Cooled Scroll Chillers", description: "Highly energy-efficient, designed for extreme tropical weather with European origin compressors and separate refrigeration circuits.", image: scrollImg },
  { title: "Water Cooled Scroll Chillers", description: "State-of-the-art liquid chiller for comfort and process-cooling applications, factory-assembled with complete quality assurance.", image: scrollImg },
  { title: "Ammonia Chillers", description: "Skid-mounted, compact ammonia chillers for medium to low temperature ranges — ideal for food processing, pharmaceutical, and cold storage.", image: ammoniaImg },
  { title: "Oil Chillers", description: "Specially designed to cool oil directly via refrigerant-to-oil heat exchanging circuits. Available in air-cooled and water-cooled variants.", image: oilImg },
  { title: "Inverter Screw Chillers", description: "Variable frequency drive technology for optimal compressor speed adjustment, delivering up to 50% energy savings.", image: screwImg },
  { title: "VFD Chillers", description: "Advanced variable frequency drive chillers offering precise temperature control with significantly reduced power consumption.", image: scrollImg },
];

const Products = () => (
  <>
    <section className="bg-primary py-16">
      <div className="container">
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground">Products & Solutions</h1>
        <p className="mt-3 text-primary-foreground/70">Complete range of industrial cooling systems</p>
      </div>
    </section>

    <section className="py-20">
      <div className="container">
        <SectionHeading title="Our Product Range" subtitle="Engineered for performance, built for reliability" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {allProducts.map((p) => (
            <ProductCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Products;
