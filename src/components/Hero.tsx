import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  FileText, 
  Github, 
  Linkedin, 
  Terminal as TerminalIcon, 
  Copy, 
  Check
} from 'lucide-react';
import { personalInfo } from '../data/personal';

export const Hero: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<'terminal' | 'system' | 'specs'>('terminal');
  const [copied, setCopied] = useState(false);

  // Cycle animated role text
  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % personalInfo.roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const copyNpxCommand = () => {
    navigator.clipboard.writeText('npx shreetakalkar');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-[95vh] flex items-center justify-center pt-28 pb-16 overflow-hidden"
    >
      {/* Background Decorative Mesh & Radial Gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[380px] bg-cyan-500/10 dark:bg-cyan-500/15 rounded-full blur-[130px] -z-10 animate-pulse-slow"></div>
        <div className="absolute top-1/3 left-1/3 w-[450px] h-[300px] bg-indigo-500/10 dark:bg-indigo-600/15 rounded-full blur-[140px] -z-10"></div>
        <div className="absolute bottom-10 right-1/4 w-[350px] h-[250px] bg-violet-600/10 rounded-full blur-[120px] -z-10"></div>
        <div className="absolute inset-0 bg-grid-overlay opacity-40"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col items-start text-left space-y-6"
          >
            {/* Availability / Building Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/60 dark:bg-zinc-800/60 border border-cyan-500/30 text-zinc-300 dark:text-zinc-200 text-xs font-medium backdrop-blur-md shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Currently building distributed architectures & AI solutions</span>
              <span className="text-zinc-500 dark:text-zinc-500">•</span>
              <span className="text-cyan-400 font-semibold">TSEC '27</span>
            </div>

            {/* Greeting */}
            <div className="space-y-2">
              <p className="text-sm sm:text-base font-mono font-medium text-cyan-600 dark:text-cyan-400 tracking-wide uppercase">
                {personalInfo.heroTagline}
              </p>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-white leading-[1.12]">
                Building scalable applications,{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-400">
                  intelligent systems
                </span>
                , and impactful digital experiences.
              </h1>
            </div>

            {/* Animated Role Text */}
            <div className="h-8 sm:h-9 flex items-center gap-2 text-lg sm:text-xl font-mono text-zinc-700 dark:text-zinc-300">
              <span className="text-zinc-400 dark:text-zinc-500">I specialize in:</span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={roleIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="font-bold text-cyan-500 dark:text-cyan-400 border-b-2 border-cyan-400/50 pb-0.5"
                >
                  {personalInfo.roles[roleIndex]}
                </motion.span>
              </AnimatePresence>
            </div>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-2xl">
              {personalInfo.heroSupportingText}
            </p>

            {/* CTAs and Links */}
            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4 w-full sm:w-auto">
              <a
                href="#projects"
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.resumeUrl}
                className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-medium text-sm text-zinc-800 dark:text-zinc-200 bg-zinc-100 dark:bg-zinc-800/80 hover:bg-zinc-200 dark:hover:bg-zinc-700/80 border border-zinc-200 dark:border-white/10 hover:-translate-y-0.5 transition-all duration-200"
              >
                <FileText className="w-4 h-4 text-cyan-500" />
                <span>Download Resume</span>
              </a>

              <div className="flex items-center gap-2 pl-1 sm:pl-2">
                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-zinc-100 dark:bg-zinc-900/80 text-zinc-700 dark:text-zinc-300 hover:text-cyan-500 dark:hover:text-cyan-400 border border-zinc-200 dark:border-white/10 hover:border-cyan-500/40 transition-colors shadow-sm"
                  title="GitHub: shreetakalkar"
                >
                  <Github className="w-5 h-5" />
                </a>

                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-zinc-100 dark:bg-zinc-900/80 text-zinc-700 dark:text-zinc-300 hover:text-cyan-500 dark:hover:text-cyan-400 border border-zinc-200 dark:border-white/10 hover:border-cyan-500/40 transition-colors shadow-sm"
                  title="LinkedIn Profile"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick NPX pill / micro command */}
            <div className="pt-2 flex items-center gap-3 text-xs text-zinc-500 dark:text-zinc-400 font-mono">
              <span className="text-zinc-400 dark:text-zinc-500">Quick connect:</span>
              <button
                onClick={copyNpxCommand}
                className="group flex items-center gap-2 px-3 py-1 rounded-md bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-800 dark:text-zinc-300 hover:border-cyan-500/40 transition-colors"
                title="Click to copy quick bio command"
              >
                <span className="text-cyan-500 font-semibold">$</span>
                <span>npx shreetakalkar</span>
                {copied ? (
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                ) : (
                  <Copy className="w-3.5 h-3.5 text-zinc-500 group-hover:text-cyan-400" />
                )}
              </button>
            </div>
          </motion.div>

          {/* Right Column: Visual Developer Terminal & Architecture Element */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-5 w-full"
          >
            <div className="relative rounded-2xl glass-panel shadow-2xl shadow-cyan-950/20 border border-zinc-200 dark:border-white/10 overflow-hidden">
              
              {/* Terminal Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-zinc-100 dark:bg-zinc-900/90 border-b border-zinc-200 dark:border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                  <span className="ml-2 text-xs font-mono text-zinc-500 dark:text-zinc-400 flex items-center gap-1.5">
                    <TerminalIcon className="w-3.5 h-3.5 text-cyan-400" />
                    shree@tsec-node-01: ~
                  </span>
                </div>

                {/* Tabs */}
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setActiveTab('terminal')}
                    className={`px-2.5 py-1 rounded text-[11px] font-mono transition-colors ${
                      activeTab === 'terminal'
                        ? 'bg-zinc-200 dark:bg-zinc-800 text-zinc-900 dark:text-cyan-300 font-semibold'
                        : 'text-zinc-500 hover:text-zinc-300'
                    }`}
                  >
                    server.ts
                  </button>
                  <button
                    onClick={() => setActiveTab('system')}
                    className={`px-2.5 py-1 rounded text-[11px] font-mono transition-colors ${
                      activeTab === 'system'
                        ? 'bg-zinc-200 dark:bg-zinc-800 text-zinc-900 dark:text-cyan-300 font-semibold'
                        : 'text-zinc-500 hover:text-zinc-300'
                    }`}
                  >
                    architecture
                  </button>
                  <button
                    onClick={() => setActiveTab('specs')}
                    className={`px-2.5 py-1 rounded text-[11px] font-mono transition-colors ${
                      activeTab === 'specs'
                        ? 'bg-zinc-200 dark:bg-zinc-800 text-zinc-900 dark:text-cyan-300 font-semibold'
                        : 'text-zinc-500 hover:text-zinc-300'
                    }`}
                  >
                    telemetry
                  </button>
                </div>
              </div>

              {/* Terminal Window Body */}
              <div className="p-5 font-mono text-xs sm:text-[13px] leading-relaxed bg-zinc-950 text-zinc-300 min-h-[340px] flex flex-col justify-between">
                {activeTab === 'terminal' && (
                  <div className="space-y-2">
                    <div className="text-zinc-500 flex items-center justify-between pb-1 border-b border-zinc-800/60">
                      <span>// Initializing Shree Takalkar Developer Environment</span>
                      <span className="text-[10px] text-emerald-400">STATUS: READY</span>
                    </div>

                    <p>
                      <span className="text-emerald-400">$</span>{' '}
                      <span className="text-zinc-100 font-semibold">sysctl --get-developer-profile</span>
                    </p>

                    <div className="pl-3 py-1 space-y-1 text-zinc-300 bg-zinc-900/60 rounded-lg border border-zinc-800/80 p-3">
                      <div><span className="text-cyan-400">name</span>: <span className="text-amber-300">"Shree Takalkar"</span></div>
                      <div><span className="text-cyan-400">role</span>: <span className="text-amber-300">"Full Stack & Backend Developer"</span></div>
                      <div><span className="text-cyan-400">education</span>: <span className="text-zinc-300">"TSEC (B.E. '27) & GP Thane (Diploma)"</span></div>
                      <div><span className="text-cyan-400">primaryLanguage</span>: <span className="text-indigo-400 font-bold">"Java"</span></div>
                      <div><span className="text-cyan-400">experience</span>: <span className="text-zinc-300">["Bargenix AI", "TSEC Devs", "Symphony Fintech"]</span></div>
                      <div><span className="text-cyan-400">passions</span>: <span className="text-zinc-300">["Distributed Storage", "AI Agents", "System Design"]</span></div>
                    </div>

                    <p className="pt-1">
                      <span className="text-emerald-400">$</span>{' '}
                      <span className="text-zinc-100 font-semibold">healthcheck --all-services</span>
                    </p>

                    <div className="grid grid-cols-2 gap-2 pt-1 text-[11px]">
                      <div className="flex items-center gap-1.5 text-zinc-400 bg-zinc-900/80 p-2 rounded border border-zinc-800">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                        <span>PostgreSQL / Redis</span>
                        <span className="ml-auto text-emerald-400 text-[10px]">UP</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-zinc-400 bg-zinc-900/80 p-2 rounded border border-zinc-800">
                        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                        <span>RabbitMQ Broker</span>
                        <span className="ml-auto text-cyan-400 text-[10px]">ACTIVE</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-zinc-400 bg-zinc-900/80 p-2 rounded border border-zinc-800">
                        <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></span>
                        <span>Gemini & AI Pipeline</span>
                        <span className="ml-auto text-indigo-400 text-[10px]">SYNCED</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-zinc-400 bg-zinc-900/80 p-2 rounded border border-zinc-800">
                        <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
                        <span>AWS S3 Pre-sign API</span>
                        <span className="ml-auto text-amber-400 text-[10px]">READY</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'system' && (
                  <div className="space-y-3">
                    <div className="text-zinc-500 pb-1 border-b border-zinc-800/60 flex items-center justify-between">
                      <span>// Distributed Architecture Snapshot</span>
                      <span className="text-[10px] text-cyan-400">Droply Storage Engine</span>
                    </div>

                    <div className="p-3 bg-zinc-900/80 rounded-lg border border-zinc-800 space-y-2 text-[11px]">
                      <div className="flex items-center justify-between text-zinc-400">
                        <span className="text-cyan-400 font-semibold">[Client Multipart]</span>
                        <span>──(Direct Pre-signed URL)──►</span>
                        <span className="text-amber-400 font-semibold">[AWS S3]</span>
                      </div>
                      <div className="text-center text-zinc-600">│</div>
                      <div className="flex items-center justify-between text-zinc-400">
                        <span className="text-indigo-400 font-semibold">[Express Gateway]</span>
                        <span>──(Event Published)──►</span>
                        <span className="text-emerald-400 font-semibold">[RabbitMQ Queue]</span>
                      </div>
                      <div className="text-center text-zinc-600">│</div>
                      <div className="flex items-center justify-between text-zinc-400">
                        <span className="text-violet-400 font-semibold">[Worker Daemon]</span>
                        <span>──(Checksum & Deduplication)──►</span>
                        <span className="text-sky-400 font-semibold">[PostgreSQL & Redis]</span>
                      </div>
                    </div>

                    <div className="p-2.5 rounded bg-cyan-950/30 border border-cyan-800/40 text-[11px] text-cyan-200">
                      ⚡ Eliminates 85% bandwidth load on API servers via direct presigned chunked transfers.
                    </div>
                  </div>
                )}

                {activeTab === 'specs' && (
                  <div className="space-y-3">
                    <div className="text-zinc-500 pb-1 border-b border-zinc-800/60">
                      <span>// Performance & Engineering Telemetry</span>
                    </div>

                    <div className="space-y-2.5 text-xs">
                      <div className="flex items-center justify-between">
                        <span className="text-zinc-400">API Response Time (Catalog Optimization):</span>
                        <span className="text-emerald-400 font-bold">-40% at Bargenix AI</span>
                      </div>
                      <div className="w-full bg-zinc-800 rounded-full h-1.5 overflow-hidden">
                        <div className="bg-emerald-400 h-1.5 rounded-full w-3/5"></div>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-zinc-400">Primary Core Language:</span>
                        <span className="text-cyan-400 font-bold">Java (DSA & Algorithms)</span>
                      </div>
                      <div className="w-full bg-zinc-800 rounded-full h-1.5 overflow-hidden">
                        <div className="bg-cyan-400 h-1.5 rounded-full w-5/6"></div>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-zinc-400">Hackathon Placements:</span>
                        <span className="text-amber-400 font-bold">Winner & Finalist (5x Events)</span>
                      </div>
                      <div className="w-full bg-zinc-800 rounded-full h-1.5 overflow-hidden">
                        <div className="bg-amber-400 h-1.5 rounded-full w-4/5"></div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Footer of terminal prompt */}
                <div className="pt-3 border-t border-zinc-900 flex items-center justify-between text-[11px] text-zinc-500">
                  <div className="flex items-center gap-1.5">
                    <span className="inline-block w-2 h-3.5 bg-cyan-400 animate-pulse"></span>
                    <span>Ready for recruiter inspection</span>
                  </div>
                  <span className="text-zinc-600">UTF-8 • Node v20</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
