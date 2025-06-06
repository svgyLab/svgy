import React from "react";

export type PanelItemProps = {
  title: string;
  children?: React.ReactNode;
  onClose?: () => void;
};

export interface PanelAlignProps {
  onAlignChange?: (alignment: string) => void;
}

export type PanelHistoryProps = {
  historyLists: boolean;
}
