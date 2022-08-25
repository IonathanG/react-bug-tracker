import React from "react";
import styled from "styled-components";
import { device } from "../../shared/breakpoints";
import { SectionContent } from "../../shared/Section";
import { ProjectList as projectList } from "../../data/Data_ProjectList";
import AssignProject from "./_AssignProject";
import UserList from "../../components/UserList/UserList";

const UserRolesContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 65px;
  transition: 0.3s ease;

  @media ${device.tablet} {
    flex-direction: row;
    gap: 0px;
  }
`;

const ManageProjects = () => {
  return (
    <SectionContent>
      <h1>Manage Project Users</h1>
      <UserRolesContainer>
        <AssignProject projectList={projectList} />
        <UserList />
      </UserRolesContainer>
    </SectionContent>
  );
};

export default ManageProjects;
