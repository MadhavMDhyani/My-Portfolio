import { motion } from "framer-motion";
import { projects } from "../utils/data";
import { FaArrowUpRightFromSquare, FaGithub } from "react-icons/fa6";
import TiltCard from "../components/TiltCard";

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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="h-full"
          >
            <TiltCard maxTilt={7} className="h-full">
              <div className="p-7 sm:p-9 flex flex-col justify-between h-full relative overflow-hidden">
                <div>
                  <h3 className="font-display-title text-2xl sm:text-3xl text-ghost tracking-wide mb-3">
                    {project.title}
                  </h3>

                  <p className="text-indigo-200/90 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                    {project.description}
                  </p>

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
