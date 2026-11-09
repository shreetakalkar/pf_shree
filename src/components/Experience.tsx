import React from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  Zap
} from 'lucide-react';
import { experiences } from '../data/experience';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-zinc-950/40 dark:bg-zinc-950/60 border-y border-zinc-200/60 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-medium mb-3">
            <span>02 // WORK EXPERIENCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
            Industry experience &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">
              engineering leadership
            </span>
          </h2>
          <p className="mt-3 text-zinc-600 dark:text-zinc-400 max-w-2xl text-base sm:text-lg">
            Track record of reducing latency, leading Agile software teams, and shipping production web services.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Vertical Glowing Connector Line (Desktop) */}
          <div className="hidden md:block absolute left-8 top-6 bottom-6 w-0.5 bg-gradient-to-b from-cyan-500 via-indigo-500 to-transparent"></div>

          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative md:pl-20 group"
              >
                {/* Timeline node icon */}
                <div className="hidden md:flex absolute left-4 top-6 -translate-x-1/2 w-9 h-9 rounded-full bg-zinc-900 border-2 border-cyan-500 items-center justify-center text-cyan-400 shadow-md shadow-cyan-500/30 group-hover:scale-110 transition-transform">
                  <Briefcase className="w-4 h-4" />
                </div>

                {/* Experience Card */}
                <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-zinc-200 dark:border-white/10 hover:border-cyan-500/40 transition-all duration-300 shadow-sm group-hover:shadow-cyan-950/20">
                  
                  {/* Card Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-5 border-b border-zinc-200 dark:border-white/5">
                    <div>
                      <div className="flex items-center gap-2.5 flex-wrap">
                        <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white">
                          {exp.role}
                        </h3>
                        {exp.badge && (
                          <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 animate-pulse">
                            {exp.badge}
                          </span>
                        )}
                      </div>
                      
                      <div className="mt-1 flex items-center gap-2 text-base font-semibold text-cyan-600 dark:text-cyan-400">
                        <span>{exp.organization}</span>
                        <span className="text-zinc-400 dark:text-zinc-600">•</span>
                        <span className="text-sm font-normal text-zinc-500 dark:text-zinc-400">{exp.type}</span>
                      </div>
                    </div>

                    <div className="flex flex-col sm:items-end gap-1 text-xs sm:text-sm font-mono text-zinc-500 dark:text-zinc-400">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-zinc-400 dark:text-zinc-500">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Key Metrics Highlight Badges */}
                  <div className="py-4 flex flex-wrap gap-2.5">
                    {exp.metrics.map((metric) => (
                      <div
                        key={metric}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold bg-cyan-950/20 dark:bg-cyan-950/30 text-cyan-700 dark:text-cyan-300 border border-cyan-800/30"
                      >
                        <Zap className="w-3.5 h-3.5 text-cyan-400" />
                        <span>{metric}</span>
                      </div>
                    ))}
                  </div>

                  {/* Bullet points */}
                  <ul className="space-y-3 pt-2 text-zinc-600 dark:text-zinc-300 text-sm sm:text-base leading-relaxed">
                    {exp.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-3">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0"></span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack badges */}
                  <div className="mt-6 pt-5 border-t border-zinc-200 dark:border-white/5 flex flex-wrap items-center gap-2">
                    <span className="text-xs font-mono text-zinc-400 dark:text-zinc-500 mr-2">
                      Technologies:
                    </span>
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md text-xs font-mono bg-zinc-100 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
