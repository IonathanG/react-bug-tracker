import React from "react";
import styled from "styled-components";
import { device } from "../../shared/breakpoints";
import { SectionContent } from "../../shared/Section";
import AssignUser from "./_AssignUser";
import UserList from "./_UserList";

const Title = styled.h1`
  margin-bottom: 45px;
  font-size: 22px;
  letter-spacing: 0.4px;
  //font-weight: 600;
`;

const UserRolesContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  //background-color: grey;

  @media ${device.phone} {
    flex-direction: row;
  }
`;

const ManageRoles = () => {
  return (
    <SectionContent>
      <Title>Manage User Roles</Title>
      <UserRolesContainer>
        <AssignUser />
        <UserList />
      </UserRolesContainer>
    </SectionContent>
  );
};

export default ManageRoles;
