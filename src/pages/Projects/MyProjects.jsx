import React, { useState, useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Navigation from "../../components/Navigation/Navigation";
import BasicTable from "../../components/Tables/BasicTable";
import { Projects_Columns } from "../../data/TableColumns";

const Container = styled.div``;

const MyProjects = () => {
  const userID = "user_02";

  // Retrieving State
  const users = useSelector((state) => state.users.Users);
  const projects = useSelector((state) => state.projects.Projects);
  const projectUsers = useSelector((state) => state.projectUsers.ProjectUsers);

  const [tableData, setTableData] = useState([]);

  const defaultSortBy = useMemo(
    () => [
      {
        id: "project_name",
        desc: false,
      },
    ],
    []
  );

  // Assigning Specific Formatted Data from all State into an Array
  // Array to be displayed into the BasicTable component
  useEffect(() => {
    const projectUsersArray = projectUsers ? Object.values(projectUsers) : [];
    let formattedData = [];

    //Filter and map all Projects where current User is not a part of
    formattedData = projectUsersArray
      .filter(
        (project) =>
          project.project_manager_id === userID ||
          project.project_team_id.some((user) => user === userID)
      )
      .map((project) => ({
        project_id: project.project_id,
        project_name: projects[project.project_id]?.project_name,
        end_date: projects[project.project_id]?.end_date,
        progress: projects[project.project_id]?.progress,
        status: projects[project.project_id]?.status,
        project_manager: users[project.project_manager_id]?.user_name,
        team: project.project_team_id.map((user) => users[user]?.user_name),
        links: "link link link",
      }));

    // console.log("formattedData: ", formattedData);
    setTableData(formattedData);
  }, [users, projects, projectUsers]);

  return (
    <Container>
      <Navigation headerText={"My Projects"} />
      <BasicTable
        COLUMNS={Projects_Columns}
        DATA={tableData}
        defaultSortBy={defaultSortBy}
      />
    </Container>
  );
};

export default MyProjects;
