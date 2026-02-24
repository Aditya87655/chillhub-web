import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import GlassCard from "@/components/GlassCard";
import { Send, CheckCircle, Handshake, TrendingUp, HeadphonesIcon, Award } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const benefits = [
  { icon: Award, title: "Authorized Brand", desc: "Represent India's leading chiller manufacturer with trusted brand recognition." },
  { icon: TrendingUp, title: "High Margins", desc: "Competitive dealer pricing with attractive profit margins on every sale." },
  { icon: HeadphonesIcon, title: "Technical Support", desc: "Complete pre-sales and post-sales engineering support from our team." },
  { icon: Handshake, title: "Protected Territory", desc: "Exclusive dealership rights in your designated region." },
];

const Dealership = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", company: "", phone: "", email: "", city: "", experience: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1000));
    setSubmitting(false);
    setForm({ name: "", company: "", phone: "", email: "", city: "", experience: "", message: "" });
    toast({ title: "Application Received!", description: "Our dealership team will contact you." });
  };

  const inputClass = "w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-shadow";

  return (
    <>
      <PageHero title="Dealership" subtitle="Partner with Drycool — become an authorized dealer" />

      <section className="py-20">
        <div className="container">
          <AnimatedSection>
            <SectionHeading title="Why Partner With Us?" subtitle="Benefits of becoming a Drycool dealer" />
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {benefits.map((b, i) => (
              <AnimatedSection key={b.title} delay={i * 0.1}>
                <GlassCard className="text-center py-8 bg-card">
                  <div className="flex items-center justify-center h-14 w-14 rounded-full bg-accent/10 mx-auto mb-4">
                    <b.icon className="h-7 w-7 text-accent" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-foreground">{b.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{b.desc}</p>
                </GlassCard>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection>
            <div className="max-w-2xl mx-auto">
              <SectionHeading title="Apply for Dealership" />
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <input name="name" placeholder="Your Name *" value={form.name} onChange={handleChange} className={inputClass} required />
                  <input name="company" placeholder="Company Name *" value={form.company} onChange={handleChange} className={inputClass} required />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <input name="phone" placeholder="Phone *" value={form.phone} onChange={handleChange} className={inputClass} required />
                  <input name="email" type="email" placeholder="Email *" value={form.email} onChange={handleChange} className={inputClass} required />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <input name="city" placeholder="City / Region" value={form.city} onChange={handleChange} className={inputClass} />
                  <input name="experience" placeholder="Years in HVAC Industry" value={form.experience} onChange={handleChange} className={inputClass} />
                </div>
                <textarea name="message" rows={4} placeholder="Tell us about your business" value={form.message} onChange={handleChange} className={inputClass} />
                <button type="submit" disabled={submitting} className="inline-flex items-center gap-2 rounded-lg bg-accent px-7 py-3.5 font-semibold text-accent-foreground hover:opacity-90 transition-opacity disabled:opacity-50 shadow-lg">
                  {submitting ? "Sending..." : "Apply Now"} <Send className="h-4 w-4" />
                </button>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default Dealership;
