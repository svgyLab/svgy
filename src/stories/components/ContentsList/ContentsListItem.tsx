import type { ContentsListItemProps } from "./ContentsList.types";
import styles from "../../styles/components/ContentsList/ContentsListItem.module.scss";
import Button from "../Button/Button";

export default function ContentsListItem({
    label,
    onClick,
    isContentsButton,
    buttons = [],
    active = false,
  }: ContentsListItemProps) {
  return (
    <div
      className={`${styles["contents-item"]} ${
        active ? styles["active"] : ""
      }`}
    >
      {
        isContentsButton ?
          <button className={styles["contents-item-button"]} onClick={onClick}>
            <span className={styles["contents-item-label"]}>{label}</span>
          </button> :
          <div className={styles["contents-item-content"]}>
            <span className={styles["contents-item-label"]}>{label}</span>
          </div>
      }
      {buttons.length > 0 && (
        <div className={styles["contents-item-button-container"]}>
          {buttons.map((button, index) => (
            <Button
              key={`${button.label}-${index}`}
              icon={button.icon}
              type="button"
              label={button.label}
              onClick={button.onClick}
              disabled={button.disabled ?? false}
              active={button.active ?? false}
            />
          ))}
        </div>
      )}
    </div>
  );
}
