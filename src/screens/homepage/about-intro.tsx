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
            i&apos;m currently building ai and web products for fintech,
            healthtech, and edtech teams — most recently a rag chatbot with live
            agent escalation that replaced a third-party subscription and lifted
            direct customer contact 40%.
          </p>
          <p>
            before that: payment flows in react native at a fintech startup
            (tdd, 80%+ coverage, ~20% faster api responses), and a therapy app
            at a healthtech startup where i cut navigation drop-offs 25%.
          </p>
          <p>
            b.sc. data science at funaab (2027), computer science diploma from
            lagos state polytechnic. i like small, sharp tools over sprawling
            frameworks — vaultless is basically that instinct as a product.
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
