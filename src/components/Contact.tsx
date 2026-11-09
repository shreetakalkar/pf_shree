import React, { useState } from 'react';
import { 
  Send, 
  Linkedin, 
  Github, 
  Copy, 
  Check, 
  MessageSquare, 
  Sparkles, 
  AlertCircle,
  CheckCircle2
} from 'lucide-react';
import { personalInfo } from '../data/personal';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Please provide your name.';
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email address.';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Please provide a subject.';
    if (!formData.message.trim()) {
      newErrors.message = 'Please provide a message.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate high-reliability asynchronous sending
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitSuccess(false), 6000);
    }, 1200);
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(personalInfo.socials.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-zinc-950/40 dark:bg-zinc-950/60 border-t border-zinc-200/60 dark:border-white/5">
      {/* Background glow */}
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-medium mb-3">
            <span>08 // GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
            Have an interesting project{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">
              or opportunity?
            </span>
          </h2>
          <p className="mt-3 text-zinc-600 dark:text-zinc-400 max-w-2xl text-base sm:text-lg">
            I'm always interested in connecting with developers, exploring new ideas, and building impactful products.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact & Social Links */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-zinc-200 dark:border-white/10 space-y-6">
              <h3 className="text-lg font-bold text-zinc-900 dark:text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-cyan-400" />
                <span>Let's collaborate</span>
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                Whether you have an opening for a Full Stack or Backend role, want to collaborate on a distributed systems project, or simply want to talk tech, feel free to reach out.
              </p>

              {/* Direct Email Card with One-Click Copy */}
              <div className="p-4 rounded-xl bg-zinc-100 dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 space-y-2">
                <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
                  <span>Direct Email Address</span>
                  <button
                    onClick={copyEmailToClipboard}
                    className="flex items-center gap-1 text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>

                <a
                  href={`mailto:${personalInfo.socials.email}`}
                  className="text-sm sm:text-base font-mono font-semibold text-zinc-900 dark:text-white hover:text-cyan-400 transition-colors block truncate"
                >
                  {personalInfo.socials.email}
                </a>
              </div>

              {/* Social Channels */}
              <div className="space-y-3 pt-2">
                <span className="text-xs font-mono uppercase text-zinc-500 block">
                  Connect on professional networks:
                </span>
                
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={personalInfo.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-cyan-500/40 text-zinc-800 dark:text-zinc-200 transition-colors group"
                  >
                    <Github className="w-5 h-5 text-zinc-400 group-hover:text-white" />
                    <div>
                      <span className="text-xs font-bold block">GitHub</span>
                      <span className="text-[10px] text-zinc-500 font-mono">@shreetakalkar</span>
                    </div>
                  </a>

                  <a
                    href={personalInfo.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-cyan-500/40 text-zinc-800 dark:text-zinc-200 transition-colors group"
                  >
                    <Linkedin className="w-5 h-5 text-sky-400 group-hover:text-sky-300" />
                    <div>
                      <span className="text-xs font-bold block">LinkedIn</span>
                      <span className="text-[10px] text-zinc-500 font-mono">Shree Takalkar</span>
                    </div>
                  </a>
                </div>
              </div>

              {/* Location & Timezone info */}
              <div className="pt-4 border-t border-zinc-200 dark:border-white/5 text-xs font-mono text-zinc-500 flex items-center justify-between">
                <span>Location: Mumbai, India (IST / UTC+5:30)</span>
                <span className="text-emerald-400 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  Online
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-zinc-200 dark:border-white/10 shadow-lg shadow-black/10">
              
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-6 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-cyan-400" />
                <span>Send a direct message</span>
              </h3>

              {submitSuccess && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm flex items-center gap-3 animate-in fade-in duration-300">
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  <span>
                    Thank you! Your message has been received. I'll get back to you shortly.
                  </span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Input */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-zinc-500 dark:text-zinc-400 block">
                      Your Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Alex Morgan"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full px-4 py-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-900 border text-sm text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-600 focus:outline-none transition-colors ${
                        errors.name
                          ? 'border-rose-500/60 focus:border-rose-500'
                          : 'border-zinc-200 dark:border-zinc-800 focus:border-cyan-500'
                      }`}
                    />
                    {errors.name && (
                      <p className="text-[11px] text-rose-500 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  {/* Email Input */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-zinc-500 dark:text-zinc-400 block">
                      Email Address <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-4 py-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-900 border text-sm text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-600 focus:outline-none transition-colors ${
                        errors.email
                          ? 'border-rose-500/60 focus:border-rose-500'
                          : 'border-zinc-200 dark:border-zinc-800 focus:border-cyan-500'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-[11px] text-rose-500 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject Input */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-zinc-500 dark:text-zinc-400 block">
                    Subject <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Full Stack Developer Opportunity / Project Inquiry"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className={`w-full px-4 py-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-900 border text-sm text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-600 focus:outline-none transition-colors ${
                      errors.subject
                        ? 'border-rose-500/60 focus:border-rose-500'
                        : 'border-zinc-200 dark:border-zinc-800 focus:border-cyan-500'
                    }`}
                  />
                  {errors.subject && (
                    <p className="text-[11px] text-rose-500 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.subject}</span>
                    </p>
                  )}
                </div>

                {/* Message Input */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-zinc-500 dark:text-zinc-400 block">
                    Message <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Tell me about your team, problem, or project idea..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl bg-zinc-100 dark:bg-zinc-900 border text-sm text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-600 focus:outline-none transition-colors resize-none ${
                      errors.message
                        ? 'border-rose-500/60 focus:border-rose-500'
                        : 'border-zinc-200 dark:border-zinc-800 focus:border-cyan-500'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-[11px] text-rose-500 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-7 py-3 rounded-xl font-semibold text-sm bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/30 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Sending message...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
