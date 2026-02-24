import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@/components/Layout";
import Index from "./pages/Index";
import About from "./pages/About";
import Products from "./pages/Products";
import Industries from "./pages/Industries";
import Infrastructure from "./pages/Infrastructure";
import Certificate from "./pages/Certificate";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// About submenu pages
import Profile from "./pages/about/Profile";
import QualityAssurance from "./pages/about/QualityAssurance";
import Accreditations from "./pages/about/Accreditations";
import Clients from "./pages/about/Clients";
import OurTeam from "./pages/about/OurTeam";

// Products submenu pages
import CustomizedChiller from "./pages/products/CustomizedChiller";
import GlobalFootprints from "./pages/products/GlobalFootprints";

// Intelligence submenu pages
import HVACContractor from "./pages/intelligence/HVACContractor";
import CommissioningServices from "./pages/intelligence/CommissioningServices";
import SmartBuildings from "./pages/intelligence/SmartBuildings";
import BMSServices from "./pages/intelligence/BMSServices";

// Projects submenu pages
import Expertise from "./pages/projects/Expertise";
import TurnkeyProjects from "./pages/projects/TurnkeyProjects";

// Contact submenu pages
import Enquiry from "./pages/contact/Enquiry";
import Address from "./pages/contact/Address";
import SpareParts from "./pages/contact/SpareParts";
import AMC from "./pages/contact/AMC";
import Career from "./pages/contact/Career";
import Dealership from "./pages/contact/Dealership";

// Download submenu pages
import CompanyProfileDownload from "./pages/downloads/CompanyProfileDownload";
import { CompanyFlyer, CoolingTowers, EnergySavingChiller, MEPDesign, PlasticChiller, HydrogenChillers } from "./pages/downloads/index";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/infrastructure" element={<Infrastructure />} />
            <Route path="/certificate" element={<Certificate />} />
            <Route path="/contact" element={<Contact />} />

            {/* About submenu */}
            <Route path="/about/profile" element={<Profile />} />
            <Route path="/about/quality-assurance" element={<QualityAssurance />} />
            <Route path="/about/accreditations" element={<Accreditations />} />
            <Route path="/about/clients" element={<Clients />} />
            <Route path="/about/our-team" element={<OurTeam />} />

            {/* Products submenu */}
            <Route path="/products/customized-chiller" element={<CustomizedChiller />} />
            <Route path="/products/global-footprints" element={<GlobalFootprints />} />

            {/* Intelligence submenu */}
            <Route path="/intelligence/hvac-contractor" element={<HVACContractor />} />
            <Route path="/intelligence/commissioning" element={<CommissioningServices />} />
            <Route path="/intelligence/smart-buildings" element={<SmartBuildings />} />
            <Route path="/intelligence/bms" element={<BMSServices />} />

            {/* Projects submenu */}
            <Route path="/projects/expertise" element={<Expertise />} />
            <Route path="/projects/turnkey" element={<TurnkeyProjects />} />

            {/* Contact submenu */}
            <Route path="/contact/enquiry" element={<Enquiry />} />
            <Route path="/contact/address" element={<Address />} />
            <Route path="/contact/spare-parts" element={<SpareParts />} />
            <Route path="/contact/amc" element={<AMC />} />
            <Route path="/contact/career" element={<Career />} />
            <Route path="/contact/dealership" element={<Dealership />} />

            {/* Download submenu */}
            <Route path="/downloads/company-profile" element={<CompanyProfileDownload />} />
            <Route path="/downloads/company-flyer" element={<CompanyFlyer />} />
            <Route path="/downloads/cooling-towers" element={<CoolingTowers />} />
            <Route path="/downloads/energy-saving" element={<EnergySavingChiller />} />
            <Route path="/downloads/mep-design" element={<MEPDesign />} />
            <Route path="/downloads/plastic-chiller" element={<PlasticChiller />} />
            <Route path="/downloads/hydrogen-chillers" element={<HydrogenChillers />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
