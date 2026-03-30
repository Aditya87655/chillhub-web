import { useState, useRef } from "react";
import SectionHeading from "@/components/SectionHeading";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import GlassCard from "@/components/GlassCard";
import { Phone, Mail, MapPin, Send, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import HCaptcha from "@hcaptcha/react-hcaptcha";

// 検 Corrected Address details
const contactInfo = [
  { icon: MapPin, title: "Address", text: "Works 1: C-34, Sector 63, Noida - 201307, U.P., India" },
  { icon: Phone, title: "Phone", text: "+91-9811134394" },
  { icon: Mail, title: "Email", text: "enquiry@drycoolchillers.com" },
  { icon: Clock, title: "Working Hours", text: "Mon - Sat: 9:00 AM - 6:00 PM" },
];

const Contact = () => {
  const { toast } = useToast();
  // 検 Matched state exactly to Enquiry.tsx
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
          access_key: import.meta.env.VITE_WEB3FORMS_KEY, // 検 Pulled directly from .env
          from_name: "Drycool Contact Page",
          subject: form.subject ? form.subject : "New Contact Enquiry",
          "h-captcha-response": captchaToken,
          ...form,
        }),
      });

      if (response.status === 200) {
        toast({ title: "Enquiry Sent!", description: "Thank you for your enquiry. We will contact you soon." });
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
      <PageHero title="Contact Us" subtitle="Get in touch for a custom cooling solution" />

      <section id="enquiry" className="py-20">
        <div className="container grid lg:grid-cols-2 gap-12">
          
          {/* 検 Updated Form: Exact Match to Enquiry.tsx */}
          <AnimatedSection>
            <SectionHeading title="Send an Inquiry" centered={false} />
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
              <div>
                <textarea name="message" rows={5} placeholder="Your Message:" value={form.message} onChange={handleChange} className={inputClass} required />
              </div>

              <div className="py-2">
                <HCaptcha
                  ref={captchaRef}
                  sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"
                  onVerify={(token) => setCaptchaToken(token)}
                  onExpire={() => setCaptchaToken("")}
                />
              </div>

              <button type="submit" disabled={submitting} className="inline-flex items-center gap-2 rounded-lg bg-accent px-7 py-3.5 font-semibold text-accent-foreground hover:opacity-90 transition-opacity disabled:opacity-50 shadow-lg">
                {submitting ? "Sending..." : "Submit Enquiry"} <Send className="h-4 w-4" />
              </button>
            </form>
          </AnimatedSection>

          {/* Contact Info Side Panel */}
          <AnimatedSection delay={0.2}>
            <SectionHeading title="Get in Touch" centered={false} />
            <div className="space-y-4">
              {contactInfo.map((c) => (
                <GlassCard key={c.title} className="flex gap-4 bg-card" hover={false}>
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-accent/10 shrink-0">
                    <c.icon className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-bold text-foreground">{c.title}</h3>
                    <p className="text-sm text-muted-foreground">{c.text}</p>
                  </div>
                </GlassCard>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 桃 Interactive Google Map Section */}
      <section className="py-10 pb-20">
        <div className="container">
          <AnimatedSection>
            <SectionHeading title="Find Us on the Map" centered={true} />
            
            <div className="mt-8 w-full h-[400px] md:h-[500px] rounded-[2rem] overflow-hidden border border-border/40 shadow-xl relative bg-card/50 group">
              <div className="absolute inset-0 bg-accent/5 animate-pulse -z-10" />
              <iframe
                src="https://maps.google.com/maps?q=Drycool%20Systems,%20C-34,%20Sector%2063,%20Noida&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 opacity-90 group-hover:opacity-100 transition-opacity duration-500"
              ></iframe>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Enrichment */}
      <section className="py-20 bg-section-gradient">
        <div className="container space-y-12">
          <AnimatedSection>
            <SectionHeading title="Why Contact Drycool Systems?" centered={false} />
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Whether you are planning a new industrial cooling installation, upgrading existing equipment, or seeking reliable maintenance support, our experienced team is ready to assist. With over three decades of expertise in chiller manufacturing and HVAC system design, Drycool Systems provides comprehensive consultation services that help you select the optimal cooling solution for your specific application requirements, budget constraints, and energy efficiency goals.
              </p>
              <p>
                Our engineering team can assist with initial cooling load calculations, equipment sizing, system configuration recommendations, and detailed project proposals. For facilities requiring custom-engineered solutions, we offer design consultations that explore specialized requirements including ultra-low temperature operation, hazardous area compliance, clean-room compatibility, and high-capacity central plant configurations.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <SectionHeading title="Our Service Commitment" centered={false} />
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                When you reach out to Drycool Systems, you connect with a team that prioritizes responsive communication and technical accuracy. Initial inquiries typically receive a detailed response within 24 business hours, and complex project quotations are prepared within three to five working days. Our sales engineers are available for site visits across India to assess installation requirements and provide in-person technical consultation.
              </p>
              <p>
                For international inquiries, our export team manages complete logistics coordination including equipment packaging for ocean freight, customs documentation, and arrangement of on-site commissioning support. Our commitment to customer satisfaction extends from the first point of contact through installation, commissioning, and ongoing maintenance for the entire operational life of your cooling equipment.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default Contact;