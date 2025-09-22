import React from "react";

const experiences = [
  {
    company: "Insync",
    role: "Software Engineer (Intern)",
    description:
      "Building next-generation web applications and AI developer tools. Currently helping build the AI SDK and focused on developer experience.",
    date: "January 2025, to present - remote",
  },
  {
    company: "Another Company",
    role: "Frontend Developer",
    description:
      "Worked on modern UI components and optimized performance for large-scale React apps.",
    date: "July 2024 – December 2024 - onsite",
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
              <div className="flex gap-2 items-center">
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
