import type { Metadata } from "next";
import { Geist, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { ThemeProvider } from "./providers";
import SchemaComponent from "./components/schema";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const metaFont = IBM_Plex_Mono({
  variable: "--font-meta",
  subsets: ["latin"],
  weight: ["400"],
});
export const metadata: Metadata = {
  title: "Faruk Ajibade | Software Engineer, AI/ML Engineer",
  description:
    "Faruk Ajibade is a Software Engineer and AI Engineer specializing in building scalable web and mobile applications. Passionate about technology, AI innovation.",
  keywords: ["software engineer", "AI engineer", "web development", "machine learning", "full stack developer"],
  authors: [{ name: "Faruk Ajibade" }],
  creator: "Faruk Ajibade",
  publisher: "Faruk Ajibade",
  metadataBase: new URL("https://farukajibade.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://farukajibade.com",
    siteName: "Faruk Ajibade",
    title: "Faruk Ajibade | Software Engineer, AI/ML Engineer",
    description: "Faruk Ajibade is a Software Engineer and AI Engineer specializing in building scalable web and mobile applications. Passionate about technology, AI innovation.",
    images: [
      {
        url: "/preview-image.png",
        width: 1200,
        height: 630,
        alt: "Faruk Ajibade - Software Engineer Portfolio",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Faruk Ajibade | Software Engineer, AI/ML Engineer",
    description: "Faruk Ajibade is a Software Engineer and AI Engineer specializing in building scalable web and mobile applications.",
    images: ["/preview-image.png"],
    creator: "@1FarukDev",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "https://farukajibade.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme");var d=window.matchMedia("(prefers-color-scheme: dark)").matches;if(t==="dark"||(!t&&d))document.documentElement.classList.add("dark")}catch(e){}})();`,
          }}
        />
        <SchemaComponent />
      </head>
      <body
        className={`${geistSans.className} ${geistSans.variable} ${metaFont.variable} antialiased`}
      >
        <ThemeProvider>
          <div className="mx-auto w-full max-w-[59rem] px-4 py-20  lowercase">
            <Navbar />
            {children}
            <Footer />
            <Analytics />
            <SpeedInsights />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
