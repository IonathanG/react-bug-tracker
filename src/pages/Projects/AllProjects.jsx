import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import BasicTable from "../../components/Tables/BasicTable";
import { AllProjects_Columns } from "../../data/TableColumns";

const Container = styled.div``;

const Header = styled.header`
  margin-bottom: 20px;
`;

const AllProjects = () => {
  const users = useSelector((state) => state.users.Users);
  const projects = useSelector((state) => state.projects.Projects);
  const projectsUsers = useSelector(
    (state) => state.projectsUsers.ProjectsUsers
  );

  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    const projectsArray = Object.values(projects);
    const dataArray = [];

    projectsArray.map((project) =>
      dataArray.push({
        project_id: project.project_id,
        project_name: project.project_name,
        end_date: project.end_date,
        progress: project.progress,
        status: project.status,
        project_manager:
          users[projectsUsers[project.project_id].project_manager_id].user_name,
        team: projectsUsers[project.project_id].project_team.map(
          (user) => users[user].user_name + " "
        ),
        links: "link link link",
      })
    );

    console.log(dataArray);
    setTableData(dataArray);
  }, [users, projects, projectsUsers]);

  return (
    <Container>
      <Header>All Projects</Header>
      <BasicTable COLUMNS={AllProjects_Columns} DATA={tableData} />
    </Container>
  );
};

export default AllProjects;
