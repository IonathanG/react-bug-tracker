import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Navigation from "../../components/Navigation/Navigation";
import BasicTable from "../../components/Tables/BasicTable";
import { Tickets_Columns } from "../../data/TableColumns";

const Container = styled.div``;

const AllTickets = () => {
  // Retrieving State
  const users = useSelector((state) => state.users.Users);
  const projects = useSelector((state) => state.projects.Projects);

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
    const projectsArray = Object.values(projects);
    let formattedData = [];

    projectsArray.map((project) =>
      Object.values(project.tickets).map((ticket) =>
        formattedData.push({
          project_id: project.project_id,
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
  }, [users, projects]);

  return (
    <Container>
      <Navigation headerText={"All Tickets"} />
      <BasicTable
        COLUMNS={Tickets_Columns}
        DATA={tableData}
        defaultSortBy={defaultSortBy}
      />
    </Container>
  );
};

export default AllTickets;
