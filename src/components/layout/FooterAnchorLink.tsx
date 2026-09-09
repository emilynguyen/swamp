type FooterAnchorLinkProps = {
  label: string;
  href: string;
  active?: boolean;
};

export function FooterAnchorLink({ label, href, active = false }: FooterAnchorLinkProps) {
  return (
    <a
      href={href}
      className={`group helvetica-s-bold inline-flex items-center gap-1 transition-colors duration-300 ${
        active ? "text-primary-light" : "text-transparent-light-alpha-40 hover:text-primary-light"
      }`}
    >
      <span aria-hidden="true" className={active ? "opacity-100" : "opacity-0 group-hover:opacity-100"}>
        (
      </span>
      {label}
      <span aria-hidden="true" className={active ? "opacity-100" : "opacity-0 group-hover:opacity-100"}>
        )
      </span>
    </a>
  );
}
