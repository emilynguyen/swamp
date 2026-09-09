import Link from "next/link";
import { useEffect, useId, useLayoutEffect, useRef, useState } from "react";
import { Button } from "./Button";
import { Grain } from "./Grain";

function isSafari() {
  return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
}

type ProjectCardProps = {
  type?: "default" | "cta";
  href?: string;
  openInNewTab?: boolean;
  title?: string;
  category?: string;
  imageSrc?: string;
  ctaLabel?: string;
  className?: string;
  /** Whether the thumbnail is shown. Ignored unless `onToggle` is passed. */
  isOpen?: boolean;
  /** Renders the card as an accordion drawer: header toggles the thumbnail instead of a hover reveal. */
  onToggle?: () => void;
};

export function ProjectCard({
  type = "default",
  href = "#",
  openInNewTab = false,
  title = "Project title",
  category = "Brand + Web",
  imageSrc,
  ctaLabel,
  className,
  isOpen = true,
  onToggle,
}: ProjectCardProps) {
  const isCta = type === "cta";
  const isAccordion = !isCta && typeof onToggle === "function";
  const grainId = useId();
  const resolvedCtaLabel = ctaLabel ?? (isCta ? "Start a project" : "View website");

  const [grainDisabled, setGrainDisabled] = useState(false);
  useEffect(() => {
    setGrainDisabled(isSafari());
  }, []);

  const drawerContentRef = useRef<HTMLDivElement>(null);
  const isFirstRender = useRef(true);
  const [drawerMaxHeight, setDrawerMaxHeight] = useState<string>(isOpen ? "none" : "0px");
  const [isDrawerSettled, setIsDrawerSettled] = useState(isOpen);

  useLayoutEffect(() => {
    if (!isAccordion) return;

    // Skip the very first run: the initial useState values above are already correct,
    // and this section's drawers may still be `display: none` on mount (e.g. the mobile
    // accordion is always in the DOM, even on desktop, just hidden via CSS) — measuring
    // `scrollHeight` while hidden always returns 0, corrupting the height. Deferring the
    // first real measurement to the first user-triggered toggle guarantees the element is
    // actually visible by then.
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    const el = drawerContentRef.current;
    if (!el) return;

    setIsDrawerSettled(false);
    setDrawerMaxHeight(`${el.scrollHeight}px`);

    if (!isOpen) {
      const frame = requestAnimationFrame(() => setDrawerMaxHeight("0px"));
      return () => cancelAnimationFrame(frame);
    }
  }, [isAccordion, isOpen]);

  useEffect(() => {
    if (!isAccordion) return;

    // The mobile accordion is always mounted, even on desktop (just `display: none` via
    // `md:hidden`). An <img> that was never actually laid out while hidden can fail to
    // paint even after a CSS media query makes its ancestor visible again on resize —
    // browsers don't always retroactively repaint it. Forcing a fresh inline style write
    // exactly when the viewport crosses into the mobile breakpoint nudges a real repaint.
    const mql = window.matchMedia("(max-width: 47.9375rem)");
    const resync = (matches: boolean) => {
      if (!matches) return;
      const el = drawerContentRef.current;
      if (!el) return;
      setDrawerMaxHeight(isOpen ? `${el.scrollHeight}px` : "0px");
    };
    const handleChange = (event: MediaQueryListEvent) => resync(event.matches);

    resync(mql.matches);
    mql.addEventListener("change", handleChange);
    return () => mql.removeEventListener("change", handleChange);
  }, [isAccordion, isOpen]);

  const thumbnail = (
    <div className="-m-5 w-[calc(100%+2.5rem)] overflow-hidden p-5">
      <div
        className={`relative aspect-3/2 w-full shrink-0 overflow-hidden rounded-default group-hover:overflow-visible ${
          isCta
            ? "border border-dashed border-secondary-brown-300 transition-colors duration-300 ease-in-out group-hover:border-transparent"
            : !imageSrc
              ? "bg-secondary-light-400"
              : ""
        }`}
      >
        {isCta ? (
          <div className="absolute inset-0 rounded-default bg-transparent transition-all duration-300 ease-in-out group-hover:bg-secondary-purple-300 group-hover:blur-[0.469rem]" />
        ) : (
          imageSrc && (
            <img
              src={imageSrc}
              alt=""
              className="absolute inset-0 size-full rounded-default object-cover transition-all duration-300 ease-in-out group-hover:blur-[0.469rem]"
            />
          )
        )}
        {!grainDisabled && (
          <>
            <Grain id={grainId} size={2} radius={2} contrast={isCta ? 1.6 : 2} />
            <div
              className={`pointer-events-none absolute inset-0 rounded-default opacity-0 transition-opacity duration-700 ease-in-out group-hover:opacity-70 group-hover:duration-300 ${
                isCta ? "mix-blend-soft-light" : "mix-blend-overlay"
              }`}
              style={{ filter: `url(#${grainId})` }}
            />
          </>
        )}
        <div
          className={`absolute inset-0 flex items-center justify-center ${
            isCta ? "" : "opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"
          }`}
        >
          <Button variant="light">{resolvedCtaLabel}</Button>
        </div>
      </div>
    </div>
  );

  if (isAccordion) {
    return (
      <div className={`relative flex w-full flex-col items-start gap-2 ${className ?? ""}`}>
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={isOpen}
          className="flex w-full cursor-pointer flex-col items-start gap-2 text-left [-webkit-tap-highlight-color:transparent]"
        >
          <div
            className={`flex w-full items-center justify-between whitespace-nowrap transition-colors duration-300 ease-in-out ${
              isOpen ? "text-primary-dark" : "text-transparent-dark-alpha-40"
            }`}
          >
            <p className="helvetica-s-bold">{title}</p>
            <p className="geist-m">{category}</p>
          </div>
        </button>
        <div
          ref={drawerContentRef}
          style={{
            maxHeight: drawerMaxHeight,
            clipPath: isDrawerSettled ? undefined : "inset(0 -100vw 0 -100vw)",
          }}
          className="w-full transition-[max-height] duration-300 ease-in-out"
          onTransitionEnd={(event) => {
            if (isOpen && event.propertyName === "max-height") {
              setIsDrawerSettled(true);
            }
          }}
        >
          <Link
            href={href}
            target={openInNewTab ? "_blank" : undefined}
            rel={openInNewTab ? "noopener noreferrer" : undefined}
            className={`group block pt-6 ${isDrawerSettled ? "" : "pointer-events-none"}`}
            tabIndex={isOpen ? undefined : -1}
          >
            {thumbnail}
          </Link>
        </div>
        <div
          className={`h-0 w-full border-t border-dashed border-primary-dark transition-all duration-300 ease-in-out ${
            isOpen ? "mt-2 opacity-100" : "mt-0 opacity-20"
          }`}
        />
      </div>
    );
  }

  return (
    <Link
      href={href}
      target={openInNewTab ? "_blank" : undefined}
      rel={openInNewTab ? "noopener noreferrer" : undefined}
      className={`group relative flex w-full flex-col items-start gap-2 ${className ?? ""}`}
    >
      {thumbnail}

      {!isCta && (
        <>
          <div className="mt-5 flex w-full items-center justify-between whitespace-nowrap text-transparent-dark-alpha-40 transition-colors duration-300 ease-in-out group-hover:text-primary-dark">
            <p className="helvetica-s-bold">{title}</p>
            <p className="geist-m">{category}</p>
          </div>
          <div className="h-0 w-full border-t border-dashed border-primary-dark opacity-0" />
        </>
      )}
    </Link>
  );
}
