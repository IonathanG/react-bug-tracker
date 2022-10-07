import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Navigation from "../../components/Navigation/Navigation";
import BasicTable from "../../components/Tables/BasicTable";
import { Tickets_Columns } from "../../data/TableColumns";

const Container = styled.div``;

const MyTickets = () => {
  const userID = "user_02";
  const userRole = "Project Manager";

  // Retrieving State
  const users = useSelector((state) => state.users.Users);
  const projects = useSelector((state) => state.projects.Projects);
  const projectUsers = useSelector((state) => state.projectUsers.ProjectUsers);

  const defaultSortBy = useMemo(
    () => [
      {
        id: "title",
        desc: false,
      },
    ],
    []
  );

  // Pushing Specific Formatted Data from all State into an Array
  // Array to be displayed into the BasicTable component
  const tableData = useMemo(() => {
    const projectUsersArray = projectUsers ? Object.values(projectUsers) : [];
    let formattedData = [];

    // Filter and map all Tickets:
    // => Admin can see all Tickets
    // => Project Manager can see all Tickets from his Projects
    // => Developer can see all Tickets he/she is assigned to

    // Filter the Projects where Project Manager and Developer are assigned to
    const myProjects = projectUsersArray.filter((project) => {
      switch (userRole) {
        case "Project Manager":
          return project.project_manager_id === userID;

        case "Developer":
          return project.project_team_id.some((user) => user === userID);

        default:
          return project;
      }
    });

    myProjects.map((project) =>
      Object.values(projects[project.project_id].tickets)
        // Filter Tickets where Developer is not assigned to
        .filter((ticket) => {
          if (userRole === "Developer") {
            return ticket.assigned_to === userID;
          } else return ticket;
        })
        .map((ticket) =>
          formattedData.push({
            ticket_id: ticket.ticket_id,
            title: ticket.ticket_name,
            assigned_by: users[ticket.assigned_by]?.user_name,
            assigned_to: users[ticket.assigned_to]?.user_name,
            status: ticket.status,
            priority: ticket.priority,
            date: ticket.created_date,
            links: {
              view: `/Tickets/TicketDetails/${project.project_id}/${ticket.ticket_id}`,
              edit: `/Tickets/EditTicket/${project.project_id}/${ticket.ticket_id}`,
              archive: `/`,
            },
          })
        )
    );
    return formattedData;
  }, [users, projects, projectUsers]);

  return (
    <Container>
      <Navigation headerText={"My Tickets"} />
      <BasicTable
        COLUMNS={Tickets_Columns}
        DATA={tableData}
        defaultSortBy={defaultSortBy}
      />
    </Container>
  );
};

export default MyTickets;
