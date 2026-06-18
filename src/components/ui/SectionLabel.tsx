"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

interface SectionLabelProps {
  children: React.ReactNode;
  color?: string;
}

export default function SectionLabel({ children, color }: SectionLabelProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--border)] mb-4"
      style={{ backgroundColor: color ? `${color}15` : "var(--accent-light)" }}
    >
      <span
        className="text-xs font-semibold tracking-[0.1em] uppercase"
        style={{ color: color || "var(--accent)" }}
      >
        {children}
      </span>
    </motion.div>
  );
}
