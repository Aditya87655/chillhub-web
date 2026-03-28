import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NavChild {
  label: string;
  to: string;
}

interface NavSection {
  heading?: string;
  headingLink?: string;
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
        headingLink: "/products/screw-chillers",
        items: [
          { label: "Air Cooled Screw Chiller", to: "/products/air-cooled-screw-chiller" },
          { label: "Water Cooled Screw Chiller", to: "/products/water-cooled-screw-chiller" },
          { label: "Inverter Screw Chiller", to: "/products/inverter-screw-chiller" },
          { label: "Air Cooled VFD Screw Chiller", to: "/products/air-cooled-vfd-screw-chiller" },
        ],
      },
      {
        heading: "SCROLL CHILLER",
        headingLink: "/products/scroll-chillers",
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
        headingLink: "/products/reciprocating-chillers",
        items: [
          { label: "Water-cooled Reciprocating Chillers", to: "/products/water-cooled-reciprocating-chillers" },
          { label: "Air-cooled Reciprocating Chillers", to: "/products/air-cooled-reciprocating-chillers" },
          { label: "Industrial Reciprocating Chillers", to: "/products/industrial-reciprocating-chillers" },
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
        headingLink: "/products/application",
        items: [
          { label: "Plastic Industry", to: "/application/chiller-for-plastic-industry" },
          { label: "Cement Industry (Batching Plant)", to: "/application/batching-plant-chiller" },
          { label: "Brewery & Fermentation", to: "/application/chiller-for-brewery-and-fermentation" },
          { label: "Food & Beverage", to: "/application/chiller-for-food-beverage-industry" },
          { label: "Heavy Industrial", to: "/application/chiller-for-heavy-industrial-purpose" },
          { label: "Hydrogen Refueling", to: "/application/chiller-for-hydrogen-refueling-station" },
          { label: "Milk Industry", to: "/application/chillers-for-milk-industry" },
          { label: "Medical Device", to: "/application/chiller-for-medical-device" },
          { label: "CNC Cooling", to: "/application/chiller-for-cnc-cooling" },
          { label: "Printing & Packaging", to: "/application/chiller-for-printing-and-packaging" },
          { label: "BESS Chillers", to: "/application/battery-energy-storage-systems-bess-chillers" },
          { label: "Eyewash & Safety Showers", to: "/application/chillers-for-eyewash-and-safety-showers" },
        ],
      },
      {
        heading: "CUSTOMIZED CHILLER",
        headingLink: "/customized",
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
        headingLink: "/products/global-footprints",
        items: [
          { label: "Chillers in UAE", to: "/products/industrial-chillers-in-uae" },
          { label: "Chillers in Africa", to: "/products/industrial-chillers-in-africa" },
          { label: "Chillers in Indonesia", to: "/products/industrial-chillers-in-indonesia" },
          { label: "Chillers in Nepal", to: "/products/industrial-chillers-in-nepal" },
          { label: "Chillers in Bangladesh", to: "/products/industrial-chiller-in-bangladesh" },
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
      { label: "Batching Plant Chiller", to: "/downloads/batching-plant-chiller" },
      { label: "Food & Beverages Chiller", to: "/downloads/food-beverages-chiller" },
      { label: "Printing & Packaging Chiller", to: "/downloads/printing-packaging-chiller" },
      { label: "Chemical & Pharmaceutical Chiller", to: "/downloads/chemical-pharmaceutical-chiller" },
      { label: "R410a Air Cooled Chiller Series", to: "/downloads/r410a-air-cooled-chiller" },
      { label: "Building Management System", to: "/downloads/bms" },
      { label: "Chiller For MRI Machine", to: "/downloads/mri-machine-chiller" },
      { label: "Air Chiller", to: "/downloads/air-chiller" },
      { label: "Dehumidifier", to: "/downloads/dehumidifier" },
    ],
  },
];

