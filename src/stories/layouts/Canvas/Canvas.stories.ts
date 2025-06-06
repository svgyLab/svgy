import type { Meta, StoryObj } from "@storybook/react";
import Canvas from "./Canvas";

const meta: Meta<typeof Canvas> = {
  title: "layouts/Canvas",
  component: Canvas,
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

type Story = StoryObj<typeof Canvas>;

export const Default: Story = {
  args: {
    width: 300,
    height: 300,
    active: false
  },
};
