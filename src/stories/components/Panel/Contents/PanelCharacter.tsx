import { useState } from "react";
import { typefaceOptions, fontSizeOptions } from "../../../assets/datas/dummies";
import { textAlignButtons, textStyleButtons } from "../../../assets/datas/datas";
import styles from "../../../styles/components/Panel/Contents/PanelCharacter.module.scss";
import Button from "../../Button/Button";
import Select from "../../Select/Select";
import ColorPicker from "../../ColorPicker/ColorPicker";

export default function PanelCharacter() {
  const [typeface, setTypeface] = useState("");
  const [fontSize, setFontSize] = useState("");
  const [selectedStyles, setSelectedStyles] = useState<string[]>([]);
  const [fontColor, setFontColor] = useState("#000000");
  const [selectedAlign, setSelectedAlign] = useState<string | null>(null);

  const handleStyleClick = (icon: string) => {
    setSelectedStyles((prev) =>
      prev.includes(icon)
        ? prev.filter((style) => style !== icon)
        : [...prev, icon]
    );
    // TODO: 실제 텍스트 스타일 적용 로직 추가
  };

  const handleAlignClick = (icon: string) => {
    setSelectedAlign(icon);
    // TODO: 실제 텍스트 정렬 로직 구현
  };

  return (
    <div className={styles["panel-container"]}>
      <div className={styles["panel-line-container"]}>
        <div className={styles["panel-select-container"]}>
          <Select
            label="서체"
            selectId="typeface"
            options={typefaceOptions}
            value={typeface}
            onChange={setTypeface}
          />
        </div>
      </div>
      <div className={styles["panel-line-container"]}>
        <div className={styles["panel-button-container"]}>
          {textAlignButtons.map(({ label, icon }) => (
            <Button
              key={icon}
              label={label}
              icon={icon}
              type="button"
              disabled={false}
              active={selectedAlign === icon}
              onClick={() => handleAlignClick(icon)}
            />
          ))}
        </div>
        <div className={styles["panel-button-container"]}>
          {textStyleButtons.map(({ label, icon }) => (
            <Button
              key={icon}
              label={label}
              icon={icon}
              type="button"
              disabled={false}
              active={selectedStyles.includes(icon)}
              onClick={() => handleStyleClick(icon)}
            />
          ))}
        </div>
      </div>
      <div className={styles["panel-line-container"]}>
        <ColorPicker
          label="폰트 색상"
          pickerId="fontColor"
          color={fontColor}
          onChange={setFontColor}
          stroke={false}
        />
        <div className={styles["panel-select-container"]}>
          <Select
            label="폰트 사이즈"
            selectId="fontSize"
            options={fontSizeOptions}
            value={fontSize}
            onChange={setFontSize}
          />
        </div>
      </div>
    </div>
  );
}
