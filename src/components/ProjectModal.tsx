import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Github, 
  ExternalLink, 
  CheckCircle2, 
  Server, 
  Sparkles,
  Zap
} from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass-panel rounded-2xl border border-zinc-200 dark:border-white/10 shadow-2xl p-6 sm:p-8 z-10 my-8"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Header */}
          <div className="space-y-2 pr-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium"
              style={{ backgroundColor: `${project.accentColor}15`, color: project.accentColor, borderColor: `${project.accentColor}30`, borderWidth: 1 }}
            >
              <span>{project.category}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-white">
              {project.title}
            </h2>
            <p className="text-base font-medium text-cyan-500 dark:text-cyan-400">
              {project.tagline}
            </p>
          </div>

          {/* Project Summary */}
          <div className="mt-5 p-4 rounded-xl bg-zinc-100 dark:bg-zinc-900/60 border border-zinc-200 dark:border-white/5 text-zinc-700 dark:text-zinc-300 text-sm sm:text-base leading-relaxed">
            {project.description}
          </div>

          {/* System Architecture Highlights */}
          {project.architectureHighlights && (
            <div className="mt-6 space-y-3">
              <h3 className="text-sm font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 flex items-center gap-2">
                <Server className="w-4 h-4 text-cyan-400" />
                <span>Backend & Architectural Decisions</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {project.architectureHighlights.map((highlight, idx) => (
                  <div 
                    key={idx}
                    className="p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-200 dark:border-white/5 text-xs text-zinc-600 dark:text-zinc-300 flex flex-col justify-between"
                  >
                    <span className="font-semibold text-zinc-900 dark:text-white mb-1.5 flex items-center gap-1.5">
                      <Zap className="w-3.5 h-3.5 text-cyan-400" />
                      Engineering Decision #{idx + 1}
                    </span>
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Features List */}
          <div className="mt-6 space-y-3">
            <h3 className="text-sm font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>Key Features & Capabilities</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.features.map((feature, idx) => (
                <div 
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-lg bg-zinc-50 dark:bg-zinc-900/30 border border-zinc-200 dark:border-white/5 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300"
                >
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div className="mt-6 pt-5 border-t border-zinc-200 dark:border-white/10">
            <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-3">
              Technologies & Infrastructure:
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-md text-xs font-mono font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-white/10"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className="mt-8 pt-5 border-t border-zinc-200 dark:border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold bg-zinc-900 dark:bg-zinc-800 text-white hover:bg-zinc-800 dark:hover:bg-zinc-700 border border-zinc-700 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>View GitHub Repository</span>
              </a>

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-400 hover:to-blue-500 transition-colors shadow-sm"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Explore Live Demo</span>
                </a>
              )}
            </div>

            <button
              onClick={onClose}
              className="text-xs font-mono text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200"
            >
              Press Esc or click backdrop to close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
