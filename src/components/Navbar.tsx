import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon, Menu, X, FileText, Github, Linkedin } from 'lucide-react';
import { personalInfo } from '../data/personal';

export const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section spy
      const sections = ['about', 'experience', 'projects', 'architecture', 'skills', 'achievements', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'System Design', href: '#architecture' },
    { name: 'Skills', href: '#skills' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-nav shadow-lg shadow-black/5 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="group flex items-center gap-2.5 text-lg font-bold tracking-tight text-white dark:text-white"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 text-white font-mono font-black shadow-md shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-all duration-300">
              <span className="text-sm tracking-tighter">ST</span>
              <span className="absolute -bottom-1 -right-1 w-2.5 h-2.5 bg-emerald-400 border-2 border-dark-bg rounded-full animate-pulse"></span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold tracking-wide text-zinc-900 dark:text-zinc-100 group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors">
                Shree Takalkar
              </span>
              <span className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400">
                Full Stack & Backend
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 px-3 py-1.5 rounded-full bg-zinc-900/40 dark:bg-zinc-900/60 backdrop-blur-md border border-white/5 dark:border-white/10 shadow-inner">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-full text-xs lg:text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-cyan-400 bg-white/10 font-semibold shadow-sm'
                      : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Actions: Socials, Theme Toggle, Resume */}
          <div className="hidden md:flex items-center gap-2.5">
            {/* Social shortcuts */}
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/10 transition-colors"
              title="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/10 transition-colors"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-2 rounded-lg text-zinc-400 hover:text-amber-400 dark:hover:text-cyan-400 hover:bg-white/5 border border-zinc-200 dark:border-white/10 transition-colors"
              title={theme === 'dark' ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-300" />
              ) : (
                <Moon className="w-4 h-4 text-zinc-700" />
              )}
            </button>

            {/* Resume Button */}
            <a
              href={personalInfo.resumeUrl}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-400 hover:to-blue-500 shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/30 transition-all duration-200"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-2 rounded-lg text-zinc-400 hover:text-zinc-100 bg-white/5 border border-white/10"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-300" />
              ) : (
                <Moon className="w-4 h-4 text-zinc-700" />
              )}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Open mobile menu"
              className="p-2 rounded-lg text-zinc-400 hover:text-white bg-white/5 border border-white/10 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel border-b border-white/10 px-4 pt-3 pb-6 space-y-3 mt-2 shadow-2xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-sm font-medium text-zinc-300 hover:text-white hover:bg-white/5 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-zinc-400 hover:text-white bg-white/5"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-zinc-400 hover:text-white bg-white/5"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>

            <a
              href={personalInfo.resumeUrl}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold bg-cyan-500 text-white hover:bg-cyan-400 shadow-sm"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume PDF</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
