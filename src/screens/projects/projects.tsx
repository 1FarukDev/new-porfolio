import React from "react";
import Link from "next/link"; // remove if not using Next.js
import { ExternalLink, Github } from "lucide-react"; // link icons

const projects = [
  {
    title: "Vaultless",
    date: "2026",
    stack: "TypeScript, Next.js, Node.js, NextAuth, Octokit",
    description:
      "A developer tool that scans GitHub repositories for exposed secrets and automatically removes them. Ships as a web app and a CLI — connect with GitHub, scan repos, review findings, and open a PR with automatic cleanups in one click.",
    github: "https://github.com/1FarukDev/Vaultless",
    live: "https://vaultless.farukajibade.com",
    npm: "https://npmjs.com/package/vaultless",
  },
  {
    title: "J.H Textiles",
    date: "2026",
    stack: "TypeScript, Next.js, Tailwind CSS",
    description:
      "A Nigerian textile print design studio specializing in exclusive surface patterns. Merges bold digital aesthetics with traditional art for fashion, interiors, and lifestyle applications.",
    live: "https://www.jesudarahinmikaiye.com",
  },
  {
    title: "Afinju",
    date: "2026",
    stack: "TypeScript, Next.js, Tailwind CSS",
    description:
      "An online marketplace for buying and selling authentic African art. Connecting African artists with collectors and art lovers worldwide.",
    live: "https://afinju.com",
  },
];

function Projects() {
  return (
    <section>
      {projects.map((project, index) => (
        <div
          key={index}
          className="py-8 border-b border-gray-200 dark:border-gray-800 last:border-b-0"
        >
          <div className="flex items-start justify-between gap-4 mb-3">
            <div className="flex items-center gap-2">
              <h2 className="text-lg font-medium text-[var(--text-primary)]">
                {project.title}
              </h2>
              {/* GitHub link */}
              {project.github && (
                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                >
                  <Github className="w-4 h-4" />
                </Link>
              )}
              {/* Live link */}
              {project.live && (
                <Link
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                </Link>
              )}
            </div>
            <p className="text-xs text-[var(--text-secondary)] whitespace-nowrap">
              {project.date}
            </p>
          </div>
          <p className="text-xs text-[var(--text-secondary)] mb-2">
            {project.stack}
          </p>
          <p className="text-base text-[var(--text-primary)] leading-relaxed">
            {project.description}
          </p>
        </div>
      ))}
    </section>
  );
}

export default Projects;
