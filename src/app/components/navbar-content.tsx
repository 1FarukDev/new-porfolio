"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sun, Moon, Home } from "lucide-react";
import { useTheme } from "../providers";

function SiteWordmark() {
  return (
    <Link
      href="/"
      className="site-wordmark group mb-6 block w-max no-underline hover:no-underline!"
    >
      <span className="inline-flex items-baseline gap-1.5 text-lg leading-none">
        <span className="font-semibold text-[var(--text-primary)] transition-colors duration-100 group-hover:text-[var(--text-secondary)]">
          faruk
        </span>
        <span className="font-normal text-[var(--text-secondary)] transition-colors duration-100 group-hover:text-[var(--text-primary)]">
          ajibade
        </span>
      </span>
    </Link>
  );
}

function NavbarContent() {
  const pathname = usePathname();
  const [hash, setHash] = useState("");
  const { theme, toggleTheme, mounted } = useTheme();

  useEffect(() => {
    const updateHash = () => setHash(window.location.hash);
    updateHash();
    window.addEventListener("hashchange", updateHash);
    return () => window.removeEventListener("hashchange", updateHash);
  }, [pathname]);

  useEffect(() => {
    if (!hash) return;
    const id = hash.replace("#", "");
    requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    });
  }, [pathname, hash]);

  const links = [
    { href: "/", icon: Home },
    { href: "/about", label: "about" },
    // { href: "/about#volunteering", label: "volunteering" },
    { href: "/blogs", label: "blogs" },
    { href: "/projects", label: "projects" },
  ] as const;

  const renderLinkContent = (link: (typeof links)[number]) => {
    if ("icon" in link) {
      const Icon = link.icon;
      return (
        <span className="inline-flex items-center gap-px">
          <Icon size={14} strokeWidth={2} />
        </span>
      );
    }
    return "label" in link ? link.label : null;
  };

  const linkClassName = (isActive: boolean) =>
    `text-sm transition-colors no-underline hover:no-underline! ${
      isActive
        ? "text-[var(--text-primary)] font-medium border-[var(--text-primary)]"
        : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] duration-100 ease-in-out"
    }`;

  if (!mounted) {
    return (
      <div className="text-sm border-b border-[var(--border)] pb-4">
        <SiteWordmark />
        <div className="flex justify-between items-center mt-3 text-[var(--text-secondary)]">
          <div className="flex gap-5">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-label={"icon" in link ? "home" : undefined}
                className="transition-colors hover:text-[var(--text-primary)] duration-100 ease-in-out no-underline hover:no-underline!"
              >
                {renderLinkContent(link)}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs">lagos, nigeria</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="text-sm border-b border-[var(--border)] pb-4">
      <SiteWordmark />

      <div className="flex justify-between items-center mt-3 text-[var(--text-secondary)]">
        <div className="flex gap-6">
          {links.map((link) => {
            const [hrefPath, hrefHash] = link.href.split("#");
            const isActive = hrefHash
              ? pathname === hrefPath && hash === `#${hrefHash}`
              : pathname === link.href && !hash;

            return (
              <Link
                key={link.href}
                href={link.href}
                scroll={!hrefHash}
                aria-label={"icon" in link ? "home" : undefined}
                className={linkClassName(isActive)}
              >
                {renderLinkContent(link)}
              </Link>
            );
          })}
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="theme-toggle-btn p-1 rounded text-[var(--text-secondary)]"
            aria-label="Toggle theme"
          >
            <span key={theme} className="theme-toggle-icon">
              {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
            </span>
          </button>
          <span className="font-mono text-xs">lagos, nigeria</span>
        </div>
      </div>
    </div>
  );
}

export default NavbarContent;
