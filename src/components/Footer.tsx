import React from 'react';
import { ArrowUp, Github, Linkedin } from 'lucide-react';
import { personalInfo } from '../data/personal';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="py-12 bg-zinc-950 border-t border-zinc-200/40 dark:border-white/5 relative z-10 text-zinc-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-zinc-800/80">
          
          {/* Left: Branding & Tagline */}
          <div className="flex flex-col items-center md:items-start space-y-1.5 text-center md:text-left">
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-gradient-to-tr from-cyan-500 to-indigo-600 text-white font-mono font-bold text-xs">
                ST
              </div>
              <span className="text-base font-bold text-white tracking-tight">
                {personalInfo.name}
              </span>
            </div>
            <p className="text-xs text-zinc-500 font-mono">
              Designed and built with curiosity.
            </p>
          </div>

          {/* Center: Social Links */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors"
              title="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalInfo.socials.email}`}
              className="px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-400 hover:text-cyan-400 hover:border-cyan-500/30 transition-colors"
            >
              contact@shree
            </a>
          </div>

          {/* Right: Back to top button */}
          <div>
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-400 hover:text-white hover:border-cyan-500/40 transition-colors"
              title="Scroll to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* Bottom copyright notice */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-600 font-mono text-center sm:text-left">
          <p>© {currentYear} Shree Takalkar. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            <span>Built with React, TypeScript & Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
