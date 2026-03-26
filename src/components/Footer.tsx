import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Linkedin, Twitter, Youtube, Instagram } from "lucide-react";
import { motion } from "framer-motion";

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
    <footer className="relative bg-primary text-primary-foreground overflow-hidden">
      {/* Decorative top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-1"
        style={{ background: "linear-gradient(90deg, hsl(var(--industrial-teal)), hsl(var(--industrial-orange)), hsl(var(--industrial-teal)))" }}
      />

      {/* Subtle decorative blobs */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-accent blur-3xl" />
        <div className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full bg-industrial-orange blur-3xl" />
      </div>

      <div className="container relative py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="font-heading text-2xl font-bold mb-4">
              DRY<span className="text-industrial-orange">COOL</span>
            </h3>
            <p className="text-sm opacity-80 leading-relaxed mb-4">
              One of the oldest and leading chiller manufacturers in India, pioneering energy-efficient industrial cooling solutions worldwide since 1992.
            </p>
            <p className="text-sm opacity-80 leading-relaxed mb-6">
              ISO 9001:2015 certified manufacturer with 5000+ chillers installed across 50+ countries.
            </p>
            {/* Social */}
            <div className="flex gap-3">
              {[
                { Icon: Facebook, url: "https://www.facebook.com/Drycoolchillers" },
                { Icon: Linkedin, url: "https://in.linkedin.com/company/drycool-systems-india-private-limite" },
                { Icon: Twitter, url: "https://x.com/drycoolchiller" },
                { Icon: Youtube, url: "https://www.youtube.com/channel/UCKBDberY3tU3S47r5dqpXbA" },
                { Icon: Instagram, url: "https://www.instagram.com/drycoolchillers/" },
              ].map(({ Icon, url }, i) => (
                <motion.a
                  key={i}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -2 }}
                  className="flex items-center justify-center h-10 w-10 rounded-full bg-primary-foreground/10 hover:bg-industrial-orange transition-colors duration-300"
                  aria-label="Social link"
                >
                  <Icon className="h-4 w-4" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-heading text-lg font-semibold mb-4 relative inline-block">
              Quick Links
              <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-industrial-orange rounded-full" />
            </h4>
            <ul className="space-y-2.5 text-sm opacity-80">
              {quickLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="hover:text-industrial-orange hover:pl-1 transition-all duration-300 inline-block">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Products */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-heading text-lg font-semibold mb-4 relative inline-block">
              Our Products
              <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-industrial-orange rounded-full" />
            </h4>
            <ul className="space-y-2.5 text-sm opacity-80">
              {productLinks.map((p) => (
                <li key={p.to}>
                  <Link to={p.to} className="hover:text-industrial-orange hover:pl-1 transition-all duration-300 inline-block">
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="font-heading text-lg font-semibold mb-4 relative inline-block">
              Contact Us
              <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-industrial-orange rounded-full" />
            </h4>
            <div className="space-y-4 text-sm opacity-80">
              <div className="flex items-start gap-3 group">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary-foreground/10 flex items-center justify-center group-hover:bg-industrial-orange transition-colors duration-300">
                  <MapPin className="h-4 w-4" />
                </div>
                <div>
                  <p className="font-medium">Corporate Office</p>
                  <p>B-88, Sector-6, Noida,</p>
                  <p>Uttar Pradesh - 201301, India</p>
                </div>
              </div>
              <div className="flex items-start gap-3 group">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary-foreground/10 flex items-center justify-center group-hover:bg-industrial-orange transition-colors duration-300">
                  <MapPin className="h-4 w-4" />
                </div>
                <div>
                  <p className="font-medium">Manufacturing Unit</p>
                  <p>Plot No. 35-36, Ecotech-12,</p>
                  <p>Greater Noida, U.P., India</p>
                </div>
              </div>
              <div className="flex items-center gap-3 group">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary-foreground/10 flex items-center justify-center group-hover:bg-industrial-orange transition-colors duration-300">
                  <Phone className="h-4 w-4" />
                </div>
                <div>
                  <p>+91-9811134394</p>
                  <p>+91-120-4243862</p>
                </div>
              </div>
              <div className="flex items-center gap-3 group">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary-foreground/10 flex items-center justify-center group-hover:bg-industrial-orange transition-colors duration-300">
                  <Mail className="h-4 w-4" />
                </div>
                <div>
                  <p>info@drycoolchillers.com</p>
                  <p>sales@drycoolchillers.com</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 relative">
        <div className="container py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs opacity-60">
          <span>© {new Date().getFullYear()} Drycool Systems India Pvt. Ltd. All rights reserved.</span>
          <div className="flex gap-4">
            <Link to="/about/profile" className="hover:text-industrial-orange transition-colors">About</Link>
            <Link to="/contact/enquiry" className="hover:text-industrial-orange transition-colors">Contact</Link>
            <Link to="/downloads/company-profile" className="hover:text-industrial-orange transition-colors">Downloads</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
