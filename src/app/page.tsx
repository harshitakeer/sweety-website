"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="w-full min-h-screen">
      <Navbar />

      <main className="w-full">
        <Hero />

        {/* Wavy divider */}
        <div className="w-full overflow-hidden">
          <svg viewBox="0 0 1200 40" className="w-full h-8" preserveAspectRatio="none">
            <path
              d="M0 20 Q 150 0, 300 20 T 600 20 T 900 20 T 1200 20"
              fill="none"
              stroke="#FFD4E3"
              strokeWidth="2.5"
            />
          </svg>
        </div>

        <About />

        <div className="w-full overflow-hidden">
          <svg viewBox="0 0 1200 40" className="w-full h-8" preserveAspectRatio="none">
            <path
              d="M0 20 Q 150 40, 300 20 T 600 20 T 900 20 T 1200 20"
              fill="none"
              stroke="#E0D4F7"
              strokeWidth="2.5"
            />
          </svg>
        </div>

        <Projects />

        <div className="w-full overflow-hidden">
          <svg viewBox="0 0 1200 40" className="w-full h-8" preserveAspectRatio="none">
            <path
              d="M0 20 Q 150 0, 300 20 T 600 20 T 900 20 T 1200 20"
              fill="none"
              stroke="#C8F7DC"
              strokeWidth="2.5"
            />
          </svg>
        </div>

        <Contact />
      </main>
    </div>
  );
}
