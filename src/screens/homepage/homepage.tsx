import React from "react";
import Experience from "./experience";
import Skills from "./skills";
import { Github, Linkedin, Twitter, Mail, FileText } from "lucide-react";
import GithubContributions from "./github";

const socials = [
  {
    name: "GitHub",
    url: "https://github.com/1FarukDev",
    icon: Github,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/farukajibade/",
    icon: Linkedin,
  },
  {
    name: "Twitter",
    url: "http://x.com/farukdev_",
    icon: Twitter,
  },
  {
    name: "Email",
    url: "mailto:hi@farukajibade.com",
    icon: Mail,
  },
];

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

function Homepage() {
  return (
    <div className="mt-10 flex flex-col gap-12 md:gap-16">
      <div className="flex md:flex-row flex-col gap-6 md:gap-12">
        <div className="w-full md:w-[30%] text-sm text-[var(--text-secondary)] font-medium">About</div>
        <div className="w-full md:w-[70%] text-base leading-relaxed text-[var(--text-secondary)]">
          <p>
            software and ai engineer based in lagos. react, next.js, and react
            native on the front end; node.js and python on the back end; rag
            pipelines with langchain for ai features.
          </p>
          <p>
            currently at technique learning solutions, building and shipping
            across fintech, healthtech, and edtech products.
          </p>
        </div>
      </div>

      <div className="flex md:flex-row flex-col gap-6 md:gap-12">
        <div className="w-full md:w-[30%] text-sm text-[var(--text-secondary)] font-medium">Socials</div>
        <div className="flex gap-6 w-full md:w-[70%]">
          {socials.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
            >
              <social.icon className="w-4 h-4" />
              <span>{social.name}</span>
            </a>
          ))}
        </div>
      </div>

      <div className="flex md:flex-row flex-col gap-6 md:gap-12">
        <div className="w-full md:w-[30%] text-sm text-[var(--text-secondary)] font-medium">
          resume
        </div>
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

      <GithubContributions />
      <Experience />
      <Skills />
    </div>
  );
}

export default Homepage;
