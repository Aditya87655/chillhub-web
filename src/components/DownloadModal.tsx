import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { FileText, Download } from "lucide-react";

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
  title: string;
}

const DownloadModal = ({ isOpen, onClose, onSuccess, title }: DownloadModalProps) => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePhone = (phone: string) => {
    return /^\+?[\d\s-]{10,}$/.test(phone);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateEmail(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    if (!validatePhone(phone)) {
      toast.error("Please enter a valid phone number (at least 10 digits).");
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Form submitted successfully! Opening PDF...");
      onSuccess();
      onClose();
      // Clear form
      setEmail("");
      setPhone("");
    }, 1000);
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[425px] bg-card border-border">
        <DialogHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="flex items-center justify-center h-10 w-10 rounded-xl bg-accent/10">
              <FileText className="h-6 w-6 text-accent" />
            </div>
            <DialogTitle className="text-xl font-bold">Download Document</DialogTitle>
          </div>
          <DialogDescription className="text-muted-foreground">
            Please provide your contact information to view <strong>{title}</strong>.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium">Email Address</Label>
            <Input 
              id="email" 
              type="email" 
              placeholder="your@email.com" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-background border-input"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-sm font-medium">Phone Number</Label>
            <Input 
              id="phone" 
              type="tel" 
              placeholder="+91 98765 43210" 
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="bg-background border-input"
            />
          </div>
          <DialogFooter className="pt-4">
            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-accent text-accent-foreground hover:opacity-90 font-bold py-6"
            >
              {isSubmitting ? "Processing..." : "Submit & View PDF"}
              {!isSubmitting && <Download className="ml-2 h-4 w-4" />}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default DownloadModal;
