import type { Meta, StoryObj } from "@storybook/react";
import Editor from "./Editor";

const meta: Meta<typeof Editor> = {
  title: "pages/Editor",
  component: Editor,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof Editor>;

export const Default: Story = {
};
