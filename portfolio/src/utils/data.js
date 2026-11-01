import {
  FaJava,
  FaGitAlt,
  FaDocker,
  FaServer,
  FaJs,
  FaReact,
} from "react-icons/fa6";

import {
  SiSpringboot,
  SiMysql,
  SiPostgresql,
  SiTailwindcss,
} from "react-icons/si";

export const personalInfo = {
  name: "Madhav Dhyani",
  role: "Java & Backend Developer",
  bio: "Hi, This is Madhav Dhyani, a passionate Java and Backend Developer specializing in scalable Spring Boot services, database modeling, and performant REST APIs.",
  email: "dhyani.pankaj811@gmail.com",
  location: "Indore, India",
  github: "https://github.com/MadhavMDhyani",
  // TODO: Verify LinkedIn URL with your personal profile handle
  linkedin: "https://linkedin.com/in/madhavdhyani",
  resume: "/resume.pdf",
};

export const skills = [
  {
    id: 1,
    name: "Java",
    icon: FaJava,
    level: "Core",
    description: "Proficient in object-oriented programming, modern Java (8/11/17+), concurrency, and core JVM concepts.",
    type: "backend",
  },
  {
    id: 2,
    name: "Spring Boot",
    icon: SiSpringboot,
    level: "Core",
    description: "Hands-on experience developing REST APIs, dependency injection, MVC architecture, Spring Security, and microservices.",
    type: "backend",
  },
  {
    id: 3,
    name: "REST APIs",
    icon: FaServer,
    level: "Core",
    description: "Designing secure, stateless, performant HTTP interfaces with comprehensive error handling and documentation.",
    type: "backend",
  },
  {
    id: 4,
    name: "MySQL",
    icon: SiMysql,
    level: "Core",
    description: "Relational database schema modeling, indexing, foreign keys, normalization, and ACID transaction safety.",
    type: "backend",
  },
  {
    id: 5,
    name: "PostgreSQL",
    icon: SiPostgresql,
    level: "Comfortable",
    description: "Experience with advanced PostgreSQL features, complex querying, constraints, and data integrity.",
    type: "backend",
  },
  {
    id: 6,
    name: "Git",
    icon: FaGitAlt,
    level: "Core",
    description: "Version control workflows, branching strategies, collaboration, merge conflict resolution, and CI/CD integration.",
    type: "tools",
  },
  {
    id: 7,
    name: "Docker",
    icon: FaDocker,
    level: "Comfortable",
    description: "Containerizing backend services, creating multi-stage Dockerfiles, and managing local container environments.",
    type: "tools",
  },
  {
    id: 8,
    name: "React",
    icon: FaReact,
    level: "Comfortable",
    description: "Building responsive SPAs, component-driven UI architectures, and integrating with REST backends.",
    type: "frontend",
  },
  {
    id: 9,
    name: "JavaScript",
    icon: FaJs,
    level: "Comfortable",
    description: "ES6+ modern syntax, asynchronous programming (Promises/async-await), and DOM manipulation.",
    type: "frontend",
  },
  {
    id: 10,
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    level: "Comfortable",
    description: "Utility-first modern styling, responsive layouts, glassmorphism, and custom design tokens.",
    type: "frontend",
  },
];

export const projects = [
  {
    id: 1,
    title: "Volaitile Friday",
    description: "A full-stack application delivering interactive workflows and real-time updates. Engineered for high performance, state management, and reliable data synchronization.",
    image: "/projects/volatile-friday.svg",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    githubLink: "https://github.com/MadhavMDhyani/Volaitile-Friday",
    // TODO: Add live deployment link if hosted
    liveLink: "",
  },
  {
    id: 2,
    title: "Spring Boot Journal Application",
    description: "A secure RESTful journaling backend built with Spring Boot, Spring Security, and JWT. Features role-based access control, relational database persistence, and comprehensive unit tests.",
    image: "/projects/journal-app.svg",
    technologies: ["Java", "Spring Boot", "Spring Security", "MySQL", "JWT"],
    // TODO: Verify repository name if different
    githubLink: "https://github.com/MadhavMDhyani/journal-app",
    // TODO: Add live demo URL when deployed
    liveLink: "",
  },
  {
    id: 3,
    title: "AEGIS-ANC (Active Noise Cancellation)",
    description: "An acoustic engineering and digital signal processing system for real-time noise cancellation. Filters background ambient frequencies to achieve high-fidelity audio output.",
    image: "/projects/aegis-anc.svg",
    technologies: ["Python", "Digital Signal Processing", "Acoustics", "Low-Latency Audio"],
    // TODO: Verify repository name if different
    githubLink: "https://github.com/MadhavMDhyani/AEGIS-ANC",
    // TODO: Add live project demo link
    liveLink: "",
  },
];

export const MENU_LINKS = [
  {
    id: 1,
    label: "Home",
    to: "home",
    offset: -80,
  },
  {
    id: 2,
    label: "About",
    to: "about",
    offset: -80,
  },
  {
    id: 3,
    label: "Skills",
    to: "skills",
    offset: -80,
  },
  {
    id: 4,
    label: "Projects",
    to: "projects",
    offset: -80,
  },
  {
    id: 5,
    label: "Contact",
    to: "contact",
    offset: -80,
  },
];

export const STATS = [
  { id: 1, count: "READY", label: "Production-Grade\nAPIs & Services" },
  { id: 2, count: "JAVA", label: "Spring Boot &\nMicroservices" },
  { id: 3, count: "SQL", label: "Relational Modeling\n& Database Design" },
];

export const SKILL_TABS = [
  { id: "01", label: "All", value: "all" },
  { id: "02", label: "Backend", value: "backend" },
  { id: "03", label: "Tools", value: "tools" },
  { id: "04", label: "Frontend", value: "frontend" },
];