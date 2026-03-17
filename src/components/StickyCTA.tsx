import { Link } from "react-router-dom";
import { MessageCircle, Phone } from "lucide-react";
import { motion } from "framer-motion";

const StickyCTA = () => (
  <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
    <motion.div whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.95 }}>
      <Link
        to="/contact"
        className="flex items-center justify-center h-12 w-12 rounded-full bg-accent text-accent-foreground shadow-lg hover:shadow-xl transition-shadow relative group"
        aria-label="Get a Quote"
        title="Get a Quote"
      >
        <span className="absolute inset-0 rounded-full bg-accent animate-ping opacity-20 group-hover:opacity-30" />
        <MessageCircle className="h-5 w-5 relative z-10" />
      </Link>
    </motion.div>
    <motion.div whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.95 }}>
      <a
        href="tel:+919811134394"
        className="flex items-center justify-center h-12 w-12 rounded-full bg-primary text-primary-foreground shadow-lg hover:shadow-xl transition-shadow"
        aria-label="Call Now"
        title="Call Now"
      >
        <Phone className="h-5 w-5" />
      </a>
    </motion.div>
  </div>
);

export default StickyCTA;
