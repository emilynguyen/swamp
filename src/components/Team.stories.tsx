import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Team } from "./Team";

const meta = {
  title: "Components/Team",
  component: Team,
  argTypes: {
    person: {
      control: "select",
      options: ["Ekin", "Emily"],
    },
  },
  args: {
    person: "Ekin",
  },
} satisfies Meta<typeof Team>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Ekin: Story = {
  args: { person: "Ekin" },
};

export const Emily: Story = {
  args: { person: "Emily" },
};

export const AllVariants: Story = {
  render: () => (
    <div className="bg-primary-light flex flex-wrap gap-6 p-6">
      <Team person="Ekin" />
      <Team person="Emily" />
    </div>
  ),
};
