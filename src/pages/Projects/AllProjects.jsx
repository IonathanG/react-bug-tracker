import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import BasicTable from "../../components/Tables/BasicTable";
import { AllProjects_Columns } from "../../data/TableColumns";
import MOCK_DATA from "../../data/MOCK_DATA.json";

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

  const formatTableData = () => {
    console.log("Table Data Formatted");
  };

  useEffect(() => {
    const usersArray = Object.values(users);
    const projectsArray = Object.values(projects);
    const projectsUsersArray = Object.values(projectsUsers);

    console.log(usersArray);
    console.log(projectsArray);
    console.log(projectsUsersArray);

    formatTableData();
  }, [users, projects, projectsUsers]);

  return (
    <Container>
      <Header>All Projects</Header>
      <BasicTable COLUMNS={AllProjects_Columns} MOCK_DATA={MOCK_DATA} />
    </Container>
  );
};

export default AllProjects;
