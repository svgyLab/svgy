import { historyItems } from "../../../assets/datas/dummies";
import styles from "../../../styles/components/Panel/Contents/PanelHistory.module.scss";
import ContentsList from "../../ContentsList/ContentsList";
import type { PanelHistoryProps } from "../Panel.types.ts";

export default function PanelHistory({ historyLists }: PanelHistoryProps) {
  return (
    <div className={styles['panel-container']}>
      {
        historyLists ?
          <ContentsList items={historyItems} /> :
          <p className={styles['panel-no-result']}>변경 내역이 없습니다.</p>
      }
    </div>
  );
}
