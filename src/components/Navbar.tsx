import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, ChevronDown } from "lucide-react";

interface NavChild {
  label: string;
  to: string;
}

interface NavSection {
  heading?: string;
  items: NavChild[];
}

interface NavItem {
  label: string;
  to: string;
  children?: NavChild[];
  mega?: NavSection[];
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
    mega: [
      {
        heading: "SCREW CHILLERS",
        items: [
          { label: "Air Cooled Screw Chiller", to: "/products/air-cooled-screw-chiller" },
          { label: "Water Cooled Screw Chiller", to: "/products/water-cooled-screw-chiller" },
          { label: "Inverter Screw Chiller", to: "/products/inverter-screw-chiller" },
          { label: "Air Cooled VFD Screw Chiller", to: "/products/air-cooled-vfd-screw-chiller" },
        ],
      },
      {
        heading: "SCROLL CHILLER",
        items: [
          { label: "Air Cooled Scroll Chillers", to: "/products/air-cooled-scroll-chiller" },
          { label: "Water Cooled Scroll Chillers", to: "/products/water-cooled-scroll-chiller" },
          { label: "Inverter Scroll Chiller", to: "/products/inverter-scroll-chiller" },
        ],
      },
      {
        heading: "AIR CHILLER",
        items: [{ label: "Air Chiller", to: "/products/air-chiller" }],
      },
      {
        heading: "RECIPROCATING CHILLERS",
        items: [
          { label: "Water-cooled Reciprocating", to: "/products/water-cooled-reciprocating-chiller" },
          { label: "Air-cooled Reciprocating", to: "/products/air-cooled-reciprocating-chiller" },
          { label: "Industrial Reciprocating", to: "/products/industrial-reciprocating-chiller" },
        ],
      },
      {
        heading: "MORE",
        items: [
          { label: "Cooling Tower Manufacturer", to: "/products/cooling-tower-manufacturer" },
          { label: "Chiller Manufacturer Kolkata", to: "/products/chiller-manufacturer-kolkata" },
        ],
      },
      {
        heading: "APPLICATION",
        items: [
          { label: "Plastic Industry", to: "/application/chiller-for-plastic-industry" },
          { label: "Cement Industry", to: "/application/chiller-for-cement-industry" },
          { label: "Brewery & Fermentation", to: "/application/chiller-for-brewery-fermentation" },
          { label: "Food & Beverage", to: "/application/chiller-for-food-beverage-industry" },
          { label: "Heavy Industrial", to: "/application/chiller-for-heavy-industrial-purpose" },
          { label: "Hydrogen Refueling", to: "/application/chiller-for-hydrogen-refueling-station" },
          { label: "Milk Industry", to: "/application/chillers-for-milk-industry" },
          { label: "Medical Device", to: "/application/chiller-for-medical-device" },
          { label: "CNC Cooling", to: "/application/chiller-for-cnc-cooling" },
          { label: "Printing & Packaging", to: "/application/chiller-for-printing-packaging" },
          { label: "BESS Chillers", to: "/application/bess-chillers" },
          { label: "Eyewash & Safety Showers", to: "/application/chillers-for-eyewash-safety-showers" },
        ],
      },
      {
        heading: "CUSTOMIZED CHILLER",
        items: [
          { label: "HVAC Chiller", to: "/customized/hvac-chiller" },
          { label: "Chemical & Pharma", to: "/customized/chiller-for-chemical-pharmaceutical" },
          { label: "Batching Plant Chiller", to: "/customized/batching-plant-chiller" },
          { label: "Hazardous Area Chiller", to: "/customized/hazardous-area-chiller" },
          { label: "Ammonia Chillers", to: "/customized/ammonia-chillers" },
          { label: "Falling Film Chiller", to: "/customized/falling-film-chiller" },
          { label: "Bio Gas Chillers", to: "/customized/bio-gas-chillers" },
          { label: "Anodizing Chillers", to: "/customized/anodizing-chillers" },
          { label: "Brine Chillers", to: "/customized/brine-chillers" },
          { label: "Methanol Chillers", to: "/customized/methanol-chillers" },
          { label: "Glycol Chillers", to: "/customized/glycol-chillers" },
          { label: "Oil Chiller", to: "/customized/oil-chiller" },
          { label: "Soap Industry", to: "/customized/chiller-for-soap-industry" },
          { label: "HDPE/CPVC/UPVC Pipe", to: "/customized/chiller-for-hdpe-cpvc-upvc-pipes" },
        ],
      },
      {
        heading: "GLOBAL FOOTPRINTS",
        items: [
          { label: "Chillers in UAE", to: "/global/industrial-chillers-in-uae" },
          { label: "Chillers in Africa", to: "/global/industrial-chillers-in-africa" },
          { label: "Chillers in Indonesia", to: "/global/industrial-chillers-in-indonesia" },
          { label: "Chillers in Nepal", to: "/global/industrial-chillers-in-nepal" },
          { label: "Chillers in Bangladesh", to: "/global/industrial-chillers-in-bangladesh" },
        ],
      },
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
    to: "/projects",
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

/* ─── Desktop Mega Menu (fixed overflow) ─── */
const DesktopMegaMenu = ({ sections, onClose }: { sections: NavSection[]; onClose: () => void }) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const [maxH, setMaxH] = useState("80vh");

  useEffect(() => {
    if (menuRef.current) {
      const rect = menuRef.current.getBoundingClientRect();
      const available = window.innerHeight - rect.top - 16;
      setMaxH(`${Math.max(300, available)}px`);
    }
  }, []);

  return (
    <div
      ref={menuRef}
      className="absolute left-1/2 -translate-x-1/2 top-full z-50 mt-1 w-[95vw] max-w-[1200px] rounded-lg border bg-popover shadow-xl backdrop-blur-sm"
      role="menu"
      style={{ maxHeight: maxH }}
    >
      <div className="overflow-y-auto overscroll-contain p-4" style={{ maxHeight: `calc(${maxH} - 2px)` }}>
        <div className="grid grid-cols-4 gap-x-5 gap-y-3">
          {sections.map((sec) => (
            <div key={sec.heading ?? sec.items[0]?.label}>
              {sec.heading && (
                <h4 className="mb-1.5 text-[11px] font-bold uppercase tracking-wider text-[hsl(var(--industrial-orange))]">
                  {sec.heading}
                </h4>
              )}
              <ul className="space-y-0">
                {sec.items.map((child) => (
                  <li key={child.to}>
                    <Link
                      to={child.to}
                      onClick={onClose}
                      className="block rounded-md px-2 py-1 text-[13px] leading-tight text-popover-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                      role="menuitem"
                    >
                      {child.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

/* ─── Desktop dropdown item ─── */
const DesktopNavItem = ({ item }: { item: NavItem }) => {
  const [open, setOpen] = useState(false);
  const timeout = useRef<ReturnType<typeof setTimeout>>();
  const location = useLocation();

  const allLinks = item.children?.map((c) => c.to) ?? item.mega?.flatMap((s) => s.items.map((i) => i.to)) ?? [];
  const isActive = location.pathname === item.to.split("#")[0] || allLinks.some((l) => location.pathname === l);

  const handleEnter = () => { clearTimeout(timeout.current); setOpen(true); };
  const handleLeave = () => { timeout.current = setTimeout(() => setOpen(false), 200); };

  if (!item.children && !item.mega) {
    return (
      <Link
        to={item.to}
        className={`px-3 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap ${
          isActive ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-muted"
        }`}
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div className="relative" onMouseEnter={handleEnter} onMouseLeave={handleLeave} role="navigation">
      <Link
        to={item.to}
        className={`inline-flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap ${
          isActive ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-muted"
        }`}
        aria-haspopup="true"
        aria-expanded={open}
      >
        {item.label}
        <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </Link>

      {open && item.mega && <DesktopMegaMenu sections={item.mega} onClose={() => setOpen(false)} />}

      {open && item.children && !item.mega && (
        <div className="absolute left-0 top-full z-50 mt-1 min-w-[240px] rounded-lg border bg-popover p-1.5 shadow-xl backdrop-blur-sm" role="menu">
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
const MobileNavItem = ({ item, onClose }: { item: NavItem; onClose: () => void }) => {
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();

  const allChildren = item.children ?? item.mega?.flatMap((s) => s.items) ?? [];

  if (allChildren.length === 0) {
    return (
      <Link
        to={item.to}
        onClick={onClose}
        className={`block px-6 py-3 text-sm font-medium transition-colors ${
          location.pathname === item.to ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-muted"
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
        <div className="bg-muted/50 max-h-[60vh] overflow-y-auto" role="menu">
          {item.mega
            ? item.mega.map((sec) => (
                <div key={sec.heading ?? "default"}>
                  {sec.heading && (
                    <div className="px-8 pt-3 pb-1 text-xs font-bold uppercase tracking-wider text-[hsl(var(--industrial-orange))]">
                      {sec.heading}
                    </div>
                  )}
                  {sec.items.map((child) => (
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
              ))
            : item.children?.map((child) => (
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
                DRY<span className="text-[hsl(var(--industrial-orange))]">COOL</span>
              </span>
              <span className="text-[10px] tracking-widest text-muted-foreground uppercase">
                Constructability | Sustainability
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden xl:flex items-center gap-0.5">
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
          <div className="xl:hidden border-t bg-card pb-4 max-h-[80vh] overflow-y-auto" role="navigation" aria-label="Mobile navigation">
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
