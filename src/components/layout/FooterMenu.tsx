"use client";

import { useState } from "react";
import { FooterSubmenu, type FooterSubmenuData } from "./FooterSubmenu";

type FooterMenuProps = {
  menus: FooterSubmenuData[];
};

export function FooterMenu({ menus }: FooterMenuProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-col lg:flex-row lg:justify-between">
      {menus.map((menu, index) => (
        <FooterSubmenu
          key={menu.title}
          title={menu.title}
          links={menu.links}
          open={openIndex === index}
          onToggle={() =>
            setOpenIndex((current) => (current === index ? null : index))
          }
        />
      ))}
    </div>
  );
}
