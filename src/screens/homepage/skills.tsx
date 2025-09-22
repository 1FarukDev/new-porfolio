import React from "react";

const skills = [
  "Problem Solving",
  "Communication",
  "Team Collaboration",
  "Critical Thinking",
];

const technologies = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "PostgreSQL",
];

const interests = [
  "Open Source Contribution",
  "Artificial Intelligence",
  "Design Systems",
  "Tech Blogging",
  "Mentorship",
];

function Skills() {
  return (
    <section>
      {/* Technologies Section */}
      <div className="flex md:flex-row flex-col gap-1  mb-8">
        <p className="w-full md:w-[30%]">Technologies</p>
        <div className="w-full md:w-[70%]">
          <p>{technologies.join(", ")}</p>
        </div>
      </div>
      <div className="flex md:flex-row flex-col gap-1  mb-8">
        <p className="w-full md:w-[30%]">Skills</p>
        <div className="w-full md:w-[70%]">
          <p>{skills.join(", ")}</p>
        </div>
      </div>

     
      <div className="flex md:flex-row flex-col gap-1 ">
        <p className="w-full md:w-[30%]">Interests</p>
        <div className="w-full md:w-[70%]">
          <p>{interests.join(", ")}</p>
        </div>
      </div>
    </section>
  );
}

export default Skills;
