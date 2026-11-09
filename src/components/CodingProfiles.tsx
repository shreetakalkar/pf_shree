import React from 'react';
import { motion } from 'framer-motion';
import { 
  Github, 
  ExternalLink, 
  Coffee, 
  Brain
} from 'lucide-react';
import { personalInfo } from '../data/personal';

export const CodingProfiles: React.FC = () => {
  // Representation grid of git activity
  const weeks = 28;
  const daysPerWeek = 7;

  // Pattern of realistic contributions
  const getActivityLevel = (week: number, day: number) => {
    const val = (week * 7 + day * 13) % 19;
    if (val === 0 || val === 5 || val === 11) return 0;
    if (val < 7) return 1;
    if (val < 14) return 2;
    if (val < 17) return 3;
    return 4;
  };

  const levelColorsDark = [
    'bg-zinc-900 border-zinc-800',
    'bg-cyan-950/80 border-cyan-800/40',
    'bg-cyan-800/70 border-cyan-700/50',
    'bg-cyan-600 border-cyan-500/60',
    'bg-cyan-400 border-cyan-300',
  ];

  return (
    <section id="coding" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-medium mb-3">
            <span>07 // OPEN SOURCE & PROBLEM SOLVING</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
            Code craft, algorithms &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">
              open-source activity
            </span>
          </h2>
          <p className="mt-3 text-zinc-600 dark:text-zinc-400 max-w-2xl text-base">
            Continuous engineering practice rooted in algorithmic problem solving and open source contributions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* GitHub Activity & Profile Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 glass-panel rounded-2xl p-6 sm:p-8 border border-zinc-200 dark:border-white/10 flex flex-col justify-between space-y-6"
          >
            {/* Header info */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-zinc-200 dark:border-white/5">
              <div className="flex items-center gap-4">
                <div className="p-3.5 rounded-2xl bg-zinc-900 text-white border border-zinc-700 shadow-md">
                  <Github className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-white flex items-center gap-2">
                    <span>shreetakalkar</span>
                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      Active
                    </span>
                  </h3>
                  <p className="text-xs text-zinc-500 font-mono mt-0.5">
                    github.com/shreetakalkar
                  </p>
                </div>
              </div>

              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-zinc-900 dark:bg-zinc-800 text-white hover:bg-zinc-800 dark:hover:bg-zinc-700 border border-zinc-700 transition-colors w-fit"
              >
                <span>View Full Profile</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Contribution Activity Graph Simulation */}
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
                <span>Recent Commit Cadence</span>
                <div className="flex items-center gap-1.5 text-[10px]">
                  <span>Less</span>
                  <span className="w-2.5 h-2.5 rounded-sm bg-zinc-800"></span>
                  <span className="w-2.5 h-2.5 rounded-sm bg-cyan-950"></span>
                  <span className="w-2.5 h-2.5 rounded-sm bg-cyan-700"></span>
                  <span className="w-2.5 h-2.5 rounded-sm bg-cyan-400"></span>
                  <span>More</span>
                </div>
              </div>

              {/* Matrix of commit blocks */}
              <div className="p-3.5 rounded-xl bg-zinc-950/80 border border-zinc-800/80 overflow-x-auto">
                <div className="flex gap-1.5 min-w-[500px]">
                  {Array.from({ length: weeks }).map((_, w) => (
                    <div key={w} className="flex flex-col gap-1.5">
                      {Array.from({ length: daysPerWeek }).map((_, d) => {
                        const level = getActivityLevel(w, d);
                        return (
                          <div
                            key={d}
                            className={`w-3 h-3 rounded-sm border ${levelColorsDark[level]} transition-colors hover:scale-125`}
                            title={`Activity level: ${level}`}
                          />
                        );
                      })}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Repositories Highlight Pills */}
            <div className="space-y-2 pt-2">
              <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider block">
                Featured Repositories & Implementations:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {[
                  { name: 'Droply', tech: 'Node • S3 • RabbitMQ', desc: 'Distributed Storage Backend' },
                  { name: 'HireZaa', tech: 'Gemini • Judge0 • React', desc: 'AI Recruitment Platform' },
                  { name: 'Prodify', tech: 'Shopify • JWT • MongoDB', desc: 'E-Commerce Admin Service' },
                ].map((repo) => (
                  <div
                    key={repo.name}
                    className="p-3 rounded-xl bg-zinc-100 dark:bg-zinc-900/50 border border-zinc-200 dark:border-white/5 space-y-1"
                  >
                    <div className="flex items-center justify-between text-xs font-bold text-zinc-900 dark:text-white">
                      <span>{repo.name}</span>
                      <ExternalLink className="w-3 h-3 text-cyan-400" />
                    </div>
                    <p className="text-[11px] text-zinc-500 font-mono">{repo.tech}</p>
                    <p className="text-[10px] text-zinc-400">{repo.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* LeetCode & Problem Solving Mindset Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-5 glass-panel rounded-2xl p-6 sm:p-8 border border-zinc-200 dark:border-white/10 flex flex-col justify-between space-y-6"
          >
            {/* Header info */}
            <div className="flex items-center justify-between pb-5 border-b border-zinc-200 dark:border-white/5">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
                  <Brain className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
                    Algorithmic Problem Solving
                  </h3>
                  <p className="text-xs text-zinc-500 font-mono mt-0.5">
                    LeetCode & DSA Practice
                  </p>
                </div>
              </div>

              <a
                href={personalInfo.socials.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:text-amber-400 border border-zinc-200 dark:border-zinc-700 transition-colors"
                title="LeetCode Profile"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Core approach */}
            <div className="space-y-3">
              <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                Solving algorithmic challenges with <strong className="text-zinc-900 dark:text-white font-semibold">Java</strong> as my core weapon. Focus is heavily placed on time and space complexity, asymptotic analysis, edge case handling, and optimal data structure selection.
              </p>

              {/* Topic Focus Pills */}
              <div className="space-y-2 pt-2">
                <span className="text-xs font-mono uppercase text-zinc-500 block">
                  Core Problem Domains:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    'Arrays & Two Pointers',
                    'Binary Search',
                    'Trees & BSTs',
                    'Graphs (BFS/DFS)',
                    'Dynamic Programming',
                    'Hash Tables & Heaps',
                    'Greedy Algorithms'
                  ].map((topic) => (
                    <span
                      key={topic}
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700/60"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Philosophy quote */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-amber-950/20 via-zinc-900/60 to-zinc-950 border border-amber-500/20 text-xs text-zinc-300 space-y-1">
              <span className="text-amber-400 font-mono font-semibold block flex items-center gap-1.5">
                <Coffee className="w-3.5 h-3.5" />
                Algorithm Mindset:
              </span>
              <p className="text-zinc-400">
                "Writing code that doesn't just pass test cases, but scales gracefully with O(1) space or O(N log N) time bounds."
              </p>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
