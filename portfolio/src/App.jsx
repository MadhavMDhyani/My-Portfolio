import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import AboutMe from "./sections/AboutMe";
import TechnicalProficiency from "./sections/TechnicalProficiency";
import Projects from "./sections/Projects";
import ContactMe from "./sections/ContactMe";
import Footer from "./sections/Footer";
import RefractionFilter from "./components/RefractionFilter";
import BackgroundBlobs from "./components/BackgroundBlobs";
import ScrollProgressBar from "./components/ScrollProgressBar";
import CustomCursor from "./components/CustomCursor";
import IntroReveal from "./components/IntroReveal";
import { Analytics } from "@vercel/analytics/react";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    try {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme) {
        return savedTheme === "dark";
      }
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    } catch {
      return true;
    }
  });

  useEffect(() => {
    try {
      if (isDarkMode) {
        document.documentElement.classList.add("dark");
        document.documentElement.classList.remove("light");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        document.documentElement.classList.add("light");
        localStorage.setItem("theme", "light");
      }
    } catch {
      // safe fallback for restricted iframe/storage
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <div className="bg-indigo-950 text-ghost font-sans selection:bg-indigo-400/35 selection:text-ghost relative min-h-[100dvh] flex flex-col justify-between">
      {/* SVG Refraction Filter Definition */}
      <RefractionFilter />

      {/* Top Scroll Progress Bar */}
      <ScrollProgressBar />

      {/* Desktop Custom Pointer Follower */}
      <CustomCursor />

      {/* Session Intro Name Reveal */}
      <IntroReveal />

      {/* Ambient Liquid Blobs & Noise Background */}
      <BackgroundBlobs />

      {/* Floating Pill Header & Navigation */}
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />

      {/* Semantic Main Landmark */}
      <main id="main-content" className="flex-1">
        <Hero />
        <AboutMe />
        <TechnicalProficiency />
        <Projects />
        <ContactMe />
      </main>

      {/* Footer Landmark */}
      <Footer />

      {/* Vercel Analytics */}
      <Analytics />
    </div>
  );
};

export default App;