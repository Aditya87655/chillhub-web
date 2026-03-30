import { useState, useRef } from "react";
import SectionHeading from "@/components/SectionHeading";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import GlassCard from "@/components/GlassCard";
import { Send, Phone, Mail, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import HCaptcha from "@hcaptcha/react-hcaptcha";

const Dealership = () => {
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
      <PageHero title="Dealership" subtitle="Partner with Drycool Systems" />

      <section className="py-20">
        <div className="container grid lg:grid-cols-2 gap-12">
          <AnimatedSection>
            <SectionHeading title="DEALERSHIP FORM" centered={false} />
            <p className="mb-8 text-muted-foreground leading-relaxed">
              Become part of our growing network. Please fill the form below to apply for a dealership.
            </p>
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
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="space-y-8 lg:mt-24">
              <div className="space-y-4">
                <h4 className="font-heading text-xl font-bold text-foreground">Address</h4>
                <div className="flex gap-4">
                  <MapPin className="h-5 w-5 text-accent shrink-0 mt-1" />
                  <p className="text-muted-foreground">
                    Address: c-34, sector 63,<br />
                    Noida – 201307,<br />
                    Uttar Pradesh,<br />
                    India.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-heading text-xl font-bold text-foreground">Phone</h4>
                <div className="flex gap-4">
                  <Phone className="h-5 w-5 text-accent shrink-0 mt-1" />
                  <p className="text-muted-foreground">Mobile :+91-9811134394</p>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-heading text-xl font-bold text-foreground">Email</h4>
                <div className="flex gap-4">
                  <Mail className="h-5 w-5 text-accent shrink-0 mt-1" />
                  <p className="text-muted-foreground">enquiry@drycoolchillers.com</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Enrichment */}
      <section className="py-20 bg-section-gradient">
        <div className="container space-y-12">
          <AnimatedSection>
            <SectionHeading title="Dealership Partnership Benefits" centered={false} />
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Becoming a Drycool Systems dealer offers significant business opportunities in the growing industrial cooling market. As a dealer partner, you gain access to our comprehensive product portfolio including screw chillers, scroll chillers, reciprocating chillers, cooling towers, and customized cooling solutions that serve diverse industrial applications. Our dealer support program includes competitive pricing structures, marketing material support, technical training for your sales and service teams, and priority access to new product launches.
              </p>
              <p>
                Drycool dealers benefit from our established brand reputation built over three decades of manufacturing excellence and service to major corporations across India and internationally. Our ISO 9001:2008 certified products carry strong market credibility, making it easier for dealers to win customer confidence and close sales in competitive tender situations. The growing demand for energy-efficient industrial cooling solutions creates a favorable market environment for dealers representing Drycool's advanced VFD and inverter chiller technologies.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <SectionHeading title="Dealer Support & Training" centered={false} />
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                We provide comprehensive training programs for dealer technical staff covering product knowledge, application engineering, installation best practices, and basic troubleshooting skills. Factory visits are arranged for new dealers to understand our manufacturing capabilities and quality processes firsthand. Our regional sales managers provide ongoing support for customer visits, technical presentations, and proposal preparation, ensuring dealers have the backup they need to handle projects of any size and complexity.
              </p>
              <p>
                Dealer territories are carefully defined to protect market interests and ensure adequate coverage for customer service. Our after-sales support infrastructure backs dealer operations with spare parts logistics, warranty processing, and escalation support for complex technical issues. We invite entrepreneurs, HVAC professionals, and industrial equipment distributors with established market networks to explore this partnership opportunity by completing the dealership application form above.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default Dealership;