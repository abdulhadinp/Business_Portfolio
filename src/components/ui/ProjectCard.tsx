"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { TrendingUp, ArrowUpRight } from "lucide-react";
import Tag from "./Tag";
import ShippedStamp from "./ShippedStamp";
import { Project, projectGradients } from "@/data/projects";
import { useState } from "react";

interface ProjectCardProps {
  project: Project;
  onClick: (project: Project) => void;
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ y: -4 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={`group bg-white rounded-2xl border border-[var(--border)] overflow-hidden shadow-sm hover:shadow-[var(--shadow-card-hover)] transition-all duration-300 flex flex-col h-full cursor-pointer ${project.featured ? "md:col-span-2 lg:col-span-3 lg:grid lg:grid-cols-2" : ""}`}
      onClick={() => onClick(project)}
    >
      <div className={`relative overflow-hidden ${project.featured ? "aspect-[16/9] lg:aspect-auto lg:h-full" : "aspect-[16/9]"}`}>
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div 
            className="w-full h-full transition-transform duration-500 group-hover:scale-105 project-gradient-overlay"
            style={{ background: projectGradients[project.id] || "linear-gradient(135deg, #1D4ED8 0%, #7C3AED 100%)" }}
          />
        )}
        
        {isHovered && <ShippedStamp />}
      </div>

      <div className={`p-6 flex flex-col flex-grow ${project.featured ? "lg:p-10 justify-center" : ""}`}>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.categories.map((cat) => (
            <Tag key={cat} variant="default">{cat.replace("-", " ")}</Tag>
          ))}
        </div>

        <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-3 group-hover:text-[var(--accent)] transition-colors">
          {project.title}
        </h3>

        <p className="text-[var(--text-secondary)] mb-6 line-clamp-3">
          {project.short}
        </p>

        <div className="flex flex-wrap gap-2 mb-6 mt-auto">
          {project.tech.map((t) => (
            <Tag key={t} variant="accent">{t}</Tag>
          ))}
        </div>

        <div className="bg-[var(--bg-soft)] rounded-lg p-3 flex items-start gap-3 mb-6">
          <TrendingUp className="text-[var(--accent)] shrink-0 mt-0.5" size={18} />
          <span className="text-sm font-medium text-[var(--text-primary)] leading-tight">
            {project.metric}
          </span>
        </div>

        <button className="inline-flex items-center gap-2 text-[var(--accent)] font-medium text-sm hover:gap-3 transition-all mt-auto self-start">
          View Case Study <ArrowUpRight size={16} />
        </button>
      </div>
    </motion.div>
  );
}
