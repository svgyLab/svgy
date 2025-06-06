import { useId } from "react";
import type { PopupProps } from "./Popup.types";
import styles from "../../styles/components/Popup/Popup.module.scss";
import CloseButton from "../Button/CloseButton";

export default function Popup({
   title,
   children,
   isOpen,
   onClose
 }: PopupProps) {
  const titleId = useId();
  if (!isOpen) return null;

  return (
    <div className={styles['popup-container']}>
      <div className={styles['popup']} role="dialog" aria-modal="true" aria-labelledby={title ? titleId : undefined}>
        {
          title &&
          <strong className={styles['popup-header']} id={titleId}>{title}</strong>
        }
        {children}
        <div className={styles['popup-close-container']}>
          <CloseButton onClick={onClose} />
        </div>
      </div>
    </div>
  );
};
