import type { Meta, StoryObj } from "@storybook/react";

import Button from "@/app/_components/atom/Button/Button";

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "Button",
    primary: true,
    label: "Button",
  },
};
