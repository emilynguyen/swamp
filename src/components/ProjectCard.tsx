import Link from "next/link";
import { useId } from "react";
import { Button } from "./Button";
import { Grain } from "./Grain";

type ProjectCardProps = {
  type?: "default" | "cta";
  href?: string;
  title?: string;
  category?: string;
  imageSrc?: string;
  ctaLabel?: string;
  className?: string;
};

export function ProjectCard({
  type = "default",
  href = "#",
  title = "Project title",
  category = "Brand + Web",
  imageSrc,
  ctaLabel = "Button",
  className,
}: ProjectCardProps) {
  const isCta = type === "cta";
  const grainId = useId();

  return (
    <Link
      href={href}
      className={`group relative flex h-[16.5rem] w-[20.75rem] flex-col items-start gap-2 ${className ?? ""}`}
    >
      <div
        className={`relative aspect-3/2 w-full shrink-0 rounded-default ${
          isCta
            ? "overflow-hidden border border-dashed border-secondary-brown-300 transition-colors duration-300 ease-in-out group-hover:border-solid group-hover:border-secondary-purple-600 group-hover:bg-secondary-purple-300 group-hover:opacity-50"
            : "overflow-hidden group-hover:overflow-visible"
        }`}
      >
        {!isCta && imageSrc && (
          <>
            <img
              src={imageSrc}
              alt=""
              className="absolute inset-0 size-full rounded-default object-cover transition-all duration-300 ease-in-out group-hover:blur-[0.469rem]"
            />
            <Grain id={grainId} size={2} radius={2} contrast={4} />
            <div
              className="pointer-events-none absolute inset-0 rounded-default opacity-0 mix-blend-overlay transition-opacity duration-700 ease-in-out group-hover:opacity-90 group-hover:duration-300"
              style={{ filter: `url(#${grainId})` }}
            />
          </>
        )}
        <div
          className={`absolute inset-0 flex items-center justify-center ${
            isCta ? "" : "opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"
          }`}
        >
          <Button variant="light">{isCta ? ctaLabel : "View website"}</Button>
        </div>
      </div>

      {!isCta && (
        <>
          <div className="flex w-full items-center justify-between whitespace-nowrap text-transparent-dark-alpha-40 transition-colors duration-300 ease-in-out group-hover:text-primary-dark">
            <p className="helvetica-s-bold">{title}</p>
            <p className="geist-m">{category}</p>
          </div>
          <div className="h-0 w-full border-t border-dashed border-primary-dark opacity-0" />
        </>
      )}
    </Link>
  );
}
