import type { DropdownOption } from "../../components/Dropdown/Dropdown.types";

export type MenuGroup = {
  name: string;
  options: DropdownOption[];
  onSelect?: (value: string) => void;
};

export type HeaderMenuBarProps = {
  menus: MenuGroup[];
};
