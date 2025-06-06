import type { ColorPickerProps } from "./ColorPicker.types";
import styles from "../../styles/components/ColorPicker/ColorPicker.module.scss";

export default function ColorPicker({
    label,
    color,
    onChange,
    pickerId,
    stroke
  }: ColorPickerProps) {
  return (
    <div className={`${styles["colorpicker-container"]} ${stroke ? `${styles["stroke"]}` : ""}`}>
      <label className={styles["colorpicker-label"]} htmlFor={pickerId}>{label}</label>
      <input
        className={styles["colorpicker-input"]}
        type="color"
        id={pickerId}
        value={color}
        onChange={(e) => onChange?.(e.target.value)}
      />
    </div>
  );
};
