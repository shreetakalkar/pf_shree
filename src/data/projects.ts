import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'hirezaa',
    title: 'HireZaa',
    tagline: 'AI-Powered Recruitment Platform & Assessment Engine',
    category: 'AI & Web',
    description: 'An intelligent end-to-end recruitment platform that automates resume screening, candidate shortlisting, online coding assessments, and AI-powered interviews with voice transcription and anti-cheating mechanisms.',
    techStack: ['JavaScript', 'Firebase', 'Gemini API', 'Deepgram', 'Judge0', 'WebSockets'],
    accentColor: '#06b6d4', // Cyan
    featured: true,
    systemDiagramType: 'ai-pipeline',
    features: [
      'Automated resume parsing and contextual skill extraction using Google Gemini API.',
      'AI-assisted candidate shortlisting based on job profile alignment score.',
      'Secure, timed online assessment engine with randomized question sets.',
      'Live code execution playground supporting multi-language compilation powered by Judge0 API.',
      'Advanced anti-cheating safeguards including visibility/tab-switch detection, copy-paste blocking, and full-screen enforcement.',
      'Comprehensive candidate performance reports synthesized automatically by Gemini.',
      'Real-time speech-to-text transcription for voice interviews utilizing Deepgram API.'
    ],
    architectureHighlights: [
      'Asynchronous evaluation pipeline decoupling submission intake from LLM inference',
      'Judge0 sandbox isolation for safe code execution',
      'Real-time state synchronization via Firebase Firestore and Cloud Functions'
    ],
    githubUrl: 'https://github.com/shreetakalkar',
    liveUrl: 'https://hirezaa-demo.vercel.app'
  },
  {
    id: 'droply',
    title: 'Droply',
    tagline: 'Distributed Cloud File Storage System & Processing Engine',
    category: 'Distributed Systems',
    description: 'A scalable, fault-tolerant distributed cloud storage backend built for chunked uploads, background processing, hash-based deduplication, and high-concurrency object management.',
    techStack: ['Node.js', 'Express.js', 'PostgreSQL', 'Redis', 'AWS S3', 'RabbitMQ', 'WebSockets'],
    accentColor: '#6366f1', // Indigo / Violet
    featured: true,
    systemDiagramType: 'distributed-storage',
    features: [
      'Chunked and resumable multipart file uploads handling multi-gigabyte files without server memory exhaustion.',
      'Direct client-to-S3 transfers utilizing cryptographically secure Pre-Signed URLs to bypass application server bandwidth bottlenecks.',
      'Event-driven message bus using RabbitMQ for offloading heavy post-processing tasks.',
      'Dedicated background worker pool for checksum verification, deduplication, and thumbnail generation.',
      'Granular file versioning and rollbacks stored with immutable S3 object keys and relational metadata.',
      'Tokenized secure download links with time-to-live (TTL) and permission checks.',
      'High-throughput Redis cache for user file tree navigation and folder indexing.',
      'User storage quota enforcement using atomic PostgreSQL transactions.',
      'Live upload progress and worker status notifications delivered over WebSockets.'
    ],
    architectureHighlights: [
      'Decoupled upload architecture: Presigned S3 URLs reduce server load by 85%',
      'RabbitMQ consumer queues enable horizontal scaling of background processors',
      'Redis distributed cache reduces metadata query latency to sub-5ms'
    ],
    githubUrl: 'https://github.com/shreetakalkar',
    liveUrl: 'https://droply-storage.vercel.app'
  },
  {
    id: 'prodify',
    title: 'Prodify',
    tagline: 'Enterprise Product & Inventory Management Dashboard',
    category: 'Full Stack',
    description: 'A centralized product management dashboard that interfaces seamlessly with Shopify stores to automate catalog updates, synchronize inventory across channels, and streamline administrative workflows.',
    techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Shopify API', 'JWT', 'Tailwind CSS'],
    accentColor: '#10b981', // Emerald
    featured: true,
    systemDiagramType: 'ecom-sync',
    features: [
      'Responsive React administrative dashboard equipped with custom data tables, multi-column filtering, and search.',
      'RESTful backend architecture providing high-speed CRUD operations with robust schema validation.',
      'Bidirectional Shopify API product catalog synchronization with automatic conflict resolution.',
      'Real-time inventory level alerts and webhook listeners triggered on stock adjustments.',
      'Role-based access control (RBAC) backed by secure JWT tokens and encrypted HTTP-only cookies.',
      'Bulk product editing and CSV data export capabilities for operational efficiency.'
    ],
    architectureHighlights: [
      'Shopify Webhook ingestion pipeline with HMAC signature verification and deduplication',
      'Optimized MongoDB indexes on SKU and category fields for instantaneous queries',
      'Stateless JWT session model supporting horizontal API scaling'
    ],
    githubUrl: 'https://github.com/shreetakalkar',
    liveUrl: 'https://prodify-dashboard.vercel.app'
  }
];

