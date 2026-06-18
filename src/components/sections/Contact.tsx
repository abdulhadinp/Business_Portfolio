"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Send, Mail, Phone, MapPin } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import SectionLabel from "../ui/SectionLabel";
import ScrollReveal from "../ui/ScrollReveal";
import Button from "../ui/Button";

const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    
    setIsSubmitting(true);
    setError("");

    try {
      if (EMAILJS_SERVICE_ID === "YOUR_SERVICE_ID") {
        // Simulate success if keys aren't set yet
        await new Promise(resolve => setTimeout(resolve, 1500));
        setIsSuccess(true);
        return;
      }

      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        form,
        {
          publicKey: EMAILJS_PUBLIC_KEY,
        }
      );
      
      setIsSuccess(true);
    } catch (err: any) {
      console.error("EmailJS Error:", err?.text || JSON.stringify(err));
      setError("Something went wrong. Please check your EmailJS configuration or use the email link directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-white section-padding">
      <div className="container-main">
        <div className="max-w-2xl mb-16">
          <SectionLabel>GET IN TOUCH</SectionLabel>
          
          <ScrollReveal delay={0.1}>
            <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold font-bricolage leading-[1.2] text-[var(--text-primary)] mb-6">
              Let's Build Something Together
            </h2>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
            <p className="text-lg text-[var(--text-secondary)] leading-[1.7]">
              Have a project in mind? Whether it is a new product, an ongoing development need, or just a technical question, reach out and I will get back to you within 24 hours.
            </p>
          </ScrollReveal>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Left Column (Form) */}
          <div className="w-full lg:w-[60%]">
            <ScrollReveal>
              {isSuccess ? (
                <div className="bg-[var(--green-light)] border border-[var(--green)] rounded-2xl p-8 text-center h-full flex flex-col items-center justify-center min-h-[400px]">
                  <div className="w-16 h-16 bg-[var(--green)] rounded-full flex items-center justify-center mb-6">
                    <Send className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-[var(--text-primary)] font-bricolage mb-4">Message Sent!</h3>
                  <p className="text-[var(--text-secondary)] text-lg">
                    Your message is on its way. I will get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-semibold tracking-wider text-[var(--text-muted)] uppercase">Name</label>
                      <input 
                        type="text" 
                        name="user_name" 
                        id="name" 
                        required
                        className="w-full bg-white border border-[var(--border)] rounded-[10px] px-4 py-3.5 text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent)] focus:ring-3 focus:ring-[var(--accent-glow)] transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-semibold tracking-wider text-[var(--text-muted)] uppercase">Email</label>
                      <input 
                        type="email" 
                        name="user_email" 
                        id="email" 
                        required
                        className="w-full bg-white border border-[var(--border)] rounded-[10px] px-4 py-3.5 text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent)] focus:ring-3 focus:ring-[var(--accent-glow)] transition-all"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-semibold tracking-wider text-[var(--text-muted)] uppercase">Company or Project Name <span className="text-xs normal-case font-normal">(Optional)</span></label>
                    <input 
                      type="text" 
                      name="company" 
                      id="company" 
                      className="w-full bg-white border border-[var(--border)] rounded-[10px] px-4 py-3.5 text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent)] focus:ring-3 focus:ring-[var(--accent-glow)] transition-all"
                      placeholder="Acme Corp"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="budget" className="text-sm font-semibold tracking-wider text-[var(--text-muted)] uppercase">Budget Range</label>
                    <select 
                      name="budget" 
                      id="budget" 
                      required
                      className="w-full bg-white border border-[var(--border)] rounded-[10px] px-4 py-3.5 text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)] focus:ring-3 focus:ring-[var(--accent-glow)] transition-all appearance-none cursor-pointer"
                      defaultValue=""
                    >
                      <option value="" disabled>Select a budget range</option>
                      <option value="Under $500">Under $500</option>
                      <option value="$500 to $2,000">$500 to $2,000</option>
                      <option value="$2,000 to $5,000">$2,000 to $5,000</option>
                      <option value="$5,000 and above">$5,000 and above</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-semibold tracking-wider text-[var(--text-muted)] uppercase">Message</label>
                    <textarea 
                      name="message" 
                      id="message" 
                      required
                      rows={5}
                      className="w-full bg-white border border-[var(--border)] rounded-[10px] px-4 py-3.5 text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent)] focus:ring-3 focus:ring-[var(--accent-glow)] transition-all resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  {error && (
                    <div className="text-red-500 text-sm font-medium">{error}</div>
                  )}

                  <Button type="submit" size="lg" fullWidth disabled={isSubmitting} icon={isSubmitting ? undefined : Send}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              )}
            </ScrollReveal>
          </div>

          {/* Right Column (Contact Info) */}
          <div className="w-full lg:w-[40%] flex flex-col gap-8">
            <ScrollReveal delay={0.2} className="flex flex-col gap-6">
              <a href="mailto:abdul@abdulhadi.com.np" className="flex items-center gap-4 p-4 rounded-xl hover:bg-[var(--bg-soft)] transition-colors group">
                <div className="w-12 h-12 bg-[var(--accent-light)] rounded-full flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Mail className="text-[var(--accent)]" size={20} />
                </div>
                <div>
                  <div className="text-sm font-semibold tracking-wider text-[var(--text-muted)] uppercase mb-1">Email</div>
                  <div className="text-[var(--text-primary)] font-medium">abdul@abdulhadi.com.np</div>
                </div>
              </a>

              <a href="tel:+9779744707290" className="flex items-center gap-4 p-4 rounded-xl hover:bg-[var(--bg-soft)] transition-colors group">
                <div className="w-12 h-12 bg-[var(--accent-light)] rounded-full flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Phone className="text-[var(--accent)]" size={20} />
                </div>
                <div>
                  <div className="text-sm font-semibold tracking-wider text-[var(--text-muted)] uppercase mb-1">Phone</div>
                  <div className="text-[var(--text-primary)] font-medium">+977 9744707290</div>
                </div>
              </a>

              <a href="https://linkedin.com/in/abdulhadinp" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-xl hover:bg-[var(--bg-soft)] transition-colors group">
                <div className="w-12 h-12 bg-[var(--accent-light)] rounded-full flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <FaLinkedin className="text-[var(--accent)]" size={20} />
                </div>
                <div>
                  <div className="text-sm font-semibold tracking-wider text-[var(--text-muted)] uppercase mb-1">LinkedIn</div>
                  <div className="text-[var(--text-primary)] font-medium">linkedin.com/in/abdulhadinp</div>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-xl">
                <div className="w-12 h-12 bg-[var(--accent-light)] rounded-full flex items-center justify-center shrink-0">
                  <MapPin className="text-[var(--accent)]" size={20} />
                </div>
                <div>
                  <div className="text-sm font-semibold tracking-wider text-[var(--text-muted)] uppercase mb-1">Location</div>
                  <div className="text-[var(--text-primary)] font-medium">Kathmandu, Nepal</div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="bg-white border border-[var(--border)] rounded-2xl p-6 shadow-sm mt-4">
                <div className="flex items-center gap-3 mb-4">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--green)] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-[var(--green)]"></span>
                  </span>
                  <span className="font-semibold text-[var(--text-primary)]">Currently Accepting New Projects</span>
                </div>
                <p className="text-[var(--text-secondary)] font-medium mb-2">
                  Slots are limited. Reach out early.
                </p>
                <p className="text-[var(--text-muted)] text-sm">
                  Response time: within 24 hours
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
