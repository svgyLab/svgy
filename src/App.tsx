import HeaderMenuBar from "./stories/layouts/HeaderMenuBar/HeaderMenuBar";
import Iconbar from "./stories/layouts/Iconbar/Iconbar";
import Canvas from "./stories/layouts/Canvas/Canvas";
import Panel from "./stories/layouts/Panel/Panel";
import HiddenFileInput from "./components/HiddenFileInput";
import { useFileUpload } from "./hooks/useFileUpload";
import { useMenus } from "./hooks/useMenus";
import "./style.scss";

function App() {
  const {
    hiddenFileInputRef,
    onFileChange,
    triggerFileDialog
  } = useFileUpload();

  const menus = useMenus(triggerFileDialog);

  return (
    <>
      <HeaderMenuBar menus={menus} />
      <main className="main">
        <Iconbar toolbar={true} />
        <Canvas active={true} />
        <Iconbar toolbar={false} active={true} />
      </main>
      <Panel />
      <HiddenFileInput
        fileInputRef={hiddenFileInputRef}
        onChange={onFileChange}
        accept=".svg"
      />
    </>
  );
}

export default App;
