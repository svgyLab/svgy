import { useEffect, useRef, useId } from "react";
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
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      }

      if (e.key === "Tab" && popupRef.current) {
        const focusableEls = popupRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
        );
        const firstEl = focusableEls[0];
        const lastEl = focusableEls[focusableEls.length - 1];

        if (!firstEl || !lastEl) return;

        if (e.shiftKey) {
          if (document.activeElement === firstEl) {
            e.preventDefault();
            lastEl.focus();
          }
        } else {
          if (document.activeElement === lastEl) {
            e.preventDefault();
            firstEl.focus();
          }
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      const focusableEls = popupRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
      );
      focusableEls?.[0]?.focus();
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className={styles["popup-container"]}
      onClick={handleOverlayClick}
      role="presentation"
    >
      <div
        className={styles["popup"]}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? titleId : undefined}
        ref={popupRef}
      >
        {title && (
          <strong className={styles["popup-header"]} id={titleId}>
            {title}
          </strong>
        )}
        {children}
        <div className={styles["popup-close-container"]}>
          <CloseButton onClick={onClose} />
        </div>
      </div>
    </div>
  );
}
