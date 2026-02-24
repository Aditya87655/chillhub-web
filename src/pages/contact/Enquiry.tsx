import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import GlassCard from "@/components/GlassCard";
import { Send, Phone, Mail, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required"),
  email: z.string().trim().email("Invalid email"),
  phone: z.string().trim().min(1, "Phone is required"),
  company: z.string().optional(),
  product: z.string().optional(),
  message: z.string().trim().min(1, "Message is required"),
});

const Enquiry = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "", product: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      const fe: Record<string, string> = {};
      result.error.issues.forEach((i) => { fe[i.path[0] as string] = i.message; });
      setErrors(fe);
      return;
    }
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1000));
    setSubmitting(false);
    setForm({ name: "", email: "", phone: "", company: "", product: "", message: "" });
    toast({ title: "Enquiry Sent!", description: "Our team will contact you shortly." });
  };

  const inputClass = "w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-shadow";

  return (
    <>
      <PageHero title="Enquiry" subtitle="Send us your requirements and get a quick response" />

      <section className="py-20">
        <div className="container grid lg:grid-cols-2 gap-12">
          <AnimatedSection>
            <SectionHeading title="Product Enquiry Form" centered={false} />
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <input name="name" placeholder="Your Name *" value={form.name} onChange={handleChange} className={inputClass} />
                  {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
                </div>
                <div>
                  <input name="email" type="email" placeholder="Email *" value={form.email} onChange={handleChange} className={inputClass} />
                  {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <input name="phone" placeholder="Phone *" value={form.phone} onChange={handleChange} className={inputClass} />
                  {errors.phone && <p className="mt-1 text-xs text-destructive">{errors.phone}</p>}
                </div>
                <div>
                  <input name="company" placeholder="Company Name" value={form.company} onChange={handleChange} className={inputClass} />
                </div>
              </div>
              <select name="product" value={form.product} onChange={handleChange} className={inputClass}>
                <option value="">Select Product Interest</option>
                <option>Air Cooled Screw Chiller</option>
                <option>Water Cooled Screw Chiller</option>
                <option>Scroll Chiller</option>
                <option>Ammonia Chiller</option>
                <option>Oil Chiller</option>
                <option>Inverter Chiller</option>
                <option>Custom Chiller</option>
              </select>
              <div>
                <textarea name="message" rows={5} placeholder="Your Requirements *" value={form.message} onChange={handleChange} className={inputClass} />
                {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
              </div>
              <button type="submit" disabled={submitting} className="inline-flex items-center gap-2 rounded-lg bg-accent px-7 py-3.5 font-semibold text-accent-foreground hover:opacity-90 transition-opacity disabled:opacity-50 shadow-lg">
                {submitting ? "Sending..." : "Send Enquiry"} <Send className="h-4 w-4" />
              </button>
            </form>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <SectionHeading title="Quick Contact" centered={false} />
            <div className="space-y-4">
              {[
                { icon: MapPin, title: "Office", text: "B-56, Sector-64, Noida, UP 201301, India" },
                { icon: Phone, title: "Phone", text: "+91-9811134394" },
                { icon: Mail, title: "Email", text: "info@drycoolchillers.com" },
              ].map((c) => (
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
    </>
  );
};

export default Enquiry;
