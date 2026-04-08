"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div style={{ width: "100%", minHeight: "100vh" }}>
      <Navbar />

      <main style={{ width: "100%" }}>
        <Hero />

        {/* Clean divider */}
        <div style={{ maxWidth: 860, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ height: 1, background: "linear-gradient(90deg, transparent, rgba(255,107,157,0.15), transparent)" }} />
        </div>

        <About />

        <div style={{ maxWidth: 860, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ height: 1, background: "linear-gradient(90deg, transparent, rgba(167,139,250,0.15), transparent)" }} />
        </div>

        <Projects />

        <div style={{ maxWidth: 860, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ height: 1, background: "linear-gradient(90deg, transparent, rgba(52,211,153,0.15), transparent)" }} />
        </div>

        <Contact />
      </main>
    </div>
  );
}
