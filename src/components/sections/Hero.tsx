"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, MessageSquare, Building2, MapPin, ChevronDown } from "lucide-react";
import Button from "../ui/Button";
import AnimatedCounter from "../ui/AnimatedCounter";
import { smoothScrollTo } from "@/lib/utils";
import { fadeUp, slideRight, stagger, float, floatReverse } from "@/lib/animations";

export default function Hero() {
  const ROLES = [
    "Full-Stack Engineer",
    "Android Developer",
    "AI Engineer",
    "IT Consultant"
  ];

  const [currentRole, setCurrentRole] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const roleInterval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % ROLES.length);
    }, 2500);

    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      clearInterval(roleInterval);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [ROLES.length]);

  return (
    <section id="hero" className="relative min-h-[100svh] flex items-center pt-24 pb-16 overflow-hidden hero-bg">
      <div className="container-main relative z-10 w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-8">
          
          {/* Left Column Content */}
          <motion.div 
            className="w-full lg:w-[60%] flex flex-col items-start pt-8 lg:pt-0"
            variants={stagger}
            initial="hidden"
            animate="visible"
          >
            {/* Availability Badge */}
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--border)] bg-white mb-6">
              <span className="w-2 h-2 rounded-full bg-[var(--green)] pulse-dot" />
              <span className="text-sm font-medium text-[var(--text-secondary)]">Available for new projects</span>
            </motion.div>

            {/* Headline */}
            <motion.h1 variants={fadeUp} className="text-[clamp(2.8rem,6vw,5.2rem)] font-bold font-bricolage leading-[1.1] text-[var(--text-primary)] mb-6">
              I Build <span className="gradient-text">Digital Products</span><br className="hidden sm:block" /> That Actually Work
            </motion.h1>

            {/* Role Ticker */}
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 text-lg sm:text-xl font-medium text-[var(--text-secondary)] mb-8">
              <span>Founder, Zyvora Technologies</span>
              <span className="hidden sm:block text-[var(--text-muted)]">|</span>
              <div className="h-[30px] overflow-hidden relative min-w-[200px]">
                <AnimatePresence mode="popLayout">
                  <motion.span
                    key={currentRole}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute text-[var(--accent)] font-semibold"
                  >
                    {ROLES[currentRole]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Subheadline */}
            <motion.p variants={fadeUp} className="text-lg text-[var(--text-secondary)] leading-[1.7] max-w-xl mb-12">
              I turn complex business problems into clean, scalable software. Based in Kathmandu, Nepal. Building for clients across South Asia and beyond.
            </motion.p>

            {/* Stats Row */}
            <motion.div variants={fadeUp} className="flex items-center gap-8 sm:gap-12 mb-12">
              <div className="flex flex-col">
                <AnimatedCounter target={20} suffix="+" />
                <span className="text-sm text-[var(--text-muted)] font-medium mt-1">Projects Delivered</span>
              </div>
              <div className="flex flex-col">
                <AnimatedCounter target={3} suffix="+" />
                <span className="text-sm text-[var(--text-muted)] font-medium mt-1">Years Building</span>
              </div>
              <div className="flex flex-col">
                <AnimatedCounter target={100} suffix="%" />
                <span className="text-sm text-[var(--text-muted)] font-medium mt-1">Client Satisfaction</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-10">
              <Button size="lg" icon={ArrowRight} fullWidth onClick={() => smoothScrollTo("projects")}>
                View My Work
              </Button>
              <Button size="lg" variant="secondary" icon={MessageSquare} fullWidth onClick={() => smoothScrollTo("contact")}>
                Let's Talk
              </Button>
            </motion.div>

            {/* Tech Stack Chips */}
            <motion.div variants={fadeUp} className="flex items-center gap-3 flex-wrap">
              <span className="text-xs font-semibold tracking-wider uppercase text-[var(--text-muted)] mr-2">BUILT WITH:</span>
              {["Next.js", "Python", "Android", "AI / ML", "TypeScript"].map((tech) => (
                <span key={tech} className="px-2.5 py-1 text-xs font-medium bg-[var(--accent-light)] text-[var(--accent)] rounded-[6px]">
                  {tech}
                </span>
              ))}
            </motion.div>

          </motion.div>

          {/* Right Column Content (Photo) */}
          <motion.div 
            className="w-full lg:w-[40%] flex justify-center lg:justify-end relative"
            variants={slideRight}
            initial="hidden"
            animate="visible"
          >
            {/* Decorative background blob */}
            <div className="absolute w-[500px] h-[500px] rounded-full bg-[var(--violet-glow)] blur-[80px] -z-10 mix-blend-multiply animate-[spin_20s_linear_infinite]" />

            <div className="relative w-full max-w-[380px] aspect-[3/4] rounded-[24px] bg-gradient-to-br from-[#EEF3FF] to-[#F3EEFF] shadow-[var(--shadow-photo)] mt-8 lg:mt-0">
              
              <Image
                src="/assets/profile.jpg"
                alt="Abdul Hadi"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-top rounded-[24px]"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  console.warn("Profile photo missing at /public/assets/profile.jpg. Rendered placeholder instead.");
                }}
              />
              
              {/* Fallback placeholder if image is missing or fails to load */}
              <div className="absolute inset-0 flex items-center justify-center -z-10 bg-gradient-to-br from-gray-100 to-gray-200 rounded-[24px]">
                <span className="text-6xl font-bold text-gray-300">AH</span>
              </div>

              {/* Bottom gradient overlay to blend */}
              <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-white/40 to-transparent rounded-b-[24px]" />

              {/* Floating Badge 1 (Top Right) */}
              <motion.div 
                animate={float}
                className="absolute -right-6 md:-right-12 top-12 bg-white rounded-[10px] shadow-lg p-3 flex items-center gap-3 z-20"
              >
                <div className="p-2 bg-[var(--bg-soft)] rounded-lg">
                  <Building2 size={16} className="text-[var(--accent)]" />
                </div>
                <div>
                  <div className="text-[11px] font-semibold text-[var(--text-primary)]">Zyvora Technologies</div>
                  <div className="text-[10px] font-medium text-[var(--text-muted)]">Founder</div>
                </div>
              </motion.div>

              {/* Floating Badge 2 (Bottom Left) */}
              <motion.div 
                animate={floatReverse}
                className="absolute -left-6 md:-left-12 bottom-20 bg-white rounded-[10px] shadow-lg p-3 flex items-center gap-3 z-20"
              >
                <div className="p-2 bg-[var(--green-light)] rounded-lg">
                  <MapPin size={16} className="text-[var(--green)]" />
                </div>
                <div>
                  <div className="text-[11px] font-semibold text-[var(--text-primary)]">Kathmandu, Nepal</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 hidden lg:flex transition-opacity duration-300"
        style={{ opacity: scrollY > 100 ? 0 : 1, pointerEvents: scrollY > 100 ? 'none' : 'auto' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span className="text-xs font-medium text-[var(--text-muted)]">Scroll to explore</span>
        <ChevronDown size={16} className="text-[var(--text-muted)] animate-bounce" />
      </motion.div>
    </section>
  );
}
