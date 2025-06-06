import type { CanvasProps } from "./Canvas.types";
import styles from "../../styles/layouts/Canvas/Canvas.module.scss";

export default function Canvas({
   width,
   height,
   active,
   children
  }: CanvasProps) {
  return (
    <div className={`
      ${styles["canvas"]}
      ${active ? styles["active"] : ""}
    `}>
      <div
        className={styles["canvas-editor"]}
        style={{ width: `${width}px`, height: `${height}px` }}
      >
        {children}
      </div>
    </div>
  );
}
