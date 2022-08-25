import React from "react";
import styled from "styled-components";
import { device } from "../../shared/breakpoints";
import { SectionContent } from "../../shared/Section";
import AssignRole from "./_AssignRole";
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

const RoleList = [
  { value: "none", label: "None (Awaiting Assignement)" },
  { value: "admin", label: "Admin" },
  { value: "project_manager", label: "Project Manager" },
  { value: "developer", label: "Developer" },
  { value: "submitter", label: "Submitter" },
];

const ManageRoles = () => {
  return (
    <SectionContent>
      <h1>Manage User Roles</h1>
      <UserRolesContainer>
        <AssignRole roleList={RoleList} />
        <UserList />
      </UserRolesContainer>
    </SectionContent>
  );
};

export default ManageRoles;
