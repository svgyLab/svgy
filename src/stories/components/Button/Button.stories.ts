import type { Meta, StoryObj } from "@storybook/react";
import { buttonIconOptions } from "../../assets/datas/datas";
import Button from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    type: {
      control: { type: "select" },
      options: ["button", "submit", "reset"],
    },
    icon: {
      control: { type: "select" },
      options: buttonIconOptions,
    },
    disabled: { control: "boolean" },
    active: { control: "boolean" },
    onClick: { action: "clicked" },
  },
  args: {
    type: "button",
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    label: "기본 버튼",
  },
};

export const Disabled: Story = {
  args: {
    label: "비활성화",
    disabled: true,
  },
};

export const Active: Story = {
  args: {
    label: "액티브",
    active: true,
  },
};

export const IconCursor: Story = {
  args: {
    label: "커서",
    icon: "cursor"
  },
};

export const IconAnchor: Story = {
  args: {
    label: "앵커",
    icon: "selector"
  },
};

export const IconPentool: Story = {
  args: {
    label: "펜툴",
    icon: "pentool"
  },
};

export const IconLetter: Story = {
  args: {
    label: "문자",
    icon: "letter"
  },
};

export const IconCircle: Story = {
  args: {
    label: "동그라미",
    icon: "circle"
  },
};

export const IconSquare: Story = {
  args: {
    label: "네모",
    icon: "square"
  },
};

export const IconTriangle: Story = {
  args: {
    label: "세모",
    icon: "triangle"
  },
};

export const IconRotate: Story = {
  args: {
    label: "회전",
    icon: "rotate"
  },
};

export const IconLayer: Story = {
  args: {
    label: "레이어",
    icon: "layer"
  },
};

export const IconCharacter: Story = {
  args: {
    label: "문자 편집",
    icon: "character"
  },
};

export const IconHistory: Story = {
  args: {
    label: "내역",
    icon: "history"
  },
};

export const IconLock: Story = {
  args: {
    label: "잠긴 자물쇠",
    icon: "lock"
  },
};

export const IconUnlock: Story = {
  args: {
    label: "잠기지 않은 자물쇠",
    icon: "unlock"
  },
};

export const IconTrash: Story = {
  args: {
    label: "쓰레기통",
    icon: "trash"
  },
};

export const IconTextLeft: Story = {
  args: {
    label: "텍스트 좌측 정렬",
    icon: "text-left"
  },
};

export const IconTextCenter: Story = {
  args: {
    label: "텍스트 중앙 정렬",
    icon: "text-center"
  },
};

export const IconTextRight: Story = {
  args: {
    label: "텍스트 우측 정렬",
    icon: "text-right"
  },
};

export const IconTextBold: Story = {
  args: {
    label: "텍스트 볼드",
    icon: "text-bold"
  },
};

export const IconTextUnderline: Story = {
  args: {
    label: "텍스트 밑줄",
    icon: "text-underline"
  },
};

export const IconTextItalic: Story = {
  args: {
    label: "텍스트 이텔릭",
    icon: "text-italic"
  },
};

export const IconTextStroke: Story = {
  args: {
    label: "텍스트 취소선",
    icon: "text-stroke"
  },
};

export const IconItemLeft: Story = {
  args: {
    label: "아이템 좌측 정렬",
    icon: "align-left"
  },
};

export const IconItemCenter: Story = {
  args: {
    label: "아이템 가운데 정렬",
    icon: "align-center"
  },
};

export const IconItemRight: Story = {
  args: {
    label: "아이템 우측 정렬",
    icon: "align-right"
  },
};

export const IconItemTop: Story = {
  args: {
    label: "아이템 상단 정렬",
    icon: "align-top"
  },
};

export const IconItemMiddle: Story = {
  args: {
    label: "아이템 중앙 정렬",
    icon: "align-middle"
  },
};

export const IconItemBottom: Story = {
  args: {
    label: "아이템 하단 정렬",
    icon: "align-bottom"
  },
};
