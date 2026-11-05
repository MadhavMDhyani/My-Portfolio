import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import AboutMe from "./sections/AboutMe";
import Projects from "./sections/Projects";
import ContactMe from "./sections/ContactMe";
import Footer from "./sections/Footer";
import { Analytics } from "@vercel/analytics/react";

const App = () => {
  return (
    <div className="min-h-dvh w-full ruled-sheet font-sans text-[#151515] flex flex-col justify-between overflow-x-clip">
      {/* Full width sticky navbar with inner max-w-7xl container */}
      <Navbar />

      {/* Semantic Main Landmark */}
      <main id="main-content" className="flex-1 w-full overflow-x-clip">
        <Hero />
        <AboutMe />
        <Projects />
        <ContactMe />
      </main>

      {/* Full width footer with inner max-w-7xl container */}
      <Footer />

      {/* Vercel Analytics */}
      <Analytics />
    </div>
  );
};

export default App;
