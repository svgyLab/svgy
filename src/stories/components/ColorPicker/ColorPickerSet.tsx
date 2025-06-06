import type { ColorPickerSetProps } from "./ColorPicker.types";
import styles from "../../styles/components/ColorPicker/ColorPickerSet.module.scss";
import ColorPicker from "./ColorPicker";

export default function ColorPickerSet({
    strokeColor,
    strokeOnChange,
    fillColor,
    fillOnChange,
  }: ColorPickerSetProps) {
  return (
    <div className={styles["colorpicker-set"]}>
      <div className={styles["colorpicker-stroke"]}>
        <ColorPicker
          label="테두리 색상"
          pickerId="stroke-colorpicker"
          color={strokeColor}
          onChange={strokeOnChange}
          stroke={true}
        />
      </div>
      <div className={styles["colorpicker-fill"]}>
        <ColorPicker
          label="채우기 색상"
          pickerId="fill-colorpicker"
          color={fillColor}
          onChange={fillOnChange}
          stroke={false}
        />
      </div>
    </div>
  );
}
