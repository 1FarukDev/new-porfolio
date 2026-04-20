"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../providers";

function NavbarContent() {
  const pathname = usePathname();
  const { theme, toggleTheme, mounted } = useTheme();

  const links = [
    { href: "/", label: "home" },
    { href: "/blogs", label: "blogs" },
    { href: "/projects", label: "projects" },
    { href: "/demo", label: "demo" },
  ];

  if (!mounted) {
    return (
      <div className="text-sm border-b border-gray-900 dark:border-gray-800 pb-4">
        <p className="font-bold mb-4">farukajibade</p>
        <div className="flex justify-between items-center mt-3 text-gray-400 dark:text-gray-500">
          <div className="flex gap-5">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-foreground duration-100 ease-in-out"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <span>lagos, nigeria</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="text-sm border-b border-gray-900 dark:border-gray-800 pb-4">
      <p className="font-bold mb-4">farukajibade</p>

      <div className="flex justify-between items-center mt-3 text-gray-400 dark:text-gray-500">
        <div className="flex gap-5">
          {links.map((link) => {
            const isActive = pathname === link.href;

            return (
              <a
                key={link.href}
                href={link.href}
                className={`transition-colors ${
                  isActive
                    ? "text-foreground font-medium"
                    : "hover:text-foreground duration-100 ease-in-out"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-1 rounded transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
          </button>
          <span>lagos, nigeria</span>
        </div>
      </div>
    </div>
  );
}

export default NavbarContent;
