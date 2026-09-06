import type { ButtonHTMLAttributes, ReactNode } from "react";
import { Icon } from "./Icon";

type ButtonVariant = "outline" | "light" | "dark" | "neutral";

type ButtonProps = {
  variant?: ButtonVariant;
  children?: ReactNode;
  className?: string;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children">;

const TEXT_SHAPE_CLASSES: Record<ButtonVariant, string> = {
  outline:
    "rounded-default border border-primary-dark bg-transparent group-hover:rounded-round group-hover:border-transparent group-hover:bg-primary-dark",
  light: "rounded-round bg-primary-brand",
  dark: "rounded-round bg-primary-dark",
  neutral: "rounded-round bg-secondary-light-400",
};

const TEXT_COLOR_CLASSES: Record<ButtonVariant, string> = {
  outline: "text-primary-dark group-hover:text-primary-light",
  light: "text-secondary-purple-600",
  dark: "text-primary-light",
  neutral: "text-secondary-brown-600",
};

const ROOT_SHAPE_CLASSES: Record<ButtonVariant, string> = {
  outline: "rounded-default hover:rounded-round",
  light: "rounded-round",
  dark: "rounded-round",
  neutral: "rounded-round",
};

const ICON_SHAPE_CLASSES: Record<ButtonVariant, string> = {
  outline: "bg-primary-dark text-primary-light",
  light: "bg-primary-brand text-primary-dark",
  dark: "bg-primary-dark text-primary-light",
  neutral: "bg-secondary-light-400 text-secondary-brown-600",
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
      className={`helvetica-s group relative inline-flex cursor-pointer items-center transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-dark disabled:cursor-not-allowed disabled:opacity-50 ${ROOT_SHAPE_CLASSES[variant]} ${className ?? ""}`}
      {...props}
    >
      {/* Content layer */}
      <span className="relative flex items-center">
        <span
          className={`inline-flex items-center justify-center px-5 py-3.5 transition-all duration-500 ${TEXT_SHAPE_CLASSES[variant]} ${TEXT_COLOR_CLASSES[variant]}`}
        >
          {children}
        </span>

        {/* Arrow circle — springs out on hover */}
        <span
          className={`-ml-[2.875rem] flex size-[2.875rem] shrink-0 scale-0 items-center justify-center overflow-hidden rounded-round transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:-ml-[2px] group-hover:scale-100 ${ICON_SHAPE_CLASSES[variant]}`}
        >
          <Icon type="arrow-forward" className="shrink-0" />
        </span>
      </span>
    </button>
  );
}
