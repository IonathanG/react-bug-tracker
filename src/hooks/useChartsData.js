import { useMemo } from "react";
import { useSelector } from "react-redux";

const useChartsData = () => {
  const users = useSelector((state) => state.users.Users);
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

  // total count of users
  const userCount = useMemo(() => {
    return Object.values(users).length;
  }, [users]);

  // total count of tickets in development status
  const ticketDevelopment = useMemo(() => {
    let count = 0;
    Object.values(projects).forEach((project) => {
      Object.values(project.tickets).forEach((ticket) => {
        if (ticket.status === "Development") count++;
      });
    });
    return count;
  }, [projects]);

  // total count of dev
  const devCount = useMemo(() => {
    let count = 0;
    Object.values(users).forEach((user) => {
      if (user.user_role === "Developer") count++;
    });
    return count;
  }, [users]);

  // count of priorities of projects for pie chart
  const projectPriority = useMemo(() => {
    let prioritiesCount = {
      urgent: 0,
      high: 0,
      medium: 0,
      low: 0,
    };
    Object.values(projects).forEach((project) => {
      switch (project.priority) {
        case "Urgent":
          prioritiesCount.urgent += 1;
          break;
        case "High":
          prioritiesCount.high += 1;
          break;
        case "Medium":
          prioritiesCount.medium += 1;
          break;
        case "Low":
          prioritiesCount.low += 1;
          break;
        default:
          return null;
      }
    });
    return prioritiesCount;
  }, [projects]);

  return [
    projectCount,
    ticketCount,
    unassignedTicketCount,
    assignedTicketCount,
    userCount,
    ticketDevelopment,
    devCount,
    projectPriority,
  ];
};

export default useChartsData;
