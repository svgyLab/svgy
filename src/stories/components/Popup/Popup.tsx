import type { PopupProps } from "./Popup.types";
import styles from "../../styles/components/Popup/Popup.module.scss";

export default function Popup({
   title,
   children,
   isOpen,
   onClose
 }: PopupProps) {
  if (!isOpen) return null;

  return (
    <div className={styles['popup-container']}>
      <div className={styles['popup']} role="dialog" aria-modal="true">
        {
          title &&
          <strong className={styles['popup-header']}>{title}</strong>
        }
        {children}
        <button className={styles['popup-close']} onClick={onClose}>
          <span className={styles['blind']}>닫기</span>
        </button>
      </div>
    </div>
  );
};
