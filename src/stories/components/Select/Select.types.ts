export type SelectOption = {
  label: string;
  value: string;
};

export type SelectProps = {
  label: string;
  selectId: string;
  options: SelectOption[];
  value: string;
  onChange: (value: string) => void;
};
