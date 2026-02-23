import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  phone: z.string().trim().min(1, "Phone is required").max(20),
  message: z.string().trim().min(1, "Message is required").max(2000),
});

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((i) => { fieldErrors[i.path[0] as string] = i.message; });
      setErrors(fieldErrors);
      return;
    }
    setSubmitting(true);
    // Mock API call
    await new Promise((r) => setTimeout(r, 1000));
    setSubmitting(false);
    setForm({ name: "", email: "", phone: "", message: "" });
    toast({ title: "Message sent!", description: "We'll get back to you shortly." });
  };

  const inputClass = "w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50";

  return (
    <>
      <section className="bg-primary py-16">
        <div className="container">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground">Contact Us</h1>
          <p className="mt-3 text-primary-foreground/70">Get in touch for a custom cooling solution</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <div>
            <SectionHeading title="Send an Inquiry" centered={false} />
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <input name="name" placeholder="Your Name *" value={form.name} onChange={handleChange} className={inputClass} />
                {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
              </div>
              <div>
                <input name="email" type="email" placeholder="Email Address *" value={form.email} onChange={handleChange} className={inputClass} />
                {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
              </div>
              <div>
                <input name="phone" placeholder="Phone Number *" value={form.phone} onChange={handleChange} className={inputClass} />
                {errors.phone && <p className="mt-1 text-xs text-destructive">{errors.phone}</p>}
              </div>
              <div>
                <textarea name="message" rows={5} placeholder="Your Message *" value={form.message} onChange={handleChange} className={inputClass} />
                {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 font-semibold text-accent-foreground hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                {submitting ? "Sending..." : "Send Message"} <Send className="h-4 w-4" />
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <SectionHeading title="Get in Touch" centered={false} />
            <div className="space-y-6">
              <div className="flex gap-4 p-6 rounded-lg bg-card industrial-shadow">
                <MapPin className="h-6 w-6 text-accent shrink-0 mt-1" />
                <div>
                  <h3 className="font-heading text-lg font-bold text-foreground">Address</h3>
                  <p className="text-sm text-muted-foreground">Noida, Uttar Pradesh, India</p>
                </div>
              </div>
              <div className="flex gap-4 p-6 rounded-lg bg-card industrial-shadow">
                <Phone className="h-6 w-6 text-accent shrink-0 mt-1" />
                <div>
                  <h3 className="font-heading text-lg font-bold text-foreground">Phone</h3>
                  <p className="text-sm text-muted-foreground">+91-9811134394</p>
                </div>
              </div>
              <div className="flex gap-4 p-6 rounded-lg bg-card industrial-shadow">
                <Mail className="h-6 w-6 text-accent shrink-0 mt-1" />
                <div>
                  <h3 className="font-heading text-lg font-bold text-foreground">Email</h3>
                  <p className="text-sm text-muted-foreground">info@drycoolchillers.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
