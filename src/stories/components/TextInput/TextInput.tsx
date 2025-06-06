import type { TextInputProps } from "./TextInput.type";
import styles from "../../styles/components/TextInput/TextInput.module.scss";

export default function TextInput({
    isLabel,
    label,
    inputId,
    inputType = "text",
    inputWidth,
    onChange,
    min,
    value
  }: TextInputProps) {
  return (
    <div className={styles["text-input-container"]}>
      {isLabel && (
        <label className={styles["text-input-label"]} htmlFor={inputId}>
          {label}
        </label>
      )}
      <input
        type={inputType || "text"}
        id={inputId}
        className={styles["text-input"]}
        style={inputWidth ? { width: `${inputWidth}px` } : undefined}
        onChange={onChange}
        value={value ?? ""}
        {...(inputType === "number" && min !== undefined && { min })}
      />
    </div>
  );
}
