import type { DropdownOption } from "../../Dropdown/Dropdown.types.ts";

export type MenuGroup = {
  name: string;
  options: DropdownOption[];
  onSelect?: (value: string) => void;
};

export type HeaderMenuBarProps = {
  menus: MenuGroup[];
};
