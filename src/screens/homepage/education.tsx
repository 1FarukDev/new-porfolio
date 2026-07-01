import React from "react";

const education = [
  {
    school: "Federal University of Agriculture, Abeokuta",
    degree: "B.Sc. Data Science",
    description:
      "Coursework: software engineering, data engineering, algorithms & data structures, systems design & security, python & R programming, data-driven computing, big data computing.",
    date: "2027",
  },
  {
    school: "Lagos State Polytechnic, Ikorodu",
    degree: "Computer Science Diploma",
    description:
      "Studied programming, algorithms, and software development. Gained practical experience in Java, C++, and web development through projects and internships.",
    date: "2022",
  },
];

function Education() {
  return (
    <section>
      <div className="flex md:flex-row flex-col gap-6 md:gap-12">
        <p className="w-full md:w-[30%] text-sm text-[var(--text-secondary)] font-medium">
          education
        </p>
        <div className="w-full md:w-[70%] space-y-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className="pb-6 border-b border-[var(--border)] last:border-b-0"
            >
              <div className="flex justify-between items-start gap-4 mb-2">
                <p className="text-[var(--text-primary)] font-medium">
                  {edu.school}
                </p>
                <p className="text-xs font-mono text-[var(--text-secondary)] whitespace-nowrap">
                  {edu.date}
                </p>
              </div>
              <p className="text-sm text-[var(--text-secondary)] mb-2">
                {edu.degree}
              </p>
              {edu.description && (
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {edu.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
