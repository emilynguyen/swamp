import { useId, type ReactNode } from "react";

export type StickerType =
  | "stamp"
  | "big note"
  | "small note"
  | "oval"
  | "number"
  | "round"
  | "receipt"
  | "raffle"
  | "tape";

type StickerProps = {
  type?: StickerType;
  text1?: string;
  text2?: string;
  fg?: string;
  bg?: string;
  rotation?: number;
  className?: string;
};

const CLIP_PATHS: Record<Exclude<StickerType, "round">, string> = {
  stamp:
    'path("M86 8.59961C83.286 8.5997 81.0859 10.8006 81.0859 13.5146C81.0861 16.1437 83.1507 18.2901 85.7471 18.4219L86 18.4287V23.3428C83.2861 23.3429 81.0861 25.5429 81.0859 28.2568C81.0859 30.9709 83.286 33.1708 86 33.1709V38.0859C83.286 38.086 81.0859 40.286 81.0859 43C81.086 45.714 83.286 47.914 86 47.9141V52.8281C83.286 52.8282 81.0859 55.0291 81.0859 57.7432C81.0861 60.3722 83.1507 62.5187 85.7471 62.6504L86 62.6572V67.5713C83.2861 67.5714 81.0861 69.7715 81.0859 72.4854C81.0859 75.1145 83.1506 77.2618 85.7471 77.3936L86 77.4004V86H77.4004C77.4003 83.286 75.1994 81.0859 72.4854 81.0859C69.7715 81.0861 67.5713 83.2861 67.5713 86H62.6572C62.6572 83.286 60.4571 81.0861 57.7432 81.0859C55.0291 81.0859 52.8292 83.286 52.8291 86H47.9141C47.914 83.286 45.7141 81.0859 43 81.0859C40.286 81.086 38.086 83.286 38.0859 86H33.1719C33.1718 83.286 30.9709 81.0859 28.2568 81.0859C25.5429 81.0861 23.3428 83.2861 23.3428 86H18.4287C18.4287 83.2861 16.2286 81.0861 13.5146 81.0859C10.8006 81.0859 8.59966 83.286 8.59961 86H0V77.4004C2.71409 77.4004 4.91406 75.1994 4.91406 72.4854C4.91386 69.7714 2.71396 67.5713 0 67.5713V62.6572C2.71398 62.6572 4.9139 60.4571 4.91406 57.7432C4.91406 55.0291 2.71409 52.8281 0 52.8281V47.9141C2.71409 47.9141 4.91406 45.7141 4.91406 43C4.91406 40.3707 2.84948 38.2234 0.25293 38.0918L0 38.0859V33.1719C2.71409 33.1719 4.91406 30.9709 4.91406 28.2568C4.9139 25.5429 2.71398 23.3428 0 23.3428V18.4287C2.71396 18.4287 4.91387 16.2286 4.91406 13.5146C4.91406 10.8006 2.71409 8.59961 0 8.59961V0H8.59961C8.59965 2.71405 10.8006 4.91406 13.5146 4.91406C16.1437 4.91387 18.2902 2.84931 18.4219 0.25293L18.4287 0H23.3428C23.3428 2.71395 25.5429 4.9139 28.2568 4.91406C30.8861 4.91406 33.0334 2.84944 33.165 0.25293L33.1719 0H38.0859C38.086 2.71405 40.2859 4.91406 43 4.91406C45.7141 4.91406 47.914 2.71405 47.9141 0H52.8281C52.8282 2.71405 55.0291 4.91406 57.7432 4.91406C60.3722 4.9139 62.5187 2.84933 62.6504 0.25293L62.6572 0H67.5713C67.5713 2.71393 69.7715 4.91387 72.4854 4.91406C75.1146 4.91406 77.2619 2.84943 77.3936 0.25293L77.4004 0H86V8.59961Z")',
  "big note":
    'path("M184 86H0V0H184V86ZM14.1338 50.6426C10.7464 50.6426 8 53.3935 8 56.7861C8.00023 60.1785 10.7466 62.9287 14.1338 62.9287C17.521 62.9287 20.2664 60.1785 20.2666 56.7861C20.2666 53.3936 17.5211 50.6426 14.1338 50.6426ZM14.1338 23C10.7465 23 8.00015 25.7501 8 29.1426C8 32.5352 10.7464 35.2861 14.1338 35.2861C17.5211 35.2861 20.2666 32.5352 20.2666 29.1426C20.2665 25.7501 17.521 23.0001 14.1338 23Z")',
  "small note":
    'path("M184 63H0V0H184V63ZM14.1338 25C10.7465 25 8.00015 27.7501 8 31.1426C8 34.5352 10.7464 37.2861 14.1338 37.2861C17.521 37.286 20.2666 34.5351 20.2666 31.1426C20.2665 27.7502 17.5209 25.0001 14.1338 25Z")',
  oval: 'path("M92 0C142.81 0 184 17.383 184 43C184 68.617 142.81 86 92 86C41.1898 86 0 68.617 0 43C5.11148e-07 17.383 41.1898 7.17887e-06 92 0ZM18.4004 36.8574C15.013 36.8574 12.2666 39.6074 12.2666 43C12.2666 46.3926 15.013 49.1426 18.4004 49.1426C21.7876 49.1424 24.5332 46.3925 24.5332 43C24.5332 39.6075 21.7876 36.8576 18.4004 36.8574ZM165.6 36.8574C162.212 36.8577 159.467 39.6075 159.467 43C159.467 46.3925 162.212 49.1423 165.6 49.1426C168.987 49.1426 171.733 46.3926 171.733 43C171.733 39.6074 168.987 36.8574 165.6 36.8574Z")',
  number:
    'path("M106.235 12.3164C131.896 16.8574 150 28.1086 150 43C150 57.8913 131.895 69.1416 106.235 73.6826V86H0V73.8711C26.2369 69.4589 44.8564 58.1017 44.8564 43C44.8564 27.8983 26.237 16.5401 0 12.1279V0H106.235V12.3164Z")',
  receipt:
    'path("M148 86H137.748C137.763 85.8425 137.771 85.6829 137.771 85.5215C137.771 82.8075 135.571 80.6076 132.857 80.6074C130.143 80.6074 127.942 82.8074 127.942 85.5215C127.942 85.6829 127.951 85.8426 127.966 86H123.005C123.02 85.8425 123.028 85.6829 123.028 85.5215C123.028 82.8074 120.828 80.6074 118.114 80.6074C115.4 80.6074 113.2 82.8074 113.2 85.5215C113.2 85.6829 113.208 85.8425 113.224 86H108.263C108.278 85.8426 108.286 85.6829 108.286 85.5215C108.286 82.8074 106.085 80.6074 103.371 80.6074C100.657 80.6076 98.457 82.8075 98.457 85.5215C98.457 85.6829 98.4653 85.8425 98.4805 86H93.5195C93.5347 85.8425 93.543 85.6829 93.543 85.5215C93.543 82.8075 91.3428 80.6076 88.6289 80.6074C85.9148 80.6074 83.7139 82.8074 83.7139 85.5215C83.7139 85.6829 83.7221 85.8426 83.7373 86H78.7764C78.7916 85.8425 78.7998 85.6829 78.7998 85.5215C78.7998 82.8074 76.5998 80.6074 73.8857 80.6074C71.1717 80.6074 68.9717 82.8074 68.9717 85.5215C68.9717 85.6829 68.9799 85.8425 68.9951 86H64.0342C64.0494 85.8426 64.0576 85.6829 64.0576 85.5215C64.0576 82.8074 61.8567 80.6074 59.1426 80.6074C56.4286 80.6076 54.2285 82.8075 54.2285 85.5215C54.2285 85.6829 54.2367 85.8425 54.252 86H49.291C49.3062 85.8425 49.3145 85.6829 49.3145 85.5215C49.3144 82.8075 47.1143 80.6076 44.4004 80.6074C41.6863 80.6074 39.4854 82.8074 39.4854 85.5215C39.4854 85.6829 39.4936 85.8426 39.5088 86H34.5479C34.5631 85.8425 34.5713 85.6829 34.5713 85.5215C34.5713 82.8074 32.3713 80.6075 29.6572 80.6074C26.9431 80.6074 24.7432 82.8074 24.7432 85.5215C24.7432 85.6829 24.7514 85.8425 24.7666 86H19.8047C19.8199 85.8425 19.8281 85.6829 19.8281 85.5215C19.8281 82.8074 17.6281 80.6074 14.9141 80.6074C12.2001 80.6075 10 82.8075 10 85.5215C10 85.6829 10.0082 85.8425 10.0234 86H0V0H10.0234C10.264 2.48945 12.3615 4.43543 14.9141 4.43555C17.4667 4.43555 19.5641 2.4895 19.8047 0H24.7666C25.0072 2.4895 27.1046 4.43555 29.6572 4.43555C32.2098 4.4355 34.3073 2.48948 34.5479 0H39.5088C39.7494 2.48954 41.8477 4.43555 44.4004 4.43555C46.9529 4.43535 49.0505 2.4894 49.291 0H54.252C54.4925 2.48943 56.5901 4.43541 59.1426 4.43555C61.6952 4.43555 63.7936 2.48954 64.0342 0H68.9951C69.2357 2.48951 71.3331 4.43555 73.8857 4.43555C76.4384 4.43553 78.5358 2.4895 78.7764 0H83.7373C83.9779 2.48954 86.0763 4.43555 88.6289 4.43555C91.1814 4.43538 93.279 2.48941 93.5195 0H98.4805C98.721 2.48941 100.819 4.43538 103.371 4.43555C105.924 4.43555 108.022 2.48954 108.263 0H113.224C113.464 2.4895 115.562 4.43553 118.114 4.43555C120.667 4.43555 122.764 2.48951 123.005 0H127.966C128.206 2.48954 130.305 4.43555 132.857 4.43555C135.41 4.4354 137.507 2.48943 137.748 0H148V86Z")',
  raffle:
    'path("M148 8.14062C145.487 8.35791 143.515 10.4665 143.515 13.0361C143.515 15.6055 145.487 17.7124 148 17.9297V22.8838C145.487 23.1011 143.515 25.2089 143.515 27.7783C143.515 30.3479 145.487 32.4555 148 32.6729V37.627C145.487 37.8443 143.515 39.9519 143.515 42.5215C143.515 45.091 145.487 47.1977 148 47.415V52.3691C145.487 52.5864 143.515 54.6951 143.515 57.2646C143.515 59.834 145.487 61.9409 148 62.1582V67.1123C145.487 67.3296 143.515 69.4374 143.515 72.0068C143.515 74.5764 145.487 76.684 148 76.9014V86H0V76.9219C2.71409 76.9219 4.91406 74.7209 4.91406 72.0068C4.91386 69.2929 2.71396 67.0928 0 67.0928V62.1787C2.71398 62.1787 4.9139 59.9786 4.91406 57.2646C4.91406 54.5506 2.71409 52.3496 0 52.3496V47.4355C2.71409 47.4355 4.91406 45.2356 4.91406 42.5215C4.91406 39.8922 2.84951 37.7449 0.25293 37.6133L0 37.6074V32.6934C2.71409 32.6934 4.91406 30.4924 4.91406 27.7783C4.9139 25.0644 2.71398 22.8643 0 22.8643V17.9502C2.71396 17.9502 4.91387 15.7501 4.91406 13.0361C4.91406 10.322 2.71409 8.12109 0 8.12109V0H148V8.14062Z")',
  tape: 'path("M210 1.28613L203.001 6.42871L210 11.5703V11.5713L203.001 16.7139L210 21.8564L203.001 27L210 32.1416V32.1426L203.001 37.2852L210 42.4277L203.001 47.5713L210 52.7129V54H0V52.7129L0.000976562 52.7139L7.00098 47.5713L0.000976562 42.4287H0V42.4277L0.000976562 42.4287L7.00098 37.2852L0.000976562 32.1426L0 32.1416L0.000976562 32.1426L7.00098 27L0.000976562 21.8574H0V21.8564L0.000976562 21.8574L7.00098 16.7139L0.000976562 11.5713L0 11.5703L0.000976562 11.5713L7.00098 6.42871L0.000976562 1.28613H0V0H210V1.28613Z")',
};

