"use client";

import { Building2, ShoppingBag, GraduationCap, Palette } from "lucide-react";
import SectionLabel from "../ui/SectionLabel";
import ScrollReveal from "../ui/ScrollReveal";
import Button from "../ui/Button";

export default function Zyvora() {
  const cards = [
    {
      icon: Building2,
      title: "Zyvora Technologies",
      desc: "Software Development, SaaS, AI Solutions, IT Consulting",
      color: "violet"
    },
    {
      icon: ShoppingBag,
      title: "Zyvora Commerce",
      desc: "E-Commerce, Digital Marketplaces, Payment Integration",
      color: "accent"
    },
    {
      icon: GraduationCap,
      title: "Zyvora Academy",
      desc: "Developer Education, Technical Training, Bootcamps",
      color: "violet"
    },
    {
      icon: Palette,
      title: "Zyvora Studios",
      desc: "Creative Technology, Product Design, Media Production",
      color: "accent"
    }
  ];

  return (
    <section id="zyvora" className="relative bg-[var(--bg-dark)] section-padding overflow-hidden">
      {/* Background Gradient & Glow */}
      <div className="absolute inset-0" style={{ background: "var(--gradient-dark-section)" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--violet-glow)] rounded-full blur-[120px] opacity-20 pointer-events-none" />

      <div className="container-main relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-12 items-center">
          
          {/* Left Column Content */}
          <div className="w-full lg:w-1/2">
            <SectionLabel color="var(--violet)">ZYVORA TECHNOLOGIES</SectionLabel>
            
            <ScrollReveal delay={0.1}>
              <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold font-bricolage leading-[1.2] text-white mb-8">
                The Company Behind the Work
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.2} className="space-y-6 text-lg text-[var(--text-on-dark-muted)] leading-[1.7] mb-10">
              <p>
                Zyvora Technologies is a Kathmandu-based technology company building AI-first digital products and providing software development services to businesses in Nepal and across South Asia.
              </p>
              <p>
                Founded and led by Abdul Hadi, Zyvora operates across four core verticals: software development and IT services, digital commerce solutions, developer education, and creative technology production.
              </p>
              <p>
                The mission is straightforward: give every business access to the kind of technology that was previously only available to well-funded startups.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <Button variant="outline-white" size="lg" onClick={() => window.open("https://linkedin.com/in/abdulhadinp", "_blank")}>
                Work with Zyvora
              </Button>
            </ScrollReveal>
          </div>

          {/* Right Column Grid */}
          <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {cards.map((card, i) => (
              <ScrollReveal key={card.title} variant="scaleIn" delay={0.1 * i}>
                <div 
                  className={`bg-[#142240] rounded-2xl p-6 h-full border-l-[3px] border-[var(--${card.color})] hover:bg-[rgba(255,255,255,0.05)] transition-colors`}
                >
                  <div className={`w-12 h-12 rounded-full bg-[var(--${card.color})] bg-opacity-20 flex items-center justify-center mb-4`}>
                    <card.icon className={`text-[var(--${card.color})]`} size={24} />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2 font-bricolage">
                    {card.title}
                  </h3>
                  <p className="text-sm text-[var(--text-on-dark-muted)] leading-relaxed">
                    {card.desc}
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
