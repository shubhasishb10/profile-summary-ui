import { useContext } from "react";
import { MenuItemContext } from "../store/contexts";

export default function MenuItem() {
  const menuItemContext = useContext(MenuItemContext);

  return (
    <menu className="border">
      <ul className="flex items-stretch text-center">
        {menuItemContext.menuItems.map((menuItem, count) => {
           let classNames = `w-[100%] h-[100%] px-[2%] py-[0.5%] items-center border-l-2 border-r-2
           border-b-2 border-blue-900 cursor-pointer ${count===1 ? 'bg-cyan-200': 'bg-cyan-100'} hover:bg-cyan-300 border-collapse`;
          return (
            <li className={classNames}>
              <a href="/" className="font-semibold text-cyan-800">
                {menuItem}
              </a>
            </li>
          );
        })}
      </ul>
    </menu>
  );
}
