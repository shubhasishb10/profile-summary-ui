import Header from "./Header";
import { HeaderContext, MainContentContext, MenuItemContext } from "../store/contexts";
import MenuItem from "./MenuItems";
import { useState } from "react";
import { getPageComponentNameFromHeadername } from "../utils/utils";
import AboutMe from "./menu-content/AboutMe";

export default function Dashboard() {
  const [Content, setContent] = useState<JSX.Element>(AboutMe);

  const initialHeaderState = {
    profileName: "Shubhasish Bhunia",
    designation: "Senior Associate",
    currentOrganization: "Cognizant",
    mobileNumber: "8075041134",
    emialId: "shubhasishb10@gmail.com",
    organizationUrl: "https://www.pwc.com",
  };

  const initialMenuItemState = {
    menuItems: [
      "About me",
      "Education",
      "Job History",
      "Skills",
      "Projects",
      "Contacts",
    ],
    handleMenuItemClick: handleMenuItemClick,
  };

  const initialMainContentState = {
    title: "Hello"
  }

  function handleMenuItemClick(menuItem: string) {
    setContent(getPageComponentNameFromHeadername(menuItem));
  }

  return (
    <>
      <HeaderContext.Provider value={initialHeaderState}>
        <div className="shadow-4xl">
          <Header />
        </div>
      </HeaderContext.Provider>
      <MenuItemContext.Provider value={initialMenuItemState}>
        <MenuItem />
      </MenuItemContext.Provider>
      <MainContentContext.Provider value={initialMainContentState}>
        {Content}
      </MainContentContext.Provider>
    </>
  );
}
