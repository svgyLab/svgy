import { create } from "zustand";

interface SvgElement {
  tag: string;
  attributes: Record<string, string>;
}

interface SvgState {
  svgContent: string | null;
  canvasWidth: number;
  canvasHeight: number;
  svgElements: SvgElement[];
  setSvgContent: (content: string) => void;
  setCanvasSize: (width: number, height: number) => void;
  setSvgElements: (elements: SvgElement[]) => void;
}

export const useSvgStore = create<SvgState>((set) => ({
  svgContent: null,
  canvasWidth: 500,
  canvasHeight: 500,
  svgElements: [],
  setSvgContent: (content) => set({ svgContent: content }),
  setCanvasSize: (width, height) => set({ canvasWidth: width, canvasHeight: height }),
  setSvgElements: (elements) => set({ svgElements: elements }),
}));
