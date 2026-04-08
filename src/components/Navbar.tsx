"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          padding: scrolled ? "16px 0" : "24px 0",
          background: scrolled ? "rgba(255,248,240,0.9)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          transition: "all 0.4s",
        }}
      >
        <div style={{ maxWidth: 720, marginLeft: "auto", marginRight: "auto", width: "100%", padding: "0 32px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <a href="#" style={{ fontSize: 16, fontWeight: 600, color: "#1B2A4A", textDecoration: "none", letterSpacing: "-0.02em" }}>
            harshita ✦
          </a>

          <div className="hidden md:flex" style={{ alignItems: "center", gap: 28 }}>
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                style={{ fontSize: 14, color: "rgba(27,42,74,0.5)", textDecoration: "none", transition: "color 0.2s" }}
              >
                {item.name}
              </a>
            ))}
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden"
            style={{ background: "none", border: "none", padding: 8, display: "flex", flexDirection: "column", gap: 5 }}
          >
            <motion.span animate={mobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }} style={{ display: "block", width: 20, height: 1.5, background: "#1B2A4A" }} />
            <motion.span animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }} style={{ display: "block", width: 20, height: 1.5, background: "#1B2A4A" }} />
            <motion.span animate={mobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }} style={{ display: "block", width: 20, height: 1.5, background: "#1B2A4A" }} />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="md:hidden"
            style={{ position: "fixed", inset: 0, zIndex: 40, background: "rgba(255,248,240,0.98)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 32 }}
          >
            {navItems.map((item, i) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * i }}
                onClick={() => setMobileOpen(false)}
                style={{ fontSize: 24, fontWeight: 600, color: "#1B2A4A", textDecoration: "none" }}
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
