import type { HeaderMenuBarProps } from "./HeaderMenuBar.types";
import styles from "../../styles/layouts/HeaderMenuBar/HeaderMenuBar.module.scss";
import Dropdown from "../../components/Dropdown/Dropdown";

export default function HeaderMenuBar({
    menus
  }: HeaderMenuBarProps) {
  return (
    <header className={styles["header-menu-bar"]}>
      <nav className={styles["header-menu-list"]}>
        {menus.map((menu) => (
          <div className={styles["header-menu-item"]} key={menu.name}>
            <Dropdown
              labelText={menu.name}
              options={menu.options}
              onSelect={menu.onSelect ?? (() => {})}
            />
          </div>
        ))}
      </nav>
    </header>
  );
}
