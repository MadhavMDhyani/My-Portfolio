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
    title: "Volatile Friday",
    summary: "Real-time developer workspaces with a cloud file editor, live team chat and a context-aware AI assistant.",
    contribution: "",
    result: "",
    description: "A full-stack collaborative workspace delivering interactive development workflows and real-time project synchronization.",
    image: "/projects/volatile-friday.png",
    fallbackImage: "/projects/volatile-friday.svg",
    technologies: ["React 19", "Node.js", "MongoDB", "Redis", "Socket.IO", "Google Gemini AI"],
    githubLink: "https://github.com/MadhavMDhyani/Volaitile-Friday",
    liveLink: "https://volaitile-friday.vercel.app/",
  },
  {
    id: 2,
    title: "Spring Boot Journal Application",
    summary: "Secure journaling REST API built with Spring Boot 3, MongoDB Atlas, Redis caching, and Kafka-based event notifications.",
    contribution: "",
    result: "",
    description: "A secure RESTful journaling backend built with Spring Boot 3, Spring Security, MongoDB Atlas, Redis Cloud, and Kafka.",
    image: "/projects/journal-app.svg",
    technologies: ["Java", "Spring Boot", "Spring Security", "MongoDB", "Redis", "Kafka", "JWT", "Swagger"],
    githubLink: "https://github.com/MadhavMDhyani/journal-app",
  },
  {
    id: 3,
    title: "KAVACH-ANC",
    summary: "Real-time adaptive noise cancellation using a deep-learning DSP pipeline for embedded hardware, built for the Smart India Hackathon.",
    contribution: "",
    result: "",
    description: "Real-time Active Noise Cancellation and battlefield voice clarity web telemetry platform for Team ByteX at Smart India Hackathon.",
    image: "/projects/kavach-anc.png",
    fallbackImage: "/projects/aegis-anc.svg",
    technologies: ["Deep Learning", "DeepFilterNet", "Digital Signal Processing", "React", "Firebase"],
    githubLink: "https://github.com/MadhavMDhyani/AEGIS-ANC",
    liveLink: "https://anc-ps-2-sih.vercel.app/",
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
  { id: 1, count: "02+", label: "Years of\nExperience" },
  { id: 2, count: "10+", label: "Projects\nCompleted" },
  { id: 3, count: "15+", label: "Technologies\nMastered" },
];

export const SKILL_TABS = [
  { id: "01", label: "All", value: "all" },
  { id: "02", label: "Backend", value: "backend" },
  { id: "03", label: "Tools", value: "tools" },
  { id: "04", label: "Frontend", value: "frontend" },
];