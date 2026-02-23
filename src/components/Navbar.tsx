import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, ChevronDown, ChevronRight } from "lucide-react";

interface NavChild {
  label: string;
  to: string;
}

interface NavItem {
  label: string;
  to: string;
  children?: NavChild[];
}

const navItems: NavItem[] = [
  { label: "Home", to: "/" },
  {
    label: "About Us",
    to: "/about",
    children: [
      { label: "Profile", to: "/about#profile" },
      { label: "Quality Assurance", to: "/about#quality-assurance" },
      { label: "Accreditations", to: "/about#accreditations" },
      { label: "Clients", to: "/about#clients" },
      { label: "Our Team", to: "/about#our-team" },
    ],
  },
  {
    label: "Products - Screw",
    to: "/products#screw",
    children: [
      { label: "Air Cooled Screw Chiller", to: "/products#air-cooled-screw" },
      { label: "Water Cooled Screw Chiller", to: "/products#water-cooled-screw" },
      { label: "Inverter Screw Chiller", to: "/products#inverter-screw" },
      { label: "Air Cooled VFD Screw Chiller", to: "/products#vfd-screw" },
    ],
  },
  {
    label: "Products - Scroll",
    to: "/products#scroll",
    children: [
      { label: "Air Cooled Scroll Chillers", to: "/products#air-cooled-scroll" },
      { label: "Water Cooled Scroll Chillers", to: "/products#water-cooled-scroll" },
      { label: "Inverter Scroll Chiller", to: "/products#inverter-scroll" },
    ],
  },
  {
    label: "Products - Others",
    to: "/products#others",
    children: [
      { label: "Air Chiller", to: "/products#air-chiller" },
      { label: "Water-cooled Reciprocating Chillers", to: "/products#water-reciprocating" },
      { label: "Air-cooled Reciprocating Chillers", to: "/products#air-reciprocating" },
      { label: "Industrial Reciprocating Chillers", to: "/products#industrial-reciprocating" },
      { label: "Cooling Tower Manufacturer", to: "/products#cooling-tower" },
      { label: "Chiller Manufacturer in Kolkata", to: "/products#kolkata" },
    ],
  },
  {
    label: "Application",
    to: "/industries",
    children: [
      { label: "Chiller For Plastic Industry", to: "/industries#plastic" },
      { label: "Chiller For Cement Industry", to: "/industries#cement" },
      { label: "Chiller For Brewery & Fermentation", to: "/industries#brewery" },
      { label: "Chiller For Food & Beverage Industry", to: "/industries#food-beverage" },
      { label: "Chiller For Heavy Industrial Purpose", to: "/industries#heavy-industrial" },
      { label: "Chiller For Hydrogen Refueling Station", to: "/industries#hydrogen" },
      { label: "Chillers For Milk Industry", to: "/industries#milk" },
      { label: "Chiller For Medical Device", to: "/industries#medical" },
      { label: "Chiller For CNC Cooling", to: "/industries#cnc" },
      { label: "Chiller For Printing & Packaging", to: "/industries#printing" },
      { label: "Battery Energy Storage Systems (BESS) Chillers", to: "/industries#bess" },
    ],
  },
  {
    label: "Customized Chiller",
    to: "/products#customized",
    children: [
      { label: "HVAC Chiller", to: "/products#hvac" },
      { label: "Chiller For Chemical & Pharmaceutical Industry", to: "/products#chemical-pharma" },
      { label: "Batching Plant Chiller", to: "/products#batching-plant" },
      { label: "Hazardous Area Chiller", to: "/products#hazardous" },
      { label: "Ammonia Chillers", to: "/products#ammonia" },
      { label: "Falling Film Chiller", to: "/products#falling-film" },
      { label: "Bio Gas Chillers", to: "/products#biogas" },
      { label: "Anodizing Chillers", to: "/products#anodizing" },
      { label: "Brine Chillers", to: "/products#brine" },
      { label: "Methanol Chillers", to: "/products#methanol" },
    ],
  },
  {
    label: "Global Footprints",
    to: "/industries#global",
    children: [
      { label: "Industrial Chillers in UAE", to: "/industries#uae" },
      { label: "Industrial Chillers in Africa", to: "/industries#africa" },
      { label: "Industrial Chillers in Indonesia", to: "/industries#indonesia" },
      { label: "Industrial Chillers in Nepal", to: "/industries#nepal" },
      { label: "Industrial Chillers in Bangladesh", to: "/industries#bangladesh" },
    ],
  },
  {
    label: "Drycool Intelligence",
    to: "/infrastructure",
    children: [
      { label: "HVAC Contractor", to: "/infrastructure#hvac-contractor" },
      { label: "Commissioning Services", to: "/infrastructure#commissioning" },
      { label: "Smart Buildings Services", to: "/infrastructure#smart-buildings" },
      { label: "BMS Installation & Energy Services", to: "/infrastructure#bms" },
    ],
  },
  {
    label: "Our Projects",
    to: "/infrastructure#projects",
    children: [
      { label: "Expertise", to: "/infrastructure#expertise" },
      { label: "Turnkey Projects", to: "/infrastructure#turnkey" },
    ],
  },
  {
    label: "Contact Us",
    to: "/contact",
    children: [
      { label: "Enquiry", to: "/contact#enquiry" },
      { label: "Address", to: "/contact#address" },
      { label: "Spare Parts", to: "/contact#spare-parts" },
      { label: "AMC", to: "/contact#amc" },
      { label: "Career", to: "/contact#career" },
      { label: "Dealership", to: "/contact#dealership" },
    ],
  },
  {
    label: "Download",
    to: "/certificate",
    children: [
      { label: "Company Profile", to: "/certificate#company-profile" },
      { label: "Company Flyer", to: "/certificate#company-flyer" },
      { label: "Cooling Towers", to: "/certificate#cooling-towers" },
      { label: "Energy Saving Process Chiller", to: "/certificate#energy-saving" },
      { label: "MEP Design", to: "/certificate#mep-design" },
      { label: "Chiller For Plastic Industry", to: "/certificate#plastic-chiller" },
      { label: "Hydrogen Chillers", to: "/certificate#hydrogen-chillers" },
    ],
  },
];

