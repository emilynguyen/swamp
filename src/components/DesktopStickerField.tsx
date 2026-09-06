"use client";

import { useRef, useState } from "react";
import { Sticker, type StickerType } from "./Sticker";

type StickerConfig = {
  type: StickerType;
  text1: string;
  text2: string;
  fg: string;
  bg: string;
  rotation: number;
  scale: number;
  className: string;
};

const STICKERS: StickerConfig[] = [
  {
    type: "oval",
    text1: "brand",
    text2: "identity",
    fg: "#281C10",
    bg: "#7A6248",
    rotation: 4,
    scale: 189.888 / 184,
    className: "absolute left-[15%] top-[25%]",
  },
  {
    type: "receipt",
    text1: "web",
    text2: "development",
    fg: "#5C3A5C",
    bg: "#B7ACD6",
    rotation: 5.5,
    scale: 155.312 / 148,
    className: "absolute left-[10%] top-[-10%]",
  },
  {
    type: "stamp",
    text1: "digital",
    text2: "design",
    fg: "#B7ACD6",
    bg: "#281C10",
    rotation: -8,
    scale: 96.144 / 86,
    className: "absolute right-[35%] top-[20%]",
  },
  {
    type: "number",
    text1: "web",
    text2: "design",
    fg: "#131410",
    bg: "#FEE566",
    rotation: -12,
    scale: (116.72 / 86) * 0.8,
    className: "absolute bottom-0 left-[40%]",
  },
  {
    type: "tape",
    text1: "accepting",
    text2: "new projects",
    fg: "#B7ACD6",
    bg: "#5C3A5C",
    rotation: 5.83,
    scale: 215 / 210,
    className: "absolute right-[10%] bottom-0",
  },
  {
    type: "small note",
    text1: "creative",
    text2: "strategy",
    fg: "#131410",
    bg: "#FBFAAC",
    rotation: 5,
    scale: 189 / 184,
    className: "absolute right-[10%] bottom-[35%]",
  },
];

const TRIGGER_DISTANCE = 300;

export function DesktopStickerField() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const lastPos = useRef<{ x: number; y: number } | null>(null);
  const distanceSinceTrigger = useRef(0);

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const { clientX, clientY } = event;

    if (lastPos.current) {
      const dx = clientX - lastPos.current.x;
      const dy = clientY - lastPos.current.y;
      distanceSinceTrigger.current += Math.sqrt(dx * dx + dy * dy);
    }
    lastPos.current = { x: clientX, y: clientY };

    if (distanceSinceTrigger.current < TRIGGER_DISTANCE) return;
    distanceSinceTrigger.current = 0;

    setActiveIndex((current) => {
      if (STICKERS.length <= 1) return 0;
      let next = Math.floor(Math.random() * STICKERS.length);
      while (next === current) {
        next = Math.floor(Math.random() * STICKERS.length);
      }
      return next;
    });
  }

  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 grid grid-cols-3 grid-rows-2 p-8"
      onMouseMove={handleMouseMove}
    >
      {STICKERS.map((sticker, index) => (
        <div key={`${sticker.type}-${sticker.text1}`} className="relative">
          <div
            className={`${sticker.className} scale-0 opacity-0 transition-all duration-500 ${
              index === activeIndex ? "scale-100 opacity-100" : ""
            }`}
          >
            <div
              style={{
                transform: `scale(${sticker.scale})`,
                transformOrigin: "top left",
              }}
            >
              <Sticker
                type={sticker.type}
                text1={sticker.text1}
                text2={sticker.text2}
                fg={sticker.fg}
                bg={sticker.bg}
                rotation={sticker.rotation}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
