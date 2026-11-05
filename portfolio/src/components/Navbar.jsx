import { useState, useEffect } from "react";
import { personalInfo } from "../utils/data";
import { FaGithub, FaLinkedin, FaEnvelope, FaBars, FaXmark } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";

const navTabs = [
  { id: "home", label: "HOME", icon: "★" },
  { id: "about", label: "ABOUT", icon: "●" },
  { id: "projects", label: "PROJECTS", icon: "▦" },
];

const Navbar = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navTabs.map((t) => document.getElementById(t.id)).filter(Boolean);
      const scrollPos = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = sections[i];
        if (sec.offsetTop <= scrollPos) {
          setActiveTab(sec.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <header className="sticky top-0 z-40 bg-[#FBFBF8] border-b border-[#151515] w-full pt-[env(safe-area-inset-top,0px)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-2 sm:py-2.5 flex items-center justify-between min-h-[56px]">
        {/* Left: Small Logo Mark */}
        <div className="flex items-center gap-3">
          <a
            href="#home"
            className="min-h-[44px] min-w-[44px] flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#151515]"
            aria-label="Madhav Dhyani - Home"
          >
            <span className="w-8 h-8 rounded-full bg-[#F0457E] border border-[#151515] flex items-center justify-center text-white text-xs font-mono font-bold hover:rotate-12 transition-transform shadow-[1px_1px_0_#151515]">
              MD
            </span>
          </a>
        </div>

        {/* Center: Monospace Uppercase Tabs (Desktop) */}
        <nav className="hidden md:flex items-center gap-2" aria-label="Main Navigation">
          {navTabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <a
                key={tab.id}
                href={`#${tab.id}`}
                onClick={() => setActiveTab(tab.id)}
                className={`min-h-[44px] px-4 py-2 text-xs font-mono font-bold tracking-wider uppercase transition-all flex items-center gap-1.5 ${
                  isActive
                    ? "bg-[#F2C23E] border border-[#151515] text-[#151515] shadow-[2px_2px_0_#151515]"
                    : "text-[#151515]/70 hover:text-[#151515] hover:bg-black/5 border border-transparent"
                }`}
              >
                {isActive && <span>{tab.icon}</span>}
                <span>{tab.label}</span>
              </a>
            );
          })}
        </nav>

        {/* Right Side: Round Social Icons + Contact Button */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          {/* Yellow round button: LinkedIn */}
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-[44px] min-w-[44px] flex items-center justify-center text-[#151515] focus-visible:outline-none"
            aria-label="LinkedIn Profile"
          >
            <span className="w-8 h-8 rounded-full bg-[#F2C23E] border border-[#151515] flex items-center justify-center text-xs shadow-[1px_1px_0_#151515] hover:-translate-y-0.5 transition-transform">
              <FaLinkedin />
            </span>
          </a>

          {/* Pink round button: GitHub */}
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-[44px] min-w-[44px] flex items-center justify-center text-white focus-visible:outline-none"
            aria-label="GitHub Profile"
          >
            <span className="w-8 h-8 rounded-full bg-[#F0457E] border border-[#151515] flex items-center justify-center text-xs shadow-[1px_1px_0_#151515] hover:-translate-y-0.5 transition-transform">
              <FaGithub />
            </span>
          </a>

          {/* Green round button: Email */}
          <a
            href={`mailto:${personalInfo.email}`}
            className="min-h-[44px] min-w-[44px] flex items-center justify-center text-white focus-visible:outline-none"
            aria-label="Send Email"
          >
            <span className="w-8 h-8 rounded-full bg-[#1FA971] border border-[#151515] flex items-center justify-center text-xs shadow-[1px_1px_0_#151515] hover:-translate-y-0.5 transition-transform">
              <FaEnvelope />
            </span>
          </a>

          {/* Outlined "♥ CONTACT" button (Desktop) */}
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 bg-white border border-[#151515] text-[#151515] font-mono text-xs font-bold uppercase tracking-wider shadow-[2px_2px_0_#151515] hover:bg-[#F2C23E] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all ml-1 min-h-[44px]"
          >
            <span className="text-[#F0457E]">♥</span>
            <span>CONTACT</span>
          </a>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden min-h-[44px] min-w-[44px] rounded border border-[#151515] bg-white flex items-center justify-center text-[#151515] text-base ml-1 shadow-[1px_1px_0_#151515] active:translate-x-0.5 active:translate-y-0.5"
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <FaXmark /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Animated Dropdown Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="border-t border-[#151515] bg-[#FBFBF8] overflow-hidden md:hidden shadow-xl"
          >
            <div className="px-4 py-5 flex flex-col gap-3">
              {/* Navigation Tabs */}
              <div className="flex flex-col gap-2">
                {navTabs.map((tab) => {
                  const isActive = activeTab === tab.id;
                  return (
                    <a
                      key={tab.id}
                      href={`#${tab.id}`}
                      onClick={() => {
                        setActiveTab(tab.id);
                        setMobileMenuOpen(false);
                      }}
                      className={`min-h-[44px] px-4 py-2.5 font-mono text-xs font-bold tracking-wider uppercase border border-[#151515] flex items-center justify-between ${
                        isActive
                          ? "bg-[#F2C23E] text-[#151515] shadow-[2px_2px_0_#151515]"
                          : "bg-white text-[#151515]"
                      }`}
                    >
                      <span>{tab.label}</span>
                      {isActive && <span>{tab.icon}</span>}
                    </a>
                  );
                })}
              </div>

              {/* Social Icons inside Dropdown */}
              <div className="flex items-center justify-around py-2 border-y border-[#151515]/20">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="min-h-[44px] min-w-[44px] flex items-center justify-center font-mono text-xs font-bold gap-2 text-[#151515]"
                >
                  <span className="w-8 h-8 rounded-full bg-[#F2C23E] border border-[#151515] flex items-center justify-center shadow-[1px_1px_0_#151515]">
                    <FaLinkedin />
                  </span>
                  <span>LinkedIn</span>
                </a>

                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="min-h-[44px] min-w-[44px] flex items-center justify-center font-mono text-xs font-bold gap-2 text-[#151515]"
                >
                  <span className="w-8 h-8 rounded-full bg-[#F0457E] border border-[#151515] flex items-center justify-center text-white shadow-[1px_1px_0_#151515]">
                    <FaGithub />
                  </span>
                  <span>GitHub</span>
                </a>

                <a
                  href={`mailto:${personalInfo.email}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="min-h-[44px] min-w-[44px] flex items-center justify-center font-mono text-xs font-bold gap-2 text-[#151515]"
                >
                  <span className="w-8 h-8 rounded-full bg-[#1FA971] border border-[#151515] flex items-center justify-center text-white shadow-[1px_1px_0_#151515]">
                    <FaEnvelope />
                  </span>
                  <span>Email</span>
                </a>
              </div>

              {/* Contact Button */}
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="min-h-[44px] px-4 py-2.5 font-mono text-xs font-bold tracking-wider uppercase border border-[#151515] bg-white flex items-center justify-center gap-2 shadow-[2px_2px_0_#151515] active:translate-x-0.5 active:translate-y-0.5"
              >
                <span className="text-[#F0457E]">♥</span>
                <span>CONTACT ME</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
