import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Footer } from "./Footer";

const FOOTER_MENUS = [
  {
    title: "Links",
    links: [
      { label: "Project inquiry" },
      { label: "Email us" },
      { label: "Our pricing" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Brand identity" },
      { label: "Digital design" },
      { label: "Creative strategy" },
      { label: "Web design" },
      { label: "Web development" },
    ],
  },
  {
    title: "Past clients",
    links: [
      { label: "Carta" },
      { label: "YouTube" },
      { label: "Creative strategy" },
      { label: "Honeybook" },
      { label: "Webflow" },
      { label: "Here*" },
      { label: "Stem + Leaf" },
      { label: "Choreathon" },
    ],
  },
];

const meta = {
  title: "Layout/Footer",
  component: Footer,
  args: {
    footerMenus: FOOTER_MENUS,
  },
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
