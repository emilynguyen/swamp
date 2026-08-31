import type { ButtonHTMLAttributes, ReactNode } from "react";
import { Icon } from "./Icon";

type ButtonVariant = "outline" | "light";

type ButtonProps = {
  variant?: ButtonVariant;
  children?: ReactNode;
  className?: string;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children">;

const TEXT_SHAPE_CLASSES: Record<ButtonVariant, string> = {
  outline:
    "rounded-default border border-primary-dark bg-transparent text-primary-dark group-hover:rounded-round group-hover:border-transparent group-hover:bg-primary-dark group-hover:text-primary-light",
  light: "rounded-round bg-primary-brand text-secondary-purple-600",
};

const ICON_SHAPE_CLASSES: Record<ButtonVariant, string> = {
  outline: "bg-primary-dark text-primary-light",
  light: "bg-primary-brand text-primary-dark",
};

export function Button({
  variant = "outline",
  children = "Button",
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      type="button"
      className={`helvetica-s group inline-flex items-center ${className ?? ""}`}
      {...props}
    >
      <span
        className={`inline-flex items-center justify-center px-5 py-3.5 transition-all duration-200 ${TEXT_SHAPE_CLASSES[variant]}`}
      >
        {children}
      </span>
      <span
        className={`ml-0 flex size-0 shrink-0 scale-0 items-center justify-center overflow-hidden rounded-round opacity-0 transition-all duration-200 group-hover:-ml-[2px] group-hover:size-[46px] group-hover:scale-100 group-hover:opacity-100 ${ICON_SHAPE_CLASSES[variant]}`}
      >
        <Icon type="arrow-forward" className="shrink-0" />
      </span>
    </button>
  );
}
