import React from "react";
import Experience from "./experience";
import Education from "./education";
import Skills from "./skills";
import { Github, Linkedin, Twitter, Mail } from "lucide-react"; // added Mail
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
    url: "mailto:farukajibade@gmail.com", 
    icon: Mail,
  },
];

function Homepage() {
  return (
    <div className="mt-10 flex flex-col gap-12 md:gap-16">
      <div className="flex md:flex-row flex-col gap-6 md:gap-12">
        <div className="w-full md:w-[30%] text-sm text-gray-500 dark:text-gray-400 font-medium">about</div>
        <div className="w-full md:w-[70%] text-base leading-relaxed text-gray-700 dark:text-gray-300">
          i build web applications and ai products. passionate about solving real problems and shipping fast. currently working on developer tools and scaling systems that just work.
        </div>
      </div>

      <div className="flex md:flex-row flex-col gap-6 md:gap-12">
        <div className="w-full md:w-[30%] text-sm text-gray-500 dark:text-gray-400 font-medium">socials</div>
        <div className="flex gap-6 w-full md:w-[70%]">
          {socials.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-foreground dark:hover:text-gray-200 transition-colors"
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
      {/* <Skills /> */}
    </div>
  );
}

export default Homepage;
