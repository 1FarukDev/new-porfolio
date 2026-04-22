"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "@/app/providers";

type Day = { date: string; count: number };

const COLORS = {
  light: ["#262626", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
  dark: ["#262626", "#0e4429", "#006d32", "#26a641", "#39d353"],
};

const MONTHS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

const CACHE_KEY = "github_contributions";
const CACHE_TTL = 1000 * 60 * 60;

function getLevel(count: number) {
  if (count === 0) return 0;
  if (count <= 2) return 1;
  if (count <= 5) return 2;
  if (count <= 9) return 3;
  return 4;
}

function getDateRange() {
  const today = new Date();

  const start = new Date(today);
  start.setMonth(start.getMonth() - 6);
  start.setDate(1);
  start.setDate(start.getDate() - start.getDay());

  const end = new Date(today);
  end.setMonth(end.getMonth() + 1);
  end.setDate(new Date(end.getFullYear(), end.getMonth() + 1, 0).getDate());

  return { start, end };
}

function chunkIntoWeeks(days: Day[]): Day[][] {
  const weeks: Day[][] = [];
  for (let i = 0; i < days.length; i += 7) weeks.push(days.slice(i, i + 7));
  return weeks;
}

function getCached(): Day[] | null {
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const { data, cachedAt } = JSON.parse(raw);
    if (Date.now() - cachedAt > CACHE_TTL) return null;
    return data;
  } catch {
    return null;
  }
}

function setCache(data: Day[]) {
  try {
    localStorage.setItem(
      CACHE_KEY,
      JSON.stringify({ data, cachedAt: Date.now() }),
    );
  } catch {}
}

export default function GithubContributions() {
  const [weeks, setWeeks] = useState<Day[][]>([]);
  const [total, setTotal] = useState(0);
  const [tooltip, setTooltip] = useState<{
    text: string;
    x: number;
    y: number;
  } | null>(null);
  const { theme } = useTheme();
  const isDark = theme === "dark";

  useEffect(() => {
    const { start, end } = getDateRange();

    function process(data: Day[]) {
      const filtered = data.filter((d) => {
        const date = new Date(d.date + "T12:00:00");
        return date >= start && date <= end;
      });

      const allDays: Day[] = [];
      const cursor = new Date(start);
      while (cursor <= end) {
        const key = cursor.toISOString().split("T")[0];
        const found = filtered.find((d) => d.date === key);
        allDays.push({ date: key, count: found?.count ?? 0 });
        cursor.setDate(cursor.getDate() + 1);
      }

      setTotal(filtered.reduce((s, d) => s + d.count, 0));
      setWeeks(chunkIntoWeeks(allDays));
    }

    const cached = getCached();
    if (cached) {
      process(cached);
      return;
    }

    fetch("/api/github-contributions")
      .then((r) => r.json())
      .then((data: Day[]) => {
        setCache(data);
        process(data);
      });
  }, []);

  const palette = isDark ? COLORS.dark : COLORS.light;
  const today = new Date().toISOString().split("T")[0];

  return (
    <section>
      <div className="flex md:flex-row flex-col gap-6 md:gap-12">
        <div className="w-full md:w-[30%] text-sm text-[var(--text-secondary)] font-medium">
          recent github contributions
        </div>
        <div className="w-full md:w-[70%]">
          <div className="w-full text-base leading-relaxed text-[var(--text-primary)]">
            <div
              className="overflow-x-auto relative"
              onMouseLeave={() => setTooltip(null)}
            >
              <div className="flex gap-[3px] min-w-max">
                <div className="flex flex-col gap-[3px] mt-[27px] mr-1">
                  {["", "Mon", "", "Wed", "", "Fri", ""].map((d, i) => (
                    <div
                      key={i}
                      className="h-3 flex items-center text-[15px] text-[var(--text-secondary)]"
                    >
                      {d}
                    </div>
                  ))}
                </div>

                <div className="flex flex-col gap-[3px]">
                  <div className="flex gap-[3px] h-5 mb-1">
                    {weeks.map((week, wi) => {
                      const firstDayOfMonth = week.findIndex(
                        (d) => new Date(d.date + "T12:00:00").getDate() === 1
                      );
                      const show = firstDayOfMonth !== -1;
                      const month = show
                        ? new Date(week[firstDayOfMonth].date + "T12:00:00").getMonth()
                        : -1;

                      return (
                        <div
                          key={wi}
                          className="w-3 text-[15px] text-[var(--text-secondary)] overflow-visible whitespace-nowrap"
                        >
                          {show ? MONTHS[month] : ""}
                        </div>
                      );
                    })}
                  </div>

                  <div className="flex gap-[3px]">
                    {weeks.map((week, wi) => (
                      <div key={wi} className="flex flex-col gap-[3px]">
                        {week.map((day) => {
                          const isFuture = day.date > today;
                          const dt = new Date(day.date + "T12:00:00");
                          const label = isFuture
                            ? dt.toLocaleDateString("en-GB", {
                                day: "numeric",
                                month: "short",
                                year: "numeric",
                              })
                            : `${day.count} contribution${day.count !== 1 ? "s" : ""} on ${dt.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}`;
                          return (
                            <div
                              key={day.date}
                              className="w-3 h-3 rounded-sm"
                              style={{
                                background: isFuture
                                  ? "#262626"
                                  : palette[getLevel(day.count)],
                                opacity: isFuture ? 0.4 : 1,
                              }}
                              onMouseEnter={(e) => {
                                const rect = (
                                  e.target as HTMLElement
                                ).getBoundingClientRect();
                                const parent = (e.target as HTMLElement)
                                  .closest(".overflow-x-auto")!
                                  .getBoundingClientRect();
                                setTooltip({
                                  text: label,
                                  x: rect.left - parent.left + 6,
                                  y: rect.top - parent.top - 8,
                                });
                              }}
                            />
                          );
                        })}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {tooltip && (
                <div
                  className="absolute z-10 pointer-events-none bg-[#262626] border border-border rounded-md px-2 py-1 text-xs text-popover-foreground shadow-sm whitespace-nowrap -translate-x-1/2 -translate-y-full"
                  style={{ left: tooltip.x, top: tooltip.y }}
                >
                  {tooltip.text}
                </div>
              )}
            </div>

            <div className="flex items-center justify-between mb-2 mt-3">
              <span className="text-sm text-[var(--text-secondary)]">
                {total.toLocaleString()} contributions in this period
              </span>
              <div className="flex items-center gap-1">
                <span className="text-xs text-[var(--text-secondary)]">Less</span>
                {palette.map((c, i) => (
                  <div
                    key={i}
                    className="w-3 h-3 rounded-sm"
                    style={{ background: c }}
                  />
                ))}
                <span className="text-xs text-[var(--text-secondary)]">More</span>
              </div>
            </div>
          </div> 
        </div>
      </div>
    </section>
  );
}
