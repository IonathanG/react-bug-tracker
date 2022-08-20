import React from "react";
import styled from "styled-components";
import {
  Block,
  Block_Header,
  Block_Options,
  Block_EntriesContainer,
  Block_EntryFlexList,
  Block_EntryTitle,
  Block_EntryItem,
} from "../Shared/Block";

const UserListContainer = styled(Block)`
  flex: 3;
  min-height: 100%;
  margin-top: 32px;
`;

const Header = styled(Block_Header)``;
const Options = styled(Block_Options)``;

const EntriesContainer = styled(Block_EntriesContainer)``;
const EntryFlexList = styled(Block_EntryFlexList)`
  li:nth-child(1),
  li:nth-child(3) {
    flex: 3;
  }
  li:nth-child(2) {
    flex: 5;
  }
`;
const EntryTitle = styled(Block_EntryTitle)``;
const EntryItem = styled(Block_EntryItem)`
  padding: 8px 0;
`;

const UserList = ({ userList }) => {
  return (
    <UserListContainer>
      {/* ----- Header ----- */}
      <Header>
        <span>Your Personnel</span>
        <span>All the users in your database</span>
      </Header>

      {/* ----- Options ----- */}
      <Options>
        <div>Show X entries</div>
        <div>Search</div>
      </Options>

      <EntriesContainer>
        {/* ----- Titles ----- */}
        <EntryFlexList>
          <EntryTitle>User Name</EntryTitle>
          <EntryTitle>Email</EntryTitle>
          <EntryTitle>Role</EntryTitle>
        </EntryFlexList>

        {/* ----- Data ----- */}
        {userList.map((item) => (
          <EntryFlexList key={item.id}>
            <EntryItem>{item.user_name}</EntryItem>
            <EntryItem>{item.email}</EntryItem>
            <EntryItem>{item.role}</EntryItem>
          </EntryFlexList>
        ))}
      </EntriesContainer>
    </UserListContainer>
  );
};

export default UserList;
