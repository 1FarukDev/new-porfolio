import React from "react";

const experiences = [
  {
    company: "Technique Learning Solutions",
    role: "Software & AI Engineer",
    description:
      "EdTech platform for PLC, Automation & AC Repair training — built AI-powered features and full-stack web applications, including a RAG-powered chatbot with live agent escalation, a redesigned company website, and a token-based referral system.",
    date: "September 2025 – present - remote",
  },
  {
    company: "Insync",
    role: "Software Engineer (Intern)",
    description:
      "Building next-generation web applications and AI developer tools. Currently helping build the AI SDK and focused on developer experience.",
    date: "January 2025, to December 2025 - remote",
  },
];

function Experience() {
  return (
    <section>
      <div className="flex md:flex-row flex-col gap-1">
        <p className="w-full md:w-[30%]">Experience</p>
        <div className="w-full md:w-[70%]">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-8">
              <div className="flex md:flex-row flex-col gap-2 md:items-center w-max">
                <p className="-pb-1 border-b border-b-foreground text-foreground">
                  {exp.company}
                </p>
                <p>{exp.role}</p>
              </div>
              <div className="mt-3">
                <p>{exp.description}</p>
                <p className="text-xs mt-3">{exp.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
