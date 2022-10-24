import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import BasicTable from "../../components/Tables/BasicTable";
import { TicketsDashboard_Columns } from "../../data/TableColumns";

const Container = styled.div`
  overflow-x: scroll;
`;

const TicketsDashboard = () => {
  // Retrieving State
  const users = useSelector((state) => state.users.Users);
  const projects = useSelector((state) => state.projects.Projects);

  const defaultSortBy = useMemo(
    () => [
      {
        id: "ticket_title",
        desc: false,
      },
    ],
    []
  );

  // Pushing Specific Formatted Data from all State into an Array
  // Array to be displayed into the BasicTable component
  const tableData = useMemo(() => {
    const projectsArray = projects ? Object.values(projects) : [];
    const formattedData = [];

    projectsArray.map((project) =>
      Object.values(project.tickets).map((ticket) =>
        formattedData.push({
          project_id: project.project_id,
          ticket_id: ticket.ticket_id,
          ticket_title: ticket.ticket_name,
          developer: users[ticket.assigned_to]?.user_name,
          status: ticket.status,
          priority: ticket.priority,
          date: ticket.created_date,
          links: {
            view: `/Tickets/TicketDetails/${project.project_id}/${ticket.ticket_id}`,
            edit: `/Tickets/EditTicket/${project.project_id}/${ticket.ticket_id}`,
            archive: {
              isArchived: false,
              type: "ticket",
              projectID: project.project_id,
              ticketID: ticket.ticket_id,
            },
          },
        })
      )
    );
    return formattedData;
  }, [users, projects]);

  return (
    <Container>
      <BasicTable
        COLUMNS={TicketsDashboard_Columns}
        DATA={tableData}
        defaultSortBy={defaultSortBy}
        tableTitle={"Tickets"}
      />
    </Container>
  );
};

export default TicketsDashboard;
