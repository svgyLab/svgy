import { useState, useEffect } from "react";
import type { PopupCanvasSizeProps } from "./PopupCanvasSize.types";
import styles from "../../../styles/components/Popup/Contents/PopupCanvasSize.module.scss";
import TextInput from "../../TextInput/TextInput";
import Button from "../../Button/Button";

export default function PopupCanvasSize({
    currentWidth,
    currentHeight,
    onSave,
    onCancel,
  }: PopupCanvasSizeProps) {
  const [width, setWidth] = useState(currentWidth);
  const [height, setHeight] = useState(currentHeight);

  useEffect(() => {
    setWidth(currentWidth);
    setHeight(currentHeight);
  }, [currentWidth, currentHeight]);

  return (
    <div className={styles["popup-canvas-container"]}>
      <div className={styles["popup-canvas-contents-container"]}>
        <strong className={styles["popup-canvas-title"]}>현재 캔버스 사이즈</strong>
        <dl className={styles["popup-canvas-info-default-list"]}>
          <div className={styles["popup-canvas-info-item"]}>
            <dt className={styles["popup-canvas-info-label"]}>Width:</dt>
            <dd className={styles["popup-canvas-info-value"]}>{currentWidth}px</dd>
          </div>
          <div className={styles["popup-canvas-info-item"]}>
            <dt className={styles["popup-canvas-info-label"]}>Height:</dt>
            <dd className={styles["popup-canvas-info-value"]}>{currentHeight}px</dd>
          </div>
        </dl>
      </div>
      <div className={styles["popup-canvas-contents-container"]}>
        <strong className={styles["popup-canvas-title"]}>변경할 캔버스 사이즈</strong>
        <dl className={styles["popup-canvas-info-list"]}>
          <div className={styles["popup-canvas-info-item"]}>
            <dt className={styles["popup-canvas-info-label"]}>
              <label className={styles["text-input-label"]} htmlFor="canvas-width">Width</label>:
            </dt>
            <dd className={styles["popup-canvas-info-value"]}>
              <TextInput
                isLabel={false}
                inputId="canvas-width"
                inputType="number"
                min={1}
                inputWidth={100}
                onChange={(e) => {
                  const inputValue = e.target.value;
                  const value = Number(inputValue);
                  if (inputValue === '' || (!Number.isNaN(value) && value > 0 && Number.isInteger(value))) {
                      setWidth(inputValue === '' ? 0 : value);
                    }
                }}
                value={width}
              />px
            </dd>
          </div>
          <div className={styles["popup-canvas-info-item"]}>
            <dt className={styles["popup-canvas-info-label"]}>
              <label className={styles["text-input-label"]} htmlFor="canvas-height">Height</label>:
            </dt>
            <dd className={styles["popup-canvas-info-value"]}>
              <TextInput
                isLabel={false}
                inputId="canvas-height"
                inputType="number"
                min={1}
                inputWidth={100}
                onChange={(e) => {
                  const inputValue = e.target.value;
                  const value = Number(inputValue);
                  if (inputValue === '' || (!Number.isNaN(value) && value > 0 && Number.isInteger(value))) {
                    setWidth(inputValue === '' ? 0 : value);
                  }
                }}
                value={height}
              />px
            </dd>
          </div>
        </dl>
      </div>
      <div className={styles["popup-canvas-button-container"]}>
        <Button label="저장" type="button" onClick={() => onSave(width, height)} />
        <Button label="취소" type="button" onClick={onCancel} />
      </div>
    </div>
  );
}
