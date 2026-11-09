import { Experience } from '../types';

export const experiences: Experience[] = [
  {
    id: 'tsec-devs',
    role: 'Web Team Head',
    organization: 'TSEC Devs Club',
    period: 'April 2025 – Present',
    duration: 'Current Leadership Role',
    type: 'Leadership & Engineering',
    location: 'Mumbai, India',
    badge: 'Present',
    bullets: [
      'Leading a high-velocity team of 4 engineers using Agile sprint cycles to deliver web development and campus digital utilities.',
      'Spearheaded the complete redesign and development of the Devs Club official landing page using modern UI/UX design systems and responsive architecture.',
      'Architected and deployed automated timetable scheduling and student data-entry utilities featuring form-based interfaces that serialize validated JSON records directly into Cloud Firebase.',
      'Mentored junior student developers in modern JavaScript, React best practices, and collaborative Git workflows.'
    ],
    metrics: [
      'Led 4 Engineers',
      'Firebase Real-time Data',
      'Modern UI/UX Redesign'
    ],
    technologies: ['React.js', 'Firebase', 'JavaScript', 'Tailwind CSS', 'Git & Agile']
  },
  {
    id: 'bargenix-ai',
    role: 'Backend Development Intern',
    organization: 'Bargenix AI',
    period: 'March 2025 – July 2025',
    duration: '5 Months',
    type: 'Internship',
    location: 'Remote / Mumbai',
    bullets: [
      'Engineered backend microservices and integrated resilient Shopify webhooks with idempotency guarantees to support real-time inventory and catalog synchronization.',
      'Optimized database queries and implemented multi-tier caching strategies (Redis & memory), achieving a 40% reduction in API response times across enterprise product catalogs.',
      'Constructed robust product management REST workflows handling high-concurrency requests, validation schemas, and automated error logging.'
    ],
    metrics: [
      '40% Latency Reduction',
      'Real-time Webhook Sync',
      'Distributed Caching'
    ],
    technologies: ['Node.js', 'Express.js', 'Shopify API', 'Redis', 'Database Query Optimization', 'REST APIs']
  }
];

