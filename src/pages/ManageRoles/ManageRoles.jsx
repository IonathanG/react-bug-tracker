import React from "react";
import styled from "styled-components";
import { device } from "../../shared/breakpoints";
import { SectionContent } from "../../shared/Section";
import AssignUser from "./_AssignUser";
import UserList from "./_UserList";
import { UserList as Data_UserList } from "../../data/Data_UserList";

const Title = styled.h1`
  margin-bottom: 45px;
  font-size: 22px;
  letter-spacing: 0.4px;
  //font-weight: 600;
`;

const UserRolesContainer = styled.div`
  //background-color: grey;
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

const ManageRoles = () => {
  return (
    <SectionContent>
      <Title>Manage User Roles</Title>
      <UserRolesContainer>
        <AssignUser userList={Data_UserList} />
        <UserList userList={Data_UserList} />
      </UserRolesContainer>
    </SectionContent>
  );
};

export default ManageRoles;
