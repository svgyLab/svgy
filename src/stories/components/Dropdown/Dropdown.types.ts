export type DropdownOption = {
  label: string;
  value: string;
};

export type DropdownProps = {
  options: DropdownOption[];
  labelText?: string;
  onSelect: (value: string) => void;
};
