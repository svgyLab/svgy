import type { Meta, StoryObj } from "@storybook/react";
import { contentsListItems } from "../../assets/datas/dummies";
import ContentsList from "./ContentsList";

const meta: Meta<typeof ContentsList> = {
  title: "Components/ContentsList/ContentsList",
  component: ContentsList,
  tags: ["autodocs"],
  argTypes: {
    defaultActiveKey: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof ContentsList>;

export const Default: Story = {
  args: {
    defaultActiveKey: "1",
    items: contentsListItems.map(({ label, key, buttons }) => ({
      label,
      key,
      buttons: buttons.Default,
    })),
  },
};

export const OneButtonList: Story = {
  args: {
    defaultActiveKey: "2",
    items: contentsListItems.map(({ label, key, buttons }) => ({
      label,
      key,
      buttons: buttons.OneButtonList,
    })),
  },
};

export const NoButtonList: Story = {
  args: {
    defaultActiveKey: "3",
    items: contentsListItems.map(({ label, key, buttons }) => ({
      label,
      key,
      buttons: buttons.NoButtonList,
    })),
  },
};
