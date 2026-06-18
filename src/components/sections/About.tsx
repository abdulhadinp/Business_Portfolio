"use client";

import { Globe2, Smartphone, Bot, Layers } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import SectionLabel from "../ui/SectionLabel";
import ScrollReveal from "../ui/ScrollReveal";

export default function About() {
  const highlights = [
    {
      icon: Globe2,
      title: "Full-Stack Web",
      detail: "Next.js, FastAPI, Supabase"
    },
    {
      icon: Smartphone,
      title: "Android Dev",
      detail: "Kotlin, Jetpack Compose"
    },
    {
      icon: Bot,
      title: "AI Engineering",
      detail: "LLM APIs, PyTorch, Automation"
    },
    {
      icon: Layers,
      title: "SaaS Architecture",
      detail: "Multi-tenant, scalable systems"
    }
  ];

  return (
    <section id="about" className="bg-[var(--bg-soft)] section-padding">
      <div className="container-main">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-12 items-start">
          
          {/* Left Column Content */}
          <div className="w-full lg:w-1/2">
            <SectionLabel>ABOUT ME</SectionLabel>
            
            <ScrollReveal delay={0.1}>
              <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold font-bricolage leading-[1.2] text-[var(--text-primary)] mb-8">
                Engineer by Trade. Founder by Choice.
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.2} className="space-y-6 text-lg text-[var(--text-secondary)] leading-[1.7] mb-8">
              <p>
                I am Abdul Hadi, a software engineer and founder who builds systems that solve real problems. I started Zyvora Technologies to bring enterprise-level digital products to businesses across Nepal and South Asia: from AI-powered SaaS platforms to production-grade mobile applications.
              </p>
              <p>
                I do not just write code. I architect solutions that grow with your business. Whether you need a high-performance web platform, a custom Android application, or an AI integration that adds measurable value to your operations, I bring the technical depth and product thinking to make it happen.
              </p>
              <p>
                With a background spanning full-stack web development, Android engineering, and applied AI, I approach every project as a product challenge first and a technical challenge second. The goal is always the same: software that works, scales, and delivers real results.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <a 
                href="https://linkedin.com/in/abdulhadinp" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[var(--accent)] font-medium hover:underline hover:underline-offset-4 transition-all"
              >
                <FaLinkedin size={20} />
                Connect on LinkedIn
              </a>
            </ScrollReveal>
          </div>

          {/* Right Column Highlights Grid */}
          <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4 lg:mt-0">
            {highlights.map((item, i) => (
              <ScrollReveal key={item.title} variant="scaleIn" delay={0.1 * i}>
                <div className="bg-white border border-[var(--border)] rounded-2xl p-6 hover:shadow-[var(--shadow-card-hover)] hover:border-[var(--accent)] transition-all duration-300 h-full group">
                  <div className="w-12 h-12 rounded-full bg-[var(--accent-light)] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="text-[var(--accent)]" size={24} />
                  </div>
                  <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2 group-hover:text-[var(--accent)] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)]">
                    {item.detail}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
