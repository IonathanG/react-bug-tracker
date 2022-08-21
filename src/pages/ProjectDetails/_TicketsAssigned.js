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
    flex: 3;
  }
  li:nth-child(3) {
    flex: 2;
  }
  li:nth-child(4) {
    flex: 2;
  }
  li:nth-child(5) {
    flex: 2;
  }
  li:nth-child(6) {
    flex: 1;
  }
`;
const EntryTitle = styled(Block_EntryTitle)``;
const EntryItem = styled(Block_EntryItem)`
  padding: 4px 0;
  font-size: 14px;
`;

const TicketsAssigned = ({ tickets }) => {
  return (
    <ProjectsContainer>
      {/* ----- Header ----- */}
      <Header>
        <span>Tickets for this Project</span>
        <span>Condensed Ticket Details</span>
      </Header>

      {/* ----- Options ----- */}
      <Options>
        <div>Show X entries</div>
        <div>Search</div>
      </Options>

      <EntriesContainer>
        {/* ----- Titles ----- */}
        <EntryFlexList>
          <EntryTitle>Title</EntryTitle>
          <EntryTitle>Submitter</EntryTitle>
          <EntryTitle>Developer</EntryTitle>
          <EntryTitle>Status</EntryTitle>
          <EntryTitle>Created</EntryTitle>
          <EntryTitle>|</EntryTitle>
        </EntryFlexList>

        {/* ----- Data ----- */}
        {tickets.map((item, index) => (
          <EntryFlexList key={index}>
            <EntryItem>
              <span>{item.title}</span>
            </EntryItem>
            <EntryItem>
              <span>{item.submitter}</span>
            </EntryItem>
            <EntryItem>
              <span>{item.developer}</span>
            </EntryItem>
            <EntryItem>
              <span>{item.status}</span>
            </EntryItem>
            <EntryItem>
              <span>{item.created}</span>
            </EntryItem>
            <EntryItem>
              <span>{index}</span>
            </EntryItem>
          </EntryFlexList>
        ))}
      </EntriesContainer>
    </ProjectsContainer>
  );
};

export default TicketsAssigned;
