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
    <main className="mt-10 mb-4 ">
      <div className="text-sm text-gray-400 dark:text-gray-500 mt-4 border-t border-gray-900 dark:border-gray-800 pt-4 flex md:flex-row flex-col justify-between items-center gap-2">
        <p>© {new Date().getFullYear()} Faruk Ajibade. All rights reserved.</p>
        {/* <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span> */}
        <p>
          {/* <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span> */}
          {currentTime}
        </p>
      </div>
    </main>
  );
}

export default Footer;
