"use client";

import { useState } from "react";
import { PageSection } from "./PageSection";
import { ProjectCard } from "./ProjectCard";
import { Button } from "./Button";
import type { ProjectDocument } from "@/sanity/queries";
import { urlForImage } from "@/sanity/image";

type ProjectSectionProps = {
  projects: ProjectDocument[];
};

export function ProjectSection({ projects }: ProjectSectionProps) {
  const [openId, setOpenId] = useState<string | null>(projects[0]?._id ?? null);

  return (
    <PageSection id="work" size="xl" className="scroll-mt-16">
      <h2 className="editorial-m text-center text-primary-dark md:text-left">Recent projects</h2>

      <div className="mt-6 hidden gap-5 md:grid md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard
            key={project._id}
            href={project.url}
            openInNewTab
            title={project.title}
            category={project.category}
            imageSrc={urlForImage(project.image).width(830).height(553).url()}
            ctaLabel={project.ctaText}
          />
        ))}
        <ProjectCard type="cta" />
      </div>

      <div className="mt-6 flex w-full flex-col gap-5 md:hidden">
        {projects.map((project) => (
          <ProjectCard
            key={project._id}
            href={project.url}
            openInNewTab
            title={project.title}
            category={project.category}
            imageSrc={urlForImage(project.image).width(830).height(553).url()}
            ctaLabel={project.ctaText}
            isOpen={openId === project._id}
            onToggle={() => setOpenId((current) => (current === project._id ? null : project._id))}
          />
        ))}
        <div className="mt-10 flex w-full justify-center">
          <Button variant="outline">Start a project</Button>
        </div>
      </div>
    </PageSection>
  );
}
