import type { Meta, StoryObj } from "@storybook/react";
import PanelLayer from "./PanelLayer";

const meta: Meta<typeof PanelLayer> = {
  title: "Components/Panel/Contents/PanelLayer",
  component: PanelLayer,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof PanelLayer>;

export const Default: Story = {
};
