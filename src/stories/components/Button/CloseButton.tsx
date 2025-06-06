import type {  CloseButtonProps } from "./Button.types";
import styles from "../../styles/components/Button/CloseButton.module.scss";

export default function CloseButton({
   onClick,
 }: CloseButtonProps) {
  return (
    <button
      type="button"
      className={styles["close-button"]}
      onClick={onClick}
      aria-label="패널 닫기"
    >
      <span className={styles["close-button-text"]} aria-hidden="true">닫기</span>
    </button>
  );
};
