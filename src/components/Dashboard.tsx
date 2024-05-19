import Header from "./Header";
import { HeaderContext, MenuItemContext } from "../store/contexts";
import MenuItem from "./MenuItems";
import MainContent from "./MainContent";

export default function Dashboard() {
  const initialHeaderState = {
    profileName: "Shubhasish Bhunia",
    designation: "Senior Associate",
    currentOrganization: "PwC",
    mobileNumber: "8075041134",
    emialId: "shubhasishb10@gmail.com",
    organizationUrl: "https://www.pwc.com",
  };

  const initialMenuItemState = {
    menuItems: [
      "About me",
      "Education",
      "Job History",
      "Technologies",
      "Projects",
      "Contacts",
    ],
  };

  return (
    <>
      <HeaderContext.Provider value={initialHeaderState}>
        <Header />
      </HeaderContext.Provider>
      <MenuItemContext.Provider value={initialMenuItemState}>
        <MenuItem />
      </MenuItemContext.Provider>
      <MainContent />
    </>
  );
}
