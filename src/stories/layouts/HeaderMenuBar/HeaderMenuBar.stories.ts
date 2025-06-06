import type { Meta, StoryObj } from "@storybook/react";
import { menus as baseMenus } from "../../assets/datas/datas";
import HeaderMenuBar from "./HeaderMenuBar";

const meta: Meta<typeof HeaderMenuBar> = {
  title: "layouts/HeaderMenuBar",
  component: HeaderMenuBar,
  parameters: {
    layout: "fullscreen",
    docs: {
      story: {
        inline: false,
        iframeHeight: 500,
      },
    },
  },
}

export default meta;
type Story = StoryObj<typeof HeaderMenuBar>;

export const Default: Story = {
  args: {
    menus: baseMenus.map((menu) => ({
      ...menu,
      onSelect: (value: string) => alert(`${menu.name} > ${value}`),
    })),
  },
};
