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

export function StickerGroup({ stickers }: { stickers: StickerConfig[] }) {
  return (
    <>
      {stickers.map((sticker) => (
        <div
          key={`${sticker.type}-${sticker.text1}`}
          aria-hidden="true"
          className={sticker.className}
          style={sticker.style}
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
