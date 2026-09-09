"use client";

import { useEffect, useState } from "react";
import { FooterAnchorLink } from "./FooterAnchorLink";

const FOOTER_ANCHOR_LINKS = [
  { label: "Home", href: "#top" },
  { label: "Work", href: "#work" },
  { label: "Services", href: "#footer" },
];

export function FooterAnchorMenu() {
  const [activeHref, setActiveHref] = useState(FOOTER_ANCHOR_LINKS[0].href);

  useEffect(() => {
    const sections = FOOTER_ANCHOR_LINKS.map((link) =>
      document.getElementById(link.href.slice(1)),
    ).filter((section): section is HTMLElement => section !== null);

    const visibleIds = new Set<string>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visibleIds.add(entry.target.id);
          } else {
            visibleIds.delete(entry.target.id);
          }
        });

        const current = FOOTER_ANCHOR_LINKS.filter((link) =>
          visibleIds.has(link.href.slice(1)),
        ).pop();

        if (current) {
          setActiveHref(current.href);
        }
      },
      { rootMargin: "-64px 0px -75% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));

    const handleScroll = () => {
      const scrolledToBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 1;

      if (scrolledToBottom) {
        setActiveHref(FOOTER_ANCHOR_LINKS[FOOTER_ANCHOR_LINKS.length - 1].href);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="hidden flex-row gap-16 lg:flex">
      {FOOTER_ANCHOR_LINKS.map((link) => (
        <FooterAnchorLink
          key={link.label}
          label={link.label}
          href={link.href}
          active={activeHref === link.href}
        />
      ))}
    </nav>
  );
}
