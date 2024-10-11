import { useContext, useState } from "react";
import { MenuItemContext } from "../store/contexts";

export default function MenuItem() {
  const menuItemContext = useContext(MenuItemContext);

  const [selectedMenuIndex, setSelecetedMenuIndex] = useState<number>(0);

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
            "w-[100%] px-[2%] py-[0.7%] items-center text-lg cursor-pointer bg-cover border-collapse";
          if (count === selectedMenuIndex) {
            classNames += " shadow-xl bg-[url('menu-item-bg.jpeg')] bg-cover ";
          } else {
            classNames +=
              " shadow-xl bg-none ";
          }
          let menuItemNameFontColor;

          if(count === selectedMenuIndex) {
            menuItemNameFontColor = "text-white";
          }else {
            menuItemNameFontColor = "text-sky-900";
          }

          return (
            <li
              key={count}
              className={classNames}
              onClick={($event) => handleMenuItemClick(count, $event)}
            >
              <span className={"font-bold text-xl " + menuItemNameFontColor}>{menuItem}</span>
            </li>
          );
        })}
      </ul>
    </menu>
  );
}
