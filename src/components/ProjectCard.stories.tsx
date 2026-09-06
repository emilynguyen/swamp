import type { Meta, StoryObj } from "@storybook/nextjs-vite";
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
} satisfies Meta<typeof ProjectCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { type: "default" },
};

export const Cta: Story = {
  args: { type: "cta" },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-6 bg-primary-light p-6">
      <ProjectCard type="default" imageSrc="/team/choreathon.png" />
      <ProjectCard type="cta" />
    </div>
  ),
};
