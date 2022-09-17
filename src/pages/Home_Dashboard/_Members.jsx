import React, { useState, useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import BasicTable from "../../components/Tables/BasicTable";
import { MembersDashboard_Columns } from "../../data/TableColumns";

const Container = styled.div`
  flex: 2;
  overflow-x: scroll;
`;

// const Header = styled.header`
//   margin-bottom: 20px;
// `;

const MembersDashboard = () => {
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
        id: "project_name",
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
        avatar: project.project_id,
        name: project.project_name,
        projects_count: project.end_date,
        role: project.progress,
      })
    );

    console.log(formattedData);
    setTableData(formattedData);
  }, [users, projects, projectsUsers]);

  return (
    <Container>
      <BasicTable
        COLUMNS={MembersDashboard_Columns}
        DATA={[]}
        defaultSortBy={defaultSortBy}
        tableTitle={"Members"}
      />
    </Container>
  );
};

export default MembersDashboard;
