export type ButtonProps = {
  label: string;
  icon?: ButtonIcon;
  onClick?: () => void;
  type: "button" | "submit" | "reset";
  disabled?: boolean;
  active?: boolean;
};

export type ButtonIcon =
  | "align-bottom"
  | "align-center"
  | "align-left"
  | "align-middle"
  | "align-right"
  | "align-top"
  | "artboard"
  | "character"
  | "circle"
  | "cursor"
  | "hand"
  | "history"
  | "layer"
  | "letter"
  | "lock"
  | "pentool"
  | "reflection"
  | "rotation"
  | "selector"
  | "square"
  | "text-bold"
  | "text-center"
  | "text-italic"
  | "text-left"
  | "text-right"
  | "text-stroke"
  | "text-underline"
  | "trash"
  | "triangle"
  | "unlock";

export type ButtonConfig = {
  icon?: ButtonIcon;
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  active?: boolean;
};

export type CloseButtonProps = {
  onClick?: () => void;
};
