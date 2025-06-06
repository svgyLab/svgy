import type { Meta, StoryObj } from "@storybook/react";
import ContentsListItem from "./ContentsListItem";

const meta: Meta<typeof ContentsListItem> = {
  title: "Components/ContentsList/ContentsListItem",
  component: ContentsListItem,
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    active: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof ContentsListItem>;

export const Default: Story = {
  args: {
    label: "List Item Label",
    active: true,
    buttons: [
      {
        icon: "unlock",
        label: "Edit",
        onClick: () => alert("Edit clicked"),
      },
      {
        icon: "trash",
        label: "Delete",
        onClick: () => alert("Delete clicked"),
      },
    ],
  },
};

export const OneButtonItem: Story = {
  args: {
    label: "List Item Label",
    active: false,
    buttons: [
      {
        icon: "unlock",
        label: "Edit",
        onClick: () => alert("Edit clicked"),
      },
    ],
  },
};

export const NoButtonItem: Story = {
  args: {
    label: "List Item Label",
    active: false,
    buttons: [],
  },
};
