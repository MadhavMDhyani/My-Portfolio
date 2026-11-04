import { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "../utils/data";
import { FaArrowUpRightFromSquare, FaGithub } from "react-icons/fa6";
import TiltCard from "../components/TiltCard";

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

  if (!imgSrc || hasError) return null;

  return (
    <img
      src={imgSrc}
      alt={`${project.title} screenshot`}
      loading="lazy"
      decoding="async"
      width="640"
      height="360"
      className="w-full aspect-video object-contain bg-indigo-950/60 rounded-2xl mb-5 border border-ghost/15"
      onError={handleError}
    />
  );
};

const real = (v) => (typeof v === "string" && v.trim() && !v.trim().startsWith("[ADD") ? v : null);

const Projects = () => {
  return (
    <section id="projects" className="container mx-auto px-6 md:px-12 py-20 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-12 text-center md:text-left"
      >
        <span className="text-xs font-semibold tracking-[0.25em] uppercase text-indigo-300">
          Selected Works
        </span>
        <h2 className="font-display-title text-4xl sm:text-5xl md:text-6xl text-ghost mt-2 tracking-wide">
          Featured Projects
        </h2>
      </motion.div>

      <div
        className={
          projects.length >= 3
            ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            : "grid grid-cols-1 md:grid-cols-2 gap-8"
        }
      >
        {projects.map((project, index) => {
          const summary = real(project.summary);
          const contribution = real(project.contribution);
          const result = real(project.result);

          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
              className="h-full"
            >
              <TiltCard maxTilt={7} className="h-full">
                <div className="p-7 sm:p-9 flex flex-col justify-between h-full relative overflow-hidden">
                  <div>
                    <ProjectImage
                      src={project.image}
                      alt={`${project.title} project screenshot`}
                    />
                    <h3 className="font-display-title text-2xl sm:text-3xl text-ghost tracking-wide mb-1">
                      {project.title}
                    </h3>

                    {summary && (
                      <p className="text-indigo-300 text-sm font-semibold mb-3 leading-snug">
                        {summary}
                      </p>
                    )}

                    {contribution && (
                      <p className="text-indigo-200/80 text-sm leading-relaxed mb-2">
                        <span className="font-semibold text-indigo-200">My contribution: </span>
                        {contribution}
                      </p>
                    )}

                    {result && (
                      <p className="text-indigo-200/80 text-sm leading-relaxed mb-4">
                        <span className="font-semibold text-indigo-200">Key result: </span>
                        {result}
                      </p>
                    )}

                    {!summary && !contribution && !result && (
                      <p className="text-indigo-200/90 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                        {project.description}
                      </p>
                    )}

                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.technologies?.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3.5 py-1.5 text-xs font-medium rounded-full glass-pill text-indigo-200 border border-ghost/15"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-4 pt-4 border-t border-ghost/10">
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary text-xs uppercase tracking-wider py-2.5 px-5 min-h-[44px] gap-2 font-semibold"
                      >
                        Live Demo <FaArrowUpRightFromSquare className="text-xs" />
                      </a>
                    )}
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary text-xs uppercase tracking-wider py-2.5 px-5 min-h-[44px] gap-2 font-semibold"
                      >
                        GitHub <FaGithub className="text-sm" />
                      </a>
                    )}
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
