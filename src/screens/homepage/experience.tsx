import Link from "next/link";
import React from "react";

const experiences = [
  {
    company: "Technique Learning Solutions",
    role: "Software & AI Engineer",
    description:
      "Built AI-powered chatbot with live agent escalation for EdTech platform. Designed and shipped full redesign of company website. Implemented token-based referral system for user growth.",
    date: "Sep 2025 – present",
    link: "https://learntechnique.com/"
  },
  {
    company: "Insync",
    role: "Software Engineer",
    description:
      "Working on AI SDK and developer tools. Focused on improving dx and enabling developers to build next-gen applications.",
    date: "Jan 2025 – Dec 2025",
    link:""
  },
];

function Experience() {
  return (
    <section>
      <div className="flex md:flex-row flex-col gap-6 md:gap-12">
        <p className="w-full md:w-[30%] text-sm text-[var(--text-secondary)] font-medium">experience</p>
        <div className="w-full md:w-[70%] space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="pb-6 border-gray-200 dark:border-gray-800 ">
              <div className="flex md:flex-row flex-col gap-2 md:items-start mb-2">
                <Link href={exp.link} target="_blank" className="text-[var(--text-primary)] border-b w-max font-medium hover:decoration-transparent!" >{exp.company}</Link>
                <p className="text-xs text-[var(--text-secondary)] md:ml-auto">{exp.date}</p>
              </div>
              <p className="text-sm text-[var(--text-secondary)] mb-2">{exp.role}</p>
              <p className="text-base text-[var(--text-secondary)] leading-relaxed">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
