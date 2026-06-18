"use client";

import { services } from "@/data/services";
import SectionLabel from "../ui/SectionLabel";
import ServiceCard from "../ui/ServiceCard";
import ScrollReveal from "../ui/ScrollReveal";

export default function Services() {
  return (
    <section id="services" className="bg-white section-padding">
      <div className="container-main">
        <div className="max-w-3xl mb-16">
          <SectionLabel>WHAT I BUILD</SectionLabel>
          
          <ScrollReveal delay={0.1}>
            <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold font-bricolage leading-[1.2] text-[var(--text-primary)] mb-6">
              Services I Offer
            </h2>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
            <p className="text-lg text-[var(--text-secondary)] leading-[1.7]">
              From first conversation to production deployment, I build complete digital products for businesses that want to grow.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ScrollReveal key={service.title} variant="scaleIn" delay={index * 0.05}>
              <ServiceCard service={service} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
