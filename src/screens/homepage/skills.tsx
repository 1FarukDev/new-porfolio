import React from "react";

const skillGroups = [
  {
    label: "frontend",
    items: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "React Native",
      "Tailwind CSS",
    ],
  },
  {
    label: "backend",
    items: [
      "Node.js",
      "Express",
      "Nest.js",
      "Python",
      "FastAPI",
      "Supabase",
    ],
  },
  {
    label: "database",
    items: ["PostgreSQL", "MySQL", "MongoDB", "FAISS", "Pinecone", "ChromaDB"],
  },
  {
    label: "ai",
    items: [
      "LangChain",
      "LangGraph",
      "RAG",
      "n8n",
      "OpenAI",
      "Gemini",
      "Hugging Face",
      "Prompt Engineering",
    ],
  },
  {
    label: "tools",
    items: ["Git", "GitHub", "Figma", "Notion"],
  },
];

function Skills() {
  return (
    <section>
      <div className="flex md:flex-row flex-col gap-6 md:gap-12">
        <p className="w-full md:w-[30%] text-sm text-[var(--text-secondary)] font-medium">
          skills
        </p>
        <div className="w-full md:w-[70%] space-y-6">
          {skillGroups.map((group) => (
            <div key={group.label}>
              <p className="text-sm text-[var(--text-primary)] font-medium mb-2">
                {group.label}
              </p>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                {group.items.join(" · ")}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
