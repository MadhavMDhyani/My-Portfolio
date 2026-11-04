import { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "../utils/data";
import { FaArrowUpRightFromSquare, FaGithub } from "react-icons/fa6";
import TiltCard from "../components/TiltCard";

/** Renders a project screenshot with a gradient placeholder fallback.
 *  Never shows raw browser alt-text — the placeholder is always visible. */
const ProjectImage = ({ src, alt }) => {
  const [status, setStatus] = useState("loading"); // "loading" | "loaded" | "error"

  return (
    <div className="w-full aspect-video rounded-2xl mb-5 overflow-hidden border border-ghost/15 relative bg-indigo-900/40">
      {/* Gradient placeholder — shown while loading or on error */}
      <div
        className={`absolute inset-0 bg-gradient-to-br from-indigo-900/80 via-indigo-brand/50 to-indigo-950 flex items-center justify-center transition-opacity duration-500 ${
          status === "loaded" ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
        aria-hidden="true"
      >
        <span className="text-indigo-300/40 text-[10px] uppercase tracking-[0.3em]">
          {status === "error" ? "Screenshot coming soon" : ""}
        </span>
      </div>

      {/* Actual image — invisible until loaded, never shows broken icon */}
      {src && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            status === "loaded" ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setStatus("loaded")}
          onError={() => setStatus("error")}
        />
      )}
    </div>
  );
};

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
        {projects.map((project, index) => (
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

                  {project.summary && (
                    <p className="text-indigo-300 text-sm font-semibold mb-3 leading-snug">
                      {project.summary}
                    </p>
                  )}

                  {project.contribution && (
                    <p className="text-indigo-200/80 text-sm leading-relaxed mb-2">
                      <span className="font-semibold text-indigo-200">My contribution: </span>
                      {project.contribution}
                    </p>
                  )}

                  {project.result && (
                    <p className="text-indigo-200/80 text-sm leading-relaxed mb-4">
                      <span className="font-semibold text-indigo-200">Key result: </span>
                      {project.result}
                    </p>
                  )}

                  {!project.summary && !project.contribution && !project.result && (
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
        ))}
      </div>
    </section>
  );
};

export default Projects;
