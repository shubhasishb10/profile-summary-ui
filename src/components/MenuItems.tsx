import { useContext, useState } from "react";
import { MenuItemContext } from "../store/contexts";

export default function MenuItem() {
  const menuItemContext = useContext(MenuItemContext);

  const [selectedMenuIndex, setSelecetedMenuIndex] = useState<number>(2);

  function handleMenuItemClick(
    count: number,
    $event: React.MouseEvent<HTMLLIElement, MouseEvent>
  ) {
    setSelecetedMenuIndex(count);
    //@ts-ignore
    menuItemContext.handleMenuItemClick($event.target.textContent);
  }

  return (
    <menu className="border">
      <ul className="flex text-center">
        {menuItemContext.menuItems.map((menuItem, count) => {
          let classNames =
            "w-[100%] p-2 items-center cursor-pointer bg-cover border-collapse";
          if (count === selectedMenuIndex) {
            classNames += " shadow-xl border-b-4 border-b-sky-600 bg-[url('page-section-title-header-bg.jpeg')] bg-cover";
          } else {
            classNames +=
              " shadow-xl bg-none ";
          }

          let menuItemNameFontColor;

          if(count === selectedMenuIndex) {
            menuItemNameFontColor = " text-slate-800 ";
          }else {
            menuItemNameFontColor = " text-slate-500 ";
          }

          if(count === 2) {
            classNames += " pr-52 "
          }

          let textDisabled: string = "";

          if(count > 2) {
            classNames += " disabled area-disable text-slate-50 "
            textDisabled = " text-slate-200 "
          }

          return (
            <li
              key={count}
              className={classNames + textDisabled}
              onClick={($event) => !textDisabled ?  handleMenuItemClick(count, $event) : {}}
            >
              <span className={"font-bold text-md " + textDisabled + menuItemNameFontColor}>{menuItem}</span>
            </li>
          );
        })}
      </ul>
    </menu>
  );
}
