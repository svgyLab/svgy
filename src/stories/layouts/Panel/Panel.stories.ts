import type { Meta, StoryObj } from "@storybook/react";
import Panel from "./Panel";

const meta: Meta<typeof Panel> = {
  title: "layouts/Panel",
  component: Panel,
  parameters: {
    layout: "fullscreen",
    docs: {
      story: {
        inline: false,
        iframeHeight: 500,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Panel>;

export const Default: Story = {
};
