import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/Button";
import { PageSection } from "@/components/PageSection";
import { ProjectSection } from "@/components/ProjectSection";
import { SectionSpacer } from "@/components/SectionSpacer";
import { StickerGroup } from "@/components/StickerGroup";
import { DesktopStickerField } from "@/components/DesktopStickerField";
import { client } from "@/sanity/client";
import { PROJECTS_QUERY, FOOTER_QUERY, type ProjectDocument, type FooterDocument } from "@/sanity/queries";

export default async function Home() {
  const [projects, footer] = await Promise.all([
    client.fetch<ProjectDocument[]>(PROJECTS_QUERY, {}, { cache: "no-store" }),
    client.fetch<FooterDocument | null>(FOOTER_QUERY, {}, { cache: "no-store" }),
  ]);

  return (
    <main id="top" className="min-h-screen scroll-mt-16">
      <Header />
      <section className="relative w-full">
        <h1 className="sr-only">
          A community-driven design studio dedicated to empowering businesses
          through thoughtful, creative solutions.
        </h1>

        {/* Desktop layout */}
        <div className="relative hidden h-[calc(100vh-68px)] max-h-[1024px] w-full items-center justify-center md:flex md:min-h-[720px]">
          <DesktopStickerField />
          <PageSection
            as="div"
            className="relative z-10 pointer-events-none"
            containerClassName="flex flex-col items-center gap-16 text-center"
          >
            <p
              aria-hidden="true"
              className="hero-heading text-balance text-primary-dark"
            >
              A{" "}
              <span
                style={{
                  fontFamily: "var(--font-editorial-new)",
                  fontWeight: 300,
                }}
              >
                community
              </span>
              -driven design studio dedicated to empowering businesses through
              thoughtful, creative solutions.
            </p>
            <Button variant="outline" className="pointer-events-auto">
              Start a project
            </Button>
          </PageSection>
        </div>

        {/* Mobile layout */}
        <PageSection
          as="div"
          className="relative h-[42.5rem] w-full md:hidden"
          containerClassName="flex h-full w-full flex-col items-center"
        >
          <div className="relative flex h-[34.9375rem] w-full flex-col items-end justify-between">
            <p
              aria-hidden="true"
              className="hero-heading w-full text-left text-primary-dark"
            >
              A{" "}
              <span
                style={{
                  fontFamily: "var(--font-editorial-new)",
                  fontWeight: 300,
                }}
              >
                community
              </span>
              -driven
              <br />
              design studio
            </p>

            <p
              aria-hidden="true"
              className="hero-heading text-right text-primary-dark"
            >
              empowering
              <br />
              businesses through
              <br />
              thoughtful design
            </p>

            <StickerGroup
              stickers={[
                {
                  type: "stamp",
                  text1: "digital",
                  text2: "design",
                  fg: "#B7ACD6",
                  bg: "#281C10",
                  rotation: -8,
                  scale: 96.144 / 86,
                  className: "absolute",
                  style: {
                    left: "calc(50% - 9.5rem - 3vw)",
                    top: "21.75rem",
                  },
                },
                {
                  type: "oval",
                  text1: "brand",
                  text2: "identity",
                  fg: "#281C10",
                  bg: "#7A6248",
                  rotation: 4,
                  scale: 189.888 / 184,
                  className: "absolute",
                  style: {
                    left: "calc(50% - 14.8125rem - 3vw)",
                    top: "9.625rem",
                  },
                },
                {
                  type: "number",
                  text1: "web",
                  text2: "design",
                  fg: "#131410",
                  bg: "#FEE566",
                  rotation: -12,
                  scale: (116.72 / 86) * 0.8,
                  className: "absolute",
                  style: {
                    right: "calc(50% - 8.9825rem - 3vw)",
                    top: "14.5rem",
                  },
                },
                {
                  type: "receipt",
                  text1: "web",
                  text2: "development",
                  fg: "#5C3A5C",
                  bg: "#B7ACD6",
                  rotation: 5.5,
                  scale: 155.312 / 148,
                  className: "absolute",
                  style: {
                    right: "calc(50% - 13.0825rem - 3vw)",
                    top: "5.0625rem",
                  },
                },
              ]}
            />
          </div>

          <Button variant="outline" className="mt-14">
            Start a project
          </Button>
        </PageSection>
      </section>

      <SectionSpacer size="lg" />

      <ProjectSection projects={projects} />

      <SectionSpacer size="2xl" />

      <PageSection size="md">
        <p className="denim-xs text-center text-primary-dark md:denim-s">
          With 6+ years of experience crafting and elevating brands from
          strategy to web and product design.
        </p>
      </PageSection>

      <SectionSpacer size="2xl" />

      <div className="md:hidden">
        <SectionSpacer size="lg" />
      </div>

      <Footer footerMenus={footer?.menus ?? []} />
    </main>
  );
}
