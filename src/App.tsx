import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Experience } from "./components/Experience";
// import { Contact } from './components/Contact';
import { Navigation } from "./components/Navigation";
import { ContactForm } from "./components/ContactForm";
import { Plane, Circle } from "lucide-react";

function App() {
  const [activeSection, setActiveSection] = useState("home");
  // Framer Motion for smooth icon movement
  const x = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 120, damping: 20 });

  useEffect(() => {
    const handleScroll = () => {
      // Section highlight logic
      const sections = [
        "home",
        "about",
        "skills",
        "projects",
        "experience",
        "contact",
      ];

      const scrollPosition = window.scrollY + 100;
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
      // Sliding icon logic (global scroll progress)
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollY = window.scrollY;
      const progress = docHeight > 0 ? scrollY / docHeight : 0;
      // Calculate available width: viewport - icon width (40px) - 3rem margin (1.5rem each side)
      const availableWidth = window.innerWidth - 40 - 48;
      x.set(progress * availableWidth);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [x]);

  return (
    <div className="min-h-screen bg-white text-gray-900 relative overflow-x-clip">
      <Navigation activeSection={activeSection} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        {/* <Contact /> */}
        <ContactForm />
      </main>
      
      <motion.div
        style={{
          position: "fixed",
          left: 24, // 1.5rem
          bottom: 24, // 1.5rem
          x: springX,
          zIndex: 50,
          pointerEvents: "none",
        }}
        aria-hidden="true"
      >
        <span
          style={{
            position: "relative",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: 40,
            height: 40,
          }}
        >
          
          <Plane
            size={40}
            stroke ="#288c92"
            fill="#3bf0ed"
            style={{ transform: "rotate(45deg)" }}
          />
        </span>
      </motion.div>
    </div>
  );
}

export default App;
