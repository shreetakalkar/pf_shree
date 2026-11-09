# Shree Takalkar — Senior Developer & System Design Portfolio

A modern, responsive portfolio website built with **React 18**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**, inspired by the design language of Linear, Vercel, and Stripe.

Designed specifically for recruiters, hiring managers, and engineering interviewers at top tech companies.

---

## 🌟 Key Highlights & Architecture

- **Dark & Light Mode**: Default deep charcoal/near-black theme (`#08090C`) with a sleek light mode toggle and `localStorage` persistence.
- **Hero Section**: 
  - Dynamic cycling text for specialized roles (*Full Stack Developer*, *Backend Engineer*, *AI Enthusiast*, *System Design Explorer*).
  - Interactive Developer Terminal & Telemetry simulator (`server.ts`, `architecture`, `telemetry`).
  - Quick `$ npx shreetakalkar` copy snippet and availability indicators.
- **About Me**:
  - Educational background at **Thadomal Shahani Engineering College (TSEC), Mumbai** (B.E. Computer Engineering, Expected 2027).
  - Core areas of technical exploration with custom icons and development philosophy.
- **Work Experience**:
  - **Bargenix AI** (Backend Development Intern): Shopify webhook synchronization, 40% API response time reduction via multi-tier caching and query optimization.
  - **TSEC Devs Club** (Web Team Head): Agile team leadership of 4 engineers, modern UI/UX redesign, automated Firebase utilities.
- **Featured Projects & Modals**:
  - **HireZaa**: AI-powered recruitment platform (Gemini API, Deepgram STT, Judge0 code execution, anti-cheat detection).
  - **Droply**: Distributed cloud file storage system (chunked multipart uploads via AWS S3 pre-signed URLs, RabbitMQ message queues, background worker deduplication, Redis cache).
  - **Prodify**: Enterprise product & inventory management dashboard (Shopify sync, REST APIs, JWT authentication).
  - Interactive **"View Details"** modal with architectural decisions and engineering breakdowns.
- **System Design & Distributed Systems Showcase**:
  - Interactive 5-stage pipeline visualizer illustrating client multipart S3 streaming, RabbitMQ message broker offloading, and atomic PostgreSQL + Redis state synchronization.
  - Cache-Aside patterns and HMAC webhook idempotency architecture.
- **Technical Skills**:
  - **Java highlighted as primary core language** with OOP & DSA specialization.
  - Categorized grids for Languages, Frameworks, Databases, Tools & Cloud, and System Design with category filter tabs.
- **Achievements & Hackathons**:
  - Runner-up: Rubrix Hackathon (48h, CSI TSEC).
  - Finalist: Need for Code 3.0 (24h, CodeTantra TSEC 2025).
  - Finalist: HackSync (24h, GDG TSEC).
  - Winner: State-Level Project Competition at Government Polytechnic, Thane.
  - Participant: IndiaSkills Competition 2024.
- **Coding Profiles & Activity**:
  - GitHub card (`https://github.com/shreetakalkar`) with commit cadence heatmap.
  - LeetCode problem-solving card highlighting Java algorithmic rigor and time/space complexity analysis.
- **Contact Section & Footer**:
  - Interactive validated message form with real-time feedback.
  - One-click copy email button for `shreetakalkar2005@gmail.com`.
  - Dynamic copyright year and smooth "Back to Top" navigation.

---

## 🛠️ Tech Stack

- **Framework**: React 18
- **Language**: TypeScript
- **Bundler**: Vite 6
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React

---

## 🚀 Running the Project Locally

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start the development server**:
   ```bash
   npm run dev
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```

4. **Preview production build**:
   ```bash
   npm run preview
   ```

---

## 📂 Project Directory Structure

```
portfolio/
├── dist/                      # Production build assets
├── public/                    # Static assets
├── src/
│   ├── components/            # Reusable UI components
│   │   ├── Navbar.tsx         # Glassmorphism header, theme toggle, mobile drawer
│   │   ├── Hero.tsx           # Terminal preview, animated roles, CTAs
│   │   ├── About.tsx          # Bio, philosophy, education card, interests
│   │   ├── Experience.tsx     # Timeline cards, metrics badges (Bargenix, TSEC Devs)
│   │   ├── FeaturedProjects.tsx # Project grid with visual previews
│   │   ├── ProjectModal.tsx   # Deep architectural breakdown modal
│   │   ├── SystemArchitecture.tsx # Interactive distributed systems visualizer
│   │   ├── Skills.tsx         # Categorized skills & Java primary spotlight
│   │   ├── Achievements.tsx   # Hackathon badges and awards
│   │   ├── CodingProfiles.tsx # GitHub activity & LeetCode DSA profile
│   │   ├── Contact.tsx        # Interactive contact form & email copy
│   │   └── Footer.tsx         # Dynamic year, back-to-top, links
│   ├── context/
│   │   └── ThemeContext.tsx   # Dark/light theme provider & state
│   ├── data/
│   │   ├── personal.ts        # Shree's personal info, bio, and social links
│   │   ├── experience.ts      # Work experiences and achievements
│   │   ├── projects.ts        # Projects data, features, and architectures
│   │   ├── skills.ts          # Categorized technical toolbelt
│   │   └── achievements.ts    # Awards and hackathon placements
│   ├── types/
│   │   └── index.ts           # TypeScript interfaces
│   ├── utils/
│   │   └── cn.ts              # ClassName merge utility
│   ├── App.tsx                # Main application layout
│   ├── index.css              # Custom styles, glassmorphism, scrollbar
│   └── main.tsx               # Application entry point
├── index.html                 # HTML template with SEO metadata
├── tailwind.config.js         # Tailwind customization
├── tsconfig.json              # TypeScript compiler configuration
└── package.json               # Dependencies and scripts
```

