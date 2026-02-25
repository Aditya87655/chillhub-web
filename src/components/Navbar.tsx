import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, ChevronDown } from "lucide-react";

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
      { label: "Profile", to: "/about/profile" },
      { label: "Quality Assurance", to: "/about/quality-assurance" },
      { label: "Accreditations", to: "/about/accreditations" },
      { label: "Clients", to: "/about/clients" },
      { label: "Our Team", to: "/about/our-team" },
    ],
  },
  {
    label: "Products",
    to: "/products",
    children: [
      { label: "Products", to: "/products/products" },
      { label: "Application", to: "/products/application" },
      { label: "Customized Chiller", to: "/products/customized-chiller" },
      { label: "Global Footprints", to: "/products/global-footprints" },
    ],
  },
  {
    label: "Drycool Intelligence",
    to: "/infrastructure",
    children: [
      { label: "HVAC Contractor", to: "/intelligence/hvac-contractor" },
      { label: "Commissioning Services", to: "/intelligence/commissioning" },
      { label: "Smart Buildings Services", to: "/intelligence/smart-buildings" },
      { label: "BMS Installation & Energy Services", to: "/intelligence/bms" },
    ],
  },
  {
    label: "Our Projects",
    to: "/projects/expertise",
    children: [
      { label: "Expertise", to: "/projects/expertise" },
      { label: "Turnkey Projects", to: "/projects/turnkey" },
    ],
  },
  {
    label: "Contact Us",
    to: "/contact",
    children: [
      { label: "Enquiry", to: "/contact/enquiry" },
      { label: "Address", to: "/contact/address" },
      { label: "Spare Parts", to: "/contact/spare-parts" },
      { label: "AMC", to: "/contact/amc" },
      { label: "Career", to: "/contact/career" },
      { label: "Dealership", to: "/contact/dealership" },
    ],
  },
  {
    label: "Download",
    to: "/certificate",
    children: [
      { label: "Company Profile", to: "/downloads/company-profile" },
      { label: "Company Flyer", to: "/downloads/company-flyer" },
      { label: "Cooling Towers", to: "/downloads/cooling-towers" },
      { label: "Energy Saving Process Chiller", to: "/downloads/energy-saving" },
      { label: "MEP Design", to: "/downloads/mep-design" },
      { label: "Chiller For Plastic Industry", to: "/downloads/plastic-chiller" },
      { label: "Hydrogen Chillers", to: "/downloads/hydrogen-chillers" },
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
        className={`px-4 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap ${
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
        className={`inline-flex items-center gap-1 px-4 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap ${
          isActive
            ? "bg-primary text-primary-foreground"
            : "text-foreground hover:bg-muted"
        }`}
        aria-haspopup="true"
        aria-expanded={open}
      >
        {item.label}
        <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </Link>

      {open && (
        <div
          className="absolute left-0 top-full z-50 mt-1 min-w-[240px] rounded-lg border bg-popover p-1.5 shadow-xl backdrop-blur-sm"
          role="menu"
        >
          {item.children.map((child) => (
            <Link
              key={child.to}
              to={child.to}
              onClick={() => setOpen(false)}
              className="block rounded-md px-3 py-2.5 text-sm transition-colors text-popover-foreground hover:bg-accent hover:text-accent-foreground"
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
        <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${expanded ? "rotate-180" : ""}`} />
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
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <DesktopNavItem key={item.label} item={item} />
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-md hover:bg-muted"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div
            className="lg:hidden border-t bg-card pb-4 max-h-[80vh] overflow-y-auto"
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
