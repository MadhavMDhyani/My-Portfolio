import { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "../utils/data";
import { FaArrowUpRightFromSquare, FaGithub } from "react-icons/fa6";

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
    <div className="w-full aspect-video rounded-2xl overflow-hidden bg-[#0E0E0E] mb-6 border border-white/[0.08] flex items-center justify-center relative">
      <img
        src={imgSrc}
        alt={`${project.title} screenshot`}
        loading="lazy"
        decoding="async"
        width="640"
        height="360"
        className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-[1.04]"
        onError={handleError}
      />
    </div>
  );
};

const real = (v) => (typeof v === "string" && v.trim() && !v.trim().startsWith("[" + "ADD") ? v : null);

const Projects = () => {
  return (
    <section id="projects" className="py-16 relative z-10">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-6xl">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 text-center md:text-left"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-[#FF5A1F]">
            Selected Works
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-2 tracking-tight">
            Featured Projects
          </h2>
        </motion.div>

        {/* 3 Cards Row (Stacked on Mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
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
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="bg-[#151515] rounded-3xl p-6 sm:p-7 border border-white/[0.08] hover:border-white/[0.2] transition-colors duration-300 flex flex-col justify-between h-full group"
              >
                <div>
                  {project.image && <ProjectImage project={project} />}

                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-2">
                    {project.title}
                  </h3>

                  {summary && (
                    <p className="text-[#FF7D4D] text-sm font-semibold mb-3 leading-snug">
                      {summary}
                    </p>
                  )}

                  {contribution && (
                    <p className="text-[#A1A1AA] text-sm leading-relaxed mb-2">
                      <span className="font-semibold text-white">Contribution: </span>
                      {contribution}
                    </p>
                  )}

                  {result && (
                    <p className="text-[#A1A1AA] text-sm leading-relaxed mb-4">
                      <span className="font-semibold text-white">Key result: </span>
                      {result}
                    </p>
                  )}

                  {!summary && !contribution && !result && (
                    <p className="text-[#A1A1AA] text-sm leading-relaxed mb-6 font-normal">
                      {project.description}
                    </p>
                  )}

                  {/* Tech stack pills */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.technologies?.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-white/[0.04] text-[#D4D4D8] border border-white/[0.08]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3 pt-5 border-t border-white/[0.08]">
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary text-xs uppercase tracking-wider py-2.5 px-5 min-h-[44px] gap-2 font-semibold"
                    >
                      <span>Live Demo</span>
                      <FaArrowUpRightFromSquare className="text-xs" />
                    </a>
                  )}
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary text-xs uppercase tracking-wider py-2.5 px-5 min-h-[44px] gap-2 font-semibold"
                    >
                      <span>GitHub</span>
                      <FaGithub className="text-sm" />
                    </a>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Projects;
