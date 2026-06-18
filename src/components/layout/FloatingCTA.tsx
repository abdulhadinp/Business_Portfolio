"use client";

import { MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { smoothScrollTo } from "@/lib/utils";
import Button from "../ui/Button";
import { useInView } from "@/hooks/useInView";
import { useEffect, useState } from "react";

export default function FloatingCTA() {
  const [showMobileCTA, setShowMobileCTA] = useState(true);

  // Watch for the contact section to hide the mobile CTA bar
  useEffect(() => {
    const handleScroll = () => {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        const rect = contactSection.getBoundingClientRect();
        // If contact section is in view, hide the sticky mobile CTA
        setShowMobileCTA(rect.top > window.innerHeight);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const whatsappUrl = "https://wa.me/9779744707290?text=Hi%20Abdul%2C%20I%20saw%20your%20portfolio%20and%20wanted%20to%20discuss%20a%20project.";

  return (
    <>
      {/* WhatsApp Floating Button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200, damping: 20 }}
        whileHover={{ scale: 1.08 }}
        className="fixed z-40 bottom-6 md:bottom-24 right-6 w-[52px] h-[52px] bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow group lg:bottom-6 md:left-auto"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={28} />
        
        {/* Tooltip */}
        <span className="absolute right-full mr-4 bg-white text-[var(--text-primary)] text-sm font-medium px-3 py-1.5 rounded-lg shadow-sm border border-[var(--border)] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap hidden md:block">
          Chat on WhatsApp
        </span>
      </motion.a>

      {/* Sticky Mobile CTA Bar */}
      <AnimatePresence>
        {showMobileCTA && (
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-[var(--border)] p-4 pb-safe shadow-[0_-4px_20px_rgba(10,22,40,0.05)]"
          >
            <Button 
              fullWidth 
              size="lg" 
              onClick={() => smoothScrollTo("contact")}
              className="py-4 shadow-sm"
            >
              Let's Talk
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
