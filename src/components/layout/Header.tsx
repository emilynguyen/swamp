import Link from "next/link";
import { Logo } from "../Logo";
import { PageSection } from "../PageSection";
import { Time } from "../Time";

type HeaderVariant = "default" | "secondary";

const LOGO_TYPE: Record<HeaderVariant, "secondary" | "tertiary"> = {
  default: "secondary",
  secondary: "tertiary",
};

type HeaderProps = {
  variant?: HeaderVariant;
};

export function Header({ variant = "default" }: HeaderProps) {
  return (
    <PageSection as="header" className="py-6" containerClassName="flex items-center justify-between">
      <Link href="/" aria-label="Home">
        <Logo type={LOGO_TYPE[variant]} color="dark" size="small" />
      </Link>
      <Time />
    </PageSection>
  );
}
