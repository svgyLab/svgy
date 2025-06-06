import type { Meta, StoryObj } from "@storybook/react";
import PanelCharacter from "./PanelCharacter";

const meta: Meta<typeof PanelCharacter> = {
  title: "Components/Panel/Contents/PanelCharacter",
  component: PanelCharacter,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof PanelCharacter>;

export const Default: Story = {
};
