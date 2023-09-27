import type { Meta, StoryObj } from "@storybook/react";

import Button from "./index";

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const TestBtn: Story = {
  args: {
    width: "auto",
    height: "auto",
    onClick: () => {
      alert(1);
    },
    text: "test",
    fontSize: 1,
    color: "transparent",
    type: "bg",
  },
};
