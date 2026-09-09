import { FooterAnchorMenu } from "./FooterAnchorMenu";
import { FooterMenu } from "./FooterMenu";
import type { FooterSubmenuData } from "./FooterSubmenu";
import { Logo } from "../Logo";
import { PageSection } from "../PageSection";
import { SectionSpacer } from "../SectionSpacer";
import { Sticker } from "../Sticker";
import { Team } from "../Team";
import { Time } from "../Time";

type FooterProps = {
  footerMenus: FooterSubmenuData[];
};

export function Footer({ footerMenus }: FooterProps) {
  return (
    <footer
      id="footer"
      className="relative scroll-mt-16 bg-secondary-brown-600 text-primary-light"
    >
      <PageSection
        as="div"
        size="2xl"
        className="relative pt-6"
        containerClassName="2xl:max-w-(--breakpoint-xl)"
      >
        <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 max-md:-translate-y-[calc(50%+5rem+3rem)]">
          <Sticker
            type="number"
            text1="accepting"
            text2="clients"
            fg="var(--color-primary-dark)"
            bg="var(--color-secondary-light-400)"
            rotation={-5.83}
          />
        </div>
        <PageSection
          as="div"
          size="2xl"
          className="absolute left-0 top-0 w-full pt-6"
          containerClassName="flex flex-row items-start justify-between"
        >
          <a href="/" aria-label="Home" className="hidden 2xl:block">
            <Logo type="tertiary" color="light" size="small" />
          </a>
          <Time className="ml-auto" />
        </PageSection>
        <p className="geist-m mx-auto w-full">
          <span className="sm:hidden">Based in Oakland</span>
          <span className="hidden sm:inline">
            Design studio based in Oakland
          </span>
        </p>
      </PageSection>

      <SectionSpacer size="lg" />

      <PageSection
        as="div"
        size="2xl"
        className="pb-6"
        containerClassName="flex flex-row gap-[7.5rem] 2xl:max-w-(--breakpoint-xl)"
      >
        <div className="min-w-0 flex-1">
          <FooterMenu menus={footerMenus} />
        </div>
        <div className="relative hidden h-[33.5rem] min-w-0 flex-1 lg:block">
          <Team person="Ekin" className="absolute right-[7%] top-0" />
          <Team person="Emily" className="absolute bottom-0 left-[7%]" />
        </div>
      </PageSection>

      <SectionSpacer size="lg" />

      <PageSection
        as="div"
        size="2xl"
        className="pb-6"
        containerClassName="flex flex-col items-center gap-4 md:flex-row md:items-end md:justify-between"
      >
        <div className="flex flex-col items-center md:items-start lg:gap-7">
          <p className="footer-chat-heading">Let&apos;s chat</p>
          <FooterAnchorMenu />
        </div>
        <div className="flex flex-row items-center gap-3">
          <p className="geist-m">made by</p>
          <Logo type="secondary" color="light" size="x-small" />
        </div>
      </PageSection>
    </footer>
  );
}
