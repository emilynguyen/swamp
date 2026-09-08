"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Logo } from "./Logo";
import { PageSection } from "./PageSection";

type HeaderVariant = "default" | "secondary";

const LOGO_TYPE: Record<HeaderVariant, "secondary" | "tertiary"> = {
  default: "secondary",
  secondary: "tertiary",
};

type HeaderProps = {
  variant?: HeaderVariant;
};

function formatTime(date: Date) {
  return date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
    timeZoneName: "short",
  });
}

export function Header({ variant = "default" }: HeaderProps) {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    setTime(formatTime(new Date()));
    const interval = setInterval(() => {
      setTime(formatTime(new Date()));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <PageSection as="header" className="py-6" containerClassName="flex items-center justify-between">
      <Link href="/" aria-label="Home">
        <Logo type={LOGO_TYPE[variant]} color="dark" size="small" />
      </Link>
      <span className="geist-m" suppressHydrationWarning>
        {time}
      </span>
    </PageSection>
  );
}
