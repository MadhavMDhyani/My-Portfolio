import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaJava,
  FaGitAlt,
  FaDocker,
} from "react-icons/fa";

import {
  SiSpringboot,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiTailwindcss,
  SiVite,
} from "react-icons/si";

export const personalInfo = {
  name: "Madhav Dhyani",
  role: "Backend Developer",
  bio: "Hi, This is Madhav Dhyani, a passionate Backend Developer.",
  email: "dhyani.pankaj811@gmail.com",
  location: "Indore, India",
  github: "https://github.com/MadhavMDhyani",
  linkedin: "https://linkedin.com/in/madhavdhyani",
  resume: "/resume.pdf",
};

export const skills = [
  {
    id: 1,
    name: "Java",
    icon: FaJava,
    level: "Core",
    description: "Proficient in object-oriented programming, modern Java (8/11/17+), JVM internals, and multithreading.",
    type: "backend",
  },
  {
    id: 2,
    name: "Spring Boot",
    icon: SiSpringboot,
    level: "Core",
    description: "Experienced in building REST APIs, dependency injection, MVC architecture, and backend microservices with Spring Boot.",
    type: "backend",
  },
  {
    id: 3,
    name: "MySQL",
    icon: SiMysql,
    level: "Comfortable",
    description: "Relational database schema design, indexing, SQL queries, and transactional integrity with ACID compliance.",
    type: "backend",
  },
  {
    id: 4,
    name: "PostgreSQL",
    icon: SiPostgresql,
    level: "Comfortable",
    description: "Experience with PostgreSQL relational data modeling, complex queries, indexing, and data persistence.",
    type: "backend",
  },
  {
    id: 5,
    name: "MongoDB",
    icon: SiMongodb,
    level: "Comfortable",
    description: "Experienced in designing and managing NoSQL database schema design, indexing, and query optimization.",
    type: "backend",
  },
  {
    id: 6,
    name: "React",
    icon: FaReact,
    level: "Core",
    description: "Experienced in building reusable components, managing state, routing, and developing scalable React applications.",
    type: "frontend",
  },
  {
    id: 7,
    name: "JavaScript",
    icon: FaJs,
    level: "Core",
    description: "Skilled in writing clean ES6+ JavaScript, DOM manipulation, asynchronous programming, and APIs.",
    type: "frontend",
  },
  {
    id: 8,
    name: "HTML5",
    icon: FaHtml5,
    level: "Core",
    description: "Expert in structuring web content with semantic HTML, accessibility, and SEO-friendly markup.",
    type: "frontend",
  },
  {
    id: 9,
    name: "CSS3",
    icon: FaCss3Alt,
    level: "Comfortable",
    description: "Proficient in creating responsive layouts, animations, Flexbox, Grid, and modern UI designs.",
    type: "frontend",
  },
  {
    id: 10,
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    level: "Comfortable",
    description: "Utility-first CSS framework for building responsive, modern, and highly customizable user interfaces.",
    type: "frontend",
  },
  {
    id: 11,
    name: "Vite",
    icon: SiVite,
    level: "Comfortable",
    description: "Fast build tool used for creating modern React applications with optimized development and production builds.",
    type: "tools",
  },
  {
    id: 12,
    name: "Git",
    icon: FaGitAlt,
    level: "Comfortable",
    description: "Version control workflows, branching, merge conflict resolution, and collaborative software development.",
    type: "tools",
  },
  {
    id: 13,
    name: "Docker",
    icon: FaDocker,
    level: "Comfortable",
    description: "Containerizing backend services, creating Dockerfiles, and managing isolated development environments.",
    type: "tools",
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