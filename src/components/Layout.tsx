import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Breadcrumb from "./Breadcrumb";
import StickyCTA from "./StickyCTA";
import ScrollToTop from "./ScrollToTop";
import ScrollProgress from "./ScrollProgress";
import WhatsAppButton from "./WhatsAppButton";

const Layout = () => {
  const location = useLocation();

  return (
    <div className="flex min-h-screen flex-col">
      <ScrollProgress />
      <Navbar />
      <Breadcrumb />
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
      <StickyCTA />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  );
};

export default Layout;
