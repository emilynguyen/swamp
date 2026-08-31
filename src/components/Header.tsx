"use client";

import { useEffect, useState } from "react";
import { Logo } from "./Logo";

function formatTime(date: Date) {
  return date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
    timeZoneName: "short",
  });
}

export function Header() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    setTime(formatTime(new Date()));
    const interval = setInterval(() => {
      setTime(formatTime(new Date()));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="flex items-center justify-between px-page-margin py-6">
      <Logo type="tertiary" color="dark" size="small" />
      <span className="geist-m" suppressHydrationWarning>
        {time}
      </span>
    </header>
  );
}
