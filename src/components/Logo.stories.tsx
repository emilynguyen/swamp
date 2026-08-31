import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Logo } from "./Logo";

const meta = {
  title: "Components/Logo",
  component: Logo,
  argTypes: {
    type: {
      control: "select",
      options: ["primary", "secondary", "tertiary"],
    },
    color: {
      control: "select",
      options: ["dark", "light"],
    },
    size: {
      control: "select",
      options: ["medium", "small", "x-small", "xx-small"],
    },
  },
  args: {
    type: "primary",
    color: "dark",
    size: "medium",
  },
} satisfies Meta<typeof Logo>;

export default meta;
type Story = StoryObj<typeof meta>;

function DarkAndLight({ type }: { type: "primary" | "secondary" | "tertiary" }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      <div style={{ background: "#F9F8F2", padding: 24 }}>
        <Logo type={type} color="dark" size="medium" />
      </div>
      <div style={{ background: "#131410", padding: 24 }}>
        <Logo type={type} color="light" size="medium" />
      </div>
    </div>
  );
}

export const Primary: Story = {
  render: () => <DarkAndLight type="primary" />,
};

export const Secondary: Story = {
  render: () => <DarkAndLight type="secondary" />,
};

export const Tertiary: Story = {
  render: () => <DarkAndLight type="tertiary" />,
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-12">
      <div className="bg-primary-light flex flex-col gap-6 p-6">
        {(["primary", "secondary", "tertiary"] as const).map((type) => (
          <div
            key={type}
            className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-12"
          >
            <span className="geist-s shrink-0 sm:w-20">{type}</span>
            <div className="flex flex-wrap items-center gap-6 sm:gap-12">
              {(["medium", "small", "x-small", "xx-small"] as const).map((size) => (
                <Logo key={size} type={type} color="dark" size={size} />
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-primary-dark flex flex-col gap-6 p-6">
        {(["primary", "secondary", "tertiary"] as const).map((type) => (
          <div
            key={type}
            className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-12"
          >
            <span className="geist-s text-primary-light shrink-0 sm:w-20">
              {type}
            </span>
            <div className="flex flex-wrap items-center gap-6 sm:gap-12">
              {(["medium", "small", "x-small"] as const).map((size) => (
                <Logo key={size} type={type} color="light" size={size} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
};
