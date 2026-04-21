import React from "react";
import Link from "next/link"; // remove if not using Next.js
import { ExternalLink, Github } from "lucide-react"; // link icons

const projects = [
  {
    title: "Insync AI SDK",
    date: "2025",
    stack: "TypeScript, Node.js, Next.js",
    description: "SDKs and APIs for building AI-powered applications. focus on dx and making it simple for developers to integrate ai features.",
    github: "https://github.com/1FarukDev",
    live: "https://insync.dev",
  },
  {
    title: "EdTech Platform",
    date: "2025",
    stack: "React, Node.js, PostgreSQL",
    description: "Full-stack platform for PLC and automation training. built RAG chatbot with live support escalation and token-based referral system.",
    github: "https://github.com/1FarukDev",
    live: "https://technique-learning.com",
  },
  {
    title: "Portfolio Site",
    date: "2024",
    stack: "Next.js, Tailwind CSS, TypeScript",
    description: "Minimal portfolio showcasing work and writing. built to be fast, simple, and easy to maintain.",
    github: "https://github.com/1FarukDev/portfolio-v2",
    live: "https://farukajibade.com",
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
              <h2 className="text-lg font-medium text-foreground">{project.title}</h2>
              {/* GitHub link */}
              {project.github && (
                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 dark:text-gray-400 hover:text-foreground dark:hover:text-gray-200 transition-colors"
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
                  className="text-gray-500 dark:text-gray-400 hover:text-foreground dark:hover:text-gray-200 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                </Link>
              )}
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 whitespace-nowrap">{project.date}</p>
          </div>
          <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">{project.stack}</p>
          <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">{project.description}</p>
        </div>
      ))}
    </section>
  );
}

export default Projects;
