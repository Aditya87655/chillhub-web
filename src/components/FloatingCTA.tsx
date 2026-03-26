import { useState } from "react";
import { Link } from "react-router-dom";
import { MessageCircle, Phone, FileText, Headphones, X, Plus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const actions = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    href: "https://wa.me/919811134394",
    external: true,
    color: "bg-green-500 hover:bg-green-600",
  },
  {
    icon: Phone,
    label: "Call Now",
    href: "tel:+919811134394",
    external: true,
    color: "bg-blue-500 hover:bg-blue-600",
  },
  {
    icon: FileText,
    label: "Get a Quote",
    href: "/contact/enquiry",
    external: false,
    color: "bg-industrial-orange hover:bg-industrial-orange/90",
  },
  {
    icon: Headphones,
    label: "Talk to an Engineer",
    href: "tel:+911204243862",
    external: true,
    color: "bg-primary hover:bg-primary/90",
  },
  {
    icon: FileText,
    label: "Download Brochure",
    href: "/downloads/company-profile",
    external: false,
    color: "bg-accent hover:bg-accent/90",
  },
];

const FloatingCTA = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.25 }}
            className="flex flex-col gap-2 mb-2"
          >
            {actions.map((action, i) => {
              const content = (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className={`flex items-center gap-3 rounded-full px-5 py-3 text-white text-sm font-medium shadow-lg ${action.color} transition-all duration-200 hover:shadow-xl cursor-pointer`}
                >
                  <action.icon className="h-4 w-4 shrink-0" />
                  <span className="whitespace-nowrap">{action.label}</span>
                </motion.div>
              );

              if (action.external) {
                return (
                  <a key={action.label} href={action.href} target={action.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" onClick={() => setOpen(false)}>
                    {content}
                  </a>
                );
              }
              return (
                <Link key={action.label} to={action.href} onClick={() => setOpen(false)}>
                  {content}
                </Link>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setOpen(!open)}
        whileTap={{ scale: 0.9 }}
        className={`flex items-center justify-center h-14 w-14 rounded-full shadow-xl transition-all duration-300 ${
          open ? "bg-foreground text-background rotate-45" : "bg-industrial-orange text-white"
        }`}
        aria-label={open ? "Close menu" : "Contact options"}
      >
        {open ? <X className="h-6 w-6" /> : <Plus className="h-6 w-6" />}
        {!open && (
          <span className="absolute inset-0 rounded-full bg-industrial-orange animate-ping opacity-20" />
        )}
      </motion.button>
    </div>
  );
};

export default FloatingCTA;
