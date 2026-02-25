import { Link, useLocation } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

const routeNames: Record<string, string> = {
  "/": "Home",
  "/about": "About Us",
  "/products": "Products",
  "/industries": "Industries",
  "/infrastructure": "Drycool Intelligence",
  "/certificate": "Download",
  "/contact": "Contact Us",
  "/about/profile": "Company Profile",
  "/about/quality-assurance": "Quality Assurance",
  "/about/accreditations": "Accreditations",
  "/about/clients": "Our Clients",
  "/about/our-team": "Our Team",
  "/products/customized-chiller": "Customized Chiller",
  "/products/global-footprints": "Global Footprints",
  "/intelligence/hvac-contractor": "HVAC Contractor",
  "/intelligence/commissioning": "Commissioning Services",
  "/intelligence/smart-buildings": "Smart Buildings",
  "/intelligence/bms": "BMS & Energy Services",
  "/projects/expertise": "Expertise",
  "/projects/turnkey": "Turnkey Projects",
  "/contact/enquiry": "Enquiry",
  "/contact/address": "Address",
  "/contact/spare-parts": "Spare Parts",
  "/contact/amc": "AMC",
  "/contact/career": "Career",
  "/contact/dealership": "Dealership",
  "/downloads/company-profile": "Company Profile",
  "/downloads/company-flyer": "Company Flyer",
  "/downloads/cooling-towers": "Cooling Towers",
  "/downloads/energy-saving": "Energy Saving Chiller",
  "/downloads/mep-design": "MEP Design",
  "/downloads/plastic-chiller": "Chiller For Plastic Industry",
  "/downloads/hydrogen-chillers": "Hydrogen Chillers",
};

const Breadcrumb = () => {
  const { pathname } = useLocation();
  if (pathname === "/" || pathname.startsWith("/products/")) return null;

  const name = routeNames[pathname] || pathname.replace("/", "");

  return (
    <nav aria-label="Breadcrumb" className="bg-muted/50 border-b border-border">
      <div className="container py-3 flex items-center gap-2 text-sm text-muted-foreground">
        <Link to="/" className="hover:text-accent transition-colors flex items-center gap-1">
          <Home className="h-3.5 w-3.5" />
          Home
        </Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <span className="text-foreground font-medium">{name}</span>
      </div>
    </nav>
  );
};

export default Breadcrumb;
