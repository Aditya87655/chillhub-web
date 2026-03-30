import { useState, useRef } from "react";
import SectionHeading from "@/components/SectionHeading";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import GlassCard from "@/components/GlassCard";
import { Send, Upload } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import HCaptcha from "@hcaptcha/react-hcaptcha";

const Career = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", city: "", phone: "", department: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const [captchaToken, setCaptchaToken] = useState("");
  const captchaRef = useRef<HCaptcha>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!captchaToken) {
      toast({ title: "Verification Required", description: "Please check the CAPTCHA box to prove you are human.", variant: "destructive" });
      return;
    }

    setSubmitting(true);

    // Grab the actual form data including the file
    const formData = new FormData(e.currentTarget);
    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_KEY);
    formData.append("from_name", "Drycool Career Portal");
    formData.append("subject", `New Job Application for ${form.department || 'Drycool'}`);
    formData.append("h-captcha-response", captchaToken);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData, // Sending as FormData so the PDF is attached
      });

      if (response.status === 200) {
        toast({ title: "Application Sent!", description: "Thank you. HR will review it soon." });
        setForm({ name: "", email: "", city: "", phone: "", department: "", message: "" });
        (e.target as HTMLFormElement).reset(); // clears the file input
        setCaptchaToken("");
        captchaRef.current?.resetCaptcha();
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
                
                <div className="py-2">
                  <HCaptcha
                    ref={captchaRef}
                    sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"
                    onVerify={(token) => setCaptchaToken(token)}
                    onExpire={() => setCaptchaToken("")}
                  />
                </div>

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

            {/* Enrichment */}
            <AnimatedSection delay={0.3} className="mt-12">
              <SectionHeading title="Why Work at Drycool Systems?" centered={false} />
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Drycool Systems offers a dynamic work environment where engineering excellence meets entrepreneurial energy. As one of India's leading chiller manufacturers with over three decades of industry presence, we provide our team members with opportunities to work on challenging industrial cooling projects across diverse sectors including pharmaceuticals, food processing, petrochemicals, construction, and commercial HVAC. Our engineers gain hands-on experience with cutting-edge refrigeration technologies and work alongside experienced mentors who share deep domain knowledge.
                </p>
                <p>
                  We believe that our people are our greatest asset. That's why we invest in continuous professional development through internal training programs, industry conference participation, and exposure to international projects across more than 50 countries. Team members have the opportunity to grow their careers across multiple functional areas including engineering design, manufacturing operations, project management, sales and marketing, and customer service.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4} className="mt-12">
              <SectionHeading title="Growth Opportunities & Culture" centered={false} />
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  At Drycool, we foster a culture of innovation, collaboration, and accountability. Our flat organizational structure encourages open communication and empowers team members to take ownership of their work. Whether you're a fresh engineering graduate looking to build your career foundation or an experienced professional seeking new challenges, Drycool offers a platform where your contributions make a visible impact on real-world industrial cooling solutions.
                </p>
                <p>
                  Current openings span multiple departments including production engineering, quality control, sales, service, procurement, and administration. We welcome applications from candidates who share our passion for engineering excellence and customer satisfaction. Submit your resume through the form above, and our HR team will review your application and reach out if there's a suitable match with our current openings.
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