import React, { useState, useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Navigation from "../../components/Navigation/Navigation";
import BasicTable from "../../components/Tables/BasicTable";
import { Projects_Columns } from "../../data/TableColumns";

const Container = styled.div``;

const ArchivedProjects = () => {
  // Retrieving State
  const users = useSelector((state) => state.users.Users);
  const projects = useSelector((state) => state.projects.Projects);
  const projectUsers = useSelector((state) => state.projectUsers.ProjectUsers);

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
    const projectsArray = projects ? Object.values(projects) : [];
    const formattedData = [];

    projectsArray.map((project) =>
      formattedData.push({
        project_id: project.project_id,
        project_name: project.project_name,
        end_date: project.end_date,
        progress: project.progress,
        status: project.status,
        project_manager: {
          project_manager_name:
            users[projectUsers[project.project_id]?.project_manager_id]
              ?.user_name,
          project_manager_avatar:
            users[projectUsers[project.project_id]?.project_manager_id]
              ?.user_avatar,
        },
        team: projectUsers[project.project_id]?.project_team_id.map(
          (user) => users[user]?.user_avatar
        ),
        links: {
          view: `/Projects/ProjectDetails/${project.project_id}`,
          edit: `/Projects/EditProject/${project.project_id}`,
          archive: {
            isArchived: true,
            type: "project",
            projectID: project.project_id,
          },
        },
      })
    );

    console.log(formattedData);
    setTableData(formattedData);
  }, [users, projects, projectUsers]);

  return (
    <Container>
      <Navigation headerText={"Archived Projects"} />
      <BasicTable
        COLUMNS={Projects_Columns}
        DATA={tableData}
        defaultSortBy={defaultSortBy}
      />
    </Container>
  );
};

export default ArchivedProjects;
