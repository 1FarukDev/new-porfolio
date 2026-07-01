import React from "react";

function AboutIntro() {
  return (
    <section>
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
    </section>
  );
}

export default AboutIntro;
