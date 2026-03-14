import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import GlassCard from "@/components/GlassCard";
import { Send, Phone, Mail, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const AMC = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", company: "", city: "", phone: "", email: "", subject: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1000));
    setSubmitting(false);
    setForm({ name: "", company: "", city: "", phone: "", email: "", subject: "", message: "" });
    toast({ title: "Enquiry Sent!", description: "Thank you for your enquiry. We will contact you soon." });
  };

  const inputClass = "w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-shadow";

  return (
    <>
      <PageHero title="Chiller AMC" subtitle="Drycool Systems Annual Maintenance Contract" />

      <section className="py-20">
        <div className="container grid lg:grid-cols-2 gap-12">
          <AnimatedSection>
            <SectionHeading title="Chiller AMC" centered={false} />
            <p className="mb-8 text-lg text-muted-foreground leading-relaxed">
              We Provide Chiller AMC in a reasonable price, Please call us 9811134394 or Mail us: enquiry@drycoolchillers.com
            </p>
            
            <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
              <h3 className="font-heading text-xl font-bold text-foreground mb-6 uppercase">Chiller AMC Form</h3>
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
                <button type="submit" disabled={submitting} className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-7 py-3.5 font-semibold text-accent-foreground hover:opacity-90 transition-opacity disabled:opacity-50 shadow-lg">
                  {submitting ? "Sending..." : "Submit Enquiry"} <Send className="h-4 w-4" />
                </button>
              </form>
            </div>
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
    </>
  );
};

export default AMC;
