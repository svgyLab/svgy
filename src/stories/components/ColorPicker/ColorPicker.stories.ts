import type { Meta, StoryObj } from "@storybook/react";
import ColorPicker from "./ColorPicker";

const meta: Meta<typeof ColorPicker> = {
  title: "Components/ColorPicker/ColorPicker",
  component: ColorPicker,
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    color: { control: "color" },
    onChange: { action: "color changed" },
    stroke: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof ColorPicker>;

export const Default: Story = {
  args: {
    label: "Pick a color",
    color: "#ff0000",
    pickerId: "color-picker",
  },
};

