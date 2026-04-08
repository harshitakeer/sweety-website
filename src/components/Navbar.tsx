"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MagneticButton from "./MagneticButton";

const navItems = [
  { name: "about", href: "#about" },
  { name: "projects", href: "#projects" },
  { name: "contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          padding: scrolled ? "12px 0" : "20px 0",
          background: scrolled ? "rgba(255,248,240,0.85)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(27,42,74,0.06)" : "none",
          transition: "all 0.4s",
        }}
      >
        <div style={{ maxWidth: 860, marginLeft: "auto", marginRight: "auto", width: "100%", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <MagneticButton>
            <a href="#" style={{ fontSize: 18, fontWeight: 700, color: "#1B2A4A", textDecoration: "none", fontFamily: "var(--font-space), system-ui, sans-serif", letterSpacing: "-0.02em" }}>
              harshita<span style={{ color: "#FF6B9D" }}>.</span>
            </a>
          </MagneticButton>

          {/* Desktop nav */}
          <div className="hidden md:flex" style={{ alignItems: "center", gap: 4 }}>
            {navItems.map((item, i) => (
              <MagneticButton key={item.name}>
                <motion.a
                  href={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i + 0.2 }}
                  style={{ padding: "8px 18px", borderRadius: 8, fontSize: 14, fontWeight: 500, color: "rgba(27,42,74,0.6)", textDecoration: "none", transition: "all 0.2s" }}
                >
                  {item.name}
                </motion.a>
              </MagneticButton>
            ))}
            <MagneticButton>
              <motion.a
                href="/resume.pdf"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                style={{
                  marginLeft: 8,
                  padding: "8px 20px",
                  borderRadius: 8,
                  fontSize: 14,
                  fontWeight: 600,
                  background: "#1B2A4A",
                  color: "#FFF8F0",
                  textDecoration: "none",
                  transition: "all 0.2s",
                }}
              >
                resume
              </motion.a>
            </MagneticButton>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden"
            style={{ display: "flex", flexDirection: "column", gap: 5, padding: 8, background: "none", border: "none" }}
          >
            <motion.span animate={mobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }} style={{ display: "block", width: 22, height: 2, background: "#1B2A4A", borderRadius: 2 }} />
            <motion.span animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }} style={{ display: "block", width: 22, height: 2, background: "#1B2A4A", borderRadius: 2 }} />
            <motion.span animate={mobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }} style={{ display: "block", width: 22, height: 2, background: "#1B2A4A", borderRadius: 2 }} />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden"
            style={{ position: "fixed", inset: 0, zIndex: 40, background: "rgba(255,248,240,0.98)", backdropFilter: "blur(20px)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 24 }}
          >
            {navItems.map((item, i) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.1 * i }}
                onClick={() => setMobileOpen(false)}
                style={{ fontSize: 32, fontWeight: 700, color: "#1B2A4A", textDecoration: "none", fontFamily: "var(--font-space)" }}
              >
                {item.name}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
