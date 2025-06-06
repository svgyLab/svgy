import type { ButtonIcon } from "../../components/Button/Button.types";
import type { MenuGroup } from "../../layouts/HeaderMenuBar/HeaderMenuBar.types";
import PanelLayer from "../../components/Panel/Contents/PanelLayer";
import PanelCharacter from "../../components/Panel/Contents/PanelCharacter";
import PanelHistory from "../../components/Panel/Contents/PanelHistory";
import PanelAlign from "../../components/Panel/Contents/PanelAlign";

export const buttonIconOptions = [
  "align-bottom", "align-center", "align-left", "align-middle", "align-right", "align-top", "artboard",
  "character", "circle", "cursor", "hand", "history", "layer", "letter", "lock", "pentool",
  "reflection", "rotation", "selector", "square", "text-bold", "text-center", "text-italic", "text-left",
  "text-right", "text-stroke", "text-underline", "trash", "triangle", "unlock",
] as const;

export const menus: MenuGroup[] = [
  {
    name: "File",
    options: [
      { label: "New", value: "new" },
      { label: "Open", value: "open" },
      { label: "Save", value: "save" },
    ],
  },
  {
    name: "View",
    options: [
      { label: "Ruler", value: "ruler" },
      { label: "Zoom In", value: "zoomIn" },
      { label: "Zoom Out", value: "zoomOut" },
    ],
  },
  {
    name: "Object",
    options: [
      { label: "Create Outlines", value: "createOutlines" },
      { label: "Canvas Size", value: "canvasSize" },
    ],
  },
  {
    name: "Help",
    options: [
      { label: "Documentation", value: "docs" },
      { label: "About", value: "about" },
      { label: "License", value: "license" },
    ],
  },
];

export const toolbarButtons: { icon: ButtonIcon; label: string }[] = [
  { icon: "cursor", label: "선택" },
  { icon: "selector", label: "앵커 선택" },
  { icon: "artboard", label: "아트보드" },
  { icon: "pentool", label: "펜툴" },
  { icon: "hand", label: "확대" },
  { icon: "letter", label: "문자" },
  { icon: "circle", label: "동그라미" },
  { icon: "square", label: "네모" },
  { icon: "triangle", label: "세모" },
  { icon: "rotation", label: "회전" },
  { icon: "reflection", label: "반전" }
];

export const sideButtons: { icon: ButtonIcon; label: string }[] = [
  { icon: "layer", label: "레이어" },
  { icon: "character", label: "문자 편집" },
  { icon: "history", label: "내역" },
  { icon: "align-left", label: "정렬" }
];

export const panelAlignButtons = [
  { label: "좌측 정렬", icon: "align-left" },
  { label: "가운데 정렬", icon: "align-center" },
  { label: "우측 정렬", icon: "align-right" },
  { label: "상단 정렬", icon: "align-top" },
  { label: "중앙 정렬", icon: "align-middle" },
  { label: "하단 정렬", icon: "align-bottom" }
] as const;

export const textAlignButtons = [
  { label: "텍스트 좌측 정렬", icon: "text-left" },
  { label: "텍스트 중앙 정렬", icon: "text-center" },
  { label: "텍스트 우측 정렬", icon: "text-right" }
] as const;

export const textStyleButtons = [
  { label: "텍스트 볼드", icon: "text-bold" },
  { label: "텍스트 밑줄", icon: "text-underline" },
  { label: "텍스트 이텔릭", icon: "text-italic" },
  { label: "텍스트 취소선", icon: "text-stroke" }
] as const;

export const panelItems = [
  { title: "레이어", Component: PanelLayer },
  { title: "문자", Component: PanelCharacter },
  { title: "내역", Component: PanelHistory, historyLists: true },
  { title: "정렬", Component: PanelAlign }
] as const;
