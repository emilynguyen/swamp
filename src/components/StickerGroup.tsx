"use client";

import { useEffect, useState } from "react";
import type { CSSProperties } from "react";
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
  style: CSSProperties;
};

const DELAYS = [0.5, 1, 1.5, 2];

function shuffle<T>(array: T[]): T[] {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

export function StickerGroup({ stickers }: { stickers: StickerConfig[] }) {
  const [delays, setDelays] = useState(() => DELAYS.slice(0, stickers.length));

  useEffect(() => {
    setDelays(shuffle(DELAYS.slice(0, stickers.length)));
  }, [stickers.length]);

  return (
    <>
      {stickers.map((sticker, index) => (
        <div
          key={`${sticker.type}-${sticker.text1}`}
          aria-hidden="true"
          className={sticker.className}
          style={{
            ...sticker.style,
            animation: `sticker-in 0.5s ease-out ${delays[index]}s both`,
          }}
        >
          <div
            style={{
              transform: `scale(${sticker.scale})`,
              transformOrigin: sticker.style.right !== undefined ? "top right" : "top left",
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
      ))}
    </>
  );
}
