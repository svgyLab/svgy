import React from "react";

export type PanelItemProps = {
  title: string;
  children?: React.ReactNode;
  onClose?: () => void;
};
