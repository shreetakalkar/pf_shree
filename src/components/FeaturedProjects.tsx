import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Github, 
  ExternalLink, 
  ArrowUpRight, 
  Cpu, 
  Database, 
  Server, 
  ShieldCheck, 
  Sparkles, 
  Radio, 
  Activity
} from 'lucide-react';
import { projects } from '../data/projects';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';

export const FeaturedProjects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<'all' | 'AI & Web' | 'Distributed Systems' | 'Full Stack'>('all');

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-medium mb-3">
              <span>03 // FEATURED WORK</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
              Selected projects &{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">
                system implementations
              </span>
            </h2>
            <p className="mt-3 text-zinc-600 dark:text-zinc-400 max-w-2xl text-base">
              Engineered with focus on distributed scalability, intelligent automation, and reliable cloud architecture.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-zinc-100 dark:bg-zinc-900/80 border border-zinc-200 dark:border-white/10 text-xs font-mono">
            {(['all', 'AI & Web', 'Distributed Systems', 'Full Stack'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`px-3 py-1.5 rounded-lg transition-colors ${
                  filter === tab
                    ? 'bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-bold shadow-sm'
                    : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
                }`}
              >
                {tab === 'all' ? 'All Projects' : tab}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group relative flex flex-col justify-between glass-panel rounded-2xl border border-zinc-200 dark:border-white/10 hover:border-cyan-500/40 transition-all duration-300 overflow-hidden shadow-sm hover:shadow-xl hover:shadow-cyan-950/20"
            >
              {/* Visual Preview Graphic */}
              <div className="relative h-56 w-full bg-zinc-950 border-b border-zinc-800 p-4 flex flex-col justify-between overflow-hidden">
                
                {/* Background Grid Pattern inside preview */}
                <div className="absolute inset-0 bg-grid-overlay opacity-30"></div>
                <div 
                  className="absolute -top-10 -right-10 w-40 h-40 rounded-full blur-3xl opacity-30 pointer-events-none"
                  style={{ backgroundColor: project.accentColor }}
                ></div>

                {/* Top preview toolbar */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-zinc-900/90 border border-zinc-800 text-zinc-300 flex items-center gap-1.5">
                    <span 
                      className="w-2 h-2 rounded-full" 
                      style={{ backgroundColor: project.accentColor }}
                    ></span>
                    {project.category}
                  </span>

                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-zinc-700"></span>
                    <span className="w-2 h-2 rounded-full bg-zinc-700"></span>
                    <span className="w-2 h-2 rounded-full bg-zinc-700"></span>
                  </div>
                </div>

                {/* Unique Visual Preview Per Project */}
                {project.id === 'hirezaa' && (
                  <div className="relative z-10 my-auto space-y-2 font-mono text-[11px]">
                    <div className="p-2.5 rounded-lg bg-zinc-900/90 border border-zinc-800 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                        <span className="text-zinc-200 font-semibold">Gemini Candidate Fit</span>
                      </div>
                      <span className="text-emerald-400 font-bold">96% Match</span>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-[10px]">
                      <div className="p-2 rounded bg-zinc-900/80 border border-zinc-800 text-zinc-400 flex items-center gap-1.5">
                        <Cpu className="w-3 h-3 text-cyan-400" />
                        <span>Judge0: PASS 5/5</span>
                      </div>
                      <div className="p-2 rounded bg-zinc-900/80 border border-zinc-800 text-zinc-400 flex items-center gap-1.5">
                        <Radio className="w-3 h-3 text-indigo-400" />
                        <span>Deepgram STT Live</span>
                      </div>
                    </div>
                  </div>
                )}

                {project.id === 'droply' && (
                  <div className="relative z-10 my-auto space-y-2 font-mono text-[11px]">
                    <div className="p-2.5 rounded-lg bg-zinc-900/90 border border-zinc-800 space-y-1.5">
                      <div className="flex items-center justify-between text-zinc-300">
                        <span className="flex items-center gap-1.5 text-indigo-400 font-semibold">
                          <Activity className="w-3.5 h-3.5" />
                          <span>Direct S3 Pre-signed Upload</span>
                        </span>
                        <span className="text-cyan-400 font-bold">85% Offload</span>
                      </div>
                      <div className="w-full bg-zinc-800 rounded-full h-1.5 overflow-hidden">
                        <div className="bg-gradient-to-r from-cyan-400 to-indigo-500 h-1.5 rounded-full w-4/5 animate-pulse"></div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-2 rounded bg-zinc-900/80 border border-zinc-800 text-[10px] text-zinc-400">
                      <span>RabbitMQ Queue: READY</span>
                      <span className="text-emerald-400">Redis Cache: 2.4ms</span>
                    </div>
                  </div>
                )}

                {project.id === 'prodify' && (
                  <div className="relative z-10 my-auto space-y-2 font-mono text-[11px]">
                    <div className="p-2.5 rounded-lg bg-zinc-900/90 border border-zinc-800 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Database className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-zinc-200 font-semibold">Shopify Sync Engine</span>
                      </div>
                      <span className="text-emerald-400 font-bold">1,480 SKUs</span>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-[10px]">
                      <div className="p-2 rounded bg-zinc-900/80 border border-zinc-800 text-zinc-400 flex items-center gap-1.5">
                        <ShieldCheck className="w-3 h-3 text-emerald-400" />
                        <span>JWT Auth: VALID</span>
                      </div>
                      <div className="p-2 rounded bg-zinc-900/80 border border-zinc-800 text-zinc-400 flex items-center gap-1.5">
                        <Server className="w-3 h-3 text-cyan-400" />
                        <span>Webhook: 200 OK</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Bottom preview footer */}
                <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                  <span>Architecture Verified</span>
                  <span className="text-cyan-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>Inspect</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                <div>
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs font-medium text-cyan-600 dark:text-cyan-400 font-mono mt-1">
                    {project.tagline}
                  </p>
                  <p className="mt-3 text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* Tech stack badges */}
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-zinc-100 dark:bg-zinc-800/90 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Card Actions */}
                <div className="pt-4 border-t border-zinc-200 dark:border-white/5 flex items-center justify-between gap-2">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-zinc-100 dark:bg-zinc-800/80 text-zinc-900 dark:text-zinc-100 hover:bg-cyan-500 hover:text-white dark:hover:bg-cyan-500 transition-colors flex items-center gap-1.5"
                  >
                    <span>View Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  <div className="flex items-center gap-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg text-zinc-500 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                      title="GitHub Repository"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg text-zinc-500 hover:text-cyan-500 dark:hover:text-cyan-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                        title="Live Demo"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Detail Modal */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
};
