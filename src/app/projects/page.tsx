import Projects from "@/screens/projects/projects";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Faruk Ajibade",
  description: "Check out my portfolio of projects showcasing web applications, AI solutions, and software engineering work.",
};

export default function page() {
  return (
    <section className="mt-10">
      <Projects />
    </section>
  );
}
