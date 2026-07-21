import React from "react";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Vaultless",
    date: "2026",
    stack: "TypeScript, Next.js, Tailwind CSS, Shadcn UI, Octokit",
    description:
      "Developer security tool that connects to GitHub repos, detects exposed secrets in .env, YAML, JSON, and TOML files, and commits cleaned files back. Ships as a web app with GitHub OAuth and a CLI on npm — stateless architecture with no data storage for a privacy-first workflow.",
    github: "https://github.com/1FarukDev/Vaultless",
    live: "https://vaultless.farukajibade.com",
  },
  {
    title: "Afinju",
    date: "2025",
    stack: "TypeScript, Next.js, Tailwind CSS, Shadcn",
    description:
      "Multi-sided marketplace connecting African artists with global collectors. Built collector, artist CMS, and admin dashboards with Next.js SSR, dynamic routing, and API integrations — improving page load times and SEO visibility by ~30%.",
    live: "https://afinju.com",
  },
  {
    title: "J.H Textiles",
    date: "2025",
    stack: "TypeScript, Next.js, Tailwind CSS, Supabase",
    description:
      "Full-stack e-commerce platform for a Nigerian surface pattern design studio. Supabase powers auth, file storage for print assets, and real-time product data — with SSR for global SEO.",
    live: "https://www.jesudarahinmikaiye.com",
  },
  {
    title: "RAG Chatbot",
    date: "2025",
    stack: "Python, Streamlit, LangChain, OpenAI Embeddings",
    description:
      "Retrieval-augmented generation chatbot with a Streamlit interface for conversational document querying. Full pipeline from document ingestion and vector search to LLM-powered, context-aware responses.",
    github: "https://github.com/1FarukDev/Chatbot-RAG-using-streamlit",
  },
  {
    title: "Telegram Bot",
    date: "2025",
    stack: "Python, Telegram Bot API",
    description:
      "Automated Telegram bot for real-time user interactions. Handles message routing, command processing, and scalable concurrent request handling with a Python backend.",
    github: "https://github.com/1FarukDev/Telegram-bot",
  },
];

function Projects() {
  return (
    <section>
      {projects.map((project, index) => (
        <div
          key={index}
          className="py-8 border-b border-[var(--border)] last:border-b-0"
        >
          <div className="flex items-start justify-between gap-4 mb-3">
            <div className="flex items-center gap-2">
              <h2 className="text-lg font-medium text-[var(--text-primary)]">
                {project.title}
              </h2>
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
            <p className="text-xs font-mono text-[var(--text-secondary)] whitespace-nowrap">
              {project.date}
            </p>
          </div>
          <p className="text-xs font-mono text-[var(--text-secondary)] mb-2">
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
