import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import BasicTable from "../../components/Tables/BasicTable";
import { ProjectsDashboard_Columns } from "../../data/TableColumns";

const Container = styled.div`
  flex: 3;
  overflow-x: scroll;
`;

const ProjectsDashboard = () => {
  // Retrieving State
  const users = useSelector((state) => state.users.Users);
  const projects = useSelector((state) => state.projects.Projects);
  const projectUsers = useSelector((state) => state.projectUsers.ProjectUsers);

  // const [tableData, setTableData] = useState([]);

  const defaultSortBy = useMemo(
    () => [
      {
        id: "project_info",
        desc: false,
      },
    ],
    []
  );

  // Pushing Specific Formatted Data from all State into an Array
  // Array to be displayed into the BasicTable component
  const tableData = useMemo(() => {
    const projectsArray = projects ? Object.values(projects) : [];
    const formattedData = [];

    // Fetching all user avatars info from the project => Manager + Devs
    const fetchTeam = (project_id) => {
      let team = [];
      team.push(
        users[projectUsers[project_id]?.project_manager_id]?.user_avatar
      );
      projectUsers[project_id]?.project_team_id?.map((user) =>
        team.push(users[user]?.user_avatar)
      );
      return team;
    };

    projectsArray.map((project) =>
      formattedData.push({
        project_id: project.project_id,
        project_info: {
          project_name: project.project_name,
          project_manager_name:
            users[projectUsers[project.project_id]?.project_manager_id]
              ?.user_name,
        },
        start_date: project.start_date,
        end_date: project.end_date,
        ticket_count: Object.keys(project.tickets).length,
        team: fetchTeam(project.project_id),
      })
    );
    return formattedData;
  }, [users, projects, projectUsers]);

  return (
    <Container>
      <BasicTable
        COLUMNS={ProjectsDashboard_Columns}
        DATA={tableData}
        defaultSortBy={defaultSortBy}
        tableTitle={"Projects"}
      />
    </Container>
  );
};

export default ProjectsDashboard;
