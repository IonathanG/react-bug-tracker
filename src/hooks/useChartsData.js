import { useMemo } from "react";
import { useSelector } from "react-redux";

const useChartsData = () => {
  //   const projectUsers = useSelector((state) => state.projectUsers.ProjectUsers);
  // const users = useSelector((state) => state.users.Users);
  const projects = useSelector((state) => state.projects.Projects);

  const projectCount = useMemo(() => {
    return Object.values(projects).length;
  }, [projects]);

  const ticketCount = useMemo(() => {
    let count = 0;
    Object.values(projects).forEach((project) => {
      count += Object.values(project.tickets).length;
    });
    return count;
  }, [projects]);

  const unassignedTicketCount = useMemo(() => {
    let count = 0;
    Object.values(projects).forEach((project) => {
      Object.values(project.tickets).forEach((ticket) => {
        if (ticket.assigned_to === "") count++;
      });
    });
    return count;
  }, [projects]);

  const assignedTicketCount = useMemo(() => {
    let count = 0;
    Object.values(projects).forEach((project) => {
      Object.values(project.tickets).forEach((ticket) => {
        if (ticket.assigned_to !== "") count++;
      });
    });
    return count;
  }, [projects]);

  return [
    projectCount,
    ticketCount,
    unassignedTicketCount,
    assignedTicketCount,
  ];
};

export default useChartsData;
