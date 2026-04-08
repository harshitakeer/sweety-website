"use client";

import { motion } from "framer-motion";
import SubtleBg from "./SubtleBg";

interface Project {
  title: string;
  description: string;
  tech: string;
  link: string;
  github?: string;
}

const projects: Project[] = [
  {
    title: "Project One",
    description: "Full-stack app with real-time features and seamless UX.",
    tech: "Next.js · TypeScript · Firebase",
    link: "#",
    github: "#",
  },
  {
    title: "Project Two",
    description: "Design system and component library built for scale.",
    tech: "React · Storybook · Figma",
    link: "#",
    github: "#",
  },
  {
    title: "Project Three",
    description: "AI-powered tool for interacting with data and insights.",
    tech: "Python · React · OpenAI",
    link: "#",
    github: "#",
  },
  {
    title: "Project Four",
    description: "Interactive experience showcasing digital art and design.",
    tech: "Three.js · React · Framer Motion",
    link: "#",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      style={{ width: "100%", display: "flex", justifyContent: "center", padding: "80px 32px", position: "relative", overflow: "hidden" }}
    >
      <SubtleBg />
      <div style={{ maxWidth: 720, width: "100%", position: "relative", zIndex: 1 }}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ fontSize: 13, fontWeight: 600, color: "#FF6B9D", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 32, fontFamily: "var(--font-jetbrains), monospace" }}
        >
          Projects
        </motion.h2>

        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              style={{
                padding: "24px 0",
                borderBottom: "1px solid rgba(27,42,74,0.06)",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                gap: 24,
              }}
            >
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 6 }}>
                  <h3 style={{ fontSize: 17, fontWeight: 600, color: "#1B2A4A" }}>
                    {project.title}
                  </h3>
                  <div style={{ display: "flex", gap: 8 }}>
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" style={{ color: "rgba(27,42,74,0.3)", fontSize: 13, textDecoration: "none" }}>
                        github
                      </a>
                    )}
                    <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ color: "rgba(27,42,74,0.3)", fontSize: 13, textDecoration: "none" }}>
                      live ↗
                    </a>
                  </div>
                </div>
                <p style={{ fontSize: 15, color: "rgba(27,42,74,0.45)", marginBottom: 4 }}>
                  {project.description}
                </p>
              </div>
              <span style={{ fontSize: 12, color: "rgba(27,42,74,0.3)", fontFamily: "var(--font-jetbrains), monospace", whiteSpace: "nowrap", paddingTop: 4 }}>
                {project.tech}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{ marginTop: 24 }}
        >
          <a
            href="https://github.com/harshita"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: 14, fontWeight: 600, color: "#FF6B9D", textDecoration: "none" }}
          >
            more on github →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
