"use client";

import { motion } from "framer-motion";

interface ShippedStampProps {
  className?: string;
}

export default function ShippedStamp({ className = "" }: ShippedStampProps) {
  return (
    <motion.div
      initial={{ opacity: 0, rotate: -25 }}
      whileInView={{ opacity: 1, rotate: -15 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`absolute top-4 right-4 pointer-events-none shipped-stamp bg-[var(--accent-glow)] backdrop-blur-sm z-10 ${className}`}
    >
      <svg viewBox="0 0 100 100" className="w-full h-full animate-[spin_10s_linear_infinite]">
        <path id="curve" d="M 50 50 m -35 0 a 35 35 0 1 1 70 0 a 35 35 0 1 1 -70 0" fill="none" />
        <text className="fill-white font-bold" fontSize="13" letterSpacing="0.2em">
          <textPath href="#curve" startOffset="5%">
            SHIPPED • LIVE • SHIPPED • LIVE •
          </textPath>
        </text>
      </svg>
    </motion.div>
  );
}