const SIZES: Record<StickerType, { width: number; height: number }> = {
  stamp: { width: 86, height: 86 },
  "big note": { width: 184, height: 86 },
  "small note": { width: 184, height: 63 },
  oval: { width: 184, height: 86 },
  number: { width: 86, height: 150 },
  round: { width: 86, height: 86 },
  receipt: { width: 148, height: 86 },
  raffle: { width: 148, height: 86 },
  tape: { width: 210, height: 54 },
};

function TwoLineStacked({ text1, text2 }: { text1?: ReactNode; text2?: ReactNode }) {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
      <p className="editorial-s">{text1}</p>
      <p className="denim-xxs" style={{ marginTop: "-0.5rem" }}>
        {text2}
      </p>
    </div>
  );
}

function OneLineCentered({ text1, text2 }: { text1?: ReactNode; text2?: ReactNode }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="flex items-start gap-1">
        <p className="editorial-s">{text1}</p>
        <p className="denim-xxs">{text2}</p>
      </div>
    </div>
  );
}

function LeftAlignedStacked({ text1, text2 }: { text1?: ReactNode; text2?: ReactNode }) {
  return (
    <div className="absolute inset-y-0 left-11 right-4 flex flex-col justify-center gap-1">
      <p className="editorial-s" style={{ transform: "translateY(-4px)" }}>
        {text1}
      </p>
      <p className="denim-xxs" style={{ transform: "translateY(-6px)" }}>
        {text2}
      </p>
    </div>
  );
}

