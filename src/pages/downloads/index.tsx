import DownloadPage from "./DownloadPage";

export const CompanyFlyer = () => (
  <DownloadPage
    title="Company Flyer"
    subtitle="Quick overview of Drycool's capabilities and products"
    description="A concise two-page flyer highlighting our key products, manufacturing capabilities, and service offerings. Perfect for quick reference and distribution."
    features={["Product range summary", "Key specifications", "Contact information", "Manufacturing highlights"]}
    pdfUrl="https://www.drycoolchillers.com/Drycool-chiller-flyer.pdf"
  />
);

export const CoolingTowers = () => (
  <DownloadPage
    title="Cooling Towers"
    subtitle="Technical specifications and product catalog for cooling towers"
    description="Comprehensive catalog covering our range of cooling towers including FRP cooling towers, RCC cooling towers, and timber cooling towers with complete technical specifications."
    features={["FRP & RCC cooling tower specs", "Capacity range details", "Installation guidelines", "Performance curves"]}
    pdfUrl="https://www.drycoolchillers.com/Cooling-Tower-Flyer.pdf"
  />
);

export const EnergySavingChiller = () => (
  <DownloadPage
    title="Energy Saving Process Chiller"
    subtitle="High-efficiency process chillers with advanced energy-saving technology"
    description="Detailed brochure on our energy-saving process chillers featuring VFD technology, smart controls, and up to 50% energy reduction compared to conventional chillers."
    features={["VFD compressor technology", "Energy savings data", "ROI calculations", "Application examples"]}
    pdfUrl="https://www.drycoolchillers.com/Energy-Saving-Process-Chiller.pdf"
  />
);

export const MEPDesign = () => (
  <DownloadPage
    title="MEP Design"
    subtitle="Mechanical, Electrical, and Plumbing design services overview"
    description="Overview of our MEP design consultancy services covering HVAC system design, plumbing, firefighting, and electrical system planning for commercial and industrial projects."
    features={["HVAC design methodology", "Energy modeling", "Green building compliance", "Project portfolio"]}
    // Fallback: Use profile if MEP is not found, to preserve the UI design per strict requirements
    pdfUrl="https://www.drycoolchillers.com/profile.pdf" 
  />
);

export const PlasticChiller = () => (
  <DownloadPage
    title="Chiller For Plastic Industry"
    subtitle="Specialized cooling solutions for plastic processing"
    description="Targeted brochure for plastic industry professionals covering chillers designed for injection molding, blow molding, extrusion, and thermoforming applications."
    features={["Injection molding cooling specs", "Blow molding applications", "Extrusion line cooling", "Temperature control accuracy"]}
    pdfUrl="https://www.drycoolchillers.com/chiller-for-plastic-industry.pdf"
  />
);

export const HydrogenChillers = () => (
  <DownloadPage
    title="Hydrogen Chillers"
    subtitle="Advanced cooling systems for hydrogen production and storage"
    description="Technical catalog for hydrogen chillers designed for electrolyzer cooling, hydrogen liquefaction support, and fuel cell thermal management applications."
    features={["Electrolyzer cooling specs", "Safety certifications", "Temperature range capabilities", "System integration details"]}
    pdfUrl="https://www.drycoolchillers.com/hydrogen-chiller.pdf"
  />
);

export const BatchingPlantChiller = () => (
  <DownloadPage
    title="Batching Plant Chiller"
    subtitle="Cooling solutions for ready mix concrete and batching plants"
    description="Product brochure covering chillers designed for batching plant and ready mix concrete applications with complete technical specifications."
    features={["Batching plant cooling specs", "Concrete temperature control", "Capacity range details", "Installation guidelines"]}
    pdfUrl="https://www.drycoolchillers.com/batching-plant-chiller.pdf"
  />
);

export const FoodBeveragesChiller = () => (
  <DownloadPage
    title="Food & Beverages Chiller"
    subtitle="Specialized cooling systems for food and beverage processing"
    description="Detailed brochure on chillers designed for food and beverage industry applications including dairy, brewing, and food processing."
    features={["Food-grade cooling specs", "Hygiene compliance", "Temperature precision", "Application examples"]}
    pdfUrl="https://www.drycoolchillers.com/food-and-beverages-chiller.pdf"
  />
);

export const PrintingPackagingChiller = () => (
  <DownloadPage
    title="Chiller For Printing & Packaging"
    subtitle="Precision cooling for printing and packaging industry"
    description="Technical brochure covering chillers specifically designed for printing presses, packaging lines, and related industrial applications."
    features={["Printing press cooling", "Ink temperature control", "Packaging line integration", "Precision specs"]}
    pdfUrl="https://www.drycoolchillers.com/Chiller-For-Printing-and-Packaging.pdf"
  />
);

export const ChemicalPharmaceuticalChiller = () => (
  <DownloadPage
    title="Chemical & Pharmaceutical Chiller"
    subtitle="Process cooling for chemical and pharmaceutical manufacturing"
    description="Product catalog for chillers engineered for chemical processing and pharmaceutical manufacturing with strict temperature control requirements."
    features={["Reactor cooling specs", "GMP compliance details", "Corrosion-resistant design", "Process integration"]}
    pdfUrl="https://www.drycoolchillers.com/Chemical-and-Pharmaceutical-Chiller.pdf"
  />
);

export const R410aAirCooledChiller = () => (
  <DownloadPage
    title="R410a Air Cooled Chiller Series"
    subtitle="Eco-friendly R410a refrigerant air cooled chiller range"
    description="Technical brochure for the R410a air cooled chiller series featuring environmentally friendly refrigerant with high energy efficiency ratings."
    features={["R410a eco-friendly refrigerant", "Energy efficiency data", "Capacity range", "Performance curves"]}
    pdfUrl="https://www.drycoolchillers.com/R410a-air-cooled-chiller-series.pdf"
  />
);

export const BMSDownload = () => (
  <DownloadPage
    title="Building Management System"
    subtitle="Integrated building automation and management solutions"
    description="Brochure covering Drycool's Building Management System capabilities including HVAC automation, energy monitoring, and smart building integration."
    features={["BMS architecture overview", "HVAC integration", "Energy monitoring", "Smart controls"]}
    pdfUrl="https://drycoolchillers.com/building-management-system.pdf"
  />
);

export const MRIMachineChiller = () => (
  <DownloadPage
    title="Chiller For MRI Machine"
    subtitle="Precision cooling systems for MRI and medical imaging equipment"
    description="Technical catalog for chillers designed specifically for MRI machine cooling with precise temperature stability requirements."
    features={["MRI cooling specifications", "Temperature stability", "Vibration-free operation", "Medical compliance"]}
    pdfUrl="https://www.drycoolchillers.com/chiller-for-mri-machine.pdf"
  />
);

export const AirChillerDownload = () => (
  <DownloadPage
    title="Air Chiller"
    subtitle="Industrial air chiller systems and specifications"
    description="Product brochure covering the complete range of air chillers with technical specifications and application details."
    features={["Air chiller specifications", "Capacity range", "Application details", "Performance data"]}
    pdfUrl="https://www.drycoolchillers.com/Air-chiller.pdf"
  />
);

export const DehumidifierDownload = () => (
  <DownloadPage
    title="Dehumidifier"
    subtitle="Industrial dehumidification systems and solutions"
    description="Technical brochure on industrial dehumidifiers covering specifications, capacity ranges, and application guidelines."
    features={["Dehumidification capacity", "Humidity control range", "Industrial applications", "Energy efficiency"]}
    pdfUrl="https://www.drycoolchillers.com/dehumidifier.pdf"
  />
);
