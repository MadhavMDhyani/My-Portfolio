import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LOGO from "../assets/images/logo.png";
import { MENU_LINKS } from "../utils/data";
import { FaBars, FaXmark } from "react-icons/fa6";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Hide on scroll-down, show on scroll-up
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 100) {
        if (currentScrollY > lastScrollY && !isOpen) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, isOpen]);

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

  // Active section tracking with IntersectionObserver
  useEffect(() => {
    const sections = MENU_LINKS.map((item) => document.getElementById(item.to)).filter(Boolean);

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
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 py-4 pointer-events-none">
        <motion.nav
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: isVisible ? 0 : -100, opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="pointer-events-auto w-full max-w-4xl"
          aria-label="Main Navigation"
        >
          <div className="glass-pill liquid-refraction px-4 sm:px-6 py-2.5 flex items-center justify-between border border-ghost/20 shadow-glass">
            {/* Logo */}
            <a
              href="#home"
              className="flex items-center gap-2 focus-visible:ring-2 focus-visible:ring-indigo-400 rounded-lg py-1"
              aria-label="Madhav Dhyani Home"
            >
              <img
                src={LOGO}
                alt="Madhav Dhyani Logo"
                className="h-8 w-auto object-contain brightness-125"
                width="32"
                height="32"
              />
              <span className="font-display-title text-xl text-ghost tracking-wide hidden sm:inline-block">
                MADHAV DHYANI
              </span>
            </a>

            {/* Desktop Navigation Links with Stretching Active Indicator */}
            <ul className="hidden md:flex items-center gap-1 lg:gap-2">
              {MENU_LINKS.map((item) => {
                const isActive = activeSection === item.to;
                return (
                  <li key={item.id} className="relative">
                    <a
                      href={`#${item.to}`}
                      className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 block rounded-full focus-visible:ring-2 focus-visible:ring-indigo-400 ${
                        isActive
                          ? "text-ghost font-semibold"
                          : "text-indigo-200 hover:text-ghost"
                      }`}
                    >
                      {item.label}
                      {isActive && (
                        <motion.div
                          layoutId="navbar-active-indicator"
                          className="absolute inset-0 bg-indigo-400/25 border border-indigo-200/30 rounded-full -z-10 shadow-[inset_0_1px_0_rgba(255,255,255,0.45)]"
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 32,
                          }}
                        />
                      )}
                    </a>
                  </li>
                );
              })}
            </ul>

            {/* Right Controls */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Hire Me Desktop Button */}
              <a
                href="#contact"
                className="hidden md:inline-flex btn-primary text-xs uppercase tracking-wider font-semibold py-2.5 px-6 min-h-[44px]"
              >
                Hire Me
              </a>

              {/* Mobile Hamburger Toggle Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden w-11 h-11 rounded-full glass flex items-center justify-center text-ghost hover:text-indigo-200 focus-visible:ring-2 focus-visible:ring-indigo-400"
                aria-label={isOpen ? "Close menu" : "Open menu"}
                aria-expanded={isOpen}
              >
                {isOpen ? <FaXmark className="text-lg" /> : <FaBars className="text-lg" />}
              </button>
            </div>
          </div>
        </motion.nav>
      </header>

      {/* Mobile Menu Glass Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-indigo-950/75 backdrop-blur-md md:hidden flex flex-col justify-center px-6"
            onClick={closeMenu}
          >
            <motion.div
              initial={{ scale: 0.92, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.92, y: 20 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="glass-strong rounded-3xl p-6 border border-ghost/25 shadow-2xl max-w-sm w-full mx-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between pb-4 border-b border-indigo-200/15 mb-4">
                <span className="font-display-title text-2xl text-ghost tracking-wide">
                  MENU
                </span>
                <button
                  onClick={closeMenu}
                  className="w-11 h-11 rounded-full glass flex items-center justify-center text-ghost"
                  aria-label="Close menu"
                >
                  <FaXmark className="text-base" />
                </button>
              </div>

              <ul className="flex flex-col gap-2">
                {MENU_LINKS.map((item) => {
                  const isActive = activeSection === item.to;
                  return (
                    <li key={item.id}>
                      <a
                        href={`#${item.to}`}
                        onClick={closeMenu}
                        className={`w-full min-h-[44px] flex items-center px-4 py-3 rounded-2xl text-base font-medium transition-all ${
                          isActive
                            ? "bg-indigo-400/25 text-ghost border border-indigo-200/30"
                            : "text-indigo-200 hover:text-ghost hover:bg-ghost/10"
                        }`}
                      >
                        {item.label}
                      </a>
                    </li>
                  );
                })}
              </ul>

              <div className="mt-6 pt-4 border-t border-indigo-200/15">
                <a
                  href="#contact"
                  onClick={closeMenu}
                  className="btn-primary w-full text-center justify-center py-3 text-sm uppercase tracking-wider font-semibold"
                >
                  Hire Me
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;