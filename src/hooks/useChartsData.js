import { useMemo } from "react";
import { useSelector } from "react-redux";

const useChartsData = () => {
  const users = useSelector((state) => state.users.Users);
  const projects = useSelector((state) => state.projects.Projects);
  const projectUsers = useSelector((state) => state.projectUsers.ProjectUsers);

  // total project number
  const projectCount = useMemo(() => {
    return Object.values(projects).length;
  }, [projects]);

  // total ticket number
  const ticketCount = useMemo(() => {
    let count = 0;
    Object.values(projects).forEach((project) => {
      count += Object.values(project.tickets).length;
    });
    return count;
  }, [projects]);

  // unassigned ticket number
  const unassignedTicketCount = useMemo(() => {
    let count = 0;
    Object.values(projects).forEach((project) => {
      Object.values(project.tickets).forEach((ticket) => {
        if (ticket.assigned_to === "") count++;
      });
    });
    return count;
  }, [projects]);

  // assigned ticket number
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

  // Sorting out each role count for every single project
  // => How many Submitter, Developer and Manager per project
  const roleDataCount = useMemo(() => {
    const roleCount = {
      Submitter: [],
      Developer: [],
      Manager: [],
    };

    Object.values(projectUsers).forEach((project, index) => {
      roleCount.Submitter[index] = 0;
      roleCount.Developer[index] = 0;
      roleCount.Manager[index] = 0;

      let projectMembers = [];
      projectMembers.push(project.project_manager_id);
      project.project_team_id.map((user) => projectMembers.push(user));

      projectMembers.forEach((member) => {
        switch (users[member]?.user_role) {
          case "Submitter":
            roleCount.Submitter[index] += 1;
            break;
          case "Developer":
            roleCount.Developer[index] += 1;
            break;
          case "Project Manager":
            roleCount.Manager[index] += 1;
            break;
          default:
            return null;
        }
      });
    });
    return {
      roleCount,
    };
  }, [projectUsers, users]);

  return [
    projectCount,
    ticketCount,
    unassignedTicketCount,
    assignedTicketCount,
    userCount,
    ticketDevelopment,
    devCount,
    projectPriority,
    roleDataCount,
  ];
};

export default useChartsData;
