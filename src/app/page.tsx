import { Header } from "@/components/Header";
import { Button } from "@/components/Button";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <section className="relative flex h-[calc(100vh-68px)] max-h-[1024px] w-full items-center justify-center md:min-h-[720px]">
        <div className="absolute inset-0 grid grid-cols-3 grid-rows-2 p-8">
          <div className="group pointer-events-auto relative">
            <img
              src="/assets/home/hero/brand identity.svg"
              alt=""
              className="absolute left-[15%] top-[25%] scale-90 opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100"
            />
          </div>
          <div className="group pointer-events-auto relative">
            <img
              src="/assets/home/hero/web dev.svg"
              alt=""
              className="absolute left-[10%] top-[-10%] scale-90 opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100"
            />
          </div>
          <div className="group pointer-events-auto relative">
            <img
              src="/assets/home/hero/digital design.svg"
              alt=""
              className="absolute right-[35%] top-[20%] scale-90 opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100"
            />
          </div>
          <div className="group pointer-events-auto relative">
            <img
              src="/assets/home/hero/web design.svg"
              alt=""
              className="absolute bottom-0 left-[40%] scale-90 opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100"
            />
          </div>
          <div className="group pointer-events-auto relative">
            <img
              src="/assets/home/hero/accepting new projects.svg"
              alt=""
              className="absolute right-[10%] bottom-0 scale-90 opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100"
            />
          </div>
          <div className="group pointer-events-auto relative">
            <img
              src="/assets/home/hero/creative strategy.svg"
              alt=""
              className="absolute right-[10%] bottom-[35%] scale-90 opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100"
            />
          </div>
        </div>
        <div className="relative z-10 container pointer-events-none mx-auto flex flex-col items-center gap-16 px-page-margin text-center">
          <h1 className="hero-heading text-balance text-primary-dark">
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
          </h1>
          <Button variant="outline" className="pointer-events-auto">
            Start a project
          </Button>
        </div>
      </section>
    </main>
  );
}
