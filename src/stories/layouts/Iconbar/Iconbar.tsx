import { useState, useEffect, useRef } from "react";
import type { IconbarProps } from "./Iconbar.types";
import { toolbarButtons, sideButtons } from "../../assets/datas/datas";
import styles from "../../styles/layouts/IconBar/Iconbar.module.scss";
import Button from "../../components/Button/Button";
import ColorPicker from "../../components/ColorPicker/ColorPicker";

export default function Iconbar({
    toolbar,
    onActionClick,
    active,
    disabled,
  }: Omit<IconbarProps, "activeButton">) {
  const buttonList = toolbar ? toolbarButtons : sideButtons;
  const DEFAULT_STROKE_COLOR = "#999999";
  const DEFAULT_FILL_COLOR = "#000000";

  const [activeButton, setActiveButton] = useState<string | null>(null);
  const iconbarRef = useRef<HTMLUListElement>(null);

  const handleClick = (icon: string) => {
    setActiveButton(icon);
    onActionClick?.(icon);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        iconbarRef.current &&
        !iconbarRef.current.contains(event.target as Node)
      ) {
        setActiveButton(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <ul
      ref={iconbarRef}
      className={`
        ${styles["toolbar-list"]}
        ${toolbar ? styles["left"] : styles["right"]}
        ${!toolbar && active ? styles["active"] : ""}
      `}
    >
      {buttonList.map(({ icon, label }) => (
        <li key={icon} className={styles["toolbar-item"]}>
          <Button
            icon={icon}
            label={label}
            onClick={() => handleClick(icon)}
            type="button"
            disabled={disabled}
            active={activeButton === icon}
          />
        </li>
      ))}
      {toolbar && (
        <li className={`${styles["toolbar-item"]} ${styles["colorpicker-item"]}`}>
          <div className={styles["colorpicker-stroke"]}>
            <ColorPicker
              label="선 컬러 선택"
              pickerId="colorpicker-stroke"
              color={DEFAULT_STROKE_COLOR}
              onChange={(color) => console.log("선택된 색상 (stroke):", color)}
              stroke={true}
            />
          </div>
          <div className={styles["colorpicker-fill"]}>
            <ColorPicker
              label="면 컬러 선택"
              pickerId="colorpicker-fill"
              color={DEFAULT_FILL_COLOR}
              onChange={(color) => console.log("선택된 색상 (fill):", color)}
              stroke={false}
            />
          </div>
        </li>
      )}
    </ul>
  );
}
