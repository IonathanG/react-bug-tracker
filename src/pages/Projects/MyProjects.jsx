import React, { useState, useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import BasicTable from "../../components/Tables/BasicTable";
import { Projects_Columns } from "../../data/TableColumns";

const Container = styled.div``;

const Header = styled.header`
  margin-bottom: 20px;
`;

const MyProjects = () => {
  // Retrieving State
  const users = useSelector((state) => state.users.Users);
  const projects = useSelector((state) => state.projects.Projects);
  const projectsUsers = useSelector(
    (state) => state.projectsUsers.ProjectsUsers
  );

  const [tableData, setTableData] = useState([]);
  console.log(tableData);

  const defaultSortBy = useMemo(
    () => [
      {
        id: "assigned_by",
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
      formattedData.push({
        project_id: project.project_id,
        project_name: project.project_name,
        end_date: project.end_date,
        progress: project.progress,
        status: project.status,
        project_manager:
          users[projectsUsers[project.project_id].project_manager_id].user_name,
        team: projectsUsers[project.project_id].project_team.map(
          (user) => users[user].user_name
        ),
        links: "link link link",
      })
    );

    console.log(formattedData);
    setTableData(formattedData);
  }, [users, projects, projectsUsers]);

  return (
    <Container>
      <Header>My Projects</Header>
      <BasicTable
        COLUMNS={Projects_Columns}
        DATA={[]}
        defaultSortBy={defaultSortBy}
      />
    </Container>
  );
};

export default MyProjects;
