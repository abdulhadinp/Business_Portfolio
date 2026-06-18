"use client";

import { Star } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import SectionLabel from "../ui/SectionLabel";
import ScrollReveal from "../ui/ScrollReveal";
import { motion } from "framer-motion";

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-[var(--bg-soft)] section-padding">
      <div className="container-main">
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16">
          <SectionLabel>CLIENT FEEDBACK</SectionLabel>
          
          <ScrollReveal delay={0.1}>
            <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold font-bricolage leading-[1.2] text-[var(--text-primary)]">
              What Clients Say
            </h2>
          </ScrollReveal>
        </div>

        <div className="flex overflow-x-auto lg:grid lg:grid-cols-3 gap-6 pb-8 -mx-6 px-6 lg:mx-0 lg:px-0 lg:pb-0 snap-x lg:snap-none no-scrollbar">
          {testimonials.map((testimonial, i) => (
            <ScrollReveal 
              key={testimonial.name} 
              variant="slideLeft" 
              delay={0.1 * i}
              className="min-w-[85vw] sm:min-w-[400px] lg:min-w-0 snap-center lg:snap-align-none"
            >
              <div className="bg-white border border-[var(--border)] rounded-2xl p-8 h-full flex flex-col hover:shadow-[var(--shadow-card-hover)] transition-all duration-300">
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: testimonial.stars }).map((_, idx) => (
                    <Star key={idx} className="fill-[var(--orange)] text-[var(--orange)]" size={18} />
                  ))}
                </div>

                <blockquote className="text-lg text-[var(--text-primary)] italic leading-relaxed mb-8 flex-grow">
                  "{testimonial.quote}"
                </blockquote>

                <div className="flex items-center gap-4 mt-auto pt-6 border-t border-[var(--border)]">
                  <div className="w-12 h-12 rounded-full bg-[var(--accent)] flex items-center justify-center text-white font-bold text-lg shrink-0">
                    {testimonial.initials}
                  </div>
                  <div>
                    <div className="font-semibold text-[var(--text-primary)]">{testimonial.name}</div>
                    <div className="text-sm text-[var(--text-secondary)]">{testimonial.title}</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
