type SectionSpacerSize = "sm" | "md" | "lg" | "xl" | "2xl";

type SectionSpacerProps = {
  size?: SectionSpacerSize;
};

const SIZE_CLASSES: Record<SectionSpacerSize, string> = {
  sm: "h-8",
  md: "h-16",
  lg: "h-24",
  xl: "h-[7.5rem]",
  "2xl": "h-40",
};

export function SectionSpacer({ size = "md" }: SectionSpacerProps) {
  return <div className={SIZE_CLASSES[size]} />;
}
