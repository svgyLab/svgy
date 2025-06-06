import type { Meta, StoryObj } from "@storybook/react";
import CloseButton from "./CloseButton";

const meta: Meta<typeof CloseButton> = {
  title: "Components/Button/CloseButton",
  component: CloseButton,
  tags: ["autodocs"],
  argTypes: {
    onClick: { action: "clicked" },
  },
};

export default meta;

type Story = StoryObj<typeof CloseButton>;

export const Default: Story = {
};
