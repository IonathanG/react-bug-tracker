import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import ProjectDetailsCard from "../../components/Cards/ProjectDetails_TagCard";
import ProjectInfoCard from "../../components/Cards/ProjectDetails_InfoCard";
import Navigation from "../../components/Navigation/Navigation";
import BasicTable from "../../components/Tables/BasicTable";
import { TicketsDashboard_Columns } from "../../data/TableColumns";
import ProjectDetailsTagCard from "../../components/Cards/ProjectDetails_TagCard";

const Container = styled.div``;

const ProjectDetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
`;

const LeftPannel = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const TableContainer = styled.div`
  flex: 2;
  overflow-y: scroll;
`;

const ProjectDetails = () => {
  const { id } = useParams();
  console.log(id);

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
    const projectTicketList = projects[id]?.tickets;
    const formattedData = [];

    if (projectTicketList) {
      Object.values(projectTicketList)?.map((ticket) =>
        formattedData.push({
          ticket_id: ticket.ticket_id,
          ticket_title: ticket.ticket_name,
          developer: users[ticket.assigned_to]?.user_name,
          status: ticket.status,
          priority: ticket.priority,
          date: ticket.created_date,
          links: "link link link",
        })
      );
    }

    return formattedData;
  }, [users, projects, id]);

  return (
    <Container>
      <Navigation headerText={"Details"} />

      <ProjectDetailsContainer>
        <LeftPannel>
          <ProjectInfoCard project={projects[id]} />
          <ProjectDetailsCard project={projects[id]} />
          <ProjectDetailsTagCard projectID={id} />
        </LeftPannel>

        <TableContainer>
          <BasicTable
            COLUMNS={TicketsDashboard_Columns}
            DATA={tableData}
            defaultSortBy={defaultSortBy}
            tableTitle={"Tickets"}
          />
        </TableContainer>
      </ProjectDetailsContainer>
    </Container>
  );
};

export default ProjectDetails;
