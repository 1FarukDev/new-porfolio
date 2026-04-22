import React from "react";

const education = [
  {
    school: "Federal University of Agricultural, Abeokuta",
    degree: "B.Sc. Data Science",
    description:
      "Focused on statistical modelling, machine learning, and data-driven problem solving. Built a strong foundation in Python, data analysis, and applied AI.",
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
              className="pb-6 border-b border-gray-200 dark:border-gray-800 last:border-b-0"
            >
              <div className="flex justify-between items-start gap-4 mb-2">
                <p className="text-[var(--text-primary)] font-medium">{edu.school}</p>
                <p className="text-xs text-[var(--text-secondary)] whitespace-nowrap">
                  {edu.date}
                </p>
              </div>
              <p className="text-sm text-[var(--text-secondary)]">
                {edu.degree}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
