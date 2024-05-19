import { createContext } from "react";

export const HeaderContext = createContext({
    profileName: "" as string,
    designation: "" as string,
    currentOrganization: "" as string,
    mobileNumber: "" as string,
    emialId: "" as string,
    organizationUrl: "" as string
});

export const MenuItemContext = createContext({
    menuItems: [] as string[]
})