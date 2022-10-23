import { useMemo } from "react";
import { useSelector } from "react-redux";

const useAllTicketsStats = () => {
  const projects = useSelector((state) => state.projects.Projects);

  // total number of open tickets
  const openTicketCount = useMemo(() => {
    let count = 0;
    Object.values(projects).forEach((project) => {
      count += Object.values(project.tickets).length;
    });
    return count;
  }, [projects]);

  // resolved ticket count
  const resolvedTicketCount = useMemo(() => {
    let count = 0;
    Object.values(projects).forEach((project) => {
      Object.values(project.tickets).forEach((ticket) => {
        if (ticket.status === "Resolved") count++;
      });
    });
    return count;
  }, [projects]);

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
    openTicketCount,
    resolvedTicketCount,
    developmentTicketCount,
    urgentTicketCount,
  ];
};

export default useAllTicketsStats;
