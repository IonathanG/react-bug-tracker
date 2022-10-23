import { useMemo } from "react";
import { useSelector } from "react-redux";
import { ROLES } from "../data/Roles";
import useAuth from "./useAuth";

const useMyTicketsStats = () => {
  const { auth } = useAuth();
  const projects = useSelector((state) => state.projects.Projects);
  const projectUsers = useSelector((state) => state.projectUsers.ProjectUsers);

  // total number of tickets submitted by the user
  const submittedTicketCount = useMemo(() => {
    let count = 0;
    Object.values(projects).forEach((project) => {
      Object.values(project.tickets).forEach((ticket) => {
        if (ticket.assigned_by === auth?.id) count++;
      });
    });
    return count;
  }, [projects, auth]);

  // total number of tickets assigned to the user
  // Admin see all tickets. Manager all tickets from its projects
  const assignedTicketCount = useMemo(() => {
    let count = 0;

    Object.values(projects).forEach((project) => {
      Object.values(project.tickets).forEach((ticket) => {
        if (auth?.roles?.includes(ROLES.Admin)) {
          count++;
        } else if (auth?.roles?.includes(ROLES.Manager)) {
          if (projectUsers[ticket.project_id]?.project_manager_id === auth?.id)
            count++;
        } else {
          if (ticket.assigned_to === auth?.id) count++;
        }
      });
    });
    return count;
  }, [projects, auth, projectUsers]);

  // development ticket count
  const developmentTicketCount = useMemo(() => {
    let count = 0;
    Object.values(projects).forEach((project) => {
      Object.values(project.tickets).forEach((ticket) => {
        if (ticket.status === "Development") count++;
      });
    });
    return count;
  }, [projects]);

  // urgent ticket count
  const urgentTicketCount = useMemo(() => {
    let count = 0;
    Object.values(projects).forEach((project) => {
      Object.values(project.tickets).forEach((ticket) => {
        if (ticket.priority === "Urgent") count++;
      });
    });
    return count;
  }, [projects]);

  return [
    submittedTicketCount,
    assignedTicketCount,
    developmentTicketCount,
    urgentTicketCount,
  ];
};

export default useMyTicketsStats;
