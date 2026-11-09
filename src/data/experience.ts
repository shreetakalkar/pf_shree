import { Experience } from '../types';

export const experiences: Experience[] = [
  {
    id: 'tsec-devs',
    role: 'Web Team Head',
    organization: 'TSEC Devs Club',
    period: 'April 2025 – April 2026',
    duration: '1 Year',
    type: 'Leadership & Engineering',
    location: 'Mumbai, India',
    bullets: [
      'Delivered impactful web development projects using Agile sprint cycles for campus and student digital utilities.',
      'Spearheaded the complete redesign and development of the Devs Club official landing page using modern UI/UX design systems and responsive architecture.',
      'Architected and deployed automated timetable scheduling and student data-entry utilities featuring form-based interfaces that serialize validated JSON records directly into Cloud Firebase.',
      'Mentored student developers in modern JavaScript, React best practices, and collaborative Git workflows.'
    ],
    metrics: [
      'Agile Sprint Cycles',
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
      'Developed backend functionality and integrated Shopify webhooks to enable real-time inventory synchronization.',
      'Optimized database queries and implemented caching strategies, reducing API response time by 40% for large product catalogs.',
      'Worked on scalable backend services and product management workflows.'
    ],
    metrics: [
      '40% Latency Reduction',
      'Real-time Webhook Sync',
      'Distributed Caching'
    ],
    technologies: ['Node.js', 'Express.js', 'Shopify API', 'Redis', 'Database Query Optimization', 'REST APIs']
  },
  {
    id: 'symphony-fintech',
    role: 'Development Intern',
    organization: 'Symphony Fintech Solutions Pvt Ltd',
    period: 'June 2023 – July 2023',
    duration: '2 Months',
    type: 'Internship',
    location: 'Mumbai, Maharashtra',
    bullets: [
      'Developed Python utilities to automate manual tasks, enhancing team efficiency.',
      'Collaborated with the development team to design and implement optimized scripts.',
      'Integrated logging and error-handling mechanisms into Python utilities to ensure robust and maintainable code.',
      'Conducted performance testing and optimized scripts to reduce execution time.'
    ],
    metrics: [
      'Task Automation',
      'Execution Time Optimization',
      'Robust Logging & Error Handling'
    ],
    technologies: ['Python', 'Automation', 'Performance Optimization', 'Logging', 'Scripting']
  }
];
