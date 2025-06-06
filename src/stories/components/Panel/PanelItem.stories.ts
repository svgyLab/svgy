import type { Meta, StoryObj } from "@storybook/react";
import PanelDetails from "./PanelDetails";

const meta: Meta<typeof PanelDetails> = {
  title: "Components/Panel/PanelDetails",
  component: PanelDetails,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof PanelDetails>;

export const Default: Story = {
  args: {
    title: "PanelDetails Title",
  },
};
