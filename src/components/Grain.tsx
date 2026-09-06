type GrainProps = {
  id: string;
  /** Grain particle size, higher = coarser grain. Mirrors Figma's Texture "Size" field. */
  size?: number;
  /** Softness of each grain particle. Mirrors Figma's Texture "Radius" field. */
  radius?: number;
  /** Layers of noise detail. */
  octaves?: number;
  seed?: number;
  /** Contrast of the grain specks; higher = grittier, more defined. */
  contrast?: number;
};

export function Grain({ id, size = 4, radius = 4, octaves = 3, seed = 4, contrast = 2.2 }: GrainProps) {
  const baseFrequency = 3 / size;
  const stdDeviation = radius / 4;
  const intercept = -(contrast - 1) / 2;

  return (
    <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
      <defs>
        <filter
          id={id}
          x="-20%"
          y="-20%"
          width="140%"
          height="140%"
          colorInterpolationFilters="sRGB"
        >
          <feTurbulence
            type="fractalNoise"
            baseFrequency={baseFrequency}
            numOctaves={octaves}
            seed={seed}
            result="noise"
          />
          <feGaussianBlur in="noise" stdDeviation={stdDeviation} result="softNoise" />
          {/* Collapse to opaque grayscale luminance so grain values span above and below
              50% gray -- required for the overlay blend mode to actually lighten/darken. */}
          <feColorMatrix
            in="softNoise"
            type="matrix"
            values="0.2126 0.7152 0.0722 0 0
                    0.2126 0.7152 0.0722 0 0
                    0.2126 0.7152 0.0722 0 0
                    0 0 0 0 1"
            result="grayNoise"
          />
          <feComponentTransfer in="grayNoise">
            <feFuncR type="linear" slope={contrast} intercept={intercept} />
            <feFuncG type="linear" slope={contrast} intercept={intercept} />
            <feFuncB type="linear" slope={contrast} intercept={intercept} />
          </feComponentTransfer>
        </filter>
      </defs>
    </svg>
  );
}
