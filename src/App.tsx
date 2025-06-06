import { menus } from "./stories/assets/datas/datas";
import HeaderMenuBar from "./stories/layouts/HeaderMenuBar/HeaderMenuBar";
import Iconbar from "./stories/layouts/Iconbar/Iconbar";
import Canvas from "./stories/layouts/Canvas/Canvas";
import Panel from "./stories/layouts/Panel/Panel";
import "./style.scss";

function App() {
  return (
    <>
      <HeaderMenuBar menus={menus} />
      <main className="main">
        <Iconbar toolbar={true} />
        <Canvas width={300} height={300} active={true} />
        <Iconbar toolbar={false} active={true} />
      </main>
      <Panel />
    </>
  );
}

export default App;
