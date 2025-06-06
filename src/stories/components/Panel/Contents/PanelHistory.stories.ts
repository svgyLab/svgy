import type { Meta, StoryObj } from "@storybook/react";
import PanelHistory from "./PanelHistory";

const meta: Meta<typeof PanelHistory> = {
  title: "Components/Panel/Contents/PanelHistory",
  component: PanelHistory,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof PanelHistory>;

export const Default: Story = {
};
