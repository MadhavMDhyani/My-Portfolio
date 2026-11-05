import { useState } from "react";
import { SKILL_TABS, skills } from "../utils/data";
import Tabs from "../components/Tabs";
import SkillCard from "../components/SkillCard";
import { motion, AnimatePresence } from "framer-motion";

const TechnicalProficiency = () => {
  const [tabData, setTabData] = useState(skills);
  const [activeTab, setActiveTab] = useState("all");

  const handleTabValueChange = (value) => {
    setActiveTab(value);
    if (value === "all") {
      setTabData(skills);
    } else {
      const updatedList = skills.filter((skill) => skill.type === value);
      setTabData(updatedList);
    }
  };

  return (
    <section id="skills" className="py-16 relative z-10">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-6xl">
        
        {/* Tech Strip: Rounded Dark Bar under Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="bg-[#151515] border border-white/[0.08] rounded-2xl md:rounded-full py-3.5 px-6 flex flex-col md:flex-row items-center gap-4 overflow-hidden shadow-lg mb-20"
        >
          <div className="flex items-center gap-2.5 flex-shrink-0">
            <span className="w-2 h-2 rounded-full bg-[#FF5A1F]" />
            <span className="text-xs font-semibold uppercase tracking-widest text-white whitespace-nowrap">
              Tech I work with
            </span>
          </div>

          <div className="hidden md:block w-px h-5 bg-white/[0.1] flex-shrink-0" />

          {/* Infinite Marquee of Real Stack Names & Monochrome Icons */}
          <div
            className="w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]"
            aria-label="Technologies Marquee"
          >
            <div className="flex w-max gap-8 animate-marquee hover:[animation-play-state:paused] motion-reduce:[animation-play-state:paused] items-center cursor-default">
              {skills.map((skill) => {
                const Icon = skill.icon;
                return (
                  <div
                    key={`tech-a-${skill.id}`}
                    className="flex items-center gap-2 text-sm font-medium text-[#D4D4D8] hover:text-white transition-colors select-none"
                  >
                    <Icon className="text-base text-[#8A8A8A]" aria-hidden="true" />
                    <span>{skill.name}</span>
                  </div>
                );
              })}
              {/* Duplicate for seamless infinite loop */}
              {skills.map((skill) => {
                const Icon = skill.icon;
                return (
                  <div
                    key={`tech-b-${skill.id}`}
                    aria-hidden="true"
                    className="flex items-center gap-2 text-sm font-medium text-[#D4D4D8] hover:text-white transition-colors select-none"
                    tabIndex={-1}
                  >
                    <Icon className="text-base text-[#8A8A8A]" aria-hidden="true" />
                    <span>{skill.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-[#FF5A1F]">
            Expertise &amp; Tooling
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-2 tracking-tight">
            Technical Proficiency
          </h2>
          <p className="text-sm sm:text-base text-[#8A8A8A] mt-3 leading-relaxed">
            Specialized backend skill set in Java, Spring Boot, and database architectures, supported by modern tooling and full-stack development experience.
          </p>
        </motion.div>

        {/* Category Filter Tabs */}
        <Tabs
          tabList={SKILL_TABS}
          activeTab={activeTab}
          onChange={handleTabValueChange}
        />

        {/* Dynamic Skill Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 min-h-[300px]"
        >
          <AnimatePresence mode="popLayout">
            {tabData.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 10 }}
                  transition={{ duration: 0.35, delay: index * 0.04 }}
                  className="h-full"
                >
                  <SkillCard
                    icon={<Icon />}
                    skillName={skill.name}
                    level={skill.level}
                    description={skill.description}
                  />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

export default TechnicalProficiency;
