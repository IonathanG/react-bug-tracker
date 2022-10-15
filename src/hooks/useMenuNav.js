import { useMemo } from "react";
import { MenuAdmin, MenuManager, MenuUser } from "../data/MenuNav";
import { ROLES } from "../data/Roles";
import useAuth from "./useAuth";

// Navbar Menu to be shown
const useMenuNav = () => {
  const { auth } = useAuth();

  // Select correct menu according to the current user logged in
  const Menu = useMemo(() => {
    let menu = [];

    if (auth?.roles?.includes(ROLES.Admin)) {
      menu = [...MenuAdmin];
    } else if (auth?.roles?.includes(ROLES.Manager)) {
      menu = [...MenuManager];
    } else menu = [...MenuUser];

    return menu;
  }, [auth]);

  return Menu;
};

export default useMenuNav;
