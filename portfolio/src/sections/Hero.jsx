import { motion } from "framer-motion";
import PROFILE_PIC from "../assets/profile.jpg";
import { personalInfo } from "../utils/data";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-[calc(100dvh-56px)] w-full flex flex-col justify-center items-center text-center py-10 sm:py-16 overflow-x-clip"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative flex flex-col items-center justify-center">
        
        {/* Floating Avatar Stickers (Desktop md+ only, hidden on mobile) */}
        <motion.div
          animate={{ y: [-6, 6, -6] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="hidden md:flex absolute left-4 lg:left-12 xl:left-20 top-1/4 -translate-y-1/2 flex-col items-center pointer-events-none select-none z-10"
        >
          <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-full border-2 border-[#151515] p-0.5 bg-[#F0602A] shadow-[3px_3px_0_#151515] overflow-hidden -rotate-6">
            <img
              src={PROFILE_PIC}
              alt="Madhav avatar sticker"
              width="64"
              height="64"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [6, -6, 6] }}
          transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="hidden md:flex absolute right-4 lg:right-12 xl:right-20 top-1/3 -translate-y-1/2 flex-col items-center pointer-events-none select-none z-10"
        >
          <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-full border-2 border-[#151515] p-0.5 bg-[#F0602A] shadow-[3px_3px_0_#151515] overflow-hidden rotate-6">
            <img
              src={PROFILE_PIC}
              alt="Madhav avatar sticker"
              width="64"
              height="64"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </motion.div>

        {/* Top Handwritten "my name is" + Squiggle */}
        <div className="flex flex-col items-center justify-center mb-4 sm:mb-6 select-none">
          <span className="font-handwriting text-2xl sm:text-3xl lg:text-4xl text-[#151515] tracking-wide">
            my name is
          </span>
          <svg
            width="80"
            height="12"
            viewBox="0 0 80 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mt-0.5 text-[#151515]"
            aria-hidden="true"
          >
            <path
              d="M2 7C14 2 24 10 38 6C52 2 64 9 78 5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Mobile Stickers Row (Top: below md) */}
        <div className="flex md:hidden flex-wrap items-center justify-center gap-2 mb-3 max-w-sm">
          <span className="bg-[#A8DEC0] text-[#151515] border border-[#151515] px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider shadow-[1px_1px_0_#151515] -rotate-2 select-none">
            MADE THINGS
          </span>
          <span className="bg-[#F2C23E] text-[#151515] border border-[#151515] px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider shadow-[1px_1px_0_#151515] rotate-2 select-none">
            SWEAT THE DETAILS
          </span>
        </div>

        {/* Main Name Box Container with Flanking Stickers on Desktop */}
        <div className="relative inline-block mx-auto max-w-full my-2">
          
          {/* Desktop Absolute Sticker 1 (Top Left): "MADE THINGS" */}
          <motion.div
            initial={{ scale: 0, rotate: -15 }}
            animate={{ scale: 1, rotate: -3 }}
            transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.15 }}
            whileHover={{ rotate: 3, scale: 1.05 }}
            className="hidden md:block absolute -top-8 -left-16 lg:-left-24 z-20"
          >
            <span className="bg-[#A8DEC0] text-[#151515] border border-[#151515] px-3.5 py-1 rounded-full text-xs font-mono font-bold tracking-wider shadow-[2px_2px_0_#151515] inline-block cursor-default select-none">
              MADE THINGS
            </span>
          </motion.div>

          {/* Desktop Absolute Sticker 2 (Top Right): "SWEAT THE DETAILS" */}
          <motion.div
            initial={{ scale: 0, rotate: 15 }}
            animate={{ scale: 1, rotate: 3 }}
            transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.2 }}
            whileHover={{ rotate: -3, scale: 1.05 }}
            className="hidden md:block absolute -top-8 -right-20 lg:-right-28 z-20"
          >
            <span className="bg-[#F2C23E] text-[#151515] border border-[#151515] px-3.5 py-1 rounded-full text-xs font-mono font-bold tracking-wider shadow-[2px_2px_0_#151515] inline-block cursor-default select-none">
              SWEAT THE DETAILS
            </span>
          </motion.div>

          {/* Central Hand-Drawn Orange Outline Box with Large Fluid Pixel Name */}
          <div className="relative px-6 sm:px-10 md:px-14 lg:px-16 py-3 sm:py-5 md:py-6 flex items-center justify-center">
            {/* Animated Hand-Drawn Orange Rectangle Outline */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.path
                d="M 2,4 C 30,2 70,3 98,3 C 99,25 97,75 98,96 C 70,97 30,96 2,97 C 3,75 1,25 2,4 Z"
                stroke="#F0602A"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.1, ease: "easeInOut" }}
              />
            </svg>

            {/* Stepped Pixel Reveal of Name with Clamp sizing */}
            <h1 className="font-pixel text-[clamp(2.5rem,11vw,9rem)] font-bold tracking-wider text-[#151515] uppercase select-none stepped-reveal leading-none">
              MADHAV
            </h1>
          </div>

          {/* Desktop Absolute Sticker 3 (Bottom Left): "Backend Developer" with Arrow */}
          <motion.div
            initial={{ scale: 0, rotate: -10 }}
            animate={{ scale: 1, rotate: -2 }}
            transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.25 }}
            whileHover={{ rotate: 2, scale: 1.05 }}
            className="hidden md:flex items-center gap-1.5 absolute -bottom-8 -left-20 lg:-left-32 z-20"
          >
            <span className="bg-[#F2C23E] text-[#151515] border border-[#151515] px-3 py-1 text-xs font-mono font-bold shadow-[2px_2px_0_#151515] select-none">
              {personalInfo.role}
            </span>
            <svg width="24" height="20" viewBox="0 0 24 20" fill="none" className="text-[#151515]">
              <path
                d="M2 14C8 10 14 6 22 4M22 4L16 2M22 4L19 10"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>

          {/* Desktop Absolute Sticker 4 (Bottom Right): Location with Arrow */}
          <motion.div
            initial={{ scale: 0, rotate: 10 }}
            animate={{ scale: 1, rotate: 2 }}
            transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.3 }}
            whileHover={{ rotate: -2, scale: 1.05 }}
            className="hidden md:flex items-center gap-1.5 absolute -bottom-8 -right-20 lg:-right-32 z-20"
          >
            <svg width="24" height="20" viewBox="0 0 24 20" fill="none" className="text-[#151515]">
              <path
                d="M22 14C16 10 10 6 2 4M2 4L8 2M2 4L5 10"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="bg-[#A8DEC0] text-[#151515] border border-[#151515] px-3 py-1 text-xs font-mono font-bold shadow-[2px_2px_0_#151515] select-none">
              {personalInfo.location}
            </span>
          </motion.div>

        </div>

        {/* Mobile Stickers Row (Bottom: below md) */}
        <div className="flex md:hidden flex-wrap items-center justify-center gap-2 mt-3 max-w-sm">
          <span className="bg-[#F2C23E] text-[#151515] border border-[#151515] px-3 py-1 text-xs font-mono font-bold shadow-[1px_1px_0_#151515] -rotate-1 select-none">
            {personalInfo.role}
          </span>
          <span className="bg-[#A8DEC0] text-[#151515] border border-[#151515] px-3 py-1 text-xs font-mono font-bold shadow-[1px_1px_0_#151515] rotate-1 select-none">
            {personalInfo.location}
          </span>
        </div>

        {/* Monospace Line with Blue Dot: OPEN TO NEW WORK */}
        <div className="mt-8 sm:mt-10 flex items-center justify-center gap-2 font-mono text-xs sm:text-sm tracking-widest uppercase font-bold text-[#151515] px-4">
          <span className="w-2.5 h-2.5 rounded-full bg-[#2B4FD8] inline-block shadow-[1px_1px_0_#151515] flex-shrink-0" />
          <span>OPEN TO NEW WORK AND GOOD PROBLEMS</span>
        </div>

        {/* Main Headline with clamp(1.5rem, 5vw, 3.5rem) and Sticker Emojis */}
        <h2 className="mt-5 text-[clamp(1.5rem,5vw,3.5rem)] font-semibold text-[#151515] tracking-tight max-w-4xl mx-auto leading-snug px-4">
          I build backend systems that stay out of your way.{" "}
          <span className="inline-block hover:scale-125 transition-transform cursor-default" title="Target">
            🎯
          </span>{" "}
          <span className="inline-block hover:scale-125 transition-transform cursor-default text-[#F0457E]" title="Flower">
            🌸
          </span>
        </h2>

        {/* Black CONTACT ME button with blue square icon: Full width on phones, sm:w-auto */}
        <div className="mt-8 sm:mt-10 flex justify-center w-full px-4">
          <a
            href="#contact"
            className="btn-brutal bg-[#151515] text-white px-8 py-3.5 font-mono text-xs sm:text-sm font-bold uppercase tracking-wider inline-flex items-center justify-center gap-3 transition-all min-h-[44px] w-full sm:w-auto active:translate-x-1 active:translate-y-1"
          >
            <span className="w-3.5 h-3.5 bg-[#2B4FD8] inline-block border border-white/30 flex-shrink-0" />
            <span>CONTACT ME</span>
          </a>
        </div>

      </div>
    </section>
  );
};

export default Hero;
