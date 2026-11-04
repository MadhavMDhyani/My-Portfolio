import { personalInfo } from "../utils/data";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.08] py-10 bg-[#0E0E0E] text-[#8A8A8A] text-sm relative z-10">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#FF5A1F]" />
          <span className="text-white font-semibold">{personalInfo.name}</span>
          <span className="text-xs text-[#8A8A8A]">• {personalInfo.role}</span>
        </div>

        <p className="text-xs text-[#8A8A8A]">
          © {currentYear} {personalInfo.name}. All rights reserved.
        </p>

        <div className="flex items-center gap-4">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#8A8A8A] hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-[#FF5A1F] rounded p-1"
            aria-label="GitHub Profile"
          >
            <FaGithub className="text-lg" />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#8A8A8A] hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-[#FF5A1F] rounded p-1"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin className="text-lg" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