function LeftAlignedInline({ text1, text2 }: { text1?: ReactNode; text2?: ReactNode }) {
  return (
    <div className="absolute inset-y-0 left-11 right-4 flex items-center">
      <div className="flex items-start gap-1">
        <p className="editorial-s">{text1}</p>
        <p className="denim-xxs">{text2}</p>
      </div>
    </div>
  );
}

function SketchStroke({ children }: { children: ReactNode }) {
  return (
    <g
      stroke="currentColor"
      strokeWidth={0.5}
      fill="none"
      opacity={0.5}
      style={{ filter: "url(#sketch-stroke)" }}
    >
      {children}
    </g>
  );
}

function Decoration({ type }: { type: StickerType }) {
  switch (type) {
    case "stamp":
      return (
        <svg viewBox="0 0 86 86" className="absolute inset-0 h-full w-full">
          <SketchStroke>
            <rect x={12.286} y={12.286} width={61.429} height={61.429} />
          </SketchStroke>
        </svg>
      );
    case "big note":
      return (
        <svg viewBox="0 0 184 86" className="absolute inset-0 h-full w-full">
          <SketchStroke>
            <line x1={43} y1={38} x2={159.714} y2={38} />
            <line x1={43} y1={62.429} x2={159.714} y2={62.429} />
          </SketchStroke>
        </svg>
      );
    case "small note":
      return (
        <svg viewBox="0 0 184 63" className="absolute inset-0 h-full w-full">
          <SketchStroke>
            <line x1={43} y1={42.907} x2={159.714} y2={42.907} />
          </SketchStroke>
        </svg>
      );
    case "oval":
      return (
        <svg viewBox="0 0 184 86" className="absolute inset-0 h-full w-full">
          <SketchStroke>
            <ellipse cx={92} cy={43} rx={86.5} ry={37} />
          </SketchStroke>
        </svg>
      );
    case "raffle":
      return (
        <svg viewBox="0 0 148 86" className="absolute inset-0 h-full w-full">
          <SketchStroke>
            <rect x={12} y={5} width={122.857} height={76.171} />
            <line x1={28} y1={5} x2={28} y2={81.171} />
            <line x1={120} y1={5} x2={120} y2={81.171} />
          </SketchStroke>
        </svg>
      );
    case "number":
      return (
        <svg viewBox="0 0 86 150" className="absolute inset-0 h-full w-full">
          <polygon
            points="31.618,123.941 54.382,123.941 43,141.647"
            fill="currentColor"
            style={{ filter: "url(#grain-texture)" }}
          />
        </svg>
      );
    default:
      return null;
  }
}

