"use client";

import { Icon } from "../Icon";

export type FooterSubmenuLink = {
  label: string;
  href?: string;
};

export type FooterSubmenuData = {
  title: string;
  links: FooterSubmenuLink[];
};

type FooterSubmenuProps = FooterSubmenuData & {
  open: boolean;
  onToggle: () => void;
};

export function FooterSubmenu({ title, links = [], open, onToggle }: FooterSubmenuProps) {
  return (
    <div
      className={`border-b lg:border-none ${open ? "border-solid border-primary-light" : "border-dashed border-transparent-light-alpha-40"}`}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full cursor-pointer items-center justify-between gap-4 py-4 lg:pointer-events-none lg:py-0"
      >
        <span className="helvetica-s-bold">{title}</span>
        <Icon type={open ? "remove" : "add"} className="lg:hidden" />
      </button>
      <div
        className={`grid transition-[grid-template-rows,margin-top,margin-bottom] duration-300 ease-out lg:grid-rows-[1fr] lg:mt-8 lg:mb-0 ${open ? "mt-4 mb-4 grid-rows-[1fr]" : "mt-0 mb-0 grid-rows-[0fr]"}`}
      >
        <ul className="flex flex-col gap-[0.625rem] overflow-hidden lg:gap-1">
          {links.map((link) =>
            link.href ? (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="helvetica-s-tall"
                >
                  {link.label}
                </a>
              </li>
            ) : (
              <li key={link.label} className="helvetica-s-tall">
                {link.label}
              </li>
            ),
          )}
        </ul>
      </div>
    </div>
  );
}
