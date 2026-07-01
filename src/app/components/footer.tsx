"use client";

import React, { useState, useEffect } from "react";

function Footer() {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const lagosTime = new Date().toLocaleTimeString("en-US", {
        timeZone: "Africa/Lagos",
        hour: "2-digit",
        minute: "2-digit",
      });
      setCurrentTime(lagosTime);
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <main className="mt-20 mb-4">
      <div className="text-xs font-mono text-[var(--text-secondary)] flex justify-between items-center gap-4">
        <span className="inline-flex items-center gap-2">
          <span
            className="h-1.5 w-1.5 rounded-full bg-[var(--contrib-3)]"
            aria-hidden="true"
          />
          available for work
        </span>
        <p>lagos, {currentTime}</p>
      </div>
    </main>
  );
}

export default Footer;
