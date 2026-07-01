import AboutIntro from "@/screens/homepage/about-intro";
import Education from "@/screens/homepage/education";
import Volunteering from "@/screens/homepage/volunteering";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Faruk Ajibade",
  description:
    "About Faruk Ajibade — software and AI engineer building web, mobile, and intelligent products. Education and volunteering background.",
};

export default function AboutPage() {
  return (
    <div className="mt-10 flex flex-col gap-12 md:gap-16">
      <AboutIntro />
      <Education />
      <Volunteering />
    </div>
  );
}
