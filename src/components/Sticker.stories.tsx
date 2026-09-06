import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Sticker, type StickerType } from "./Sticker";

const STICKER_TYPES: StickerType[] = [
  "stamp",
  "big note",
  "small note",
  "oval",
  "number",
  "round",
  "receipt",
  "raffle",
  "tape",
];

const meta = {
  title: "Components/Sticker",
  component: Sticker,
  argTypes: {
    type: {
      control: "select",
      options: STICKER_TYPES,
    },
    fg: { control: "color" },
    bg: { control: "color" },
    rotation: { control: "number" },
  },
  args: {
    type: "stamp",
    text1: "swamp",
    text2: "studio",
    fg: "#5c3a5c",
    bg: "#b7acd6",
    rotation: 0,
  },
} satisfies Meta<typeof Sticker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllVariants: Story = {
  render: () => (
    <div className="bg-primary-light flex flex-wrap items-center gap-8 p-6">
      {STICKER_TYPES.map((type) => (
        <div key={type} className="flex flex-col items-center gap-2">
          <Sticker type={type} text1="swamp" text2="studio" />
          <span className="geist-xs">{type}</span>
        </div>
      ))}
    </div>
  ),
};
