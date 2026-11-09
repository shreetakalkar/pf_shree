export interface SkillItem {
  name: string;
  isPrimary?: boolean;
  category: string;
  highlight?: string;
}

export const skillCategories = [
  {
    category: "Programming Languages",
    subtitle: "Core algorithmic and systems languages",
    icon: "Code",
    skills: [
      { name: "Java", isPrimary: true, highlight: "Primary Language / OOP & DSA", icon: "Coffee" },
      { name: "Python", highlight: "Automation & Script Optimization", icon: "Code2" },
      { name: "JavaScript", highlight: "Modern ES6+ / Asynchronous", icon: "FileCode" },
      { name: "SQL", highlight: "Relational Queries & Optimization", icon: "Database" },
      { name: "C", highlight: "Systems Programming & Memory", icon: "Cpu" },
      { name: "HTML5", highlight: "Semantic & Accessible", icon: "Layout" },
      { name: "CSS3", highlight: "Modern Responsive Design", icon: "Palette" }
    ]
  },
  {
    category: "Frameworks & Libraries",
    subtitle: "Full-stack web & backend application runtimes",
    icon: "Layers",
    skills: [
      { name: "React.js", highlight: "Component Architecture & Hooks", icon: "Atom" },
      { name: "Node.js", highlight: "Event-Loop & Scalable I/O", icon: "Server" },
      { name: "Express.js", highlight: "Middleware & Microservices", icon: "Zap" },
      { name: "Next.js", highlight: "Server-side Rendering & Routing", icon: "Globe" },
      { name: "Mongoose", highlight: "ODM & Schema Modeling", icon: "Boxes" },
      { name: "REST APIs", highlight: "Stateless Resource Design", icon: "Network" }
    ]
  },
  {
    category: "Databases & Storage",
    subtitle: "Relational, document, and real-time cloud datastores",
    icon: "Database",
    skills: [
      { name: "MongoDB", highlight: "NoSQL Document Store & Aggregations", icon: "Database" },
      { name: "MySQL", highlight: "Relational Schema & ACID Compliance", icon: "Table" },
      { name: "Cloud Firestore", highlight: "Real-time NoSQL & Event Streams", icon: "Cloud" }
    ]
  },
  {
    category: "Tools & Cloud Infrastructure",
    subtitle: "DevOps, message brokers, caching, and cloud providers",
    icon: "Terminal",
    skills: [
      { name: "Redis", highlight: "In-memory Caching & Pub/Sub", icon: "Flame" },
      { name: "RabbitMQ", highlight: "Message Queues & Event Broker", icon: "Radio" },
      { name: "AWS S3", highlight: "Object Storage & Pre-signed URLs", icon: "CloudRain" },
      { name: "Git", highlight: "Distributed Version Control", icon: "GitBranch" },
      { name: "Firebase Auth", highlight: "Identity & Token Verification", icon: "ShieldCheck" },
      { name: "VS Code", highlight: "Environment & Debugging", icon: "Code2" },
      { name: "Vercel", highlight: "Edge Deployment & CI/CD", icon: "UploadCloud" },
      { name: "Render", highlight: "Container & Web Service Hosting", icon: "Server" }
    ]
  },
  {
    category: "System Design & Architecture",
    subtitle: "Architectural blueprints for scalable, distributed backends",
    icon: "Workflow",
    skills: [
      { name: "API Design", highlight: "RESTful, Idempotency, Versioning", icon: "Share2" },
      { name: "Caching Strategies", highlight: "Write-through, Cache-aside, TTLs", icon: "Zap" },
      { name: "Event-Driven Architecture", highlight: "Pub/Sub, Decoupled Services", icon: "Activity" },
      { name: "Message Queues", highlight: "Asynchronous Task Processing", icon: "ListFilter" },
      { name: "Scalability & Load Balancing", highlight: "Horizontal Scaling, Stateless APIs", icon: "TrendingUp" },
      { name: "Database Indexing", highlight: "B-Trees, Composite Indexes, Query Plans", icon: "Sliders" }
    ]
  }
];

