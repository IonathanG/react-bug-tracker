import { useMemo } from "react";
import { useSelector } from "react-redux";

// Keep up to date List of Managers to assign a project to
const useManagerList = () => {
  const users = useSelector((state) => state.users.Users);

  const ManagerList = useMemo(() => {
    return Object.values(users)
      .filter((user) => user.user_role === "Project Manager")
      .map((manager) => ({
        manager_id: manager.user_id,
        manager_name: manager.user_name,
      }));
  }, [users]);

  return ManagerList;
};

export default useManagerList;
