import React from "react";

export interface TextInputProps {
  isLabel?: boolean;
  label?: string;
  inputId: string;
  inputType?: string;
  inputWidth?: number;
  value: string | number;
  min?: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
