"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects, filterCategories, Project } from "@/data/projects";
import SectionLabel from "../ui/SectionLabel";
import ProjectCard from "../ui/ProjectCard";
import ProjectModal from "../ui/ProjectModal";
import ScrollReveal from "../ui/ScrollReveal";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = projects.filter((project) => 
    activeFilter === "all" ? true : project.categories.includes(activeFilter)
  );

  return (
    <section id="projects" className="bg-[var(--bg-soft)] section-padding">
      <div className="container-main">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <SectionLabel>SELECTED WORK</SectionLabel>
            
            <ScrollReveal delay={0.1}>
              <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold font-bricolage leading-[1.2] text-[var(--text-primary)] mb-4">
                Projects That Speak for Themselves
              </h2>
            </ScrollReveal>
            
            <ScrollReveal delay={0.2}>
              <p className="text-lg text-[var(--text-secondary)] leading-[1.7]">
                Real products, real clients, real results.
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.3} className="flex flex-wrap gap-2">
            {filterCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === category.id
                    ? "bg-[var(--accent)] text-white shadow-md"
                    : "bg-white text-[var(--text-secondary)] border border-[var(--border)] hover:border-[var(--accent)] hover:text-[var(--accent)]"
                }`}
              >
                {category.label}
              </button>
            ))}
          </ScrollReveal>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                onClick={setSelectedProject}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
}
