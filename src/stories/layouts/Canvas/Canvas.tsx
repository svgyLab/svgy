import type { CanvasProps } from "./Canvas.types";
import { useEffect, useRef } from "react";
import { SVG } from "@svgdotjs/svg.js";
import { useSvgStore } from "../../../stores/svgStore";
import styles from "../../styles/layouts/Canvas/Canvas.module.scss";

export default function Canvas({ active }: CanvasProps) {
  const canvasRef = useRef<HTMLDivElement>(null);
  const svgContent = useSvgStore((state) => state.svgContent);
  const width = useSvgStore((state) => state.canvasWidth);
  const height = useSvgStore((state) => state.canvasHeight);

  useEffect(() => {
    if (canvasRef.current && svgContent) {
      try {
        while (canvasRef.current.firstChild) {
          canvasRef.current.removeChild(canvasRef.current.firstChild);
        }

        const draw = SVG().addTo(canvasRef.current).size(width, height);
        draw.svg(svgContent);
      } catch (error) {
        console.error("SVG 렌더링 중 오류 발생:", error);
      }
    }
  }, [svgContent, width, height]);

  return (
    <div className={`${styles["canvas"]} ${active ? styles["active"] : ""}`}>
      <div
        className={styles["canvas-editor"]}
        style={{ width: `${width}px`, height: `${height}px` }}
        ref={canvasRef}
      />
    </div>
  );
}
