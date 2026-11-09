import React, { useState } from 'react';
import { 
  Database, 
  Cloud, 
  Radio, 
  Cpu, 
  ShieldCheck, 
  Zap, 
  CheckCircle2, 
  Activity,
  HardDrive
} from 'lucide-react';

export const SystemArchitecture: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(1);
  const [activeTab, setActiveTab] = useState<'upload' | 'cache' | 'webhooks'>('upload');

  const uploadSteps = [
    {
      step: 1,
      title: "Pre-Signed URL Generation",
      component: "Express API & S3 SDK",
      desc: "Client requests an upload session. Backend authenticates JWT, calculates chunk boundaries, and signs an ephemeral cryptographic AWS S3 pre-signed URL with 15-minute TTL.",
      impact: "Bypasses server bottleneck; client talks directly to object store."
    },
    {
      step: 2,
      title: "Direct Multipart Streaming",
      component: "Client Browser ──► AWS S3",
      desc: "Client uploads chunks concurrently directly into AWS S3 buckets. Failed parts can be resumed without re-uploading completed parts.",
      impact: "Zero server memory usage for large multi-GB transfers."
    },
    {
      step: 3,
      title: "Event Publishing & Queueing",
      component: "RabbitMQ Message Broker",
      desc: "Upon multipart assembly completion, API dispatches an asynchronous `FILE_UPLOADED` event payload into RabbitMQ exchange with persistent queue durability.",
      impact: "Guarantees at-least-once delivery; decouples I/O from ingestion."
    },
    {
      step: 4,
      title: "Worker Daemon Processing",
      component: "Distributed Worker Pool",
      desc: "Horizontal consumer workers dequeue messages, stream S3 object bytes, compute SHA-256 for deduplication, and extract file metadata.",
      impact: "Horizontal auto-scaling independent of web traffic."
    },
    {
      step: 5,
      title: "Atomic State & Real-Time Sync",
      component: "PostgreSQL, Redis & WebSockets",
      desc: "Worker commits file record inside a PostgreSQL ACID transaction, updates Redis tree hierarchy, and triggers real-time WebSocket push to user UI.",
      impact: "Sub-5ms cached folder lookups and immediate UI feedback."
    }
  ];

  return (
    <section id="architecture" className="py-24 relative overflow-hidden bg-zinc-950/60 border-t border-zinc-200/60 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-medium mb-3">
            <span>04 // SYSTEM DESIGN & ARCHITECTURE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
            Architecting for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">
              scale, resilience & low latency
            </span>
          </h2>
          <p className="mt-3 text-zinc-600 dark:text-zinc-400 max-w-2xl text-base sm:text-lg">
            A deep dive into distributed systems patterns implemented across Droply and production microservices.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2 border-b border-zinc-200 dark:border-white/10">
          <button
            onClick={() => setActiveTab('upload')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-mono font-semibold transition-all ${
              activeTab === 'upload'
                ? 'bg-cyan-500 text-white shadow-md shadow-cyan-500/25'
                : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-white/5'
            }`}
          >
            01. Distributed File Ingestion Pipeline
          </button>
          <button
            onClick={() => setActiveTab('cache')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-mono font-semibold transition-all ${
              activeTab === 'cache'
                ? 'bg-cyan-500 text-white shadow-md shadow-cyan-500/25'
                : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-white/5'
            }`}
          >
            02. Multi-Tier Caching Architecture
          </button>
          <button
            onClick={() => setActiveTab('webhooks')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-mono font-semibold transition-all ${
              activeTab === 'webhooks'
                ? 'bg-cyan-500 text-white shadow-md shadow-cyan-500/25'
                : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-white/5'
            }`}
          >
            03. Idempotent Webhook Synchronization
          </button>
        </div>

        {/* Tab 1: Distributed File Ingestion Visualizer */}
        {activeTab === 'upload' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left: Interactive Diagram Canvas */}
            <div className="lg:col-span-7 glass-panel rounded-2xl p-6 sm:p-8 border border-zinc-200 dark:border-white/10">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-zinc-200 dark:border-white/5">
                <div className="flex items-center gap-2 font-mono text-xs text-zinc-400">
                  <Activity className="w-4 h-4 text-cyan-400" />
                  <span>Interactive Pipeline Visualizer</span>
                </div>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Step {activeStep} of 5 Active
                </span>
              </div>

              {/* Node Graph Display */}
              <div className="space-y-4">
                {[
                  { id: 1, label: "Client Application", sub: "React / Browser", icon: HardDrive, color: "text-sky-400" },
                  { id: 2, label: "AWS S3 Object Store", sub: "Pre-Signed Multipart Chunks", icon: Cloud, color: "text-amber-400" },
                  { id: 3, label: "RabbitMQ Message Broker", sub: "Event-Driven Fanout Exchange", icon: Radio, color: "text-cyan-400" },
                  { id: 4, label: "Worker Consumer Pool", sub: "Deduplication & Hash Verification", icon: Cpu, color: "text-violet-400" },
                  { id: 5, label: "PostgreSQL & Redis Cache", sub: "Metadata ACID & Cache Invalidation", icon: Database, color: "text-emerald-400" },
                ].map((node) => {
                  const Icon = node.icon;
                  const isCurrent = activeStep === node.id;
                  const isPast = activeStep > node.id;

                  return (
                    <div
                      key={node.id}
                      onClick={() => setActiveStep(node.id)}
                      className={`cursor-pointer p-4 rounded-xl border transition-all duration-200 flex items-center justify-between ${
                        isCurrent
                          ? 'bg-cyan-950/30 border-cyan-500/60 shadow-lg shadow-cyan-950/30'
                          : isPast
                          ? 'bg-zinc-900/50 border-emerald-500/30'
                          : 'bg-zinc-900/20 border-zinc-800 hover:border-zinc-700'
                      }`}
                    >
                      <div className="flex items-center gap-3.5">
                        <div className={`p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 ${node.color}`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-mono text-zinc-500">Stage 0{node.id}</span>
                            <span className={`text-sm font-bold ${isCurrent ? 'text-white' : 'text-zinc-300'}`}>
                              {node.label}
                            </span>
                          </div>
                          <span className="text-xs text-zinc-400">{node.sub}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        {isPast && <CheckCircle2 className="w-4 h-4 text-emerald-400" />}
                        {isCurrent && (
                          <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping"></span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Step Navigation buttons */}
              <div className="mt-6 pt-5 border-t border-zinc-200 dark:border-white/5 flex items-center justify-between">
                <button
                  disabled={activeStep === 1}
                  onClick={() => setActiveStep(prev => Math.max(1, prev - 1))}
                  className="px-3 py-1.5 rounded-lg text-xs font-mono font-medium bg-zinc-800 text-zinc-300 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-zinc-700"
                >
                  ← Previous Step
                </button>
                <span className="text-xs font-mono text-zinc-500">Click any stage to inspect</span>
                <button
                  disabled={activeStep === 5}
                  onClick={() => setActiveStep(prev => Math.min(5, prev + 1))}
                  className="px-3 py-1.5 rounded-lg text-xs font-mono font-medium bg-cyan-600 text-white disabled:opacity-40 disabled:cursor-not-allowed hover:bg-cyan-500"
                >
                  Next Step →
                </button>
              </div>
            </div>

            {/* Right: Stage Deep-Dive Card */}
            <div className="lg:col-span-5 space-y-6">
              <div className="glass-panel rounded-2xl p-6 sm:p-7 border border-zinc-200 dark:border-white/10 space-y-5">
                <div className="flex items-center justify-between pb-3 border-b border-zinc-200 dark:border-white/5">
                  <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">
                    Stage {uploadSteps[activeStep - 1].step} Analysis
                  </span>
                  <span className="text-xs font-mono text-zinc-400">
                    {uploadSteps[activeStep - 1].component}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
                  {uploadSteps[activeStep - 1].title}
                </h3>

                <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                  {uploadSteps[activeStep - 1].desc}
                </p>

                <div className="p-4 rounded-xl bg-cyan-950/20 border border-cyan-800/30 space-y-1">
                  <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold block">
                    Engineering Impact:
                  </span>
                  <p className="text-xs text-cyan-200 font-medium">
                    {uploadSteps[activeStep - 1].impact}
                  </p>
                </div>

                <div className="pt-2 border-t border-zinc-200 dark:border-white/5 text-xs text-zinc-500 font-mono space-y-2">
                  <div className="flex justify-between">
                    <span>Protocol:</span>
                    <span className="text-zinc-300">HTTPS / AMQP 0-9-1</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Fault Handling:</span>
                    <span className="text-zinc-300">Exponential Backoff & Dead-Letter Queue (DLQ)</span>
                  </div>
                </div>
              </div>

              {/* Design principles quote box */}
              <div className="p-5 rounded-2xl bg-gradient-to-r from-zinc-900 to-zinc-950 border border-zinc-800 text-xs font-mono text-zinc-400 space-y-2">
                <div className="text-cyan-400 font-bold flex items-center gap-1.5">
                  <Zap className="w-4 h-4" />
                  <span>Key Scalability Metric</span>
                </div>
                <p className="text-zinc-300">
                  By pushing uploads directly to AWS S3 and handling post-processing via RabbitMQ message queues, the backend can sustain 10x spikes without degradation.
                </p>
              </div>
            </div>

          </div>
        )}

        {/* Tab 2: Caching Architecture */}
        {activeTab === 'cache' && (
          <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-zinc-200 dark:border-white/10 space-y-6">
            <h3 className="text-xl font-bold text-white">
              Multi-Tier Caching & Query Optimization (40% Latency Reduction)
            </h3>
            <p className="text-sm text-zinc-300 leading-relaxed max-w-3xl">
              As implemented during my Backend Internship at Bargenix AI, large catalog queries suffered from frequent database thrashing. By implementing a Cache-Aside pattern combined with compound indexing, read latency plummeted by 40%.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
              <div className="p-5 rounded-xl bg-zinc-900 border border-zinc-800 space-y-2.5">
                <div className="flex items-center gap-2 text-cyan-400 font-mono text-sm font-semibold">
                  <Zap className="w-4 h-4" />
                  <span>1. Cache-Aside Pattern</span>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Incoming GET requests hit Redis first. On cache-miss, data is queried from primary DB, stored in Redis with jittered TTL, and returned.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-zinc-900 border border-zinc-800 space-y-2.5">
                <div className="flex items-center gap-2 text-indigo-400 font-mono text-sm font-semibold">
                  <Database className="w-4 h-4" />
                  <span>2. Compound Indexing</span>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Engineered composite B-tree indexes on `(store_id, sku, status)` eliminating full-table scans and reducing query planning cost by 65%.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-zinc-900 border border-zinc-800 space-y-2.5">
                <div className="flex items-center gap-2 text-emerald-400 font-mono text-sm font-semibold">
                  <ShieldCheck className="w-4 h-4" />
                  <span>3. Cache Stampede Defense</span>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Implemented distributed mutex locking in Redis so only one concurrent worker refreshes stale keys while others await cached output.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Idempotent Webhooks */}
        {activeTab === 'webhooks' && (
          <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-zinc-200 dark:border-white/10 space-y-6">
            <h3 className="text-xl font-bold text-white">
              Resilient & Idempotent Webhook Processing
            </h3>
            <p className="text-sm text-zinc-300 leading-relaxed max-w-3xl">
              Webhooks from external platforms like Shopify can be delayed, retried, or delivered out-of-order. This architecture guarantees state integrity regardless of duplicate deliveries.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              <div className="p-5 rounded-xl bg-zinc-900 border border-zinc-800 space-y-3">
                <span className="text-cyan-400 font-mono text-xs font-semibold block">SECURITY & INTEGRITY</span>
                <h4 className="text-sm font-bold text-white">HMAC SHA-256 Signature Verification</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Raw request byte buffers are verified against the shared webhook secret before JSON deserialization to prevent tampering and forged requests.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-zinc-900 border border-zinc-800 space-y-3">
                <span className="text-emerald-400 font-mono text-xs font-semibold block">AT-MOST-ONCE SEMANTICS</span>
                <h4 className="text-sm font-bold text-white">Redis Deduplication Key with TTL</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Every webhook header `X-Shopify-Webhook-Id` is checked atomically via `SET NX` in Redis. Duplicate deliveries are acknowledged with HTTP 200 without duplicate execution.
                </p>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
