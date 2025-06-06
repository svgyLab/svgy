import type { ButtonIcon } from "../../components/Button/Button.types";
import type { ContentsListItemType } from "../../components/ContentsList/ContentsList.types";

export const typefaceOptions = [
  { label: "Arial", value: "Arial" },
  { label: "Inter", value: "Inter" },
  { label: "NotoSans", value: "NotoSans" },
];

export const fontSizeOptions = [
  { label: "10px", value: "10px" },
  { label: "12px", value: "12px" },
  { label: "14px", value: "14px" },
  { label: "16px", value: "16px" },
  { label: "18px", value: "18px" },
  { label: "20px", value: "20px" },
];

export const historyItems =  [
  {
    label: "history 1",
    key: "1",
    isItemButton: false,
    buttons: [
      {
        label: "되돌리기",
        onClick: () => alert("되돌리기"),
      },
    ],
  },
  {
    label: "history 2",
    key: "2",
    isItemButton: false,
    buttons: [
      {
        label: "되돌리기",
        onClick: () => alert("되돌리기"),
      },
    ],
  },
  {
    label: "history 3",
    key: "3",
    isItemButton: false,
    buttons: [
      {
        label: "되돌리기",
        onClick: () => alert("되돌리기"),
      },
    ],
  },
  {
    label: "history 4",
    key: "4",
    isItemButton: false,
    buttons: [
      {
        label: "되돌리기",
        onClick: () => alert("되돌리기"),
      },
    ],
  },
  {
    label: "history 5",
    key: "5",
    isItemButton: false,
    buttons: [
      {
        label: "되돌리기",
        onClick: () => alert("되돌리기"),
      },
    ],
  },
  {
    label: "history 6",
    key: "6",
    isItemButton: false,
    buttons: [
      {
        label: "되돌리기",
        onClick: () => alert("되돌리기"),
      },
    ],
  },
  {
    label: "history 7",
    key: "7",
    isItemButton: false,
    buttons: [
      {
        label: "되돌리기",
        onClick: () => alert("되돌리기"),
      },
    ],
  },
  {
    label: "history 8",
    key: "8",
    isItemButton: false,
    buttons: [
      {
        label: "되돌리기",
        onClick: () => alert("되돌리기"),
      },
    ],
  },
];

export const layerItems:ContentsListItemType[] =  [
  {
    label: "layer 1",
    key: "1",
    isItemButton: true,
    buttons: [
      {
        icon: "unlock",
        label: "unlock",
        onClick: () => alert("unlock 1"),
      },
      {
        icon: "trash",
        label: "Delete",
        onClick: () => alert("Delete 1"),
      },
    ],
  },
  {
    label: "layer 2",
    key: "2",
    isItemButton: true,
    buttons: [
      {
        icon: "unlock",
        label: "unlock",
        onClick: () => alert("unlock 2"),
      },
      {
        icon: "trash",
        label: "Delete",
        onClick: () => alert("Delete 2"),
      },
    ],
  },
  {
    label: "layer 3",
    key: "3",
    isItemButton: true,
    buttons: [
      {
        icon: "unlock",
        label: "unlock",
        onClick: () => alert("unlock 3"),
      },
      {
        icon: "trash",
        label: "Delete",
        onClick: () => alert("Delete 3"),
      },
    ],
  },
  {
    label: "layer 4",
    key: "4",
    isItemButton: true,
    buttons: [
      {
        icon: "unlock",
        label: "unlock",
        onClick: () => alert("unlock 4"),
      },
      {
        icon: "trash",
        label: "Delete",
        onClick: () => alert("Delete 4"),
      },
    ],
  },
  {
    label: "layer 5",
    key: "5",
    isItemButton: true,
    buttons: [
      {
        icon: "unlock",
        label: "unlock",
        onClick: () => alert("unlock 5"),
      },
      {
        icon: "trash",
        label: "Delete",
        onClick: () => alert("Delete 5"),
      },
    ],
  },
  {
    label: "layer 6",
    key: "6",
    isItemButton: true,
    buttons: [
      {
        icon: "unlock",
        label: "unlock",
        onClick: () => alert("unlock 6"),
      },
      {
        icon: "trash",
        label: "Delete",
        onClick: () => alert("Delete 6"),
      },
    ],
  },
  {
    label: "layer 7",
    key: "7",
    isItemButton: true,
    buttons: [
      {
        icon: "unlock",
        label: "unlock",
        onClick: () => alert("unlock 7"),
      },
      {
        icon: "trash",
        label: "Delete",
        onClick: () => alert("Delete 7"),
      },
    ],
  },
  {
    label: "layer 8",
    key: "8",
    isItemButton: true,
    buttons: [
      {
        icon: "unlock",
        label: "unlock",
        onClick: () => alert("unlock 8"),
      },
      {
        icon: "trash",
        label: "Delete",
        onClick: () => alert("Delete 8"),
      },
    ],
  },
];

export const selectOptions = [
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Cherry", value: "cherry" },
];

export const contentsListItems: {
  label: string;
  key: string;
  buttons: {
    Default: { icon: ButtonIcon; label: string }[];
    OneButtonList: { icon: ButtonIcon; label: string }[];
    NoButtonList: { icon: ButtonIcon; label: string }[];
  };
}[] = [
  {
    label: "First Item",
    key: "1",
    buttons: {
      Default: [
        { icon: "unlock", label: "Edit" },
        { icon: "trash", label: "Delete" },
      ],
      OneButtonList: [{ icon: "unlock", label: "Edit" }],
      NoButtonList: [],
    },
  },
  {
    label: "Second Item",
    key: "2",
    buttons: {
      Default: [
        { icon: "unlock", label: "unlock" },
        { icon: "trash", label: "Delete" },
      ],
      OneButtonList: [{ icon: "unlock", label: "Edit" }],
      NoButtonList: [],
    },
  },
  {
    label: "Third Item",
    key: "3",
    buttons: {
      Default: [
        { icon: "unlock", label: "unlock" },
        { icon: "trash", label: "Delete" },
      ],
      OneButtonList: [{ icon: "unlock", label: "unlock" }],
      NoButtonList: [],
    },
  },
];
