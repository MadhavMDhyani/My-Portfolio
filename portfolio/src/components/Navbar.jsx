import { useState, useEffect } from "react";
import { personalInfo } from "../utils/data";
import { FaGithub, FaLinkedin, FaEnvelope, FaBars, FaXmark } from "react-icons/fa6";

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
      const scrollPos = window.scrollY + 120;

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

  return (
    <header className="sticky top-0 z-40 bg-[#FBFBF8] border-b border-[#151515] px-4 sm:px-6 py-2.5 flex items-center justify-between">
      {/* Left: Small Logo Mark */}
      <div className="flex items-center gap-3">
        <a
          href="#home"
          className="w-7 h-7 rounded-full bg-[#F0457E] border border-[#151515] flex items-center justify-center text-white text-xs font-mono font-bold hover:rotate-12 transition-transform shadow-[1px_1px_0_#151515]"
          aria-label="Madhav Dhyani - Home"
        >
          MD
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
              className={`px-3.5 py-1 text-xs font-mono font-bold tracking-wider uppercase transition-all flex items-center gap-1.5 ${
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
          className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#F2C23E] border border-[#151515] flex items-center justify-center text-[#151515] text-xs shadow-[1px_1px_0_#151515] hover:-translate-y-0.5 transition-transform"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>

        {/* Pink round button: GitHub */}
        <a
          href={personalInfo.github}
          target="_blank"
          rel="noopener noreferrer"
          className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#F0457E] border border-[#151515] flex items-center justify-center text-white text-xs shadow-[1px_1px_0_#151515] hover:-translate-y-0.5 transition-transform"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>

        {/* Green round button: Email */}
        <a
          href={`mailto:${personalInfo.email}`}
          className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#1FA971] border border-[#151515] flex items-center justify-center text-white text-xs shadow-[1px_1px_0_#151515] hover:-translate-y-0.5 transition-transform"
          aria-label="Email"
        >
          <FaEnvelope />
        </a>

        {/* Outlined "♥ CONTACT" button */}
        <a
          href="#contact"
          className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-[#151515] text-[#151515] font-mono text-xs font-bold uppercase tracking-wider shadow-[2px_2px_0_#151515] hover:bg-[#F2C23E] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all ml-1 min-h-[32px]"
        >
          <span className="text-[#F0457E]">♥</span>
          <span>CONTACT</span>
        </a>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden w-8 h-8 rounded border border-[#151515] bg-white flex items-center justify-center text-[#151515] text-sm ml-1 shadow-[1px_1px_0_#151515]"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <FaXmark /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-[#FBFBF8] border-b border-[#151515] p-4 flex flex-col gap-2 md:hidden z-50 shadow-lg">
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
                className={`px-4 py-2 font-mono text-xs font-bold tracking-wider uppercase border border-[#151515] flex items-center justify-between ${
                  isActive ? "bg-[#F2C23E] text-[#151515] shadow-[2px_2px_0_#151515]" : "bg-white text-[#151515]"
                }`}
              >
                <span>{tab.label}</span>
                {isActive && <span>{tab.icon}</span>}
              </a>
            );
          })}
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="px-4 py-2 font-mono text-xs font-bold tracking-wider uppercase border border-[#151515] bg-white flex items-center justify-between mt-1 shadow-[2px_2px_0_#151515]"
          >
            <span>CONTACT ME</span>
            <span className="text-[#F0457E]">♥</span>
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
