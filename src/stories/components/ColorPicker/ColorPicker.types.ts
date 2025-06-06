export type ColorPickerProps = {
  label: string;
  pickerId: string;
  color: string;
  onChange?: (color: string) => void;
  stroke: boolean;
};

export type ColorPickerSetProps = {
  strokeColor: string;
  strokeOnChange?: (color: string) => void;
  fillColor: string;
  fillOnChange?: (color: string) => void;
};
