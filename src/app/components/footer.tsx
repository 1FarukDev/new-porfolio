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
      <div className="text-xs text-gray-500 dark:text-gray-600 flex justify-end items-center gap-2">
        <p>lagos, {currentTime}</p>
      </div>
    </main>
  );
}

export default Footer;
