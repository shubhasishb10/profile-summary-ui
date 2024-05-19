import { useContext, useState } from "react";
import { MenuItemContext } from "../store/contexts";

export default function MenuItem() {
  const menuItemContext = useContext(MenuItemContext);

  const [selectedMenuIndex, setSelecetedMenuIndex] = useState<number>(0);

  return (
    <menu className="border">
      <ul className="flex items-stretch text-center">
        {menuItemContext.menuItems.map((menuItem, count) => {
           let classNames = `w-[100%] h-[100%] px-[2%] py-[0.5%] items-center border-l-1 border-r-2
           border-b-2 border-blue-900 cursor-pointer ${count===selectedMenuIndex ? 'bg-cyan-300': 'bg-cyan-100'} hover:bg-cyan-300 border-collapse`;
          return (
            <li className={classNames} onClick={() => setSelecetedMenuIndex(count)}>
              <span className="font-semibold text-fuchsia-800">
                {menuItem}
              </span>
            </li>
          );
        })}
      </ul>
    </menu>
  );
}
