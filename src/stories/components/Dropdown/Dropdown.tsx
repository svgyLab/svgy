import { useState, useRef, useEffect } from "react";
import type { DropdownProps } from "./Dropdown.types";
import styles from "../../styles/components/Dropdown/Dropdown.module.scss";

export default function Dropdown({
   options,
   labelText = "Select",
   onSelect
  }: DropdownProps) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleOptionClick = (value: string) => {
    onSelect(value);
    setOpen(false);
  };

  const handleOutsideClick = (e: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  return (
    <div className={styles["dropdown-container"]} ref={dropdownRef}>
      <button
        type="button"
        className={styles["dropdown-label"]}
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open ? "true" : "false"}
      >
        {labelText}
      </button>
      {open && (
        <ul className={styles["dropdown-menu-list"]}>
          {options.map((opt) => (
            <li key={opt.value} className={styles["dropdown-menu-item"]}>
              <button
                type="button"
                className={styles["dropdown-menu-option"]}
                onClick={() => handleOptionClick(opt.value)}
              >
                {opt.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
