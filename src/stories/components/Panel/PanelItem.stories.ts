import type { Meta, StoryObj } from "@storybook/react";
import PanelItem from "./PanelItem";

const meta: Meta<typeof PanelItem> = {
  title: "Components/Panel/PanelItem",
  component: PanelItem,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof PanelItem>;

export const Default: Story = {
  args: {
    title: "PanelItem Title",
    children: "패널 내용 예시입니다.",
    onClose: () => console.log("Panel closed"),
  },
};
