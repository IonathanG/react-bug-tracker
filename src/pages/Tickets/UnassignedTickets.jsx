import React, { useState, useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import BasicTable from "../../components/Tables/BasicTable";
import { Tickets_Columns } from "../../data/TableColumns";

const Container = styled.div``;

const Header = styled.header`
  margin-bottom: 20px;
`;

const UnassignedTickets = () => {
  // Retrieving State
  const users = useSelector((state) => state.users.Users);
  const projects = useSelector((state) => state.projects.Projects);
  const projectUsers = useSelector((state) => state.projectUsers.ProjectUsers);

  const [tableData, setTableData] = useState([]);
  console.log(tableData);

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
      Object.values(project.tickets).map((ticket) =>
        formattedData.push({
          ticket_id: ticket.ticket_id,
          title: ticket.ticket_name,
          assigned_by: ticket.assigned_by,
          assigned_to: ticket.assigned_to,
          status: ticket.status,
          priority: ticket.priority,
          date: ticket.created_date,
          links: "link link link",
        })
      )
    );

    console.log(formattedData);
    setTableData(formattedData);
  }, [users, projects, projectUsers]);

  return (
    <Container>
      <Header>Unassigned Tickets</Header>
      <BasicTable
        COLUMNS={Tickets_Columns}
        DATA={[]}
        defaultSortBy={defaultSortBy}
      />
    </Container>
  );
};

export default UnassignedTickets;