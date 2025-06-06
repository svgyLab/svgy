import type { Meta, StoryObj } from "@storybook/react";
import PopupCanvasSize from "./PopupCanvasSize";

const meta: Meta<typeof PopupCanvasSize> = {
  title: "Components/Popup/PopupCanvasSize",
  component: PopupCanvasSize,
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
};

export default meta;
type Story = StoryObj<typeof PopupCanvasSize>;

export const Default: Story = {
  args: {
    currentWidth: 600,
    currentHeight: 600,
    onSave: (width, height) => console.log("저장", width, height),
    onCancel: () => console.log("취소"),
  },
};
