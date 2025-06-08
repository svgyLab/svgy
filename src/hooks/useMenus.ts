import { menus as initialMenus } from "../stories/assets/datas/datas";

export const useMenus = (onOpenFile: () => void) => {
  const menus = initialMenus.map((menu) => {
    if (menu.name === "File") {
      return {
        ...menu,
        onSelect: (value: string) => {
          if (value === "open") {
            onOpenFile();
          }
        },
      };
    }
    return menu;
  });

  return menus;
};
