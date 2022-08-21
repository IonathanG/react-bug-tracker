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

const ProjectsContainer = styled(Block)`
  width: 100%;
  margin-top: 0px;
`;

const Header = styled(Block_Header)``;
const Options = styled(Block_Options)``;

const EntriesContainer = styled(Block_EntriesContainer)``;
const EntryFlexList = styled(Block_EntryFlexList)`
  li:nth-child(1) {
    flex: 2;
  }
  li:nth-child(2) {
    flex: 4;
  }
  li:nth-child(3) {
    flex: 2;
  }
`;
const EntryTitle = styled(Block_EntryTitle)``;
const EntryItem = styled(Block_EntryItem)`
  padding: 4px 0;
  font-size: 14px;
`;

const UserAssigned = ({ users }) => {
  return (
    <ProjectsContainer>
      {/* ----- Header ----- */}
      <Header>
        <span>Assigned Personel</span>
        <span>Current Users on this Project</span>
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
        {users.map((item, index) => (
          <EntryFlexList key={index}>
            <EntryItem>
              <span>{item.user_name}</span>
            </EntryItem>
            <EntryItem>
              <span>{item.email}</span>
            </EntryItem>
            <EntryItem>
              <span>{item.role}</span>
            </EntryItem>
          </EntryFlexList>
        ))}
      </EntriesContainer>
    </ProjectsContainer>
  );
};

export default UserAssigned;
