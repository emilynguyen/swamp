"use client";

import { useEffect, useState } from "react";

type TimeProps = {
  className?: string;
};

function formatTime(date: Date) {
  return date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
    timeZoneName: "short",
    timeZone: "America/Los_Angeles",
  });
}

export function Time({ className }: TimeProps) {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    setTime(formatTime(new Date()));
    const interval = setInterval(() => {
      setTime(formatTime(new Date()));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className={`geist-m text-nowrap ${className ?? ""}`} suppressHydrationWarning>
      {time}
    </span>
  );
}
