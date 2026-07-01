import Link from "next/link";
import React from "react";

const volunteering = [
  {
    organization: "Nithub",
    role: "Ambassador",
    description:
      "Represented Nithub at the University of Lagos, promoting tech education and connecting the campus community to the local innovation ecosystem. Supported community outreach and talent development programs.",
    date: "Jan 2023 – Aug 2024",
    link: "https://nithub.unilag.edu.ng",
  },
];

function Volunteering() {
  return (
    <section id="volunteering">
      <div className="flex md:flex-row flex-col gap-6 md:gap-12">
        <p className="w-full md:w-[30%] text-sm text-[var(--text-secondary)] font-medium">
          volunteering
        </p>
        <div className="w-full md:w-[70%] space-y-8">
          {volunteering.map((item, index) => (
            <div
              key={index}
              className="pb-6 border-b border-[var(--border)] last:border-b-0"
            >
              <div className="flex md:flex-row flex-col gap-2 md:items-start mb-2">
                {item.link ? (
                  <Link
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--text-primary)] border-b w-max font-medium hover:decoration-transparent!"
                  >
                    {item.organization}
                  </Link>
                ) : (
                  <p className="text-[var(--text-primary)] font-medium w-max">
                    {item.organization}
                  </p>
                )}
                <p className="text-xs font-mono text-[var(--text-secondary)] md:ml-auto">
                  {item.date}
                </p>
              </div>
              <p className="text-sm text-[var(--text-secondary)] mb-2">
                {item.role}
              </p>
              <p className="text-base text-[var(--text-secondary)] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Volunteering;
