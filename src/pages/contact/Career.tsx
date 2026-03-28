import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import GlassCard from "@/components/GlassCard";
import { Send, Upload } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Career = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", city: "", phone: "", department: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    // Grab the actual form data including the file
    const formData = new FormData(e.currentTarget);
    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_KEY);
    formData.append("from_name", "Drycool Career Portal");
    formData.append("subject", `New Job Application for ${form.department || 'Drycool'}`);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData, // Sending as FormData so the PDF is attached
      });

      if (response.status === 200) {
        toast({ title: "Application Sent!", description: "Thank you. HR will review it soon." });
        setForm({ name: "", email: "", city: "", phone: "", department: "", message: "" });
        (e.target as HTMLFormElement).reset(); // clears the file input
      } else {
        toast({ title: "Error", description: "Failed to send application.", variant: "destructive" });
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
      <PageHero title="Career" subtitle="Join the team at Drycool Systems" />

      <section className="py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection>
              <SectionHeading title="Please fill all required fields" subtitle="Job Application Form" />
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <input name="name" placeholder="Your name" value={form.name} onChange={handleChange} className={inputClass} required />
                  <input name="email" type="email" placeholder="Your email" value={form.email} onChange={handleChange} className={inputClass} required />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <input name="city" placeholder="Your City" value={form.city} onChange={handleChange} className={inputClass} />
                  <input name="phone" placeholder="Phone No" value={form.phone} onChange={handleChange} className={inputClass} required />
                </div>
                
                <select name="department" value={form.department} onChange={handleChange} className={inputClass} required>
                  <option value="">Department</option>
                  <option>Sales</option>
                  <option>Production</option>
                  <option>Service</option>
                  <option>Accounts</option>
                  <option>Purchase</option>
                  <option>HR</option>
                </select>

                <div className="relative">
                  <div className="flex items-center gap-2 mb-2 text-sm font-medium text-foreground">
                    <Upload className="h-4 w-4" /> Upload Resume in pdf
                  </div>
                  <input type="file" accept=".pdf" className="w-full text-sm text-muted-foreground file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-accent/10 file:text-accent hover:file:bg-accent/20" />
                </div>

                <textarea name="message" rows={4} placeholder="Your message (optional)" value={form.message} onChange={handleChange} className={inputClass} />
                
                <button type="submit" disabled={submitting} className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-7 py-3.5 font-semibold text-accent-foreground hover:opacity-90 transition-opacity disabled:opacity-50 shadow-lg">
                  {submitting ? "Sending..." : "Submit Application"} <Send className="h-4 w-4" />
                </button>
              </form>
            </AnimatedSection>

            <AnimatedSection delay={0.2} className="mt-16 pt-16 border-t border-border">
              <div className="prose prose-slate dark:prose-invert max-w-none">
                <p className="text-muted-foreground leading-relaxed">
                  We are always looking for talented individuals to join our team. If you are passionate about engineering and HVAC solutions, please send us your resume.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
};

export default Career;

