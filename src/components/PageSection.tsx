import type { ElementType, HTMLAttributes, ReactNode } from "react";

type PageSectionSize = "sm" | "md" | "lg" | "xl" | "2xl";

type PageSectionProps = {
  as?: ElementType;
  size?: PageSectionSize;
  children?: ReactNode;
  className?: string;
  containerClassName?: string;
} & Omit<HTMLAttributes<HTMLElement>, "children" | "className">;

const SIZE_CLASSES: Record<PageSectionSize, string> = {
  sm: "max-w-(--breakpoint-sm)",
  md: "max-w-(--breakpoint-md)",
  lg: "max-w-(--breakpoint-lg)",
  xl: "max-w-(--breakpoint-xl)",
  "2xl": "max-w-(--breakpoint-2xl)",
};

export function PageSection({
  as: Tag = "section",
  size = "2xl",
  children,
  className,
  containerClassName,
  ...props
}: PageSectionProps) {
  return (
    <Tag className={`px-page-margin ${className ?? ""}`} {...props}>
      <div className={`mx-auto ${SIZE_CLASSES[size]} ${containerClassName ?? ""}`}>
        {children}
      </div>
    </Tag>
  );
}
