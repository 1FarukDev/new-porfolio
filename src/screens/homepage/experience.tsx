import React from "react";

const experiences = [
  {
    company: "Technique Learning Solutions",
    role: "Software & AI Engineer",
    description:
      "Built AI-powered chatbot with live agent escalation for EdTech platform. Designed and shipped full redesign of company website. Implemented token-based referral system for user growth.",
    date: "Sep 2025 – present",
  },
  {
    company: "Insync",
    role: "Software Engineer",
    description:
      "Working on AI SDK and developer tools. Focused on improving dx and enabling developers to build next-gen applications.",
    date: "Jan 2025 – Dec 2025",
  },
];

function Experience() {
  return (
    <section>
      <div className="flex md:flex-row flex-col gap-6 md:gap-12">
        <p className="w-full md:w-[30%] text-sm text-gray-500 dark:text-gray-400 font-medium">experience</p>
        <div className="w-full md:w-[70%] space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="pb-6 border-b border-gray-200 dark:border-gray-800 last:border-b-0">
              <div className="flex md:flex-row flex-col gap-2 md:items-start mb-2">
                <p className="text-foreground font-medium">{exp.company}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 md:ml-auto">{exp.date}</p>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{exp.role}</p>
              <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
