import { useId } from "react";
import type { PanelItemProps } from "./Panel.types";
import styles from "../../styles/components/Panel/PanelItem.module.scss";
import CloseButton from "../Button/CloseButton";

export default function PanelItem({
   title,
   children,
   onClose
  }: PanelItemProps) {
  const titleId = useId();

  return (
    <div className={styles["panel-container"]} role="dialog" aria-labelledby={titleId}>
      <strong className={styles["panel-title"]} id={titleId}>{title}</strong>
      <div className={styles["panel-body"]}>
        {children}
      </div>
      <div className={styles["panel-close-button-container"]}>
        <CloseButton onClick={onClose} />
      </div>
    </div>
  );
}
