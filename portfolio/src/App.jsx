import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import AboutMe from "./sections/AboutMe";
import TechnicalProficiency from "./sections/TechnicalProficiency";
import Projects from "./sections/Projects";
import ContactMe from "./sections/ContactMe";
import Footer from "./sections/Footer";
import ScrollProgressBar from "./components/ScrollProgressBar";
import { Analytics } from "@vercel/analytics/react";

const App = () => {
  return (
    <div className="bg-[#0E0E0E] text-white font-sans selection:bg-[#FF5A1F]/35 selection:text-white relative isolate min-h-[100dvh] flex flex-col justify-between">
      {/* Top Scroll Progress Bar */}
      <ScrollProgressBar />

      {/* Sticky Header & Navigation */}
      <Navbar />

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
