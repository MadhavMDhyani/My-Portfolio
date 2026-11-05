import { motion } from "framer-motion";
import PROFILE_PIC from "../assets/profile.jpg";
import { personalInfo, skills } from "../utils/data";

const skillColors = [
  { bg: "bg-[#F2C23E]", text: "text-[#151515]", emojiBg: "bg-[#151515] text-[#F2C23E]", defaultEmoji: "☕" },
  { bg: "bg-[#A8DEC0]", text: "text-[#151515]", emojiBg: "bg-[#1FA971] text-white", defaultEmoji: "🍃" },
  { bg: "bg-[#F0457E]", text: "text-white", emojiBg: "bg-white text-[#F0457E]", defaultEmoji: "⚡" },
  { bg: "bg-[#2B4FD8]", text: "text-white", emojiBg: "bg-white text-[#2B4FD8]", defaultEmoji: "🐬" },
  { bg: "bg-[#1FA971]", text: "text-white", emojiBg: "bg-[#F2C23E] text-[#151515]", defaultEmoji: "🐳" },
  { bg: "bg-[#F0602A]", text: "text-white", emojiBg: "bg-white text-[#F0602A]", defaultEmoji: "⚛️" },
];

const emojiMap = {
  Java: "☕",
  "Spring Boot": "🌱",
  MySQL: "🐬",
  PostgreSQL: "🐘",
  MongoDB: "🍃",
  React: "⚛️",
  JavaScript: "⚡",
  HTML5: "🌐",
  CSS3: "🎨",
  "Tailwind CSS": "🌊",
  Vite: "⚡",
  Git: "🔀",
  Docker: "🐳",
};

