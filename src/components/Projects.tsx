"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import SubtleBg from "./SubtleBg";

interface Project {
  title: string;
  description: string;
  tech: string[];
  link: string;
  github?: string;
  accent: string;
  bgColor: string;
  emoji: string;
}

const projects: Project[] = [
  {
    title: "Project One",
    description: "A full-stack application with real-time features, beautiful UI, and seamless user experience.",
    tech: ["Next.js", "TypeScript", "Firebase", "Tailwind"],
    link: "#",
    github: "#",
    accent: "#FF6B9D",
    bgColor: "#FFF0F5",
    emoji: "🌸",
  },
  {
    title: "Project Two",
    description: "Mobile-first design system and component library built for scale and accessibility.",
    tech: ["React", "Storybook", "Figma", "CSS"],
    link: "#",
    github: "#",
    accent: "#1B2A4A",
    bgColor: "#F0F2F8",
    emoji: "🎨",
  },
  {
    title: "Project Three",
    description: "An AI-powered tool that transforms the way people interact with data and insights.",
    tech: ["Python", "React", "OpenAI", "PostgreSQL"],
    link: "#",
    github: "#",
    accent: "#34D399",
    bgColor: "#F0FAF4",
    emoji: "🤖",
  },
  {
    title: "Project Four",
    description: "Creative portfolio and interactive experience showcasing digital art and design.",
    tech: ["Three.js", "GLSL", "React", "Framer Motion"],
    link: "#",
    accent: "#A78BFA",
    bgColor: "#F5F0FF",
    emoji: "✨",
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [4, -4]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-4, 4]), { stiffness: 300, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => { mouseX.set(0); mouseY.set(0); };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
    >
      <div
        style={{
          padding: 28,
          borderRadius: 16,
          border: `1.5px solid rgba(27,42,74,0.06)`,
          background: project.bgColor,
          height: "100%",
          transition: "all 0.3s",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
          <span style={{ fontSize: 28 }}>{project.emoji}</span>
          <div style={{ display: "flex", gap: 10 }}>
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" style={{ color: "rgba(27,42,74,0.3)", transition: "color 0.2s" }}>
                <svg style={{ width: 18, height: 18 }} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            )}
            <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ color: "rgba(27,42,74,0.3)", transition: "color 0.2s" }}>
              <svg style={{ width: 18, height: 18 }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>

        <h3 style={{ fontSize: 19, fontWeight: 700, color: "#1B2A4A", marginBottom: 8, fontFamily: "var(--font-space), system-ui, sans-serif" }}>{project.title}</h3>
        <p style={{ color: "rgba(27,42,74,0.55)", fontSize: 14, lineHeight: 1.7, marginBottom: 20 }}>
          {project.description}
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
          {project.tech.map((t) => (
            <span
              key={t}
              style={{
                fontSize: 12,
                fontWeight: 500,
                padding: "4px 12px",
                borderRadius: 6,
                background: "rgba(255,255,255,0.6)",
                color: "rgba(27,42,74,0.5)",
                fontFamily: "var(--font-jetbrains), monospace",
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", padding: "112px 24px", position: "relative", overflow: "hidden" }}
    >
      <SubtleBg />
      <div style={{ width: "100%", maxWidth: 860, position: "relative", zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: 48 }}
        >
          <p style={{ fontSize: 14, fontWeight: 600, color: "#FF6B9D", marginBottom: 8, fontFamily: "var(--font-jetbrains), monospace", textAlign: "center" }}>02 — projects</p>
          <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 700, color: "#1B2A4A", textAlign: "center", fontFamily: "var(--font-space), system-ui, sans-serif", letterSpacing: "-0.02em" }}>
            things i&apos;ve built
          </h2>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{ textAlign: "center", marginTop: 40 }}
        >
          <a
            href="https://github.com/harshita"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: 14, fontWeight: 600, color: "#FF6B9D", textDecoration: "none" }}
          >
            view more on github →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
