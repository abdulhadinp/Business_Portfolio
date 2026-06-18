"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, TrendingUp } from "lucide-react";
import { Project, projectGradients } from "@/data/projects";
import Tag from "./Tag";
import Button from "./Button";
import { smoothScrollTo } from "@/lib/utils";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [project]);

  if (!project) return null;

  const handleDiscuss = () => {
    onClose();
    setTimeout(() => {
      smoothScrollTo("contact");
    }, 300); // Wait for modal to close
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-[rgba(10,22,40,0.7)] backdrop-blur-sm"
        />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full max-w-[800px] max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col z-10"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 bg-white/80 hover:bg-white backdrop-blur-md rounded-full shadow-sm transition-colors text-[var(--text-primary)]"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>

          <div className="overflow-y-auto no-scrollbar flex-1">
            <div className="relative w-full aspect-[16/9] bg-[var(--bg-soft)]">
              {project.image ? (
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  priority
                />
              ) : (
                <div 
                  className="w-full h-full project-gradient-overlay"
                  style={{ background: projectGradients[project.id] || "linear-gradient(135deg, #1D4ED8 0%, #7C3AED 100%)" }}
                />
              )}
            </div>

            <div className="p-6 md:p-10">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.categories.map((cat) => (
                  <Tag key={cat} variant="default">{cat.replace("-", " ")}</Tag>
                ))}
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-6 font-bricolage">
                {project.title}
              </h2>

              <div className="bg-[var(--bg-soft)] rounded-xl p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8 border border-[var(--border)]">
                <div className="bg-white p-3 rounded-full shadow-sm shrink-0">
                  <TrendingUp className="text-[var(--green)]" size={24} />
                </div>
                <div>
                  <div className="text-xs font-semibold tracking-wider text-[var(--text-muted)] uppercase mb-1">Key Result</div>
                  <div className="text-base font-semibold text-[var(--text-primary)] leading-tight">
                    {project.metric}
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-semibold tracking-wider text-[var(--text-muted)] uppercase mb-3">Overview</h3>
                  <p className="text-[var(--text-secondary)] leading-relaxed whitespace-pre-line text-lg">
                    {project.full}
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-semibold tracking-wider text-[var(--text-muted)] uppercase mb-3">Tech Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <Tag key={t} variant="accent">{t}</Tag>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-[var(--border)]">
                <Button fullWidth size="lg" onClick={handleDiscuss}>
                  Discuss a Similar Project
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
