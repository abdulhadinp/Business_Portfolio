"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { smoothScrollTo } from "@/lib/utils";
import Button from "../ui/Button";

const NAV_LINKS = [
  { label: "About", href: "about" },
  { label: "Services", href: "services" },
  { label: "Projects", href: "projects" },
  { label: "Zyvora", href: "zyvora" },
  { label: "Contact", href: "contact" }
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);

      // Determine active section
      const sections = NAV_LINKS.map(link => document.getElementById(link.href));
      const scrollPosition = window.scrollY + 100; // Offset for navbar

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(NAV_LINKS[i].href);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    smoothScrollTo(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? "bg-white/90 backdrop-blur-md border-b border-[var(--border)] py-4" 
            : "bg-transparent py-6"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="container-main flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <span className="text-lg font-bold text-[var(--accent)] font-bricolage">AH</span>
            <div className="w-px h-4 bg-[var(--border)]" />
            <span className="text-[15px] font-medium text-[var(--text-primary)]">Abdul Hadi</span>
          </div>

          <div className="hidden lg:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className={`nav-link text-sm font-medium transition-colors ${
                    activeSection === link.href 
                      ? "text-[var(--text-primary)] active" 
                      : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>
            
            <Button size="sm" onClick={() => handleNavClick("contact")}>
              Hire Me
            </Button>
          </div>

          <button 
            className="lg:hidden text-[var(--text-primary)] p-2 -mr-2"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open Menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[100] bg-white flex flex-col"
          >
            <div className="flex items-center justify-between p-6 border-b border-[var(--border)]">
              <div className="flex items-center gap-3">
                <span className="text-lg font-bold text-[var(--accent)] font-bricolage">AH</span>
                <div className="w-px h-4 bg-[var(--border)]" />
                <span className="text-[15px] font-medium text-[var(--text-primary)]">Abdul Hadi</span>
              </div>
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 -mr-2 text-[var(--text-primary)] bg-[var(--bg-soft)] rounded-full"
                aria-label="Close Menu"
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 flex flex-col justify-center px-8 gap-8">
              {NAV_LINKS.map((link, i) => (
                <motion.button
                  key={link.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                  onClick={() => handleNavClick(link.href)}
                  className="text-3xl font-bold text-left text-[var(--text-primary)] font-bricolage"
                >
                  {link.label}
                </motion.button>
              ))}
            </div>

            <div className="p-8 border-t border-[var(--border)] pb-safe">
              <Button fullWidth size="lg" onClick={() => handleNavClick("contact")}>
                Hire Me
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
