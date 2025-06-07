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
      canvasRef.current.innerHTML = "";
      const draw = SVG().addTo(canvasRef.current).size(width, height);
      draw.svg(svgContent);
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
