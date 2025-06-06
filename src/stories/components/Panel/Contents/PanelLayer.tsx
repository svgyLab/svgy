import { layerItems } from "../../../assets/datas/dummies";
import styles from "../../../styles/components/Panel/Contents/PanelLayer.module.scss";
import ContentsList from "../../ContentsList/ContentsList";

export default function PanelLayer() {
  return (
    <div className={styles['panel-container']}>
      <ContentsList items={layerItems} />
    </div>
  );
}
