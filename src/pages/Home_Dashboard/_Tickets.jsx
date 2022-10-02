import React, { useState, useEffect, useMemo } from "react";
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
  const projectUsers = useSelector((state) => state.projectUsers.ProjectUsers);

  const [tableData, setTableData] = useState([]);

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

  useEffect(() => {
    const projectsArray = projects ? Object.values(projects) : [];
    const formattedData = [];

    projectsArray.map((project) =>
      Object.values(project.tickets).map((ticket) =>
        formattedData.push({
          ticket_id: ticket.ticket_id,
          ticket_title: ticket.ticket_name,
          developer: ticket.assigned_to,
          status: ticket.status,
          priority: ticket.priority,
          date: ticket.created_date,
          links: "link link link",
        })
      )
    );

    setTableData(formattedData);
  }, [users, projects, projectUsers]);

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
