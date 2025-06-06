export type IconbarProps = {
  toolbar: boolean;
  active?: boolean;
  disabled?: boolean;
  activeButton?: string;
  onActionClick?: (action: string) => void;
};
