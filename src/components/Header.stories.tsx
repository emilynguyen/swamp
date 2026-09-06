import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Header } from "./Header";

const meta = {
  title: "Components/Header",
  component: Header,
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "secondary"],
    },
  },
  args: {
    variant: "default",
  },
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { variant: "default" },
};

export const Secondary: Story = {
  args: { variant: "secondary" },
};
