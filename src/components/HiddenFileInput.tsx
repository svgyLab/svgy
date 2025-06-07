import React from "react";

interface HiddenFileInputProps {
  fileInputRef: React.RefObject<HTMLInputElement | null>;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  accept?: string;
}

const HiddenFileInput: React.FC<HiddenFileInputProps> = ({
   fileInputRef,
   onChange,
   accept = ".svg",
 }) => {
  return (
    <input
      type="file"
      ref={fileInputRef}
      accept={accept}
      style={{ display: "none" }}
      onChange={onChange}
    />
  );
};

export default HiddenFileInput;
