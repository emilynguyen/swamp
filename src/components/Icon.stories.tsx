import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Icon, type IconType } from "./Icon";

const ICON_TYPES: IconType[] = [
  "x",
  "add",
  "remove",
  "mail",
  "heart",
  "arrow-up",
  "arrow-down",
  "arrow-diagonal",
  "arrow-back",
  "arrow-forward",
];

const meta = {
  title: "Components/Icon",
  component: Icon,
  argTypes: {
    type: {
      control: "select",
      options: ICON_TYPES,
    },
    size: { control: "number" },
  },
  args: {
    type: "x",
    size: 20,
  },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const AllIcons: Story = {
  render: () => (
    <div className="bg-primary-light flex flex-wrap gap-8 p-6">
      {ICON_TYPES.map((type) => (
        <div key={type} className="flex flex-col items-center gap-2">
          <Icon type={type} />
          <span className="geist-xs">{type}</span>
        </div>
      ))}
    </div>
  ),
};
