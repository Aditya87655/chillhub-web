import { useState } from "react";
import { Link } from "react-router-dom";
import { MessageCircle, Phone, FileText, Headphones, X, Plus, Bot } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const actions = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    href: "https://wa.me/919811134394",
    external: true,
    color: "bg-green-500 hover:bg-green-600",
  },
  {
    icon: Phone,
    label: "Call Now",
    href: "tel:+919811134394",
    external: true,
    color: "bg-blue-500 hover:bg-blue-600",
  },
  {
    icon: FileText,
    label: "Get a Quote",
    href: "/contact/enquiry",
    external: false,
    color: "bg-industrial-orange hover:bg-industrial-orange/90",
  },
  {
    icon: Headphones,
    label: "Talk to an Engineer",
    href: "tel:+919811134394",
    external: true,
    color: "bg-primary hover:bg-primary/90",
  },
];

const CHATBOT_ACTION = {
  icon: Bot,
  label: "Chat with AI",
  color: "bg-purple-600 hover:bg-purple-700",
};

const FloatingCTA = () => {
  const [open, setOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              transition={{ duration: 0.25 }}
              className="flex flex-col gap-2 mb-2"
            >
              {/* AI Chatbot button — first in stack (top) */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0 }}
                onClick={() => { setChatOpen(true); setOpen(false); }}
                className={`flex items-center gap-3 rounded-full px-5 py-3 text-white text-sm font-medium shadow-lg ${CHATBOT_ACTION.color} transition-all duration-200 hover:shadow-xl cursor-pointer`}
              >
                <CHATBOT_ACTION.icon className="h-4 w-4 shrink-0" />
                <span className="whitespace-nowrap">{CHATBOT_ACTION.label}</span>
              </motion.div>

              {actions.map((action, i) => {
                const content = (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: (i + 1) * 0.05 }}
                    className={`flex items-center gap-3 rounded-full px-5 py-3 text-white text-sm font-medium shadow-lg ${action.color} transition-all duration-200 hover:shadow-xl cursor-pointer`}
                  >
                    <action.icon className="h-4 w-4 shrink-0" />
                    <span className="whitespace-nowrap">{action.label}</span>
                  </motion.div>
                );

                if (action.external) {
                  return (
                    <a key={action.label} href={action.href} target={action.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" onClick={() => setOpen(false)}>
                      {content}
                    </a>
                  );
                }
                return (
                  <Link key={action.label} to={action.href} onClick={() => setOpen(false)}>
                    {content}
                  </Link>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          onClick={() => setOpen(!open)}
          whileTap={{ scale: 0.9 }}
          className={`flex items-center justify-center h-14 w-14 rounded-full shadow-xl transition-all duration-300 ${
            open ? "bg-foreground text-background rotate-45" : "bg-industrial-orange text-white"
          }`}
          aria-label={open ? "Close menu" : "Contact options"}
        >
          {open ? <X className="h-6 w-6" /> : <Plus className="h-6 w-6" />}
          {!open && (
            <span className="absolute inset-0 rounded-full bg-industrial-orange animate-ping opacity-20" />
          )}
        </motion.button>
      </div>

      {/* AI Chatbot Modal */}
      <AnimatePresence>
        {chatOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center sm:justify-end p-4 sm:p-6 bg-black/40 backdrop-blur-sm"
            onClick={() => setChatOpen(false)}
          >
            <motion.div
              initial={{ y: 40, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 40, opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-md bg-background rounded-2xl shadow-2xl border border-border overflow-hidden flex flex-col"
              style={{ maxHeight: "70vh" }}
            >
              {/* Header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-border bg-purple-600 text-white">
                <div className="flex items-center gap-2">
                  <Bot className="h-5 w-5" />
                  <span className="font-semibold text-sm">Drycool AI Assistant</span>
                </div>
                <button onClick={() => setChatOpen(false)} className="hover:opacity-80 transition-opacity">
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Chat Body */}
              <div className="flex-1 overflow-y-auto p-5 space-y-4">
                <div className="bg-muted rounded-xl px-4 py-3 text-sm text-foreground max-w-[85%]">
                  👋 Hello! I'm the Drycool AI Assistant. How can I help you today? Ask me about our chillers, cooling solutions, or services.
                </div>
              </div>

              {/* Input */}
              <div className="border-t border-border px-4 py-3 flex gap-2">
                <input
                  type="text"
                  placeholder="Type your message..."
                  className="flex-1 rounded-full border border-border bg-background px-4 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <button className="h-9 w-9 rounded-full bg-purple-600 text-white flex items-center justify-center hover:bg-purple-700 transition-colors">
                  <MessageCircle className="h-4 w-4" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingCTA;
