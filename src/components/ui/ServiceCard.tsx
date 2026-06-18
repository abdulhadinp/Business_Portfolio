"use client";

import { motion } from "framer-motion";
import { Service } from "@/data/services";
import Tag from "./Tag";

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <motion.div
      className="group bg-white rounded-2xl border border-[var(--border)] p-8 hover:shadow-[var(--shadow-card-hover)] transition-all duration-300 relative overflow-hidden flex flex-col h-full"
    >
      <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[var(--accent)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="w-12 h-12 rounded-full bg-[var(--accent-light)] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
        <Icon className="text-[var(--accent)]" size={24} />
      </div>

      <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-3 font-bricolage group-hover:text-[var(--accent)] transition-colors">
        {service.title}
      </h3>

      <p className="text-[var(--text-secondary)] mb-6 flex-grow">
        {service.description}
      </p>

      <div className="flex flex-wrap gap-2 mt-auto">
        {service.tags.map((tag) => (
          <Tag key={tag} variant="accent">{tag}</Tag>
        ))}
      </div>
    </motion.div>
  );
}
