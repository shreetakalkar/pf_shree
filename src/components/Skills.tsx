import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Coffee
} from 'lucide-react';
import { skillCategories } from '../data/skills';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', ...skillCategories.map(c => c.category)];

  const displayedCategories = activeCategory === 'All'
    ? skillCategories
    : skillCategories.filter(c => c.category === activeCategory);

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-medium mb-3">
            <span>05 // TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
            Comprehensive technical skills &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">
              engineering toolbelt
            </span>
          </h2>
          <p className="mt-3 text-zinc-600 dark:text-zinc-400 max-w-2xl text-base">
            Grounded in core algorithms and systems programming with Java, coupled with modern full-stack web and cloud architectures.
          </p>
        </div>

        {/* Highlighted Banner: Java as Primary Programming Language */}
        <div className="mb-12 relative rounded-2xl p-6 sm:p-7 bg-gradient-to-r from-indigo-950/40 via-cyan-950/30 to-zinc-900/60 border border-indigo-500/30 shadow-lg shadow-indigo-950/10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5">
            <div className="flex items-start sm:items-center gap-4">
              <div className="p-3.5 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 shrink-0 shadow-inner">
                <Coffee className="w-8 h-8" />
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2.5 flex-wrap">
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    Java — Primary Programming Language
                  </h3>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                    Core Specialization
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-zinc-300 max-w-2xl">
                  Deep focus on Object-Oriented Design, Data Structures & Algorithms, memory management, multithreading fundamentals, and enterprise-grade architecture.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <div className="px-3.5 py-2 rounded-xl bg-zinc-900/80 border border-zinc-800 text-xs font-mono text-zinc-300 text-center">
                <span className="block text-indigo-400 font-bold">Algorithms & DSA</span>
                <span className="text-[10px] text-zinc-500">Problem Solving</span>
              </div>
              <div className="px-3.5 py-2 rounded-xl bg-zinc-900/80 border border-zinc-800 text-xs font-mono text-zinc-300 text-center">
                <span className="block text-cyan-400 font-bold">OOP Architecture</span>
                <span className="text-[10px] text-zinc-500">Clean Code</span>
              </div>
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                activeCategory === category
                  ? 'bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-bold shadow-md'
                  : 'bg-zinc-100 dark:bg-zinc-900/60 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-200 dark:hover:bg-zinc-800'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Categorized Skills Grid */}
        <div className="space-y-10">
          {displayedCategories.map((group, groupIdx) => (
            <div key={group.category} className="space-y-4">
              <div className="flex items-center gap-2.5 pb-2 border-b border-zinc-200 dark:border-white/5">
                <span className="text-xs font-mono text-cyan-400">0{groupIdx + 1}.</span>
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
                  {group.category}
                </h3>
                <span className="text-xs text-zinc-500 dark:text-zinc-400 hidden sm:inline">
                  — {group.subtitle}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5">
                {group.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3 }}
                    className={`glass-panel p-4 rounded-xl border transition-all duration-200 group hover:-translate-y-0.5 ${
                      skill.isPrimary 
                        ? 'border-indigo-500/40 bg-indigo-950/20' 
                        : 'border-zinc-200 dark:border-white/5 hover:border-cyan-500/30'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-bold text-zinc-900 dark:text-white group-hover:text-cyan-400 transition-colors">
                            {skill.name}
                          </span>
                          {skill.isPrimary && (
                            <span className="px-1.5 py-0.5 text-[9px] font-mono font-bold bg-indigo-500/20 text-indigo-300 rounded border border-indigo-500/30">
                              Primary
                            </span>
                          )}
                        </div>
                        {skill.highlight && (
                          <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-normal">
                            {skill.highlight}
                          </p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
