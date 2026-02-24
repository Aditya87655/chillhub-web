import DownloadPage from "./DownloadPage";

export const CompanyFlyer = () => (
  <DownloadPage
    title="Company Flyer"
    subtitle="Quick overview of Drycool's capabilities and products"
    description="A concise two-page flyer highlighting our key products, manufacturing capabilities, and service offerings. Perfect for quick reference and distribution."
    features={["Product range summary", "Key specifications", "Contact information", "Manufacturing highlights"]}
  />
);

export const CoolingTowers = () => (
  <DownloadPage
    title="Cooling Towers"
    subtitle="Technical specifications and product catalog for cooling towers"
    description="Comprehensive catalog covering our range of cooling towers including FRP cooling towers, RCC cooling towers, and timber cooling towers with complete technical specifications."
    features={["FRP & RCC cooling tower specs", "Capacity range details", "Installation guidelines", "Performance curves"]}
  />
);

export const EnergySavingChiller = () => (
  <DownloadPage
    title="Energy Saving Process Chiller"
    subtitle="High-efficiency process chillers with advanced energy-saving technology"
    description="Detailed brochure on our energy-saving process chillers featuring VFD technology, smart controls, and up to 50% energy reduction compared to conventional chillers."
    features={["VFD compressor technology", "Energy savings data", "ROI calculations", "Application examples"]}
  />
);

export const MEPDesign = () => (
  <DownloadPage
    title="MEP Design"
    subtitle="Mechanical, Electrical, and Plumbing design services overview"
    description="Overview of our MEP design consultancy services covering HVAC system design, plumbing, firefighting, and electrical system planning for commercial and industrial projects."
    features={["HVAC design methodology", "Energy modeling", "Green building compliance", "Project portfolio"]}
  />
);

export const PlasticChiller = () => (
  <DownloadPage
    title="Chiller For Plastic Industry"
    subtitle="Specialized cooling solutions for plastic processing"
    description="Targeted brochure for plastic industry professionals covering chillers designed for injection molding, blow molding, extrusion, and thermoforming applications."
    features={["Injection molding cooling specs", "Blow molding applications", "Extrusion line cooling", "Temperature control accuracy"]}
  />
);

export const HydrogenChillers = () => (
  <DownloadPage
    title="Hydrogen Chillers"
    subtitle="Advanced cooling systems for hydrogen production and storage"
    description="Technical catalog for hydrogen chillers designed for electrolyzer cooling, hydrogen liquefaction support, and fuel cell thermal management applications."
    features={["Electrolyzer cooling specs", "Safety certifications", "Temperature range capabilities", "System integration details"]}
  />
);
