import type { Meta, StoryObj } from "@storybook/react";
import TextInput from "./TextInput";

const meta: Meta<typeof TextInput> = {
  title: "Components/TextInput/TextInput",
  component: TextInput,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof TextInput>;

export const Default: Story = {
  args: {
    isLabel: true,
    label: "텍스트",
    inputId: "text-label",
    inputType: "text"
  },
};
