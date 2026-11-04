import { motion } from "framer-motion";
import { personalInfo } from "../utils/data";

const AboutMe = () => {
  return (
    <section id="about" className="py-16 relative z-10">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="bg-[#151515] rounded-[2.5rem] p-8 sm:p-12 md:p-16 border border-white/[0.08] shadow-xl relative overflow-hidden"
        >
          {/* Eyebrow */}
          <span className="text-xs font-semibold tracking-widest uppercase text-[#FF5A1F]">
            Behind the Code
          </span>

          {/* Large Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-2 mb-6 tracking-tight">
            About Me
          </h2>

          {/* Paragraph from existing content */}
          <p className="text-[#A1A1AA] text-base sm:text-lg leading-relaxed max-w-4xl font-normal">
            {personalInfo.bio} I specialize in building clean REST APIs, resilient microservices, and high-performance server logic. My core strength lies in backend engineering with Java and Spring Boot, where I design scalable, secure, and well-tested services. I'm comfortable modeling schemas, optimizing queries, and handling transactional integrity in MySQL, PostgreSQL, and MongoDB, ensuring applications stay fast and reliable in production.
          </p>

          {/* Info Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-10">
            <div className="bg-[#0E0E0E] rounded-2xl p-5 border border-white/[0.08]">
              <span className="text-xs tracking-wider uppercase text-[#8A8A8A] font-semibold">
                Role
              </span>
              <p className="text-base sm:text-lg font-semibold text-white mt-1">
                {personalInfo.role}
              </p>
            </div>

            <div className="bg-[#0E0E0E] rounded-2xl p-5 border border-white/[0.08]">
              <span className="text-xs tracking-wider uppercase text-[#8A8A8A] font-semibold">
                Location
              </span>
              <p className="text-base sm:text-lg font-semibold text-white mt-1">
                {personalInfo.location}
              </p>
            </div>

            <div className="bg-[#0E0E0E] rounded-2xl p-5 border border-white/[0.08]">
              <span className="text-xs tracking-wider uppercase text-[#8A8A8A] font-semibold">
                Email
              </span>
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-base sm:text-lg font-semibold text-white mt-1 truncate block hover:text-[#FF5A1F] transition-colors focus-visible:ring-2 focus-visible:ring-[#FF5A1F] rounded"
              >
                {personalInfo.email}
              </a>
            </div>
          </div>

          {/* Pill CTA Button */}
          <div className="mt-10 flex items-center">
            <a
              href="#contact"
              className="btn-pill-white text-sm font-semibold text-[#0E0E0E] bg-white rounded-full pl-6 pr-2.5 py-2.5 flex items-center gap-3 shadow-md group hover:bg-neutral-100 transition-all min-h-[44px]"
            >
              <span>Let's Work Together</span>
              <span className="arrow-icon w-8 h-8 rounded-full bg-[#FF5A1F] text-white flex items-center justify-center transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </a>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
