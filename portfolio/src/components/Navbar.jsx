import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaXmark } from "react-icons/fa6";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Track active section
  useEffect(() => {
    const sections = navLinks.map((item) => document.getElementById(item.href.replace("#", ""))).filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-25% 0px -65% 0px",
        threshold: 0,
      }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#0E0E0E]/85 backdrop-blur-md border-b border-white/[0.08] py-3 sm:py-4 shadow-lg shadow-black/20"
            : "bg-transparent py-5 sm:py-6"
        }`}
      >
        <div className="container mx-auto px-6 max-w-6xl flex items-center justify-between">
          {/* Logo / Name Left */}
          <a
            href="#home"
            className="flex items-center gap-2 group focus-visible:ring-2 focus-visible:ring-[#FF5A1F] rounded-lg p-1"
            aria-label="Madhav Dhyani - Home"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF5A1F] group-hover:scale-125 transition-transform" />
            <span className="font-semibold text-lg tracking-tight text-white">
              Madhav Dhyani
            </span>
          </a>

          {/* Nav Links Right & CTA (Desktop) */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace("#", "");
                return (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className={`text-sm font-medium transition-colors duration-200 py-2 min-h-[44px] inline-flex items-center relative ${
                        isActive
                          ? "text-white font-semibold"
                          : "text-[#8A8A8A] hover:text-white"
                      }`}
                    >
                      {link.label}
                      {isActive && (
                        <motion.span
                          layoutId="active-nav-indicator"
                          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#FF5A1F] rounded-full"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                    </a>
                  </li>
                );
              })}
            </ul>

            {/* White pill "Get in touch" button with orange circular arrow icon */}
            <a
              href="#contact"
              className="btn-pill-white text-sm font-semibold text-[#0E0E0E] bg-white rounded-full pl-5 pr-2 py-2 flex items-center gap-2.5 shadow-sm group hover:bg-neutral-100 transition-all min-h-[44px]"
            >
              <span>Get in touch</span>
              <span className="arrow-icon w-7 h-7 rounded-full bg-[#FF5A1F] text-white flex items-center justify-center transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </a>
          </nav>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-11 h-11 rounded-full bg-[#151515] border border-white/[0.08] flex items-center justify-center text-white focus-visible:ring-2 focus-visible:ring-[#FF5A1F]"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <FaXmark className="text-lg" /> : <FaBars className="text-lg" />}
          </button>
        </div>
      </header>

      {/* Mobile Animated Fullscreen Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-[#0E0E0E]/95 backdrop-blur-xl md:hidden flex flex-col justify-between pt-28 pb-12 px-8"
          >
            <div className="flex flex-col gap-6">
              <span className="text-xs font-semibold tracking-widest uppercase text-[#8A8A8A]">
                Navigation
              </span>
              <ul className="flex flex-col gap-4">
                {navLinks.map((link, idx) => {
                  const isActive = activeSection === link.href.replace("#", "");
                  return (
                    <motion.li
                      key={link.label}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 + 0.1 }}
                    >
                      <a
                        href={link.href}
                        onClick={closeMenu}
                        className={`text-2xl font-bold transition-colors py-2 flex items-center justify-between min-h-[44px] ${
                          isActive ? "text-[#FF5A1F]" : "text-white hover:text-[#FF5A1F]"
                        }`}
                      >
                        <span>{link.label}</span>
                        {isActive && <span className="w-2 h-2 rounded-full bg-[#FF5A1F]" />}
                      </a>
                    </motion.li>
                  );
                })}
              </ul>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="pt-6 border-t border-white/[0.08]"
            >
              <a
                href="#contact"
                onClick={closeMenu}
                className="btn-pill-white w-full text-base font-semibold text-[#0E0E0E] bg-white rounded-full py-3 px-6 flex items-center justify-between shadow-lg"
              >
                <span>Get in touch</span>
                <span className="arrow-icon w-8 h-8 rounded-full bg-[#FF5A1F] text-white flex items-center justify-center">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
