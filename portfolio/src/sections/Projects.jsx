import { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "../utils/data";
import { FaArrowUpRightFromSquare, FaGithub } from "react-icons/fa6";

const cardThemes = [
  {
    cardBg: "bg-[#1C1815]",
    textColor: "text-[#FFFFFF]",
    subColor: "text-neutral-300",
    tabBg: "bg-[#2B4FD8] text-[#FFFFFF]",
    dateColor: "text-[#A8DEC0]",
    tagClass: "border-white/40 bg-white/10 text-white",
    dividerClass: "border-white/25",
    linkHoverClass: "hover:text-[#F2C23E]",
    date: "● MAR 2026",
  },
  {
    cardBg: "bg-[#F2C23E]",
    textColor: "text-[#151515]",
    subColor: "text-[#151515]/90",
    tabBg: "bg-[#151515] text-[#F2C23E]",
    dateColor: "text-[#151515]",
    tagClass: "border-[#151515]/40 bg-black/10 text-[#151515]",
    dividerClass: "border-[#151515]/25",
    linkHoverClass: "hover:text-[#2B4FD8]",
    date: "● JAN 2026",
  },
  {
    cardBg: "bg-[#2B4FD8]",
    textColor: "text-[#FFFFFF]",
    subColor: "text-blue-100",
    tabBg: "bg-[#F0457E] text-[#FFFFFF]",
    dateColor: "text-[#F2C23E]",
    tagClass: "border-white/40 bg-white/10 text-white",
    dividerClass: "border-white/25",
    linkHoverClass: "hover:text-[#F2C23E]",
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
    <section id="projects" className="relative pt-6 pb-24 w-full overflow-x-clip">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="mb-10 sm:mb-14 flex flex-col items-start">
          <div className="inline-block border border-[#151515] bg-[#F2C23E] px-3.5 py-1 font-mono text-xs font-bold uppercase tracking-wider shadow-[2px_2px_0_#151515] rotate-[-1deg] mb-3">
            SELECTED WORKS
          </div>
          <h2 className="font-pixel text-3xl sm:text-5xl lg:text-6xl text-[#151515] tracking-tight uppercase">
            PROJECTS
          </h2>
        </div>

        {/* Stacked Folder Tab Cards Container */}
        <div className="space-y-10 sm:space-y-12 lg:space-y-16">
          {projects.map((project, index) => {
            const theme = cardThemes[index % cardThemes.length];
            const topOffset = 80 + index * 24;

            return (
              <div
                key={project.id}
                className="relative lg:sticky transition-transform duration-300"
                style={{
                  top: `${topOffset}px`,
                  zIndex: index + 10,
                }}
              >
                {/* Angled-Corner Folder Tab */}
                <div className="flex items-end">
                  <div
                    className={`folder-tab-clip ${theme.tabBg} border-t-2 border-l-2 border-r-2 border-[#151515] px-5 sm:px-7 py-2 font-mono text-xs font-bold tracking-widest uppercase flex items-center gap-2 select-none`}
                  >
                    <span className="w-2 h-2 rounded-full bg-current" />
                    <span>PROJECT 0{index + 1}</span>
                  </div>
                </div>

                {/* Coloured Card Body with high-contrast text */}
                <motion.div
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className={`${theme.cardBg} ${theme.textColor} border-2 border-[#151515] p-5 sm:p-8 lg:p-10 shadow-[3px_3px_0_#151515] lg:shadow-[6px_6px_0_#151515] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center overflow-hidden`}
                >
                  {/* Text Column: order-1 on all screens */}
                  <div className="lg:col-span-6 w-full flex flex-col justify-between order-1">
                    <div>
                      {/* Mono Date with Dot */}
                      <div className={`font-mono text-xs font-bold tracking-wider ${theme.dateColor} mb-2.5`}>
                        {theme.date}
                      </div>

                      {/* Fluid Huge Title clamp(2rem, 7vw, 4rem) */}
                      <h3 className={`font-sans text-[clamp(2rem,7vw,4rem)] font-bold tracking-tight ${theme.textColor} mb-3 sm:mb-4 leading-tight`}>
                        {project.title}
                      </h3>

                      {/* Description */}
                      <p className={`text-base sm:text-lg leading-relaxed ${theme.subColor} mb-6 font-normal max-w-xl`}>
                        {project.summary || project.description}
                      </p>

                      {/* Tech Pills with WCAG AA Contrast */}
                      <div className="flex flex-wrap gap-2 mb-8">
                        {project.technologies?.map((tech, i) => (
                          <span
                            key={i}
                            className={`px-3 py-1 text-xs font-mono font-semibold uppercase border ${theme.tagClass} rounded-none shadow-sm`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Underlined Mono Action Links */}
                    <div className={`flex flex-wrap items-center gap-6 pt-4 border-t ${theme.dividerClass} font-mono text-xs sm:text-sm font-bold uppercase tracking-wider`}>
                      {project.liveLink && (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`underline underline-offset-4 flex items-center gap-1.5 ${theme.linkHoverClass} transition-colors min-h-[44px]`}
                        >
                          <span>VIEW PROJECT</span>
                          <FaArrowUpRightFromSquare className="text-xs" />
                        </a>
                      )}
                      {project.githubLink && (
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`underline underline-offset-4 flex items-center gap-1.5 ${theme.linkHoverClass} transition-colors min-h-[44px]`}
                        >
                          <span>GITHUB REPO</span>
                          <FaGithub className="text-base" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Screenshot Column: order-2 on all screens, below text on < lg */}
                  <div className="lg:col-span-6 w-full order-2 flex justify-center">
                    <div className="relative p-2 bg-white border border-[#151515] shadow-[3px_3px_0_#151515] sm:shadow-[4px_4px_0_#151515] w-full max-w-lg rotate-1 hover:rotate-0 transition-transform duration-300">
                      {/* Corner Tape Strips */}
                      <div className="tape-strip w-10 sm:w-12 h-4 sm:h-5 -top-2 -left-2 rotate-[-25deg]" />
                      <div className="tape-strip w-10 sm:w-12 h-4 sm:h-5 -top-2 -right-2 rotate-[25deg]" />
                      <div className="tape-strip w-10 sm:w-12 h-4 sm:h-5 -bottom-2 -left-2 rotate-[20deg]" />
                      <div className="tape-strip w-10 sm:w-12 h-4 sm:h-5 -bottom-2 -right-2 rotate-[-20deg]" />

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

      </div>
    </section>
  );
};

export default Projects;
