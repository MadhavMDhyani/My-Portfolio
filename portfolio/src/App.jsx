import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import AboutMe from "./sections/AboutMe";
import Projects from "./sections/Projects";
import ContactMe from "./sections/ContactMe";
import Footer from "./sections/Footer";
import { Analytics } from "@vercel/analytics/react";

const App = () => {
  return (
    <div className="min-h-[100dvh] p-[6px] sm:p-5 flex justify-center bg-[#8A8A8A] font-sans text-[#151515] selection:bg-[#F2C23E] selection:text-[#151515]">
      {/* Central "Sheet" of Paper with 1px Dark Border and Ruled Lines */}
      <div className="w-full max-w-5xl bg-[#FBFBF8] ruled-sheet border border-[#151515] relative flex flex-col justify-between overflow-x-hidden min-h-[calc(100dvh-12px)] sm:min-h-[calc(100dvh-40px)]">
        
        {/* Top Navbar */}
        <Navbar />

        {/* Semantic Main Content */}
        <main id="main-content" className="flex-1">
          <Hero />
          <AboutMe />
          <Projects />
          <ContactMe />
        </main>

        {/* Sheet Bottom Footer */}
        <Footer />

      </div>

      {/* Vercel Analytics */}
      <Analytics />
    </div>
  );
};

export default App;
