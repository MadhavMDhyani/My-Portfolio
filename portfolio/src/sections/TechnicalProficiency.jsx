import { useState } from "react";
import { SKILL_TABS, skills } from "../utils/data";
import Tabs from "../components/Tabs";
import SkillCard from "../components/SkillCard";
import TiltCard from "../components/TiltCard";
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

  // Double skills list for infinite marquee looping
  const marqueeSkills = [...skills, ...skills];

  return (
    <section id="skills" className="py-20 relative z-10 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-indigo-300">
            Expertise &amp; Tooling
          </span>
          <h2 className="font-display-title text-4xl sm:text-5xl md:text-6xl text-ghost mt-2 tracking-wide">
            Technical Proficiency
          </h2>
          <p className="text-sm sm:text-base text-indigo-200/90 mt-4 leading-relaxed">
            A versatile developer with hands-on expertise in modern technologies, tools, and frameworks, dedicated to building efficient, scalable, and user-centric solutions.
          </p>
        </motion.div>

        {/* Infinite Tech Marquee */}
        <div className="relative mt-12 mb-8 py-4 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex w-max gap-4 animate-marquee hover:[animation-play-state:paused] cursor-pointer">
            {marqueeSkills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div
                  key={`${skill.id}-${index}`}
                  className="glass-pill px-5 py-2.5 flex items-center gap-3 border border-ghost/20 shadow-glass hover:border-ghost/50 transition-all select-none"
                >
                  <Icon className="text-indigo-300 text-lg flex-shrink-0" />
                  <span className="text-sm font-semibold text-ghost whitespace-nowrap">
                    {skill.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Category Tabs */}
        <Tabs
          tabList={SKILL_TABS}
          activeTab={activeTab}
          onChange={handleTabValueChange}
        />

        {/* Dynamic Skill Cards Grid with 3D Tilt */}
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
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 15 }}
                  transition={{ duration: 0.35, delay: index * 0.05 }}
                  className="h-full"
                >
                  <TiltCard maxTilt={6} className="h-full">
                    <SkillCard
                      icon={<Icon />}
                      skillName={skill.name}
                      progress={skill.progress}
                      description={skill.description}
                    />
                  </TiltCard>
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