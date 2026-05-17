import { useState, useEffect } from "react";
import AuroraBackground from "@/components/AuroraBackground";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Achievements from "@/components/Achievements";
import Footer from "@/components/Footer";

function App() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div className="min-h-screen bg-[#020617] text-white selection:bg-cyan-500/30 relative" style={{ overflowX: 'clip' }}>
      <AuroraBackground mouseX={mousePos.x} mouseY={mousePos.y} />

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero mouseX={mousePos.x} mouseY={mousePos.y} />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Achievements />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;