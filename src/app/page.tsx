import Homepage from "@/screens/homepage/homepage";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Faruk Ajibade - Software & AI Engineer",
  description:
    "Welcome to my portfolio. I build web applications and AI products. Explore my projects, experience, and contributions.",
};

const GITHUB_TOKEN = "ghp_XGgiBRhevJVuHG7cM0vpZORKW";

export default function Home() {
  return (
    <div className="font-sans ">
      <Homepage />
    </div>
  );
}
