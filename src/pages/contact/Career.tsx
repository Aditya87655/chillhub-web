import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import GlassCard from "@/components/GlassCard";
import { Send, Briefcase, Users, Wrench, Cpu } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const departments = [
  { icon: Cpu, title: "Engineering & R&D", roles: ["Design Engineer", "Thermal Engineer", "R&D Specialist"] },
  { icon: Wrench, title: "Manufacturing", roles: ["Assembly Technician", "Quality Inspector", "CNC Operator"] },
  { icon: Users, title: "Sales & Marketing", roles: ["Regional Sales Manager", "Business Development", "Marketing Executive"] },
  { icon: Briefcase, title: "Service & Support", roles: ["Field Service Engineer", "Commissioning Engineer", "Customer Support"] },
];

const Career = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", position: "", experience: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1000));
    setSubmitting(false);
    setForm({ name: "", email: "", phone: "", position: "", experience: "", message: "" });
    toast({ title: "Application Sent!", description: "HR team will review your application." });
  };

  const inputClass = "w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-shadow";

  return (
    <>
      <PageHero title="Careers" subtitle="Join India's leading chiller manufacturer" />

      <section className="py-20">
        <div className="container">
          <AnimatedSection>
            <SectionHeading title="Open Departments" subtitle="Explore opportunities across our teams" />
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {departments.map((d, i) => (
              <AnimatedSection key={d.title} delay={i * 0.1}>
                <GlassCard className="bg-card">
                  <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-accent/10 mb-4">
                    <d.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-foreground mb-3">{d.title}</h3>
                  <ul className="space-y-1.5">
                    {d.roles.map((r) => (
                      <li key={r} className="text-sm text-muted-foreground">• {r}</li>
                    ))}
                  </ul>
                </GlassCard>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection>
            <div className="max-w-2xl mx-auto">
              <SectionHeading title="Apply Now" subtitle="Send us your details and we'll get back to you" />
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <input name="name" placeholder="Full Name *" value={form.name} onChange={handleChange} className={inputClass} required />
                  <input name="email" type="email" placeholder="Email *" value={form.email} onChange={handleChange} className={inputClass} required />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <input name="phone" placeholder="Phone *" value={form.phone} onChange={handleChange} className={inputClass} required />
                  <input name="experience" placeholder="Years of Experience" value={form.experience} onChange={handleChange} className={inputClass} />
                </div>
                <input name="position" placeholder="Position Interested In" value={form.position} onChange={handleChange} className={inputClass} />
                <textarea name="message" rows={4} placeholder="Tell us about yourself" value={form.message} onChange={handleChange} className={inputClass} />
                <button type="submit" disabled={submitting} className="inline-flex items-center gap-2 rounded-lg bg-accent px-7 py-3.5 font-semibold text-accent-foreground hover:opacity-90 transition-opacity disabled:opacity-50 shadow-lg">
                  {submitting ? "Sending..." : "Submit Application"} <Send className="h-4 w-4" />
                </button>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default Career;
