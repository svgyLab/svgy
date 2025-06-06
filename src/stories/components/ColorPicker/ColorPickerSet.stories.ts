import type { Meta, StoryObj } from "@storybook/react";
import ColorPickerSet from "./ColorPickerSet";

const meta: Meta<typeof ColorPickerSet> = {
  title: "Components/ColorPicker/ColorPickerSet",
  component: ColorPickerSet,
  tags: ["autodocs"],
  argTypes: {
    strokeColor: { control: "color" },
    strokeOnChange: { action: "color changed" },
    fillColor: { control: "color" },
    fillOnChange: { action: "color changed" },
  },
};

export default meta;
type Story = StoryObj<typeof ColorPickerSet>;

export const Default: Story = {
  args: {
    strokeColor: "#000000",
    fillColor: "#ff0000",
  },
};
