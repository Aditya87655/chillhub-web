import { Link } from "react-router-dom";
import { MessageCircle, Phone } from "lucide-react";

const StickyCTA = () => (
  <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
    <Link
      to="/contact"
      className="flex items-center justify-center h-12 w-12 rounded-full bg-accent text-accent-foreground shadow-lg hover:scale-110 transition-transform"
      aria-label="Get a Quote"
      title="Get a Quote"
    >
      <MessageCircle className="h-5 w-5" />
    </Link>
    <a
      href="tel:+919811134394"
      className="flex items-center justify-center h-12 w-12 rounded-full bg-primary text-primary-foreground shadow-lg hover:scale-110 transition-transform"
      aria-label="Call Now"
      title="Call Now"
    >
      <Phone className="h-5 w-5" />
    </a>
  </div>
);

export default StickyCTA;
