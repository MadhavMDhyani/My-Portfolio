import { personalInfo } from "../utils/data";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#151515] py-10 px-6 sm:px-10 bg-[#FBFBF8] text-center">
      {/* Handwritten "thanks for stopping by" */}
      <p className="font-handwriting text-3xl sm:text-4xl text-[#151515] mb-4">
        thanks for stopping by! ✌️
      </p>

      {/* Social links row */}
      <div className="flex items-center justify-center gap-4 mb-6">
        <a
          href={personalInfo.github}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-xs font-bold uppercase tracking-wider text-[#151515] hover:text-[#F0457E] flex items-center gap-1.5 underline underline-offset-4"
        >
          <FaGithub />
          <span>GITHUB</span>
        </a>
        <span className="text-neutral-400">•</span>
        <a
          href={personalInfo.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-xs font-bold uppercase tracking-wider text-[#151515] hover:text-[#2B4FD8] flex items-center gap-1.5 underline underline-offset-4"
        >
          <FaLinkedin />
          <span>LINKEDIN</span>
        </a>
      </div>

      {/* Mono Copyright Line */}
      <p className="font-mono text-[11px] sm:text-xs text-[#151515]/70 tracking-widest uppercase">
        © {currentYear} {personalInfo.name.toUpperCase()} • ALL RIGHTS RESERVED
      </p>
    </footer>
  );
};

export default Footer;
