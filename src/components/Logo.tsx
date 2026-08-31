type LogoProps = {
  className?: string;
  color?: "dark" | "light";
  size?: "medium" | "small" | "x-small" | "xx-small";
  type?: "primary" | "secondary" | "tertiary";
};

const DIMENSIONS: Record<string, { width: number; height: number }> = {
  "primary-dark-medium": { width: 200, height: 92 },
  "secondary-dark-medium": { width: 200, height: 49 },
  "tertiary-dark-medium": { width: 60.078, height: 49 },
  "primary-light-medium": { width: 200, height: 92 },
  "secondary-light-medium": { width: 200, height: 49 },
  "tertiary-light-medium": { width: 60.078, height: 49 },
  "primary-dark-small": { width: 82.609, height: 38 },
  "secondary-dark-small": { width: 81.633, height: 20 },
  "tertiary-dark-small": { width: 24.522, height: 20 },
  "primary-light-small": { width: 86.957, height: 40 },
  "secondary-light-small": { width: 89.796, height: 22 },
  "tertiary-light-small": { width: 26.974, height: 22 },
  "primary-dark-x-small": { width: 78.261, height: 36 },
  "secondary-dark-x-small": { width: 73.469, height: 18 },
  "tertiary-dark-x-small": { width: 22.07, height: 18 },
  "primary-light-x-small": { width: 78.261, height: 36 },
  "secondary-light-x-small": { width: 73.469, height: 18 },
  "tertiary-light-x-small": { width: 22.07, height: 18 },
  "primary-dark-xx-small": { width: 60.87, height: 28 },
  "secondary-dark-xx-small": { width: 40.816, height: 10 },
  "tertiary-dark-xx-small": { width: 12.261, height: 10 },
};

export function Logo({
  className,
  color = "dark",
  size = "medium",
  type = "primary",
}: LogoProps) {
  const variant = `${type}-${color}-${size}`;
  const dimensions = DIMENSIONS[variant];

  if (!dimensions) {
    throw new Error(
      `Logo: no "${color}" variant exists at size "${size}" for type "${type}"`,
    );
  }

  return (
    <img
      alt="Swamp"
      src={`/logos/${variant}.svg`}
      width={dimensions.width}
      height={dimensions.height}
      className={className}
    />
  );
}
