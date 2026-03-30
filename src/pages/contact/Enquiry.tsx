import { useState, useRef } from "react"; // 🆕 NEW: Imported useRef
import SectionHeading from "@/components/SectionHeading";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import { Send, Phone, Mail, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import HCaptcha from "@hcaptcha/react-hcaptcha"; // 🆕 NEW: Imported hCaptcha

const Enquiry = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", company: "", city: "", phone: "", email: "", subject: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  // 🆕 NEW: State to store the token and a ref to reset the visual widget
  const [captchaToken, setCaptchaToken] = useState("");
  const captchaRef = useRef<HCaptcha>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // 🛑 SPAM TRAP: Read directly from the DOM with TypeScript casting (Kept as extra security)
    const formData = new FormData(e.currentTarget as HTMLFormElement);
    if (formData.get("botcheck")) {
      toast({ title: "Success!", description: "Thank you for your enquiry." });
      return; 
    }

    // 🆕 NEW: Block submission if CAPTCHA isn't solved
    if (!captchaToken) {
      toast({ 
        title: "Verification Required", 
        description: "Please check the CAPTCHA box to prove you are human.", 
        variant: "destructive" 
      });
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
          "h-captcha-response": captchaToken, // 🆕 NEW: Send the token to Web3Forms
          ...form,
        }),
      });

      if (response.status === 200) {
        toast({ title: "Success!", description: "Thank you for your enquiry. We will contact you soon." });
        setForm({ name: "", company: "", city: "", phone: "", email: "", subject: "", message: "" });
        
        // 🆕 NEW: Reset the CAPTCHA visually and clear the token state
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
      <PageHero title="Enquiry" subtitle="Drycool Systems Online Enquiry" />

      <section className="py-20">
        <div className="container grid lg:grid-cols-2 gap-12">
          <AnimatedSection>
            <SectionHeading title="ENQUIRY FORM" centered={false} />
            <p className="mb-8 text-muted-foreground leading-relaxed">
              Thank you for taking the time to fill in our online Enquiry form. Please fill your requirements then we will contact you as soon as possible.
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
              
              {/* Keep existing honeypot */}
              <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />
              
              <input name="email" type="email" placeholder="Your Email:" value={form.email} onChange={handleChange} className={inputClass} required />
              <input name="subject" placeholder="Subject:" value={form.subject} onChange={handleChange} className={inputClass} />
              <div>
                <textarea name="message" rows={5} placeholder="Your Message:" value={form.message} onChange={handleChange} className={inputClass} required />
              </div>

              {/* 🆕 NEW: hCaptcha Widget placed right above the submit button */}
              <div className="py-2">
                <HCaptcha
                  ref={captchaRef}
                  sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2" // Web3Forms Universal Key
                  onVerify={(token) => setCaptchaToken(token)}
                  onExpire={() => setCaptchaToken("")}
                />
              </div>

              <button type="submit" disabled={submitting} className="inline-flex items-center gap-2 rounded-lg bg-accent px-7 py-3.5 font-semibold text-accent-foreground hover:opacity-90 transition-opacity disabled:opacity-50 shadow-lg">
                {submitting ? "Sending..." : "Submit Enquiry"} <Send className="h-4 w-4" />
              </button>
            </form>
          </AnimatedSection>

          {/* ... The rest of your existing Address/Enrichment components remain completely unchanged below here ... */}
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
    </>
  );
};

export default Enquiry;