import { useContext, useState } from "react";
import { MenuItemContext } from "../store/contexts";

export default function MenuItem() {
  const menuItemContext = useContext(MenuItemContext);

  const [selectedMenuIndex, setSelecetedMenuIndex] = useState<number>(0);

  function handleMenuItemClick(count: number, $event: React.MouseEvent<HTMLLIElement, MouseEvent>) {
    setSelecetedMenuIndex(count);
    //@ts-ignore
    menuItemContext.handleMenuItemClick($event.target.textContent);
  }

  return (
    <menu className="border">
      <ul className="flex text-center">
        {menuItemContext.menuItems.map((menuItem, count) => {
           let classNames = `w-[100%] px-[2%] py-[0.7%] items-center text-lg cursor-pointer 
                              ${count===selectedMenuIndex ? 'bg-sky-200 shadow-xl border-b-4 border-b-sky-400': 'bg-sky-100 shadow-xl'} hover:bg-sky-200 border-collapse`;
          return (
            <li key={count} className={classNames} onClick={($event) => handleMenuItemClick(count, $event)}>
              <span className="font-bold text-sky-900">
                {menuItem}
              </span>
            </li>
          );
        })}
      </ul>
    </menu>
  );
}
