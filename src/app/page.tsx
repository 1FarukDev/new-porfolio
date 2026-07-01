import Homepage from "@/screens/homepage/homepage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Faruk Ajibade - Software & AI Engineer",
  description:
    "Welcome to my portfolio. I build web applications and AI products. Explore my projects, experience, and contributions.",
};

export default function Home() {
  return <Homepage />;
}
