import { motion } from "framer-motion";
import { personalInfo } from "../utils/data";

const AboutMe = () => {
  return (
    <section id="about" className="container mx-auto px-6 md:px-12 py-20 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="glass-strong rounded-3xl p-8 md:p-14 border border-ghost/20 shadow-glass relative overflow-hidden"
      >
        {/* Signature Indigo Brand Accent Bar */}
        <div className="absolute top-0 left-0 w-2 h-full bg-brand-gradient shadow-[0_0_15px_rgba(122,104,224,0.7)]" />

        <div className="pl-2">
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-indigo-300">
            Introduction
          </span>

          <h2 className="font-display-title text-4xl sm:text-5xl md:text-6xl text-ghost mt-2 mb-6 tracking-wide">
            About Me
          </h2>

          <p className="text-indigo-200/90 leading-relaxed text-base md:text-lg max-w-4xl font-normal text-balance">
            {personalInfo.bio} I specialize in building clean REST APIs, resilient microservices, and high-performance server logic — with an eye for intuitive interfaces and thoughtful software architecture that people genuinely enjoy using. My core strength lies in backend development with Java, where I work extensively with Spring Boot to design scalable, secure, and well-tested services. I'm comfortable modeling relational schemas and writing efficient queries in databases like MySQL and PostgreSQL, and I care deeply about getting the data layer right — proper indexing, normalization, and transaction handling — so applications stay fast and reliable as they grow.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-10">
            <div className="glass rounded-2xl p-5 border border-ghost/15 hover:border-ghost/35 transition-all duration-300">
              <span className="text-xs tracking-wider uppercase text-indigo-300 font-semibold">
                Role
              </span>
              <p className="text-base md:text-lg font-semibold text-ghost mt-1.5">
                {personalInfo.role}
              </p>
            </div>

            <div className="glass rounded-2xl p-5 border border-ghost/15 hover:border-ghost/35 transition-all duration-300">
              <span className="text-xs tracking-wider uppercase text-indigo-300 font-semibold">
                Location
              </span>
              <p className="text-base md:text-lg font-semibold text-ghost mt-1.5">
                {personalInfo.location}
              </p>
            </div>

            <div className="glass rounded-2xl p-5 border border-ghost/15 hover:border-ghost/35 transition-all duration-300">
              <span className="text-xs tracking-wider uppercase text-indigo-300 font-semibold">
                Email
              </span>
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-base md:text-lg font-semibold text-ghost mt-1.5 truncate block hover:text-indigo-300 transition-colors focus-visible:ring-2 focus-visible:ring-indigo-400 rounded"
              >
                {personalInfo.email}
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutMe;