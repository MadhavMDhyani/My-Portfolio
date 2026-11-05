import { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "../utils/data";
import { FaArrowUpRightFromSquare, FaGithub } from "react-icons/fa6";

const cardThemes = [
  {
    cardBg: "bg-[#1C1815]",
    textColor: "text-white",
    subColor: "text-neutral-300",
    tabBg: "bg-[#2B4FD8] text-white",
    dateColor: "text-[#A8DEC0]",
    borderColor: "border-[#151515]",
    tapeClass: "tape-strip",
    date: "● MAR 2026",
  },
  {
    cardBg: "bg-[#F2C23E]",
    textColor: "text-[#151515]",
    subColor: "text-[#151515]/85",
    tabBg: "bg-[#151515] text-[#F2C23E]",
    dateColor: "text-[#151515]",
    borderColor: "border-[#151515]",
    tapeClass: "tape-strip",
    date: "● JAN 2026",
  },
  {
    cardBg: "bg-[#2B4FD8]",
    textColor: "text-white",
    subColor: "text-blue-100",
    tabBg: "bg-[#F0457E] text-white",
    dateColor: "text-[#F2C23E]",
    borderColor: "border-[#151515]",
    tapeClass: "tape-strip",
    date: "● DEC 2025",
  },
];

const ProjectImage = ({ project }) => {
  const [imgSrc, setImgSrc] = useState(project.image);
  const [hasError, setHasError] = useState(false);

  const handleError = (e) => {
    if (project.fallbackImage && imgSrc !== project.fallbackImage) {
      setImgSrc(project.fallbackImage);
    } else {
      setHasError(true);
      e.currentTarget.style.display = "none";
    }
  };

  if (!imgSrc || hasError) {
    return (
      <div className="w-full aspect-video bg-neutral-900 border border-white/20 flex flex-col items-center justify-center p-4 text-center">
        <span className="font-pixel text-xl text-[#F2C23E]">{project.title}</span>
        <span className="font-mono text-xs text-white/50 mt-1">Screenshot preview</span>
      </div>
    );
  }

  return (
    <img
      src={imgSrc}
      alt={`${project.title} screenshot`}
      loading="lazy"
      decoding="async"
      width="640"
      height="360"
      className="w-full aspect-video object-cover object-top select-none"
      onError={handleError}
    />
  );
};

const Projects = () => {
  return (
    <section id="projects" className="relative pt-6 pb-24 px-4 sm:px-8">
      
      {/* Section Header */}
      <div className="max-w-4xl mx-auto mb-12 flex flex-col items-start">
        <div className="inline-block border border-[#151515] bg-[#F2C23E] px-3 py-1 font-mono text-xs font-bold uppercase tracking-wider shadow-[2px_2px_0_#151515] rotate-[-1deg] mb-3">
          SELECTED WORKS
        </div>
        <h2 className="font-pixel text-3xl sm:text-5xl text-[#151515] tracking-tight uppercase">
          PROJECTS
        </h2>
      </div>

      {/* Stacked Folder Tab Cards Container */}
      <div className="max-w-4xl mx-auto space-y-12 md:space-y-16">
        {projects.map((project, index) => {
          const theme = cardThemes[index % cardThemes.length];
          const topOffset = 80 + index * 24;

          return (
            <div
              key={project.id}
              className="relative md:sticky transition-transform duration-300"
              style={{
                top: `${topOffset}px`,
                zIndex: index + 10,
              }}
            >
              {/* Angled-Corner Folder Tab */}
              <div className="flex items-end">
                <div
                  className={`folder-tab-clip ${theme.tabBg} border-t border-l border-r border-[#151515] px-6 py-2 font-mono text-xs font-bold tracking-widest uppercase flex items-center gap-2 select-none`}
                >
                  <span className="w-2 h-2 rounded-full bg-current" />
                  <span>PROJECT 0{index + 1}</span>
                </div>
              </div>

              {/* Coloured Card Body */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className={`${theme.cardBg} ${theme.borderColor} border-2 p-6 sm:p-10 shadow-[6px_6px_0_#151515] grid grid-cols-1 md:grid-cols-12 gap-8 items-center overflow-hidden`}
              >
                {/* Left Side: Meta, Title, Description, Links */}
                <div className="md:col-span-6 flex flex-col justify-between">
                  <div>
                    {/* Mono Date with Dot */}
                    <div className={`font-mono text-xs font-bold tracking-wider ${theme.dateColor} mb-3`}>
                      {theme.date}
                    </div>

                    {/* Huge Title */}
                    <h3 className={`font-sans text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight ${theme.textColor} mb-4 leading-tight`}>
                      {project.title}
                    </h3>

                    {/* One-Line Description */}
                    <p className={`text-sm sm:text-base leading-relaxed ${theme.subColor} mb-6 font-normal`}>
                      {project.summary || project.description}
                    </p>

                    {/* Tech Pills */}
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-8">
                      {project.technologies?.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-0.5 text-[11px] font-mono font-semibold uppercase border border-current opacity-85 rounded-none"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Underlined Mono Action Links */}
                  <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-current/20 font-mono text-xs font-bold uppercase tracking-wider">
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`underline underline-offset-4 flex items-center gap-1.5 hover:opacity-75 transition-opacity min-h-[44px]`}
                      >
                        <span>VIEW PROJECT</span>
                        <FaArrowUpRightFromSquare className="text-[10px]" />
                      </a>
                    )}
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`underline underline-offset-4 flex items-center gap-1.5 hover:opacity-75 transition-opacity min-h-[44px]`}
                      >
                        <span>GITHUB REPO</span>
                        <FaGithub className="text-sm" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Right Side: Framed Screenshot with Corner Tape Pieces */}
                <div className="md:col-span-6 relative flex justify-center">
                  <div className="relative p-2 bg-white border border-[#151515] shadow-[4px_4px_0_#151515] w-full max-w-md rotate-1 hover:rotate-0 transition-transform duration-300">
                    {/* Corner Tape Strips */}
                    <div className="tape-strip w-12 h-5 -top-2.5 -left-2 rotate-[-25deg]" />
                    <div className="tape-strip w-12 h-5 -top-2.5 -right-2 rotate-[25deg]" />
                    <div className="tape-strip w-12 h-5 -bottom-2.5 -left-2 rotate-[20deg]" />
                    <div className="tape-strip w-12 h-5 -bottom-2.5 -right-2 rotate-[-20deg]" />

                    <div className="overflow-hidden border border-[#151515]/30 bg-neutral-900">
                      <ProjectImage project={project} />
                    </div>
                  </div>
                </div>

              </motion.div>
            </div>
          );
        })}
      </div>

    </section>
  );
};

export default Projects;
