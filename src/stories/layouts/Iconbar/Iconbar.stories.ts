import type { Meta, StoryObj } from "@storybook/react";
import Iconbar from "./Iconbar";

const meta: Meta<typeof Iconbar> = {
  title: "layouts/Iconbar",
  component: Iconbar,
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
type Story = StoryObj<typeof Iconbar>;

export const Default: Story = {
  args: {
    toolbar: true,
    active: false,
  },
};

export const PanelIconBar: Story = {
  args: {
    toolbar: false,
    active: true,
  },
};
