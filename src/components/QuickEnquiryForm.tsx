import { useState } from "react";
import { Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface QuickEnquiryFormProps {
  subject: string;        // Dynamic subject line (e.g., "Product Enquiry: Air Cooled Chiller")
  buttonText?: string;    // What the submit button says
  onSuccess?: () => void; // What happens after email is sent (e.g., close modal, open PDF)
}

const QuickEnquiryForm = ({ subject, buttonText = "Submit Enquiry", onSuccess }: QuickEnquiryFormProps) => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "9cba1d32-5bda-46a0-ad04-29647e9daa88", // 🔴 REPLACE WITH YOUR WEB3FORMS KEY
          subject: subject,
          from_name: "Drycool Website Form",
          ...form,
        }),
      });

      if (response.status === 200) {
        toast({ title: "Success!", description: "Your details have been submitted." });
        setForm({ name: "", email: "", phone: "", message: "" }); // Reset form
        if (onSuccess) onSuccess(); // Run the success action (like opening the PDF)
      } else {
        toast({ title: "Error", description: "Submission failed.", variant: "destructive" });
      }
    } catch (error) {
      toast({ title: "Error", description: "Something went wrong.", variant: "destructive" });
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass = "w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-shadow";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input name="name" placeholder="Your Name *" value={form.name} onChange={handleChange} className={inputClass} required />
      <div className="grid sm:grid-cols-2 gap-4">
        <input name="email" type="email" placeholder="Email Address *" value={form.email} onChange={handleChange} className={inputClass} required />
        <input name="phone" placeholder="Phone Number *" value={form.phone} onChange={handleChange} className={inputClass} required />
      </div>
      <textarea name="message" rows={3} placeholder="Additional Requirements (Optional)" value={form.message} onChange={handleChange} className={inputClass} />
      
      <button 
        type="submit" 
        disabled={submitting} 
        className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-7 py-3.5 font-semibold text-accent-foreground hover:opacity-90 transition-opacity disabled:opacity-50 shadow-md"
      >
        {submitting ? "Processing..." : buttonText} <Send className="h-4 w-4" />
      </button>
    </form>
  );
};

export default QuickEnquiryForm;