export function Sticker({
  type = "stamp",
  text1,
  text2,
  fg = "#5c3a5c",
  bg = "#b7acd6",
  rotation = 0,
  className,
}: StickerProps) {
  const { width, height } = SIZES[type];
  const label = [text1, text2].filter(Boolean).join(" ") || undefined;
  const sincePathId = useId();
  const now = new Date();
  const dateLabel = `${String(now.getMonth() + 1).padStart(2, "0")} . ${String(now.getDate()).padStart(2, "0")} . ${now.getFullYear()}`;

  const shape =
    type === "round" ? (
      <div
        className="absolute inset-0 rounded-full"
        style={{ backgroundColor: bg }}
      />
    ) : (
      <div
        className="absolute"
        style={
          type === "number"
            ? {
                width: 150,
                height: 86,
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%) rotate(90deg)",
                backgroundColor: bg,
                clipPath: CLIP_PATHS.number,
              }
            : {
                inset: 0,
                backgroundColor: bg,
                clipPath: CLIP_PATHS[type],
              }
        }
      />
    );

  const content =
    type === "round" ? (
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="w-10"
          style={{
            aspectRatio: "60.078 / 49",
            backgroundColor: fg,
            maskImage: "url(/logos/tertiary-dark-medium.svg)",
            maskSize: "contain",
            maskRepeat: "no-repeat",
            maskPosition: "center",
          }}
        />
      </div>
    ) : type === "tape" ? (
      <OneLineCentered text1={text1} text2={text2} />
    ) : type === "number" ? (
      <>
        <TwoLineStacked text1={text1} text2={text2} />
        <div
          className="absolute"
          style={{
            left: 2,
            top: 4,
            width: 8,
            aspectRatio: "60.078 / 49",
            transform: "rotate(-90deg)",
            backgroundColor: fg,
            maskImage: "url(/logos/tertiary-dark-medium.svg)",
            maskSize: "contain",
            maskRepeat: "no-repeat",
            maskPosition: "center",
          }}
        />
      </>
    ) : type === "small note" ? (
      <LeftAlignedInline text1={text1} text2={text2} />
    ) : type === "big note" ? (
      <LeftAlignedStacked text1={text1} text2={text2} />
    ) : type === "oval" ? (
      <>
        <TwoLineStacked text1={text1} text2={text2} />
        <svg viewBox="0 0 184 86" className="absolute inset-0 h-full w-full">
          <path id={sincePathId} d="M 35,62 A 130,130 0 0 0 149,62" fill="none" />
          <text
            fill="currentColor"
            textAnchor="middle"
            style={{ fontFamily: "var(--font-sans)", fontSize: 7 }}
          >
            <textPath href={`#${sincePathId}`} startOffset="50%">
              Since 2025
            </textPath>
          </text>
        </svg>
      </>
    ) : type === "raffle" ? (
      <>
        <TwoLineStacked text1={text1} text2={text2} />
        <p
          className="absolute whitespace-nowrap"
          style={{
            left: 20,
            top: 43,
            transform: "translate(-50%, -50%) rotate(90deg)",
            fontFamily: "var(--font-sans)",
            fontSize: 7,
          }}
        >
          {dateLabel}
        </p>
        <p
          className="absolute whitespace-nowrap"
          style={{
            left: 127,
            top: 43,
            transform: "translate(-50%, -50%) rotate(90deg)",
            fontFamily: "var(--font-sans)",
            fontSize: 7,
          }}
        >
          {dateLabel}
        </p>
      </>
    ) : (
      <TwoLineStacked text1={text1} text2={text2} />
    );

  return (
    <div
      role="img"
      aria-label={label}
      className={`relative ${className ?? ""}`}
      style={{
        width,
        height,
        color: fg,
        transform: `rotate(${rotation}deg)`,
      }}
    >
      {shape}
      <div aria-hidden="true" className="contents">
        <Decoration type={type} />
        {content}
      </div>
    </div>
  );
}
