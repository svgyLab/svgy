import type { SelectProps } from "./Select.types";
import styles from "../../styles/components/Select/Select.module.scss";

export default function Select({
   label,
   options,
   value,
   onChange,
   selectId
  }: SelectProps) {
  return (
    <div className={styles["select-container"]}>
      <label className={styles["select-label"]} htmlFor={selectId}>{label}</label>
      <select
        className={styles["select"]}
        value={value}
        id={selectId}
        onChange={(e) => onChange(e.target.value)}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}
