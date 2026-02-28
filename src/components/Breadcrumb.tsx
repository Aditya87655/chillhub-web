import { Link, useLocation } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";
import { getProductBySlug } from "@/data/productPages";

const routeNames: Record<string, string> = {
  "/": "Home",
  "/about": "About Us",
  "/products": "Products",
  "/industries": "Industries",
  "/infrastructure": "Drycool Intelligence",
  "/certificate": "Download",
  "/contact": "Contact Us",
  "/projects": "Our Projects",
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

const categoryParents: Record<string, { label: string; to: string }> = {
  "/products": { label: "Products", to: "/products" },
  "/application": { label: "Application", to: "/industries" },
  "/customized": { label: "Customized Chiller", to: "/products/customized-chiller" },
  "/global": { label: "Global Footprints", to: "/products/global-footprints" },
};

const Breadcrumb = () => {
  const { pathname } = useLocation();
  if (pathname === "/") return null;

  // Check if it's a dynamic product page
  const segments = pathname.split("/").filter(Boolean);
  const prefix = "/" + segments[0];
  const slug = segments[1];
  const parent = categoryParents[prefix];
  const product = slug ? getProductBySlug(slug) : undefined;

  let staticName = routeNames[pathname];

  return (
    <nav aria-label="Breadcrumb" className="bg-muted/50 border-b border-border">
      <div className="container py-3 flex items-center gap-2 text-sm text-muted-foreground">
        <Link to="/" className="hover:text-accent transition-colors flex items-center gap-1">
          <Home className="h-3.5 w-3.5" />
          Home
        </Link>
        {product && parent && !staticName ? (
          <>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link to={parent.to} className="hover:text-accent transition-colors">{parent.label}</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-foreground font-medium">{product.title}</span>
          </>
        ) : (
          <>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-foreground font-medium">{staticName || slug || pathname}</span>
          </>
        )}
      </div>
    </nav>
  );
};

export default Breadcrumb;
