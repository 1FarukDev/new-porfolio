import React from "react";
import { FileText } from "lucide-react";

const resumes = [
  {
    name: "software",
    url: "/resumes/Faruk_Ajibade_Software_Engineer.pdf",
  },
  {
    name: "ai",
    url: "/resumes/Faruk_Ajibade_AI_Engineer.pdf",
  },
];

function AboutIntro() {
  return (
    <section className="space-y-12 md:space-y-16">
      <div className="flex md:flex-row flex-col gap-6 md:gap-12">
        <p className="w-full md:w-[30%] text-sm text-[var(--text-secondary)] font-medium">
          about
        </p>
        <div className="w-full md:w-[70%] space-y-4 text-base leading-relaxed text-[var(--text-secondary)]">
          <p>
            software and ai engineer based in lagos, building web, mobile, and
            intelligent products. i work across the stack — react, next.js, and
            react native on the front end; node.js and python on the back end;
            and rag pipelines with langchain for ai-powered features.
          </p>
          <p>
            data science at funaab, with hands-on experience
            across fintech, healthtech, and edtech. i care about shipping fast,
            writing reliable code, and building things that solve real problems.
          </p>
        </div>
      </div>

      <div className="flex md:flex-row flex-col gap-6 md:gap-12">
        <p className="w-full md:w-[30%] text-sm text-[var(--text-secondary)] font-medium">
          resume
        </p>
        <div className="flex gap-6 w-full md:w-[70%]">
          {resumes.map((resume) => (
            <a
              key={resume.name}
              href={resume.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
            >
              <FileText className="w-4 h-4" />
              <span>{resume.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutIntro;
