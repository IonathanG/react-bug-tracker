import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Navigation from "../../components/Navigation/Navigation";
import BasicTable from "../../components/Tables/BasicTable";
import { Projects_Columns } from "../../data/TableColumns";

const Container = styled.div``;

const AllProjects = () => {
  // Retrieving State
  const users = useSelector((state) => state.users.Users);
  const projects = useSelector((state) => state.projects.Projects);
  const projectUsers = useSelector((state) => state.projectUsers.ProjectUsers);

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
  const tableData = useMemo(() => {
    const projectsArray = projects ? Object.values(projects) : [];
    let formattedData = [];

    formattedData = projectsArray.map((project) => ({
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
        (user) => users[user].user_avatar
      ),
      links: {
        view: `/Projects/ProjectDetails/${project.project_id}`,
        edit: `/Projects/EditProject/${project.project_id}`,
        archive: `/`,
      },
    }));
    return formattedData;
  }, [users, projects, projectUsers]);

  return (
    <Container>
      <Navigation headerText={"All Projects"} />
      <BasicTable
        COLUMNS={Projects_Columns}
        DATA={tableData}
        defaultSortBy={defaultSortBy}
      />
    </Container>
  );
};

export default AllProjects;
