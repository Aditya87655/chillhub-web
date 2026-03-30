import { useState, useRef } from "react";
import SectionHeading from "@/components/SectionHeading";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import GlassCard from "@/components/GlassCard";
import { Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import HCaptcha from "@hcaptcha/react-hcaptcha";

const spareParts = [
  { title: "Shell & Tube Type Condenser", img: "https://www.drycoolchillers.com/wp-content/uploads/2015/10/Shell-Tube-Condenser2-570x321.jpg" },
  { title: "Shell & Tube Type Evaporator", img: "https://www.drycoolchillers.com/wp-content/uploads/2015/10/shell-and-tube-evaporator2-570x321.jpg" },
  { title: "Filters", img: "https://www.drycoolchillers.com/wp-content/uploads/2015/10/FILTERS2-570x321.jpg" },
  { title: "Rotary Sprinkler", img: "https://www.drycoolchillers.com/wp-content/uploads/2015/10/Rotary-Sprinkler-11-570x321.jpg" },
  { title: "Sprinkler Fan", img: "https://www.drycoolchillers.com/wp-content/uploads/2015/10/SPRINKLER-FAN2-570x321.jpg" },
  { title: "Flange Motor", img: "https://www.drycoolchillers.com/wp-content/uploads/2015/10/Flange-Motor1-570x321.jpg" },
  { title: "PVC Fills", img: "https://www.drycoolchillers.com/wp-content/uploads/2015/10/Rotary-Sprinkler-21-570x321.jpg" },
  { title: "Screw Compressor", img: "https://www.drycoolchillers.com/wp-content/uploads/2022/09/bitzer-screw-compressors-500x500-570x321.png" },
  { title: "Scroll Compressor", img: "https://www.drycoolchillers.com/wp-content/uploads/2022/09/Scroll-Compressor-2-570x321.jpg" },
  { title: "Oil Separator", img: "https://www.drycoolchillers.com/wp-content/uploads/2022/09/New-Project-13-570x321.jpg" },
  { title: "Non return valve", img: "https://www.drycoolchillers.com/wp-content/uploads/2022/09/New-Project-12-570x321.jpg" },
  { title: "Expansion Valve", img: "https://www.drycoolchillers.com/wp-content/uploads/2022/09/New-Project-11-570x321.jpg" },
  { title: "High Pressure Gauge", img: "https://www.drycoolchillers.com/wp-content/uploads/2022/09/New-Project-10-570x321.jpg" },
  { title: "Ball valve", img: "https://www.drycoolchillers.com/wp-content/uploads/2022/09/New-Project-9-570x321.jpg" },
  { title: "Water flow switch", img: "https://www.drycoolchillers.com/wp-content/uploads/2022/09/New-Project-7-570x321.jpg" },
  { title: "Low Pressure Switch", img: "https://www.drycoolchillers.com/wp-content/uploads/2022/09/low-pressure-switch-STANDARD-1-570x321.jpg" },
  { title: "High Pressure Switch", img: "https://www.drycoolchillers.com/wp-content/uploads/2022/09/Danfoss-HP-SWITCH-e1664181616623-570x321.jpg" },
  { title: "Condenser Tube Cleaning Brush", img: "/images/products/brush.jpg" },
  { title: "Temperature Sensor", img: "/images/products/temp-sensor.png" },
];

const SpareParts = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", company: "", city: "", phone: "", email: "", subject: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const [captchaToken, setCaptchaToken] = useState("");
  const captchaRef = useRef<HCaptcha>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!captchaToken) {
      toast({ title: "Verification Required", description: "Please check the CAPTCHA box to prove you are human.", variant: "destructive" });
      return;
    }

    setSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_KEY, 
          from_name: "Drycool Website Form",
          subject: form.subject ? form.subject : "New Website Enquiry",
          "h-captcha-response": captchaToken,
          ...form,
        }),
      });

      if (response.status === 200) {
        toast({ title: "Success!", description: "Thank you for your enquiry. We will contact you soon." });
        setForm({ name: "", company: "", city: "", phone: "", email: "", subject: "", message: "" });
        setCaptchaToken("");
        captchaRef.current?.resetCaptcha();
      } else {
        toast({ title: "Error", description: "Submission failed. Please try again.", variant: "destructive" });
      }
    } catch (error) {
      toast({ title: "Error", description: "Something went wrong.", variant: "destructive" });
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass = "w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-shadow";

  return (
    <>
      <PageHero title="Spare parts of chillers" subtitle="Drycool Systems Genuine Chiller Components" />

      <section className="py-20">
        <div className="container">
          <AnimatedSection>
            <SectionHeading title="Spare parts of chillers" />
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {spareParts.map((part, i) => (
              <AnimatedSection key={part.title} delay={i * 0.05}>
                <div className="group overflow-hidden rounded-2xl bg-card border border-border transition-all hover:shadow-xl">
                  <div className="aspect-[16/9] overflow-hidden">
                    <img
                      src={part.img}
                      alt={part.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="font-heading text-lg font-bold text-foreground">{part.title}</h3>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection>
            <div className="max-w-3xl mx-auto">
              <SectionHeading title="ENQUIRY FORM" subtitle="Contact us for any spare parts requirement" />
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <input name="name" placeholder="Your Name:" value={form.name} onChange={handleChange} className={inputClass} required />
                  <input name="company" placeholder="Company Name:" value={form.company} onChange={handleChange} className={inputClass} />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <input name="city" placeholder="City:" value={form.city} onChange={handleChange} className={inputClass} />
                  <input name="phone" placeholder="Phone:" value={form.phone} onChange={handleChange} className={inputClass} required />
                </div>
                <input name="email" type="email" placeholder="Your Email:" value={form.email} onChange={handleChange} className={inputClass} required />
                <input name="subject" placeholder="Subject:" value={form.subject} onChange={handleChange} className={inputClass} />
                <textarea name="message" rows={5} placeholder="Your Message:" value={form.message} onChange={handleChange} className={inputClass} required />
                
                <div className="py-2">
                  <HCaptcha
                    ref={captchaRef}
                    sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"
                    onVerify={(token) => setCaptchaToken(token)}
                    onExpire={() => setCaptchaToken("")}
                  />
                </div>

                <button type="submit" disabled={submitting} className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-7 py-3.5 font-semibold text-accent-foreground hover:opacity-90 transition-opacity disabled:opacity-50 shadow-lg">
                  {submitting ? "Sending..." : "Submit Enquiry"} <Send className="h-4 w-4" />
                </button>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Enrichment */}
      <section className="py-20 bg-section-gradient">
        <div className="container space-y-12">
          <AnimatedSection>
            <SectionHeading title="Genuine Spare Parts for Optimal Performance" centered={false} />
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Using genuine Drycool spare parts is essential for maintaining the performance, efficiency, and reliability of your chiller system. Our spare parts are manufactured or sourced to the same exacting specifications as the original components installed in your equipment, ensuring perfect fit, optimal performance, and maintained warranty coverage. Non-genuine or counterfeit components can compromise system performance, increase energy consumption, and potentially cause costly equipment damage.
              </p>
              <p>
                Our comprehensive spare parts inventory covers all critical chiller components including compressors, heat exchangers, expansion valves, pressure switches, temperature sensors, control boards, and fluid circuit components. We maintain strategic stock levels for high-demand items to ensure rapid fulfillment of urgent maintenance requirements, minimizing equipment downtime for our customers.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <SectionHeading title="Ordering & Technical Support" centered={false} />
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                To order spare parts, simply submit an enquiry through the form above with your chiller model number, serial number, and the part description or part number if available. Our parts department will identify the correct components, confirm availability and pricing, and arrange prompt dispatch. For urgent breakdown situations, our service hotline at +91-9811134394 provides priority parts identification and expedited shipping coordination.
              </p>
              <p>
                Our technical support team can also assist with troubleshooting guidance to help your maintenance staff accurately diagnose component failures and identify the correct replacement parts. Whether you need a single sensor replacement or a complete compressor overhaul kit, Drycool Systems is committed to keeping your cooling equipment running at peak performance with minimal disruption to your operations.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default SpareParts;