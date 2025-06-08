import { useRef } from "react";
import { useSvgStore } from "../stores/svgStore";

export const useFileUpload = () => {
  const hiddenFileInputRef = useRef<HTMLInputElement | null>(null);
  const updateSvgContent = useSvgStore((state) => state.setSvgContent);
  const updateCanvasSize = useSvgStore((state) => state.setCanvasSize);
  const updateSvgElements = useSvgStore((state) => state.setSvgElements);

  const triggerFileDialog = () => {
    hiddenFileInputRef.current?.click();
  };

  const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (!selectedFile || !selectedFile.name.endsWith(".svg")) return;

    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === "string") {
        const svgString = reader.result;
        updateSvgContent(svgString);

        const parser = new DOMParser();
        const svgDocument = parser.parseFromString(svgString, "image/svg+xml");
        const svgElement = svgDocument.querySelector("svg");

        if (svgElement) {
          const viewBox = svgElement.getAttribute("viewBox");
          const widthAttr = svgElement.getAttribute("width");
          const heightAttr = svgElement.getAttribute("height");

          let canvasWidth = 500;
          let canvasHeight = 500;

          if (widthAttr && heightAttr) {
            canvasWidth = parseFloat(widthAttr);
            canvasHeight = parseFloat(heightAttr);
          } else if (viewBox) {
            const [, , viewBoxWidth, viewBoxHeight] = viewBox.split(" ").map(Number);
            canvasWidth = viewBoxWidth;
            canvasHeight = viewBoxHeight;
          }

          if (!isNaN(canvasWidth) && !isNaN(canvasHeight)) {
            updateCanvasSize(canvasWidth, canvasHeight);
          }

          const elements: any[] = [];
          const supportedTags = [
            "path", "rect", "circle", "ellipse",
            "line", "polygon", "polyline", "g"
          ];

          supportedTags.forEach((tag) => {
            svgDocument.querySelectorAll(tag).forEach((el) => {
              const attrs: Record<string, string> = {};
              Array.from(el.attributes).forEach(attr => {
                attrs[attr.name] = attr.value;
              });

              elements.push({
                tag,
                attributes: attrs,
              });
            });
          });

          updateSvgElements(elements);
        }
      }
    };

    reader.readAsText(selectedFile);
  };

  return {
    hiddenFileInputRef,
    onFileChange,
    triggerFileDialog,
  };
};
