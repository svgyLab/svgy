import type { Meta, StoryObj } from "@storybook/react";
import Dropdown from "./Dropdown";

const meta: Meta<typeof Dropdown> = {
  title: "Components/Dropdown/Dropdown",
  component: Dropdown,
  tags: ["autodocs"],
  argTypes: {
    labelText: { control: "text" },
  },
  parameters: {
    docs: {
      story: {
        inline: false,
        iframeHeight: 200,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
  args: {
    labelText: "Select option",
    options: [
      { label: "Option 1", value: "1" },
      { label: "Option 2", value: "2" },
      { label: "Option 3", value: "3" },
    ],
    onSelect: (value: string) => alert(`Selected: ${value}`),
  },
};
