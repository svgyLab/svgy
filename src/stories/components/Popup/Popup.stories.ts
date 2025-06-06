import type { Meta, StoryObj } from "@storybook/react";
import Popup from "./Popup";

const meta: Meta<typeof Popup> = {
  title: "Components/Popup/Popup",
  component: Popup,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    docs: {
      story: {
        inline: false,
        iframeHeight: 500,
      },
    },
  },
  argTypes: {
    title: { control: "text" },
    isOpen: { control: "boolean" },
    onClose: { action: "closed" },
  },
};

export default meta;
type Story = StoryObj<typeof Popup>;

export const Default: Story = {
  args: {
    title: "Popup Title",
    children: "This is a popup message.",
    isOpen: true,
    onClose: () => {},
  },
};
