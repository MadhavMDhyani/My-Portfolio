import { motion } from "framer-motion";
import PROFILE_PIC from "../assets/profile.jpg";
import { personalInfo } from "../utils/data";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

const specialties = [
  {
    num: "#01",
    title: "Backend Systems",
    desc: "Java & Spring Boot microservices architecture",
  },
  {
    num: "#02",
    title: "REST APIs",
    desc: "High-performance endpoints & secure JWT auth",
  },
  {
    num: "#03",
    title: "Databases",
    desc: "Relational & NoSQL modeling with Redis caching",
  },
  {
    num: "#04",
    title: "Deployment",
    desc: "Containerization with Docker & CI/CD workflows",
  },
];

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section id="home" className="relative pt-24 pb-8 px-4 sm:px-6 md:px-8">
      {/* Hero Rounded Container with Animated Gradient */}
      <div className="container mx-auto max-w-6xl rounded-b-[2.5rem] rounded-t-2xl md:rounded-[2.5rem] hero-gradient-animate border border-white/[0.08] shadow-2xl p-6 sm:p-10 md:p-14 lg:p-16 flex flex-col justify-between overflow-hidden min-h-[calc(100dvh-8rem)]">
        
        {/* Main Content: Left Text + Right Profile */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Heading & Intro */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col items-start"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#FF5A1F] animate-pulse" />
              <span className="text-sm font-medium tracking-wide text-[#E5E5E5] uppercase">
                Hey, I'm a
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-[clamp(2.75rem,7.5vw,5.75rem)] font-bold text-white leading-[1.05] tracking-tight font-sans"
            >
              Backend
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/70">
                Developer
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mt-6 text-base sm:text-lg text-[#D4D4D8] leading-relaxed max-w-xl font-normal"
            >
              I architect robust backend systems, secure RESTful APIs, and efficient database architectures with Java, Spring Boot, and modern cloud technologies.
            </motion.p>

            {/* Action Buttons & Socials */}
            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <a
                href="#projects"
                className="btn-primary text-sm font-semibold uppercase tracking-wider min-h-[44px] px-6 rounded-full"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="btn-secondary text-sm font-semibold uppercase tracking-wider min-h-[44px] px-6 rounded-full"
              >
                Contact Me
              </a>

              <div className="flex items-center gap-3 ml-2">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full bg-white/[0.08] hover:bg-white/[0.16] border border-white/[0.12] flex items-center justify-center text-white transition-all focus-visible:ring-2 focus-visible:ring-[#FF5A1F]"
                  aria-label="GitHub Profile"
                >
                  <FaGithub className="text-lg" />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full bg-white/[0.08] hover:bg-white/[0.16] border border-white/[0.12] flex items-center justify-center text-white transition-all focus-visible:ring-2 focus-visible:ring-[#FF5A1F]"
                  aria-label="LinkedIn Profile"
                >
                  <FaLinkedin className="text-lg" />
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Profile Photo with Mask Feathering */}
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="lg:col-span-5 flex flex-col items-center lg:items-end justify-center"
          >
            <div className="relative w-full max-w-[340px] sm:max-w-[380px] lg:max-w-none">
              <div
                className="w-full h-[360px] sm:h-[420px] md:h-[460px] rounded-3xl overflow-hidden relative"
                style={{
                  maskImage: "linear-gradient(to bottom, black 65%, transparent 100%)",
                  WebkitMaskImage: "linear-gradient(to bottom, black 65%, transparent 100%)",
                }}
              >
                <img
                  src={PROFILE_PIC}
                  alt="Madhav Dhyani - Backend Developer"
                  width="400"
                  height="500"
                  loading="eager"
                  className="w-full h-full object-cover object-top select-none"
                />
              </div>

              {/* Tagline Badge */}
              <div className="mt-2 text-center lg:text-right">
                <p className="text-xs sm:text-sm text-[#A1A1AA] font-medium tracking-wide">
                  Building production-ready software with reliability &amp; speed.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Row: 4 Numbered Specialties */}
        <div className="mt-12 pt-8 border-t border-white/[0.1] grid grid-cols-2 md:grid-cols-4 gap-6">
          {specialties.map((item) => (
            <div key={item.num} className="flex flex-col gap-1.5">
              <span className="text-[#FF5A1F] font-mono text-sm sm:text-base font-bold tracking-wider">
                {item.num}
              </span>
              <h3 className="text-white font-semibold text-base sm:text-lg tracking-tight">
                {item.title}
              </h3>
              <p className="text-[#8A8A8A] text-xs sm:text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Hero;
