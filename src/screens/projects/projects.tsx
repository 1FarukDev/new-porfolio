import React from "react";
import Link from "next/link"; // remove if not using Next.js
import { ExternalLink, Github } from "lucide-react"; // link icons

const projects = [
  {
    title: "AI SDK",
    date: "Jan 2025 – Present",
    stack: "Next.js, TypeScript, Node.js",
    description:
      "Building an AI SDK focused on improving developer experience and enabling next-generation web applications.",
    github: "https://github.com/example/ai-sdk",
    live: "https://ai-sdk-demo.com",
  },
  {
    title: "Portfolio Website",
    date: "Dec 2024",
    stack: "React, Tailwind CSS",
    description:
      "Designed and built a personal portfolio to showcase projects, skills, and writing.",
    github: "https://github.com/example/portfolio",
    live: "https://example.com",
  },
];

function Projects() {
  return (
    <section>
      {projects.map((project, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row mt-10 rounded-xl hover:bg-muted transition-colors"
        >
          {/* Left column (Name + Stack) */}
          <div className="w-full md:w-[30%]">
            <h1 className="text-base border-b w-max font-normal text-foreground flex items-center gap-2">
              {project.title}
              <div className="flex items-center gap-2">
                {/* GitHub link */}
                {project.github && (
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-foreground transition-colors"
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
                    className="text-gray-500 hover:text-foreground transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                )}
              </div>
            </h1>
            <p className="text-gray-500 text-sm">{project.stack}</p>
          </div>

          {/* Right column (Description) */}
          <div className="w-full md:w-[70%]">
            <p className="text-gray-500">{project.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Projects;
