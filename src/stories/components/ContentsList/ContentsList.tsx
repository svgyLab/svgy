import { useState } from "react";
import type { ContentsListProps } from "./ContentsList.types";
import styles from "../../styles/components/ContentsList/ContentsList.module.scss";
import ContentsListItem from "./ContentsListItem";

export default function ContentsList({
    items,
    defaultActiveKey,
    onClick,
  }: ContentsListProps) {
  const [activeKey, setActiveKey] = useState(defaultActiveKey);

  const handleClick = (key: string) => {
    setActiveKey(key);
    onClick?.(key);
  };

  return (
    <ul className={styles["contents-list"]}>
      {items.map((item) => (
        <li className={styles["contents-list-item"]} key={item.key}>
          <ContentsListItem
            label={item.label}
            onClick={() => handleClick(item.key)}
            active={item.key === activeKey}
            isContentsButton={item.isItemButton}
            buttons={item.buttons}
          />
        </li>
      ))}
    </ul>
  );
}
