import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Medal, Flag, Calendar, CheckCircle2 } from 'lucide-react';
import { achievements } from '../data/achievements';

const badgeColors: Record<string, { bg: string; text: string; border: string; icon: React.ReactNode }> = {
  winner: {
    bg: 'bg-amber-500/10',
    text: 'text-amber-400',
    border: 'border-amber-500/30',
    icon: <Trophy className="w-5 h-5 text-amber-400" />
  },
  'runner-up': {
    bg: 'bg-cyan-500/10',
    text: 'text-cyan-400',
    border: 'border-cyan-500/30',
    icon: <Award className="w-5 h-5 text-cyan-400" />
  },
  finalist: {
    bg: 'bg-indigo-500/10',
    text: 'text-indigo-400',
    border: 'border-indigo-500/30',
    icon: <Medal className="w-5 h-5 text-indigo-400" />
  },
  participant: {
    bg: 'bg-emerald-500/10',
    text: 'text-emerald-400',
    border: 'border-emerald-500/30',
    icon: <Flag className="w-5 h-5 text-emerald-400" />
  }
};

export const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-24 relative overflow-hidden bg-zinc-950/40 dark:bg-zinc-950/60 border-t border-zinc-200/60 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-medium mb-3">
            <span>06 // HONORS & RECOGNITION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
            Hackathons &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">
              engineering achievements
            </span>
          </h2>
          <p className="mt-3 text-zinc-600 dark:text-zinc-400 max-w-2xl text-base">
            Demonstrated rapid problem-solving, product prototyping, and engineering excellence under 24 to 48-hour competitive deadlines.
          </p>
        </div>

        {/* Achievement Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((item, idx) => {
            const badgeStyle = badgeColors[item.badgeType] || badgeColors.finalist;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="glass-panel rounded-2xl p-6 border border-zinc-200 dark:border-white/10 hover:border-cyan-500/30 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div className="space-y-4">
                  {/* Card top banner with icon & badge */}
                  <div className="flex items-center justify-between">
                    <div className={`p-2.5 rounded-xl ${badgeStyle.bg} border ${badgeStyle.border}`}>
                      {badgeStyle.icon}
                    </div>
                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider ${badgeStyle.bg} ${badgeStyle.text} border ${badgeStyle.border}`}>
                      {item.badgeType}
                    </span>
                  </div>

                  {/* Title & Organizer */}
                  <div>
                    <h3 className="text-lg font-bold text-zinc-900 dark:text-white group-hover:text-cyan-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs font-mono text-cyan-600 dark:text-cyan-400 mt-1">
                      {item.event}
                    </p>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
                      Organized by: <span className="text-zinc-700 dark:text-zinc-300">{item.organizer}</span>
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Footer metadata */}
                {item.year && (
                  <div className="mt-5 pt-4 border-t border-zinc-200 dark:border-white/5 flex items-center justify-between text-xs font-mono text-zinc-500">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-zinc-400" />
                      <span>{item.year}</span>
                    </div>
                    <span className="text-emerald-400 text-[11px] font-semibold flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Verified
                    </span>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
