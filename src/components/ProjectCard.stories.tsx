import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { useState } from "react";
import { ProjectCard } from "./ProjectCard";

const meta = {
  title: "Components/ProjectCard",
  component: ProjectCard,
  argTypes: {
    type: {
      control: "select",
      options: ["default", "cta"],
    },
  },
  args: {
    type: "default",
    title: "Project title",
    category: "Brand + Web",
    imageSrc: "/team/choreathon.png",
  },
  decorators: [
    (Story) => (
      <div className="grid grid-cols-1 gap-5 bg-primary-light p-6 md:grid-cols-2 lg:grid-cols-3">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ProjectCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { type: "default" },
};

export const Cta: Story = {
  args: { type: "cta" },
};

export const Accordion: Story = {
  decorators: [
    (Story) => (
      <div className="flex max-w-md flex-col gap-5 bg-primary-light p-6">
        <Story />
      </div>
    ),
  ],
  render: () => {
    function AccordionDemo() {
      const items = ["one", "two", "three"];
      const [openId, setOpenId] = useState<string | null>(items[0]);
      return (
        <>
          {items.map((id) => (
            <ProjectCard
              key={id}
              imageSrc="/team/choreathon.png"
              isOpen={openId === id}
              onToggle={() => setOpenId((current) => (current === id ? null : id))}
            />
          ))}
        </>
      );
    }
    return <AccordionDemo />;
  },
};

export const AllVariants: Story = {
  render: () => (
    <>
      <ProjectCard imageSrc="/team/choreathon.png" />
      <ProjectCard imageSrc="/team/choreathon.png" />
      <ProjectCard imageSrc="/team/choreathon.png" />
      <ProjectCard imageSrc="/team/choreathon.png" />
      <ProjectCard type="cta" />
    </>
  ),
};
