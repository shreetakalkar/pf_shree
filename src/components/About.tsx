import React from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Code, 
  Server, 
  Cpu, 
  Network, 
  Workflow, 
  Brain, 
  Compass, 
  Layers, 
  Zap
} from 'lucide-react';
import { personalInfo } from '../data/personal';

const interestIcons: Record<string, React.ReactNode> = {
  Layers: <Layers className="w-5 h-5 text-cyan-400" />,
  Server: <Server className="w-5 h-5 text-indigo-400" />,
  Cpu: <Cpu className="w-5 h-5 text-sky-400" />,
  Network: <Network className="w-5 h-5 text-violet-400" />,
  Workflow: <Workflow className="w-5 h-5 text-emerald-400" />,
  Brain: <Brain className="w-5 h-5 text-amber-400" />,
};

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-medium mb-3">
            <span>01 // ABOUT ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
            Engineering scalable systems with{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">
              purpose and precision
            </span>
          </h2>
          <p className="mt-3 text-zinc-600 dark:text-zinc-400 max-w-2xl text-base sm:text-lg">
            Bridging algorithmic foundations with production-grade full-stack and distributed architecture.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Personal Narrative, Education & Philosophy */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Bio Card */}
            <div className="glass-panel rounded-2xl p-6 sm:p-8 space-y-4 border border-zinc-200 dark:border-white/10 shadow-sm">
              <p className="text-base sm:text-lg text-zinc-700 dark:text-zinc-200 leading-relaxed font-normal">
                {personalInfo.about.intro}
              </p>
              <p className="text-base sm:text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed">
                {personalInfo.about.experienceScope}
              </p>
              <p className="text-base sm:text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed">
                {personalInfo.about.vision}
              </p>
            </div>

            {/* Development Philosophy */}
            <div className="relative rounded-2xl p-6 sm:p-7 bg-gradient-to-br from-cyan-950/20 via-zinc-900/60 to-indigo-950/20 border border-cyan-500/20 dark:border-cyan-500/30">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 shrink-0">
                  <Compass className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-zinc-900 dark:text-white mb-1.5 flex items-center gap-2">
                    Development Philosophy
                  </h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed italic">
                    "{personalInfo.about.philosophy}"
                  </p>
                </div>
              </div>
            </div>

            {/* Education Section */}
            <div className="space-y-4">
              <h3 className="text-sm font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-cyan-400" />
                <span>Academic Qualifications</span>
              </h3>

              <div className="space-y-4">
                {personalInfo.education.map((edu, idx) => (
                  <div key={idx} className="glass-panel rounded-2xl p-6 border border-zinc-200 dark:border-white/10 hover:border-cyan-500/30 transition-colors">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 shrink-0">
                        <GraduationCap className="w-6 h-6" />
                      </div>
                      <div className="space-y-2 w-full">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <div>
                            <h3 className="text-base sm:text-lg font-bold text-zinc-900 dark:text-white">
                              {edu.institution}
                            </h3>
                            <span className="text-xs text-zinc-500 font-mono">{edu.type}</span>
                          </div>
                          <span className="px-2.5 py-1 rounded-full text-xs font-mono font-medium bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                            {edu.period}
                          </span>
                        </div>
                        <p className="text-sm font-medium text-cyan-600 dark:text-cyan-400">
                          {edu.degree}
                        </p>
                        <div className="pt-2">
                          <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-wider block mb-2">
                            Key Core Competencies & Coursework:
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {edu.highlights.map((course) => (
                              <span 
                                key={course}
                                className="px-2.5 py-1 rounded-md text-xs bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-white/5"
                              >
                                {course}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Technical Interests & Key Highlights */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-sm font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 flex items-center gap-2">
              <Zap className="w-4 h-4 text-cyan-400" />
              <span>Core Areas of Exploration</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3.5">
              {personalInfo.interests.map((interest, idx) => (
                <motion.div
                  key={interest.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="glass-panel p-4 rounded-xl border border-zinc-200 dark:border-white/10 hover:border-cyan-500/30 transition-all duration-300 group hover:-translate-y-0.5"
                >
                  <div className="flex items-start gap-3.5">
                    <div className="p-2.5 rounded-lg bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 group-hover:scale-105 transition-transform">
                      {interestIcons[interest.icon] || <Code className="w-5 h-5 text-cyan-400" />}
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-zinc-900 dark:text-white group-hover:text-cyan-400 transition-colors">
                        {interest.title}
                      </h4>
                      <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 leading-relaxed">
                        {interest.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              <div className="glass-panel p-3.5 rounded-xl border border-zinc-200 dark:border-white/10 text-center">
                <span className="block text-xl sm:text-2xl font-black text-cyan-400">40%</span>
                <span className="text-[11px] text-zinc-500 dark:text-zinc-400">API Latency Cut</span>
              </div>
              <div className="glass-panel p-3.5 rounded-xl border border-zinc-200 dark:border-white/10 text-center">
                <span className="block text-xl sm:text-2xl font-black text-indigo-400">5+</span>
                <span className="text-[11px] text-zinc-500 dark:text-zinc-400">Hackathon Wins</span>
              </div>
              <div className="glass-panel p-3.5 rounded-xl border border-zinc-200 dark:border-white/10 text-center">
                <span className="block text-xl sm:text-2xl font-black text-emerald-400">Java</span>
                <span className="text-[11px] text-zinc-500 dark:text-zinc-400">Primary Core</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
