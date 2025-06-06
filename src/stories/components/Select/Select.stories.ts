import type { Meta, StoryObj } from "@storybook/react";
import { selectOptions } from "../../assets/datas/dummies";
import Select from "./Select";

const meta: Meta<typeof Select> = {
  title: "Components/Select/Select",
  component: Select,
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    value: { control: "text" },
    onChange: { action: "changed" },
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
  args: {
    label: "Select a fruit",
    value: "apple",
    options: selectOptions,
    selectId: "fruit-select",
  },
};
