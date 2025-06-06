export const buttonIconOptions = [
  "align-bottom", "align-center", "align-left", "align-middle", "align-right", "align-top", "artboard",
  "character", "circle", "cursor", "hand", "history", "layer", "letter", "lock", "pentool",
  "reflection", "rotation", "selector", "square", "text-bold", "text-center", "text-italic", "text-left",
  "text-right", "text-stroke", "text-underline", "trash", "triangle", "unlock",
] as const;

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