/* ─── Desktop dropdown item ─── */
const DesktopNavItem = ({ item }: { item: NavItem }) => {
  const [open, setOpen] = useState(false);
  const timeout = useRef<ReturnType<typeof setTimeout>>();
  const location = useLocation();

  const isActive =
    location.pathname === item.to.split("#")[0] ||
    item.children?.some((c) => location.pathname === c.to.split("#")[0]);

  const handleEnter = () => {
    clearTimeout(timeout.current);
    setOpen(true);
  };
  const handleLeave = () => {
    timeout.current = setTimeout(() => setOpen(false), 150);
  };

  if (!item.children) {
    return (
      <Link
        to={item.to}
        className={`px-3 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap ${
          isActive
            ? "bg-primary text-primary-foreground"
            : "text-foreground hover:bg-muted"
        }`}
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div
      className="relative"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      role="navigation"
    >
      <Link
        to={item.to}
        className={`inline-flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap ${
          isActive
            ? "bg-primary text-primary-foreground"
            : "text-foreground hover:bg-muted"
        }`}
        aria-haspopup="true"
        aria-expanded={open}
      >
        {item.label}
        <ChevronDown className={`h-3.5 w-3.5 transition-transform ${open ? "rotate-180" : ""}`} />
      </Link>

      {open && (
        <div
          className="absolute left-0 top-full z-50 mt-1 min-w-[240px] rounded-md border bg-popover p-1 shadow-lg"
          role="menu"
        >
          {item.children.map((child) => (
            <Link
              key={child.to}
              to={child.to}
              onClick={() => setOpen(false)}
              className="block rounded-sm px-3 py-2 text-sm transition-colors text-popover-foreground hover:bg-accent hover:text-accent-foreground"
              role="menuitem"
            >
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

/* ─── Mobile accordion item ─── */
const MobileNavItem = ({
  item,
  onClose,
}: {
  item: NavItem;
  onClose: () => void;
}) => {
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();

  if (!item.children) {
    return (
      <Link
        to={item.to}
        onClick={onClose}
        className={`block px-6 py-3 text-sm font-medium transition-colors ${
          location.pathname === item.to
            ? "bg-primary text-primary-foreground"
            : "text-foreground hover:bg-muted"
        }`}
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div>
      <button
        onClick={() => setExpanded(!expanded)}
        className="flex w-full items-center justify-between px-6 py-3 text-sm font-medium text-foreground hover:bg-muted transition-colors"
        aria-expanded={expanded}
      >
        {item.label}
        <ChevronDown className={`h-4 w-4 transition-transform ${expanded ? "rotate-180" : ""}`} />
      </button>

      {expanded && (
        <div className="bg-muted/50" role="menu">
          {item.children.map((child) => (
            <Link
              key={child.to}
              to={child.to}
              onClick={onClose}
              className="block px-10 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              role="menuitem"
            >
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

/* ─── Main Navbar ─── */
const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Close mobile menu on route change
  const location = useLocation();
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="container flex items-center justify-between py-2 text-sm">
          <div className="flex items-center gap-2">
            <Phone className="h-3.5 w-3.5" />
            <span className="font-medium">Call: +91-9811134394</span>
          </div>
          <span className="hidden md:block">Drycool Systems India Pvt. Ltd.</span>
        </div>
      </div>

      {/* Main nav */}
      <nav className="border-b bg-card/95 backdrop-blur-md" aria-label="Main navigation">
        <div className="container flex items-center justify-between py-3">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex flex-col leading-tight">
              <span className="font-heading text-2xl font-bold text-primary">
                DRY<span className="text-accent">COOL</span>
              </span>
              <span className="text-[10px] tracking-widest text-muted-foreground uppercase">
                Constructability | Sustainability
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden xl:flex items-center gap-0.5 flex-wrap">
            {navItems.map((item) => (
              <DesktopNavItem key={item.label} item={item} />
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="xl:hidden p-2 rounded-md hover:bg-muted"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div
            className="xl:hidden border-t bg-card pb-4 max-h-[80vh] overflow-y-auto"
            role="navigation"
            aria-label="Mobile navigation"
          >
            {navItems.map((item) => (
              <MobileNavItem key={item.label} item={item} onClose={() => setMobileOpen(false)} />
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
