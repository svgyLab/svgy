import { create } from "zustand";

interface SvgState {
  svgContent: string | null;
  canvasWidth: number;
  canvasHeight: number;
  setSvgContent: (content: string) => void;
  setCanvasSize: (width: number, height: number) => void;
}

export const useSvgStore = create<SvgState>((set) => ({
  svgContent: null,
  canvasWidth: 500,
  canvasHeight: 500,
  setSvgContent: (content) => set({ svgContent: content }),
  setCanvasSize: (width, height) => set({ canvasWidth: width, canvasHeight: height }),
}));
