"use client";

import { smoothScrollTo } from "@/lib/utils";
import { FaLinkedin, FaYoutube, FaInstagram, FaFacebook } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--bg-dark)] text-white pt-20 pb-8">
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 mb-16">
          {/* Column 1 */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <span className="text-xl font-bold text-[var(--accent)] font-bricolage">AH</span>
              <span className="text-lg font-semibold">Abdul Hadi</span>
            </div>
            <p className="text-[var(--text-on-dark-muted)] font-medium">
              Founder, Zyvora Technologies
            </p>
            <p className="text-[var(--text-on-dark-muted)] mt-2 max-w-sm leading-relaxed">
              Building AI-first digital products from Kathmandu, Nepal.
            </p>
            
            <div className="flex items-center gap-4 mt-4">
              <a href="https://linkedin.com/in/abdulhadinp" target="_blank" rel="noopener noreferrer" className="p-2 bg-[rgba(255,255,255,0.05)] rounded-full hover:bg-[var(--accent)] hover:text-white transition-all text-[var(--text-on-dark-muted)]" aria-label="LinkedIn">
                <FaLinkedin size={20} />
              </a>
              <a href="https://youtube.com/@CodeByHadi" target="_blank" rel="noopener noreferrer" className="p-2 bg-[rgba(255,255,255,0.05)] rounded-full hover:bg-[var(--accent)] hover:text-white transition-all text-[var(--text-on-dark-muted)]" aria-label="YouTube">
                <FaYoutube size={20} />
              </a>
              <a href="https://instagram.com/CodeByHadi" target="_blank" rel="noopener noreferrer" className="p-2 bg-[rgba(255,255,255,0.05)] rounded-full hover:bg-[var(--accent)] hover:text-white transition-all text-[var(--text-on-dark-muted)]" aria-label="Instagram">
                <FaInstagram size={20} />
              </a>
              <a href="https://facebook.com/CodeByHadi" target="_blank" rel="noopener noreferrer" className="p-2 bg-[rgba(255,255,255,0.05)] rounded-full hover:bg-[var(--accent)] hover:text-white transition-all text-[var(--text-on-dark-muted)]" aria-label="Facebook">
                <FaFacebook size={20} />
              </a>
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-6 lg:ml-auto">
            <h4 className="text-sm font-semibold tracking-wider uppercase text-[var(--text-on-dark-muted)]">
              Quick Links
            </h4>
            <div className="flex flex-col gap-3">
              {["About", "Services", "Projects", "Zyvora", "Contact"].map((link) => (
                <button
                  key={link}
                  onClick={() => smoothScrollTo(link.toLowerCase())}
                  className="text-left text-white hover:text-[var(--accent)] transition-colors w-fit"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-6 lg:ml-auto">
            <h4 className="text-sm font-semibold tracking-wider uppercase text-[var(--text-on-dark-muted)]">
              Services
            </h4>
            <div className="flex flex-col gap-3">
              {[
                "Web Development",
                "Android Apps",
                "AI Integration",
                "SaaS Development",
                "IT Consulting"
              ].map((service) => (
                <button
                  key={service}
                  onClick={() => smoothScrollTo("services")}
                  className="text-left text-white hover:text-[var(--accent)] transition-colors w-fit"
                >
                  {service}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[rgba(255,255,255,0.1)] flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[var(--text-on-dark-muted)]">
          <p>© {currentYear} Abdul Hadi. All rights reserved.</p>
          <p>Zyvora Technologies</p>
        </div>
      </div>
    </footer>
  );
}
