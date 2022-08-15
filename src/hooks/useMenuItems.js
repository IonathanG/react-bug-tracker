import { useEffect, useState } from "react";
import MenuData from "../data/MenuData.json";

const useWork = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    setMenu(MenuData.dashboardMenu);
  }, []);

  return menu;
};

export default useWork;
