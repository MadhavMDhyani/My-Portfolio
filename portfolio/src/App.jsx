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
  return (
    <div className="bg-indigo-950 text-ghost font-sans selection:bg-indigo-400/35 selection:text-ghost relative isolate min-h-[100dvh] flex flex-col justify-between">
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