import type { ButtonConfig } from "../Button/Button.types.ts";

export type ContentsListItemType = {
  label: string;
  key: string;
  buttons?: ButtonConfig[];
  isItemButton?: boolean;
};

export type ContentsListProps = {
  items: ContentsListItemType[];
  defaultActiveKey?: string;
  onClick?: (key: string) => void;
};

export type ContentsListItemProps = {
  label: string;
  isItemButton?: boolean;
  onClick?: () => void;
  buttons?: ButtonConfig[];
  active?: boolean;
};
