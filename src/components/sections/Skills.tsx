"use client";

import { skillCategories } from "@/data/skills";
import SectionLabel from "../ui/SectionLabel";
import ScrollReveal from "../ui/ScrollReveal";
import { stagger, fadeIn } from "@/lib/animations";
import { motion } from "framer-motion";

export default function Skills() {
  return (
    <section id="skills" className="bg-white section-padding">
      <div className="container-main">
        <div className="max-w-3xl mb-16">
          <SectionLabel>TECHNICAL SKILLS</SectionLabel>
          
          <ScrollReveal delay={0.1}>
            <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold font-bricolage leading-[1.2] text-[var(--text-primary)]">
              The Tools I Build With
            </h2>
          </ScrollReveal>
        </div>

        <div className="flex flex-col gap-10">
          {skillCategories.map((category, index) => (
            <ScrollReveal key={category.name} delay={index * 0.1}>
              <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
                <div className="w-full md:w-48 shrink-0">
                  <h3 className="text-sm font-bold tracking-wider uppercase text-[var(--text-secondary)] py-2 border-b-2 border-[var(--border)] inline-block">
                    {category.name}
                  </h3>
                </div>
                
                <motion.div 
                  className="flex flex-wrap gap-3 flex-1"
                  variants={stagger}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                >
                  {category.skills.map((skill) => (
                    <motion.div
                      key={skill}
                      variants={fadeIn}
                      className="px-4 py-2 bg-white border border-[var(--border)] rounded-[6px] text-sm font-medium text-[var(--text-primary)] hover:bg-[var(--accent-light)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors cursor-default"
                    >
                      {skill}
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
