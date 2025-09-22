"use client";

import React from "react";
import { usePathname } from "next/navigation";

function Navbar() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "home" },
    { href: "/blogs", label: "blogs" },
    { href: "/projects", label: "projects" },
    { href: "/demo", label: "demo" },
  ];

  return (
    <div className="text-sm border-b border-gray-900 pb-4">
      <p className="font-bold">farukajibade</p>

      <div className="flex justify-between items-center mt-3 text-gray-400">
        {/* Navigation links */}
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

        {/* Location with green dot */}
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          <span>lagos, nigeria</span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
