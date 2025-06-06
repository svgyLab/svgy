import { useState } from "react";
import { panelAlignButtons } from "../../../assets/datas/datas";
import type { PanelAlignProps } from "../Panel.types";
import styles from "../../../styles/components/Panel/Contents/PanelAlign.module.scss";
import Button from "../../Button/Button";

export default function PanelAlign({ onAlignChange }: PanelAlignProps) {
  const [activeAlignment, setActiveAlignment] = useState<string>("");

  const handleAlignClick = (icon: string) => {
    setActiveAlignment(icon);
    onAlignChange?.(icon);
  };

  return (
    <div className={styles["panel-container"]}>
      {panelAlignButtons.map(({ label, icon }) => (
        <Button
          key={icon}
          label={label}
          icon={icon}
          type="button"
          disabled={false}
          active={activeAlignment === icon}
          onClick={() => handleAlignClick(icon)}
        />
      ))}
    </div>
  );
}