const AboutMe = () => {
  return (
    <section id="about" className="relative pt-6 pb-20 sm:pb-24 w-full overflow-x-clip">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* 3. Curved Hand-Drawn Divider Line & "about me!" Label */}
        <div className="relative mb-12 sm:mb-16">
          <svg
            viewBox="0 0 1000 60"
            preserveAspectRatio="none"
            className="w-full h-8 sm:h-12 text-[#151515]/80 pointer-events-none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M 0,35 Q 250,10 500,32 T 1000,20"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeDasharray="4 3"
            />
          </svg>

          <div className="absolute -top-3 left-4 sm:left-10 rotate-[-5deg] select-none">
            <span className="font-handwriting text-2xl sm:text-3xl text-[#151515] tracking-wide bg-[#FBFBF8] px-2 py-0.5 border border-[#151515]/30 shadow-sm">
              about me!
            </span>
          </div>
        </div>

        {/* 4. Boxed Handwritten Title "what's up" */}
        <div className="flex justify-center mb-10 sm:mb-12">
          <div className="border border-[#151515] bg-white px-5 py-1.5 shadow-[2px_2px_0_#151515] rotate-[-1deg]">
            <span className="font-handwriting text-2xl sm:text-3xl text-[#151515] tracking-wider font-semibold">
              what's up
            </span>
          </div>
        </div>

        {/* Main About Layout:
            Stacked order below lg:
            1. profile polaroid
            2. paragraph
            3. workspace polaroid
            Side-by-side on lg+
        */}
        <div className="relative flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-8 my-6">
          
          {/* 1. Profile Polaroid (Left on lg+, Top below lg) */}
          <motion.div
            initial={{ opacity: 0, y: -20, rotate: -6 }}
            whileInView={{ opacity: 1, y: 0, rotate: -2 }}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ rotate: 0, scale: 1.02 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative bg-white p-3 pb-7 border border-[#151515] shadow-[4px_4px_0_#151515] w-full max-w-[260px] flex-shrink-0 z-20 cursor-pointer rotate-[-2deg]"
          >
            {/* Tape on top corners */}
            <div className="tape-strip w-12 h-5 -top-2.5 -left-1 rotate-[-22deg]" />
            <div className="tape-strip w-12 h-5 -top-2.5 -right-1 rotate-[22deg]" />

            <div className="w-full aspect-[4/5] overflow-hidden bg-neutral-100 border border-[#151515]/20">
              <img
                src={PROFILE_PIC}
                alt="Madhav polaroid"
                width="240"
                height="300"
                className="w-full h-full object-cover object-top select-none"
              />
            </div>

            <div className="mt-3 text-center">
              <span className="font-handwriting text-xl sm:text-2xl text-[#151515]">
                2026 ✨
              </span>
            </div>
          </motion.div>

          {/* 2. Center Caveat Paragraph with clamp(1.25rem, 4.5vw, 1.75rem) & tighter line-height */}
          <div className="flex-1 max-w-2xl px-2 sm:px-6 text-center select-none z-10">
            <p className="font-handwriting text-[clamp(1.25rem,4.5vw,1.75rem)] text-[#151515] leading-[1.45] tracking-wide">
              I'm a backend developer who gets a little too excited about making complex systems feel effortless. 
              <span className="inline-block mx-1">✨</span> 
              I care about the small details, the edge cases everyone forgets, and shipping resilient software that genuinely keeps production fast and reliable. 
              <span className="inline-block mx-1">☕</span>
            </p>
          </div>

          {/* 3. Workspace Polaroid (Right on lg+, Bottom below lg) */}
          <motion.div
            initial={{ opacity: 0, y: -20, rotate: 6 }}
            whileInView={{ opacity: 1, y: 0, rotate: 2 }}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ rotate: 0, scale: 1.02 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="relative bg-white p-3 pb-7 border border-[#151515] shadow-[4px_4px_0_#151515] w-full max-w-[260px] flex-shrink-0 z-20 cursor-pointer rotate-[2deg]"
          >
            {/* Tape on top corners */}
            <div className="tape-strip w-12 h-5 -top-2.5 -left-1 rotate-[-20deg]" />
            <div className="tape-strip w-12 h-5 -top-2.5 -right-1 rotate-[24deg]" />

            <div className="w-full aspect-[4/5] overflow-hidden bg-[#1C1815] border border-[#151515]/20 p-3.5 flex flex-col justify-between text-white font-mono text-[10px]">
              <div className="flex items-center gap-1.5 border-b border-white/10 pb-1.5">
                <span className="w-2 h-2 rounded-full bg-[#F0457E]" />
                <span className="w-2 h-2 rounded-full bg-[#F2C23E]" />
                <span className="w-2 h-2 rounded-full bg-[#1FA971]" />
                <span className="ml-1 text-white/50 text-[9px]">workspace.java</span>
              </div>
              
              <div className="space-y-1 text-white/80 py-2 leading-tight">
                <p><span className="text-[#F0457E]">@RestController</span></p>
                <p><span className="text-[#A8DEC0]">class</span> DeskSetup &#123;</p>
                <p className="pl-2 text-white/50">// Spring Boot + JVM</p>
                <p className="pl-2">DoubleDisplay monitor;</p>
                <p className="pl-2">MechanicalKeyboard kb;</p>
                <p className="pl-2 text-[#F2C23E]">Coffee coffee;</p>
                <p>&#125;</p>
              </div>

              <div className="bg-white/5 p-1 rounded text-center text-[9px] text-[#A8DEC0]">
                BUILD SUCCESSFUL [120ms]
              </div>
            </div>

            <div className="mt-3 text-center">
              <span className="font-handwriting text-xl sm:text-2xl text-[#151515]">
                my workspace 💻
              </span>
            </div>
          </motion.div>

        </div>

        {/* Below: Skill Stickers with Torn / Zigzag Edges in Rotating Colours */}
        <div className="mt-14 sm:mt-16 max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {skills.map((skill, index) => {
              const colorScheme = skillColors[index % skillColors.length];
              const emoji = emojiMap[skill.name] || colorScheme.defaultEmoji;
              const rotation = index % 2 === 0 ? -1 : 1;

              return (
                <motion.div
                  key={skill.id}
                  initial={{ opacity: 0, scale: 0.85, y: 12 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.35, delay: index * 0.03 }}
                  whileHover={{ rotate: rotation * -2, scale: 1.05 }}
                  className={`zigzag-sticker ${colorScheme.bg} ${colorScheme.text} border border-[#151515] px-2.5 py-1.5 sm:px-4 sm:py-2 font-mono font-bold text-[11px] sm:text-xs uppercase flex items-center gap-2 shadow-[2px_2px_0_#151515] cursor-default select-none`}
                  style={{ transform: `rotate(${rotation}deg)` }}
                >
                  <span className={`w-4 h-4 rounded-sm ${colorScheme.emojiBg} flex items-center justify-center text-[10px] shadow-sm flex-shrink-0`}>
                    {emoji}
                  </span>
                  <span>{skill.name}</span>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutMe;
