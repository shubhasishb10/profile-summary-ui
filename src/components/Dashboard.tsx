import Header from "./Header";
import {
  HeaderContext,
  MainContentContext,
  MenuItemContext,
} from "../store/contexts";
import MenuItem from "./MenuItems";
import { useState } from "react";
import { getPageComponentNameFromHeadername } from "../utils/utils";
import AboutMe from "./menu-content/AboutMe";
import Education from "./menu-content/Educations";
import JobHistory from "./menu-content/JobHistory";

export default function Dashboard() {
  const [Content, setContent] = useState<JSX.Element>(JobHistory);

  const initialHeaderState = {
    profileName: "Shubhasish Bhunia",
    designation: "Software Technical Advisor",
    currentOrganization: "EIS Ltd.",
    mobileNumber: "8075041134",
    emialId: "shubhasishb10@gmail.com",
    organizationUrl: "https://www.eisgroup.com",
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
    title: "Hello",
  };

  function handleMenuItemClick(menuItem: string) {
    setContent(getPageComponentNameFromHeadername(menuItem));
  }

  return (
    <div className="bg-cover vh-screen h-vh" style={{scrollbarWidth: "none"}}>
      <HeaderContext.Provider value={initialHeaderState}>
        <div className="shadow-4xl">
          <Header />
        </div>
      </HeaderContext.Provider>
      <MenuItemContext.Provider value={initialMenuItemState}>
        <div>
          <MenuItem />
        </div>
      </MenuItemContext.Provider>
      <MainContentContext.Provider value={initialMainContentState}>
        {Content}
      </MainContentContext.Provider>
      {/* <MenuItemContext.Provider value={initialMenuItemState}>
        <MenuItem />
      </MenuItemContext.Provider>
      <MainContentContext.Provider value={initialMainContentState}>
        {Content}
      </MainContentContext.Provider> */}
    </div>
  );
}
