import React from "react";

const education = [
  {
    school: "University of Lagos",
    degree: "B.Sc. Computer Science",
    description:
      "Focused on software engineering, algorithms, and system design. Graduated with honors.",
    date: "2019 – 2023",
  },
  {
    school: "Online Courses",
    degree: "Full-Stack Web Development",
    description:
      "Completed several certifications in modern web technologies including React, Node.js, and cloud computing.",
    date: "2023",
  },
];

function Education() {
  return (
    <section>
      <div className="flex md:flex-row flex-col gap-1">
        <p className="w-full md:w-[30%]">Education</p>
        <div className="w-full md:w-[70%]">
          {education.map((edu, index) => (
            <div key={index} className="mb-8">
              <div className="flex gap-2 items-center">
                <p className=" text-foreground">
                  {edu.school}
                </p>
                <p>{edu.degree}</p>
              </div>
              <div className="mt-3">
                {/* <p>{edu.description}</p> */}
                <p className="text-xs mt-3">{edu.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
