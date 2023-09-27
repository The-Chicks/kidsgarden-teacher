import type { Meta, StoryObj } from "@storybook/react";

import Input from "./index";

const meta: Meta<typeof Input> = {
  component: Input,
};

export default meta;
type Story = StoryObj<typeof Input>;

export const TestBtn: Story = {
  args: {
    name: "TEST",
    width: "auto",
    height: "auto",
    placeholder: "placeholder",
    value: "aasdf",
    fontSize: 1,
    color: "black",
  },
};
