"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Github } from "lucide-react";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";

function GithubContributions() {
  const [contributions, setContributions] = useState<
    { date: string; count: number }[]
  >([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/api/github-contributions");
      const data = await res.json();
      setContributions(data);
    }
    fetchData();
  }, []);

  return (
    <section>
      <div className="flex flex-col md:flex-row  rounded-xl hover:bg-muted transition-colors ">
        
        <div className="w-full md:w-[30%]">
          <h1 className="">
            GitHub Contributions
            {/* <Link
              href="https://github.com/1farukdev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-foreground transition-colors"
            >
              <Github className="w-4 h-4" />
            </Link> */}
          </h1>
          {/* <p className="text-gray-500 text-sm">
            Real-time contribution graph from GitHub
          </p> */}
        </div>

        {/* Right column (Heatmap) */}
        <div className="w-full md:w-[70%]">
          <CalendarHeatmap
            startDate={new Date("2024-01-01")}
            endDate={new Date()}
            values={contributions}
            showWeekdayLabels={true}
            // className="mt-2"
          />
        </div>
      </div>
    </section>
  );
}

export default GithubContributions;
