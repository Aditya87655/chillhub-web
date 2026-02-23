import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-2xl font-bold mb-4">
              DRY<span className="text-accent">COOL</span>
            </h3>
            <p className="text-sm opacity-80 leading-relaxed">
              One of the oldest and leading chiller manufacturers in India, pioneering energy-efficient industrial cooling solutions worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm opacity-80">
              {[
                { label: "About Us", to: "/about" },
                { label: "Products", to: "/products" },
                { label: "Industries", to: "/industries" },
                { label: "Contact", to: "/contact" },
              ].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="hover:text-accent transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-sm opacity-80">
              {[
                "Screw Chillers",
                "Scroll Chillers",
                "Ammonia Chillers",
                "Oil Chillers",
                "Inverter Chillers",
                "VFD Chillers",
              ].map((p) => (
                <li key={p}>
                  <Link to="/products" className="hover:text-accent transition-colors">
                    {p}
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
                <span>Noida, Uttar Pradesh, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0" />
                <span>+91-9811134394</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0" />
                <span>info@drycoolchillers.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="container py-4 text-center text-xs opacity-60">
          © {new Date().getFullYear()} Drycool Systems India Pvt. Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
