/**
 * Personal Website Data Store for Hansraj Ola
 * Customizing profile, projects, skills, and experience at IIT Bombay.
 */

const profileData = {
  name: "Hansraj Ola",
  title: "Python & Django Developer | Web Specialist @ IIT Bombay",
  bio: "Software Developer and Web Specialist at IIT Bombay. Experienced in engineering robust Python & Django web platforms, RESTful APIs, and enterprise Content Management Systems (WordPress & Drupal) for academic and research ecosystems.",
  location: "IIT Bombay, Powai, Mumbai, India",
  status: "Working at IIT Bombay",
  email: "hansraj@iitb.ac.in",
  avatarImage: "", // Optional: place an image in 'assets/images/profile.jpg' and write 'assets/images/profile.jpg' here
  web3FormsKey: "", // Optional: Get a free key at https://web3forms.com to receive real emails to your inbox!
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://x.com",
    resume: "#"
  },
  stats: [
    { label: "Institutional Portals", value: "20+" },
    { label: "Django Web Apps", value: "15+" },
    { label: "WordPress & Drupal Sites", value: "35+" },
    { label: "Years in Web Tech", value: "5+" }
  ]
};

const projectCategories = ["All", "Django & Python", "CMS (WordPress/Drupal)", "Web Systems"];

const projectsData = [
  {
    id: 1,
    title: "IIT Bombay Academic & Research Portal",
    category: "Django & Python",
    description: "Enterprise web portal engineered with Python & Django to streamline faculty research publications, student project submissions, and departmental grant management with role-based access control.",
    imageGradient: "from-blue-700 via-indigo-700 to-slate-900",
    tags: ["Python", "Django", "PostgreSQL", "REST API", "Tailwind CSS"],
    liveUrl: "https://www.iitb.ac.in",
    githubUrl: "https://github.com",
    featured: true
  },
  {
    id: 2,
    title: "Multi-Departmental Drupal CMS Platform",
    category: "CMS (WordPress/Drupal)",
    description: "A centralized, high-availability multi-site Drupal architecture powering multiple academic departments and laboratories at IIT Bombay, featuring custom modules and taxonomy-driven news archives.",
    imageGradient: "from-sky-600 via-blue-700 to-indigo-800",
    tags: ["Drupal", "PHP", "MySQL", "Apache", "Custom Modules"],
    liveUrl: "https://www.iitb.ac.in",
    githubUrl: "https://github.com",
    featured: true
  },
  {
    id: 3,
    title: "Campus Event & Conference Management System",
    category: "Django & Python",
    description: "Custom Django web application handling national academic conference registrations, paper abstract submissions, review workflows, and automated email confirmations using Celery and Redis.",
    imageGradient: "from-emerald-600 via-teal-700 to-slate-900",
    tags: ["Django", "Python", "Celery", "Redis", "Bootstrap"],
    liveUrl: "#",
    githubUrl: "https://github.com",
    featured: true
  },
  {
    id: 4,
    title: "Institutional WordPress Portal Network",
    category: "CMS (WordPress/Drupal)",
    description: "Custom-themed WordPress network for specialized research centers and student innovation cells with optimized caching, custom post types, and high security against DDoS attacks.",
    imageGradient: "from-cyan-600 via-teal-600 to-blue-800",
    tags: ["WordPress", "Custom Themes", "PHP", "MySQL", "SEO"],
    liveUrl: "#",
    githubUrl: "https://github.com",
    featured: false
  },
  {
    id: 5,
    title: "Student Course & Feedback Evaluation API",
    category: "Django & Python",
    description: "RESTful backend service built using Django REST Framework for semester-end course feedback, dynamic evaluation reporting, and encrypted survey submission handling thousands of concurrent users.",
    imageGradient: "from-indigo-600 via-purple-700 to-slate-900",
    tags: ["Python", "Django REST Framework", "PostgreSQL", "JWT"],
    liveUrl: "#",
    githubUrl: "https://github.com",
    featured: false
  },
  {
    id: 6,
    title: "Central LDAP Authentication & SSO Middleware",
    category: "Web Systems",
    description: "Secure authentication middleware bridging IIT Bombay's LDAP and Single Sign-On (SSO) infrastructure with internal Django and CMS applications for seamless campus-wide login.",
    imageGradient: "from-slate-700 via-slate-800 to-slate-950",
    tags: ["Python", "LDAP / SSO", "Linux", "Security", "Nginx"],
    liveUrl: "#",
    githubUrl: "https://github.com",
    featured: false
  }
];

const skillCategories = [
  {
    name: "Python & Backend Frameworks",
    icon: "code",
    skills: ["Python (3.x)", "Django", "Django REST Framework", "Flask", "Celery", "RESTful APIs", "Object-Oriented Programming (OOP)"]
  },
  {
    name: "CMS & Web Platforms",
    icon: "server",
    skills: ["WordPress (Custom Themes & Plugins)", "Drupal 9/10 (Module Dev)", "PHP", "Headless CMS", "Content Architecture", "Site Migration"]
  },
  {
    name: "Databases & DevOps",
    icon: "cloud",
    skills: ["PostgreSQL", "MySQL", "Redis Caching", "Linux (Ubuntu / CentOS)", "Nginx & Apache", "Docker", "Git & GitHub"]
  },
  {
    name: "Frontend & Web Standards",
    icon: "sparkles",
    skills: ["HTML5 & Semantic Markup", "Tailwind CSS", "Bootstrap", "JavaScript (ES6+)", "Web Accessibility (WCAG)", "SEO & Performance"]
  }
];

const experienceData = [
  {
    role: "Software Developer & Web Specialist",
    company: "Indian Institute of Technology (IIT) Bombay",
    period: "Present",
    description: "Architecting, developing, and maintaining critical web systems, institutional portals, and research databases. Leading the transition to modern Django web applications and managing enterprise WordPress & Drupal content management systems.",
    tags: ["Python", "Django", "Drupal", "WordPress", "PostgreSQL", "Linux"]
  },
  {
    role: "Web & Python Developer",
    company: "Higher Education & Research Portals",
    period: "Previous",
    description: "Developed custom web platforms, automated administrative workflows, implemented responsive frontend designs, and integrated secure campus databases with high uptime.",
    tags: ["Django", "Python", "PHP", "MySQL", "Apache"]
  }
];