/* ─── Desktop Mega Menu ─── */
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
    <motion.div
      ref={menuRef}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="fixed left-0 right-0 top-[var(--navbar-height,auto)] z-50 mx-auto w-full max-w-[1200px] rounded-xl border border-border/50 bg-card/95 backdrop-blur-xl shadow-2xl"
      role="menu"
      style={{ maxHeight: maxH }}
    >
      <div className="overflow-y-auto overscroll-contain p-5" style={{ maxHeight: `calc(${maxH} - 2px)` }}>
        <div className="grid grid-cols-4 gap-x-6 gap-y-4">
          {sections.map((sec) => (
            <div key={sec.heading ?? sec.items[0]?.label}>
              {sec.heading && (
                sec.headingLink ? (
                  <Link to={sec.headingLink} onClick={onClose} className="mb-2 block text-[11px] font-bold uppercase tracking-wider text-industrial-orange hover:underline">
                    {sec.heading}
                  </Link>
                ) : (
                  <h4 className="mb-2 text-[11px] font-bold uppercase tracking-wider text-industrial-orange">
                    {sec.heading}
                  </h4>
                )
              )}
              <ul className="space-y-0.5">
                {sec.items.map((child) => (
                  <li key={child.to}>
                    <Link
                      to={child.to}
                      onClick={onClose}
                      className="block rounded-lg px-2.5 py-1.5 text-[13px] leading-tight text-popover-foreground/80 hover:bg-accent/10 hover:text-accent transition-all duration-200"
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
    </motion.div>
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
        className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 whitespace-nowrap relative group ${
          isActive ? "text-industrial-orange" : "text-foreground/80 hover:text-foreground"
        }`}
      >
        {item.label}
        <span className={`absolute bottom-0 left-3 right-3 h-[2px] rounded-full bg-industrial-orange transition-transform duration-300 origin-left ${isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`} />
      </Link>
    );
  }

  return (
    <div className={item.mega ? "" : "relative"} onMouseEnter={handleEnter} onMouseLeave={handleLeave} role="navigation">
      <Link
        to={item.to}
        className={`inline-flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 whitespace-nowrap relative group ${
          isActive ? "text-industrial-orange" : "text-foreground/80 hover:text-foreground"
        }`}
        aria-haspopup="true"
        aria-expanded={open}
      >
        {item.label}
        <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
        <span className={`absolute bottom-0 left-3 right-3 h-[2px] rounded-full bg-industrial-orange transition-transform duration-300 origin-left ${isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`} />
      </Link>

      <AnimatePresence>
        {open && item.mega && <DesktopMegaMenu sections={item.mega} onClose={() => setOpen(false)} />}
      </AnimatePresence>

      <AnimatePresence>
        {open && item.children && !item.mega && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className={`absolute ${item.label === "Contact Us" || item.label === "Download" ? "right-0" : "left-0"} top-full z-50 mt-2 min-w-[240px] rounded-xl border border-border/50 bg-card/95 backdrop-blur-xl p-2 shadow-2xl`}
            role="menu"
          >
            {item.children.map((child) => (
              <Link
                key={child.to}
                to={child.to}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2.5 text-sm transition-all duration-200 text-popover-foreground/80 hover:bg-accent/10 hover:text-accent hover:pl-4"
                role="menuitem"
              >
                {child.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
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
          location.pathname === item.to ? "text-industrial-orange" : "text-foreground hover:bg-muted"
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
        <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${expanded ? "rotate-180" : ""}`} />
      </button>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="bg-muted/50 max-h-[60vh] overflow-y-auto" role="menu">
              {item.mega
                ? item.mega.map((sec) => (
                    <div key={sec.heading ?? "default"}>
                      {sec.heading && (
                        <div className="px-8 pt-3 pb-1 text-xs font-bold uppercase tracking-wider text-industrial-orange">
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
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

/* ─── Main Navbar ─── */
const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-500 ${scrolled ? "shadow-lg" : ""}`}>
      {/* Top bar */}
      <motion.div
        className="bg-primary text-primary-foreground overflow-hidden"
        animate={{ height: scrolled ? 0 : "auto", opacity: scrolled ? 0 : 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="container flex items-center justify-between py-2 text-sm">
          <div className="flex items-center gap-2">
            <Phone className="h-3.5 w-3.5" />
            <span className="font-medium">Call: +91-9811134394</span>
          </div>
          <span className="hidden md:block">Drycool Systems India Pvt. Ltd.</span>
        </div>
      </motion.div>

      {/* Main nav */}
      <nav
        className={`border-b transition-all duration-500 relative ${
          scrolled
            ? "bg-card/80 backdrop-blur-xl border-border/30 shadow-sm"
            : "bg-card/95 backdrop-blur-md border-border/50"
        }`}
        aria-label="Main navigation"
      >
        <div className="container flex items-center justify-between py-3">
          
          {/* 🌟 UPDATED LOGO SECTION 🌟 */}
          <Link to="/" className="flex items-center shrink-0 transition-transform hover:scale-[1.02]">
            <img 
              src="/images/logo.jpeg" /* 🔴 Make sure this path matches where your logo is stored */
              alt="Drycool Systems Logo" 
              className="h-12 md:h-16 w-auto object-contain drop-shadow-sm" 
            />
          </Link>
          {/* 🌟 END LOGO SECTION 🌟 */}

          {/* Desktop nav */}
          <div className="hidden xl:flex items-center gap-0.5">
            {navItems.map((item) => (
              <DesktopNavItem key={item.label} item={item} />
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="xl:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="xl:hidden border-t bg-card overflow-hidden"
              role="navigation"
              aria-label="Mobile navigation"
            >
              <div className="pb-4 max-h-[80vh] overflow-y-auto">
                {navItems.map((item) => (
                  <MobileNavItem key={item.label} item={item} onClose={() => setMobileOpen(false)} />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;
