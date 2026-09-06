import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Button } from "./Button";

const meta = {
  title: "Components/Button",
  component: Button,
  argTypes: {
    variant: {
      control: "select",
      options: ["outline", "light", "dark", "neutral"],
    },
    children: { control: "text" },
  },
  args: {
    variant: "outline",
    children: "Button",
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Outline: Story = {
  args: { variant: "outline" },
};

export const Light: Story = {
  args: { variant: "light" },
};

export const Dark: Story = {
  args: { variant: "dark" },
};

export const Neutral: Story = {
  args: { variant: "neutral" },
};

export const AllVariants: Story = {
  render: () => (
    <div className="bg-primary-light flex flex-col gap-8 p-6">
      <div className="flex flex-wrap items-center gap-16">
        <Button variant="outline">Button</Button>
        <Button variant="light">Button</Button>
        <Button variant="dark">Button</Button>
        <Button variant="neutral">Button</Button>
      </div>
      <p className="geist-xs">Hover a button in the canvas to see its icon appear.</p>
    </div>
  ),
};
