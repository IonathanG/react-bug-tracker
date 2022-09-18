import React, { useState, useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import BasicTable from "../../components/Tables/BasicTable";
import { MembersDashboard_Columns } from "../../data/TableColumns";

const Container = styled.div`
  flex: 2;
  overflow-x: scroll;
`;

const MembersDashboard = () => {
  // Retrieving State
  const users = useSelector((state) => state.users.Users);
  const projectsUsers = useSelector(
    (state) => state.projectsUsers.ProjectsUsers
  );

  const [tableData, setTableData] = useState([]);

  const defaultSortBy = useMemo(
    () => [
      {
        id: "name",
        desc: false,
      },
    ],
    []
  );

  // Pushing Specific Formatted Data from all State into an Array
  // Array to be displayed into the BasicTable component
  useEffect(() => {
    const usersArray = Object.values(users);
    const projectsUsersArray = Object.values(projectsUsers);
    const formattedData = [];

    // Counting the number of projects per User
    const CountProjects = (id) => {
      let count = 0;

      projectsUsersArray.forEach((projectUser) => {
        if (projectUser.project_manager_id === id) {
          count++;
        } else {
          if (projectUser.project_team_id.includes(id)) {
            count++;
          }
        }
      });
      return count;
    };

    usersArray.map((user) =>
      formattedData.push({
        user_id: user.user_id,
        avatar: user.user_avatar,
        name: user.user_name,
        role: user.user_role,
        projects_count: CountProjects(user.user_id),
      })
    );

    setTableData(formattedData);
  }, [users, projectsUsers]);

  return (
    <Container>
      <BasicTable
        COLUMNS={MembersDashboard_Columns}
        DATA={tableData}
        defaultSortBy={defaultSortBy}
        tableTitle={"Members"}
      />
    </Container>
  );
};

export default MembersDashboard;
