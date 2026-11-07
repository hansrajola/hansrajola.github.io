/**
 * Personal Website Data Store
 * Easily customize your details, projects, skills, and experience here!
 */

const profileData = {
  name: "Alex Morgan",
  title: "Full-Stack Engineer & Designer",
  bio: "I craft elegant, high-performance web applications and intuitive digital experiences. Focused on modern web technologies, clean code architecture, and delightful UI interactions.",
  location: "San Francisco, CA (or Remote)",
  status: "Available for new opportunities",
  email: "alex.morgan@example.com",
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://x.com",
    resume: "#"
  },
  stats: [
    { label: "Years Experience", value: "4+" },
    { label: "Projects Completed", value: "25+" },
    { label: "Happy Clients / Teams", value: "15+" },
    { label: "Open Source Stars", value: "1.2k" }
  ]
};

const projectCategories = ["All", "Web Apps", "Mobile & UI", "Open Source"];

const projectsData = [
  {
    id: 1,
    title: "OmniFlow AI Workspace",
    category: "Web Apps",
    description: "An AI-powered productivity assistant combining markdown note-taking, semantic search, and automated task scheduling with vector databases.",
    imageGradient: "from-blue-600 via-indigo-600 to-purple-600",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "OpenAI", "PostgreSQL"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true
  },
  {
    id: 2,
    title: "FinPulse Analytics Dashboard",
    category: "Web Apps",
    description: "Real-time personal finance and portfolio tracker with interactive chart visualizations, budget forecasts, and bank integration.",
    imageGradient: "from-emerald-500 via-teal-600 to-cyan-600",
    tags: ["React", "Chart.js", "Node.js", "Express", "MongoDB"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true
  },
  {
    id: 3,
    title: "Aura Mobile Design System",
    category: "Mobile & UI",
    description: "An accessible, responsive mobile UI component library built for rapid prototyping with dark mode and gesture animations.",
    imageGradient: "from-pink-500 via-rose-500 to-amber-500",
    tags: ["React Native", "Figma", "Tailwind", "Storybook"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true
  },
  {
    id: 4,
    title: "FastCache Engine",
    category: "Open Source",
    description: "Lightweight, in-memory LRU caching utility with microsecond response times and zero external runtime dependencies.",
    imageGradient: "from-amber-500 via-orange-500 to-red-500",
    tags: ["Go", "Distributed Systems", "Redis Protocol"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: false
  },
  {
    id: 5,
    title: "DevDocs Hub",
    category: "Open Source",
    description: "Open-source developer documentation engine featuring instant full-text search, live code sandboxes, and offline PWA support.",
    imageGradient: "from-cyan-500 via-blue-500 to-indigo-600",
    tags: ["Vue 3", "Vite", "Tailwind CSS", "Algolia"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: false
  },
  {
    id: 6,
    title: "SwiftPay Checkout Widget",
    category: "Web Apps",
    description: "High-conversion embedded payment widget with instant currency conversion, crypto support, and one-click Apple/Google Pay.",
    imageGradient: "from-violet-600 via-purple-600 to-fuchsia-600",
    tags: ["TypeScript", "Stripe API", "Web Components"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: false
  }
];

const skillCategories = [
  {
    name: "Frontend Development",
    icon: "code",
    skills: ["JavaScript (ESNext)", "TypeScript", "React / Next.js", "HTML5 & Modern CSS", "Tailwind CSS", "Vue.js", "Responsive Design"]
  },
  {
    name: "Backend & Systems",
    icon: "server",
    skills: ["Node.js / Express", "Python / FastAPI", "RESTful & GraphQL APIs", "PostgreSQL / Prisma", "MongoDB", "Redis Caching"]
  },
  {
    name: "DevOps & Cloud",
    icon: "cloud",
    skills: ["Docker / Containers", "Git & GitHub Actions", "Vercel & Netlify", "AWS (S3, Lambda)", "Cloudflare Pages", "CI/CD Pipelines"]
  },
  {
    name: "Tools & Product",
    icon: "sparkles",
    skills: ["Figma UI/UX Design", "Performance Auditing", "SEO Optimization", "Jest & Playwright", "Agile & Scrum", "Technical Writing"]
  }
];

const experienceData = [
  {
    role: "Senior Full-Stack Developer",
    company: "TechNova Solutions",
    period: "2023 - Present",
    description: "Spearheaded frontend architecture modernization, reducing load times by 42%. Mentored junior engineers and led key client-facing features.",
    tags: ["TypeScript", "Next.js", "GraphQL", "AWS"]
  },
  {
    role: "Frontend Engineer",
    company: "PixelCraft Studios",
    period: "2021 - 2023",
    description: "Engineered scalable responsive web interfaces for high-growth SaaS startups. Built modular UI design systems used across 5 flagship apps.",
    tags: ["React", "Tailwind CSS", "Redux", "Storybook"]
  },
  {
    role: "Junior Software Developer",
    company: "Apex Digital Lab",
    period: "2020 - 2021",
    description: "Developed and maintained full-stack internal tooling and customer billing portals. Implemented automated end-to-end testing suites.",
    tags: ["JavaScript", "Node.js", "Express", "PostgreSQL"]
  }
];

