import React, { useState, useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Navigation from "../../components/Navigation/Navigation";
import BasicTable from "../../components/Tables/BasicTable";
import { Tickets_Columns } from "../../data/TableColumns";

const Container = styled.div``;

const ArchivedTickets = () => {
  // Retrieving State
  const users = useSelector((state) => state.users.Users);
  const projects = useSelector((state) => state.projects.Projects);
  const projectUsers = useSelector((state) => state.projectUsers.ProjectUsers);

  const [tableData, setTableData] = useState([]);

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
  useEffect(() => {
    const projectsArray = Object.values(projects);
    const formattedData = [];

    projectsArray.map((project) =>
      Object.values(project.archived_ticket).map((ticket) =>
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
            archive: {
              isArchived: true,
              type: "ticket",
              projectID: project.project_id,
              ticketID: ticket.ticket_id,
            },
          },
        })
      )
    );

    setTableData(formattedData);
  }, [users, projects, projectUsers]);

  return (
    <Container>
      <Navigation headerText={"Archived Tickets"} />
      <BasicTable
        COLUMNS={Tickets_Columns}
        DATA={tableData}
        defaultSortBy={defaultSortBy}
      />
    </Container>
  );
};

export default ArchivedTickets;
