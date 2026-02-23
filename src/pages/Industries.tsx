import SectionHeading from "@/components/SectionHeading";
import { Factory, Beaker, Utensils, Droplets, Fuel, Wind, Building2, FlaskConical, Pipette, Milk, Hammer, Leaf } from "lucide-react";

const industries = [
  { icon: Factory, name: "Injection Molding", desc: "Precision cooling for plastic injection molding machines" },
  { icon: Wind, name: "Blow Molding", desc: "Temperature control for PET and blow molding operations" },
  { icon: Utensils, name: "Food & Beverages", desc: "Hygienic cooling solutions for food processing plants" },
  { icon: Beaker, name: "Pharma & Chemicals", desc: "Compliant cooling for pharmaceutical manufacturing" },
  { icon: Building2, name: "HVAC Systems", desc: "Central cooling for commercial and residential HVAC" },
  { icon: Pipette, name: "Extrusion Lines", desc: "Continuous cooling for plastic and metal extrusion" },
  { icon: Hammer, name: "Batching Plants", desc: "Concrete cooling for ready-mix batching plants" },
  { icon: Fuel, name: "Petrochemicals", desc: "Industrial grade cooling for petrochemical processes" },
  { icon: Milk, name: "Dairy & Milk", desc: "Rapid chilling for milk processing and storage" },
  { icon: Leaf, name: "Biogas Plants", desc: "Temperature regulation for biogas production" },
  { icon: FlaskConical, name: "Anodizing", desc: "Precise cooling for anodizing and surface treatment" },
  { icon: Droplets, name: "Brewery & Distillery", desc: "Fermentation and process cooling for beverages" },
];

const Industries = () => (
  <>
    <section className="bg-primary py-16">
      <div className="container">
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground">Industries</h1>
        <p className="mt-3 text-primary-foreground/70">Advanced cooling across diverse sectors</p>
      </div>
    </section>

    <section className="py-20">
      <div className="container">
        <SectionHeading title="Industries We Serve" subtitle="Tailored cooling solutions for every industrial application" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind) => (
            <div key={ind.name} className="group flex gap-4 p-6 rounded-lg bg-card industrial-shadow hover:industrial-shadow-lg transition-all hover:-translate-y-1">
              <div className="shrink-0 flex items-center justify-center h-14 w-14 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                <ind.icon className="h-7 w-7 text-accent" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-bold text-foreground">{ind.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{ind.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Industries;
