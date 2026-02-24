import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import GlassCard from "@/components/GlassCard";
import { Send, Cog, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const spareCategories = [
  "Compressor Parts & Assemblies",
  "Evaporator & Condenser Coils",
  "Expansion Valves & Filters",
  "Electrical & Control Components",
  "Pumps & Motors",
  "Refrigerant & Lubricants",
  "Sensors & Transducers",
  "Gaskets & Seals",
];

const SpareParts = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", phone: "", model: "", part: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1000));
    setSubmitting(false);
    setForm({ name: "", phone: "", model: "", part: "", message: "" });
    toast({ title: "Request Sent!", description: "Our spare parts team will contact you." });
  };

  const inputClass = "w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-shadow";

  return (
    <>
      <PageHero title="Spare Parts" subtitle="Genuine replacement parts for all Drycool chillers" />

      <section className="py-20">
        <div className="container grid lg:grid-cols-2 gap-12">
          <AnimatedSection>
            <SectionHeading title="Available Spare Parts" centered={false} />
            <div className="grid sm:grid-cols-2 gap-3">
              {spareCategories.map((s) => (
                <div key={s} className="flex items-center gap-2 text-sm text-foreground">
                  <CheckCircle className="h-4 w-4 text-accent shrink-0" />
                  {s}
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <SectionHeading title="Request Spare Parts" centered={false} />
            <form onSubmit={handleSubmit} className="space-y-4">
              <input name="name" placeholder="Your Name" value={form.name} onChange={handleChange} className={inputClass} required />
              <input name="phone" placeholder="Phone Number" value={form.phone} onChange={handleChange} className={inputClass} required />
              <input name="model" placeholder="Chiller Model Number" value={form.model} onChange={handleChange} className={inputClass} />
              <input name="part" placeholder="Part Name / Number" value={form.part} onChange={handleChange} className={inputClass} />
              <textarea name="message" rows={3} placeholder="Additional Details" value={form.message} onChange={handleChange} className={inputClass} />
              <button type="submit" disabled={submitting} className="inline-flex items-center gap-2 rounded-lg bg-accent px-7 py-3.5 font-semibold text-accent-foreground hover:opacity-90 transition-opacity disabled:opacity-50 shadow-lg">
                {submitting ? "Sending..." : "Request Parts"} <Send className="h-4 w-4" />
              </button>
            </form>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default SpareParts;
