import { menus } from "../assets/datas/datas";
import styles from "../styles/pages/Editor.module.scss";
import HeaderMenuBar from "../layouts/HeaderMenuBar/HeaderMenuBar";
import Iconbar from "../layouts/Iconbar/Iconbar";
import Canvas from "../layouts/Canvas/Canvas";
import Panel from "../layouts/Panel/Panel";

export default function Editor() {
  return (
    <>
      <HeaderMenuBar menus={menus} />
      <main className={styles["main"]}>
        <Iconbar toolbar={true} />
        <Canvas width={300} height={300} active={true} />
        <Iconbar toolbar={false} active={true} />
      </main>
      <Panel />
    </>
  );
}
