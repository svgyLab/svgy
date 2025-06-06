import type { ButtonProps } from "./Button.types";
import styles from "../../styles/components/Button/Button.module.scss";

export default function Button({
    label,
    icon,
    onClick,
    type = "button",
    disabled = false,
    active = false,
  }: ButtonProps) {
  return (
    <button
      className={`
        ${styles["button"]}
        ${icon ? `${styles["icon"]} ${styles[icon]}` : ""}
        ${active ? `${styles["active"]}` : ""}
      `}
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-pressed={icon ? (active ? "true" : "false") : undefined}
    >
      {
        icon ?
          <span className={styles["blind"]}>{label}</span>
          :
          <span className={styles["button-text"]}>{label}</span>
      }
    </button>
  );
}
