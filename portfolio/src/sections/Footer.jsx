import { personalInfo } from "../utils/data";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#151515] py-10 sm:py-12 bg-[#FBFBF8] w-full pb-[calc(2.5rem+env(safe-area-inset-bottom,0px))] overflow-x-clip">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 flex flex-col items-center justify-center text-center">
        
        {/* Handwritten "thanks for stopping by" */}
        <p className="font-handwriting text-3xl sm:text-4xl lg:text-5xl text-[#151515] mb-4 select-none">
          thanks for stopping by! ✌️
        </p>

        {/* Social links row: min-h-[44px] touch targets */}
        <div className="flex items-center justify-center gap-6 my-4">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-[#151515] hover:text-[#F0457E] flex items-center gap-1.5 underline underline-offset-4 min-h-[44px] min-w-[44px] p-2"
            aria-label="GitHub Profile"
          >
            <FaGithub className="text-base" />
            <span>GITHUB</span>
          </a>
          <span className="text-neutral-400 select-none">•</span>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-[#151515] hover:text-[#2B4FD8] flex items-center gap-1.5 underline underline-offset-4 min-h-[44px] min-w-[44px] p-2"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin className="text-base" />
            <span>LINKEDIN</span>
          </a>
        </div>

        {/* Mono Copyright Line */}
        <p className="font-mono text-xs text-[#151515]/75 tracking-widest uppercase mt-2">
          © {currentYear} {personalInfo.name.toUpperCase()} • ALL RIGHTS RESERVED
        </p>

      </div>
    </footer>
  );
};

export default Footer;
