export interface PopupCanvasSizeProps {
  currentWidth: number;
  currentHeight: number;
  onSave: (width: number, height: number) => void;
  onCancel: () => void;
}
