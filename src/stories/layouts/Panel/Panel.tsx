import { panelItems } from "../../assets/datas/datas";
import styles from "../../styles/layouts/Panel/Panel.module.scss";
import PanelItem from "../../components/Panel/PanelItem";

function Panel() {
  return (
    <aside className={styles["panel"]}>
      <ul className={styles["panel-list"]}>
        {panelItems.map(({ title, Component }) => (
          <li key={title} className={styles["panel-item"]}>
            <PanelItem title={title}>
              <Component historyLists={true} />
            </PanelItem>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Panel;
