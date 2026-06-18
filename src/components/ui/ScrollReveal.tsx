"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  variant?: "fadeUp" | "fadeIn" | "scaleIn" | "slideLeft" | "slideRight";
}

export default function ScrollReveal({ children, delay = 0, className = "", variant = "fadeUp" }: ScrollRevealProps) {
  const getVariant = (): any => {
    switch (variant) {
      case "fadeUp": return fadeUp;
      case "fadeIn": return { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.45, delay } } };
      case "scaleIn": return { hidden: { opacity: 0, scale: 0.94 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.45, delay, ease: [0.22, 1, 0.36, 1] } } };
      case "slideLeft": return { hidden: { opacity: 0, x: -40 }, visible: { opacity: 1, x: 0, transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] } } };
      case "slideRight": return { hidden: { opacity: 0, x: 40 }, visible: { opacity: 1, x: 0, transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] } } };
      default: return fadeUp;
    }
  };

  return (
    <motion.div
      variants={getVariant()}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
