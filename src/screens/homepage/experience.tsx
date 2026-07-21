import Link from "next/link";
import React from "react";

const experiences = [
  {
    company: "Technique Learning Solutions",
    role: "Software & AI Engineer",
    description:
      "Redesigned and rebuilt the company website for performance, usability, and SEO, migrating data from the previous site with 98% transfer success. Developed a RAG-powered chatbot with live agent escalation for the EdTech platform, replacing third-party subscriptions and increasing direct customer communication by 40%. Built a token-based referral system that drove organic learner growth.",
    date: "Oct 2025 – present",
    link: "https://learntechnique.com/",
  },
  {
    company: "SwiftBuddy",
    role: "Software Engineer",
    description:
      "Built money transfer, bill payments, and contact-based payment request flows end-to-end in React Native for a fintech startup. Implemented RBAC across admin and user accounts, applied TDD across core payment features (80%+ coverage), and optimized APIs for real-time transactions (~20% faster response times).",
    date: "Oct 2024 – Dec 2025",
    link: "",
  },
  {
    company: "Insync Health",
    role: "Software Engineer Intern",
    description:
      "Improved UI consistency and navigation across a React Native therapy app, reducing navigation drop-offs by 25%. Designed and deployed REST APIs on Node.js/Express, implemented RBAC for admin and staff, and applied TDD practices reaching 80%+ test coverage with ~20% faster API response times.",
    date: "Jan 2025 – Dec 2025",
    link: "",
  },
  {
    company: "Aumento Solutions",
    role: "Frontend Engineer (Contract)",
    description:
      "Build client-facing web interfaces and digital products for startups and growing businesses. Ship responsive frontends with React and Next.js across custom software and proprietary platform work.",
    date: "Aug 2024 – present",
    link: "https://www.linkedin.com/company/aumento-tech",
  },
];

function Experience() {
  return (
    <section>
      <div className="flex md:flex-row flex-col gap-6 md:gap-12">
        <p className="w-full md:w-[30%] text-sm text-[var(--text-secondary)] font-medium">
          experience
        </p>
        <div className="w-full md:w-[70%] space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="pb-6 border-b border-[var(--border)] last:border-b-0"
            >
              <div className="flex md:flex-row flex-col gap-2 md:items-start mb-2">
                {exp.link ? (
                  <Link
                    href={exp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--text-primary)] border-b w-max font-medium hover:decoration-transparent!"
                  >
                    {exp.company}
                  </Link>
                ) : (
                  <p className="text-[var(--text-primary)] font-medium w-max">
                    {exp.company}
                  </p>
                )}
                <p className="text-xs font-mono text-[var(--text-secondary)] md:ml-auto">
                  {exp.date}
                </p>
              </div>
              <p className="text-sm text-[var(--text-secondary)] mb-2">
                {exp.role}
              </p>
              <p className="text-base text-[var(--text-secondary)] leading-relaxed">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
