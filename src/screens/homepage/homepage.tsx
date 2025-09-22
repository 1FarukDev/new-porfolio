import React from "react";
import Experience from "./experience";
import Education from "./education";
import Skills from "./skills";
import { Github, Linkedin, Twitter, Mail } from "lucide-react"; // added Mail
import GithubContributions from "./github";

const socials = [
  {
    name: "GitHub",
    url: "https://github.com/yourusername",
    icon: Github,
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/yourusername",
    icon: Linkedin,
  },
  {
    name: "Twitter",
    url: "https://twitter.com/yourusername",
    icon: Twitter,
  },
  {
    name: "Email",
    url: "mailto:your@email.com", // replace with your email
    icon: Mail,
  },
];

function Homepage() {
  return (
    <div className="mt-10 text-gray-400 flex flex-col gap-10 md:gap-15">
      <div className="flex md:flex-row flex-col gap-1 ">
        <div className="w-full md:w-[30%]">about</div>
        <div className="w-full md:w-[70%]">
          passionate about creating meaningful software and exploring new
          technologies. I love building products that solve real problems and
          make people's lives better.
        </div>
      </div>

      <div className="flex md:flex-row flex-col gap-1 ">
        <div className="w-full md:w-[30%]">socials</div>
        <div className="flex gap-4 w-full md:w-[70%]">
          {socials.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex font-normal text-sm items-center gap-1 hover:text-foreground transition-colors"
            >
              <social.icon className="w-4 h-4" />
              <span>{social.name}</span>
            </a>
          ))}
        </div>
      </div>

      <GithubContributions />
      <Experience />
      <Education />
      <Skills />
    </div>
  );
}

export default Homepage;
