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
  };

  const initialMenuItemState = {
    menuItems: ["Bio", "Education", "Job History", "Technologies", "Projects", "Contacts"]
  };

  return (
    <>
      <HeaderContext.Provider value={initialHeaderState}>
        <div>
          <Header />
        </div>
      </HeaderContext.Provider>
      <MenuItemContext.Provider value={initialMenuItemState}>
        <MenuItem />
      </MenuItemContext.Provider>
      <MainContent />
    </>
  );
}
