import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import PROFILE_PIC from "../assets/images/profile-pic.jpg";
import { FaJava } from "react-icons/fa";
import {
  FaGithub,
  FaLinkedin,
  FaServer,
} from "react-icons/fa6";
import { SiSpringboot, SiMysql, SiMongodb } from "react-icons/si";
import { personalInfo, STATS } from "../utils/data";
import StateInfoCard from "../components/StateInfoCard";
import MagneticButton from "../components/MagneticButton";
import Hero3DCanvas from "../components/Hero3DCanvas";

const Hero = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const orbY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.2]);

  const headline = "Building Scalable Backend Systems";
  const words = headline.split(" ");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.15,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 20, filter: "blur(6px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-[100dvh] pt-28 pb-16 px-6 md:px-12 flex flex-col justify-center overflow-hidden"
    >
      {/* 3D Scene Background Canvas */}
      <motion.div style={{ y: orbY }} className="absolute inset-0 -z-10">
        <Hero3DCanvas />
      </motion.div>

      <motion.div
        style={{ y: contentY, opacity }}
        className="container mx-auto max-w-6xl relative z-10"
      >
        <div className="flex flex-col-reverse lg:flex-row gap-12 lg:gap-16 items-center justify-between">
          {/* Left Content */}
          <div className="text-center lg:text-left max-w-xl">
            {/* Tag Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill border border-ghost/20 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
              <span className="text-xs uppercase tracking-widest text-indigo-200 font-semibold">
                Backend &amp; Cloud Engineering
              </span>
            </motion.div>

            {/* Subheading Greeting */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg lg:text-2xl font-medium text-indigo-200"
            >
              Hi, I am{" "}
              <span className="text-ghost font-semibold border-b border-indigo-400/50 pb-0.5">
                {personalInfo.name}
              </span>
            </motion.p>

            {/* Animated Headline Per-Word */}
            <motion.h1
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="font-display-title text-5xl sm:text-6xl md:text-7xl lg:text-8xl mt-3 tracking-wide text-ghost text-balance"
            >
              {words.map((word, i) => (
                <motion.span
                  key={i}
                  variants={wordVariants}
                  className="inline-block mr-3"
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>

            {/* Bio Description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-indigo-200/90 text-sm sm:text-base mt-5 leading-relaxed font-normal max-w-lg"
            >
              I'm a Backend Developer specializing in Java, Spring Boot, and scalable REST APIs — focused on building high-performance, production-ready systems that solve real-world problems.
            </motion.p>

            {/* CTA Magnetic Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4 mt-8"
            >
              <MagneticButton
                href="#projects"
                className="btn-primary uppercase text-xs tracking-wider"
              >
                View My Work
              </MagneticButton>
              <MagneticButton
                href="#contact"
                className="btn-secondary uppercase text-xs tracking-wider"
              >
                Contact Me
              </MagneticButton>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex items-center justify-center lg:justify-start gap-4 mt-8"
            >
              <span className="text-xs font-semibold text-indigo-300 uppercase tracking-widest">
                Connect:
              </span>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 glass-pill flex items-center justify-center text-ghost hover:text-indigo-300 hover:border-ghost/40 transition-all focus-visible:ring-2 focus-visible:ring-indigo-400"
                aria-label="GitHub Profile"
              >
                <FaGithub className="text-lg" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 glass-pill flex items-center justify-center text-ghost hover:text-indigo-300 hover:border-ghost/40 transition-all focus-visible:ring-2 focus-visible:ring-indigo-400"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin className="text-lg" />
              </a>
            </motion.div>
          </div>

          {/* Right Profile & Floating Badges Graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="relative flex justify-center items-center"
          >
            {/* Backend Tech Badges floating */}
            <div className="absolute -top-3 -left-4 px-3.5 py-2 glass-pill flex items-center gap-2 z-20 shadow-glass animate-bounce [animation-duration:3.5s]">
              <FaJava className="text-indigo-300 text-xl" />
              <span className="text-xs font-semibold text-ghost">Java</span>
            </div>

            <div className="absolute top-1/4 -right-5 px-3.5 py-2 glass-pill flex items-center gap-2 z-20 shadow-glass animate-bounce [animation-duration:4s] [animation-delay:0.3s]">
              <SiSpringboot className="text-indigo-300 text-xl" />
              <span className="text-xs font-semibold text-ghost">Spring Boot</span>
            </div>

            <div className="absolute -bottom-3 left-4 px-3.5 py-2 glass-pill flex items-center gap-2 z-20 shadow-glass">
              <SiMysql className="text-indigo-200 text-xl" />
              <span className="text-xs font-semibold text-ghost">MySQL</span>
            </div>

            <div className="absolute -bottom-3 -right-2 px-3.5 py-2 glass-pill flex items-center gap-2 z-20 shadow-glass animate-bounce [animation-duration:4.2s] [animation-delay:0.6s]">
              <FaServer className="text-indigo-300 text-lg" />
              <span className="text-xs font-semibold text-ghost">REST APIs</span>
            </div>

            <div className="absolute -top-3 right-6 px-3 py-1.5 glass-pill flex items-center gap-2 z-20 shadow-glass">
              <SiMongodb className="text-indigo-200 text-lg" />
              <span className="text-xs font-semibold text-ghost">MongoDB</span>
            </div>

            {/* Profile Image Glass Container */}
            <div className="w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-3xl overflow-hidden glass p-2.5 shadow-2xl relative group">
              <div className="w-full h-full rounded-2xl overflow-hidden relative">
                <img
                  src={PROFILE_PIC}
                  alt={`${personalInfo.name} Profile`}
                  width="384"
                  height="384"
                  fetchPriority="high"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/40 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Counter Glass Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-16">
          {STATS.map((stat) => (
            <StateInfoCard key={stat.id} count={stat.count} label={stat.label} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;