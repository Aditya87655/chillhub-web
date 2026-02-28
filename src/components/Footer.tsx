import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Linkedin, Twitter, Youtube } from "lucide-react";

const quickLinks = [
  { label: "About Us", to: "/about" },
  { label: "Products", to: "/products" },
  { label: "Our Projects", to: "/projects" },
  { label: "Industries", to: "/industries" },
  { label: "Infrastructure", to: "/infrastructure" },
  { label: "Contact", to: "/contact" },
];

const productLinks = [
  { label: "Screw Chillers", to: "/products/air-cooled-screw-chiller" },
  { label: "Scroll Chillers", to: "/products/air-cooled-scroll-chiller" },
  { label: "Ammonia Chillers", to: "/customized/ammonia-chillers" },
  { label: "Oil Chillers", to: "/customized/oil-chiller" },
  { label: "Inverter Chillers", to: "/products/inverter-screw-chiller" },
  { label: "HVAC Chillers", to: "/customized/hvac-chiller" },
  { label: "Glycol Chillers", to: "/customized/glycol-chillers" },
  { label: "Brine Chillers", to: "/customized/brine-chillers" },
];

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-2xl font-bold mb-4">
              DRY<span className="text-[hsl(var(--industrial-orange))]">COOL</span>
            </h3>
            <p className="text-sm opacity-80 leading-relaxed mb-4">
              One of the oldest and leading chiller manufacturers in India, pioneering energy-efficient industrial cooling solutions worldwide since 1992.
            </p>
            <p className="text-sm opacity-80 leading-relaxed mb-6">
              ISO 9001:2015 certified manufacturer with 5000+ chillers installed across 50+ countries.
            </p>
            {/* Social */}
            <div className="flex gap-3">
              {[Facebook, Linkedin, Twitter, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="flex items-center justify-center h-9 w-9 rounded-full bg-primary-foreground/10 hover:bg-[hsl(var(--industrial-orange))] transition-colors" aria-label="Social link">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm opacity-80">
              {quickLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="hover:text-[hsl(var(--industrial-orange))] transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Our Products</h4>
            <ul className="space-y-2 text-sm opacity-80">
              {productLinks.map((p) => (
                <li key={p.to}>
                  <Link to={p.to} className="hover:text-[hsl(var(--industrial-orange))] transition-colors">
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3 text-sm opacity-80">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <div>
                  <p className="font-medium">Corporate Office</p>
                  <p>B-88, Sector-6, Noida,</p>
                  <p>Uttar Pradesh - 201301, India</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <div>
                  <p className="font-medium">Manufacturing Unit</p>
                  <p>Plot No. 35-36, Ecotech-12,</p>
                  <p>Greater Noida, U.P., India</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0" />
                <div>
                  <p>+91-9811134394</p>
                  <p>+91-120-4243862</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0" />
                <div>
                  <p>info@drycoolchillers.com</p>
                  <p>sales@drycoolchillers.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="container py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs opacity-60">
          <span>© {new Date().getFullYear()} Drycool Systems India Pvt. Ltd. All rights reserved.</span>
          <div className="flex gap-4">
            <Link to="/about/profile" className="hover:text-[hsl(var(--industrial-orange))] transition-colors">About</Link>
            <Link to="/contact/enquiry" className="hover:text-[hsl(var(--industrial-orange))] transition-colors">Contact</Link>
            <Link to="/downloads/company-profile" className="hover:text-[hsl(var(--industrial-orange))] transition-colors">Downloads</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
