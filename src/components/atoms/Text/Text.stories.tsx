import type { Meta, StoryObj } from "@storybook/react";

import Text from "./index";

const meta: Meta<typeof Text> = {
  component: Text,
};

export default meta;
type Story = StoryObj<typeof Text>;

export const TestText: Story = {
  args: {
    text: "test",
    fontSize: 1,
    color: "black",
  },
};
