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

const TicketsContainer = styled(Block)`
  width: 100%;
  margin-top: 50px;
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
    flex: 3;
  }
  li:nth-child(4) {
    flex: 2;
  }
  li:nth-child(5) {
    flex: 2;
  }
  li:nth-child(6) {
    flex: 2;
  }
  li:nth-child(7) {
    flex: 3;
  }
  li:nth-child(8) {
    flex: 1;
  }
`;
const EntryTitle = styled(Block_EntryTitle)``;
const EntryItem = styled(Block_EntryItem)`
  padding: 12px 0;
  font-size: 13px;
`;

const TicketsList = ({ ticketsList }) => {
  return (
    <TicketsContainer>
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
          <EntryTitle>Title</EntryTitle>
          <EntryTitle>Project Name</EntryTitle>
          <EntryTitle>Developer Assigned</EntryTitle>
          <EntryTitle>Ticket Priority</EntryTitle>
          <EntryTitle>Ticket Status</EntryTitle>
          <EntryTitle>Ticket Type</EntryTitle>
          <EntryTitle>Created</EntryTitle>
          <EntryTitle>/</EntryTitle>
        </EntryFlexList>

        {/* ----- Data ----- */}
        {ticketsList.map((item) => (
          <EntryFlexList key={item.id}>
            <EntryItem>{item.title}</EntryItem>
            <EntryItem>{item.project_name}</EntryItem>
            <EntryItem>{item.developer_assigned}</EntryItem>
            <EntryItem>{item.priority}</EntryItem>
            <EntryItem>{item.status}</EntryItem>
            <EntryItem>{item.type}</EntryItem>
            <EntryItem>{item.created}</EntryItem>
            <EntryItem>{item.id}</EntryItem>
          </EntryFlexList>
        ))}
      </EntriesContainer>
    </TicketsContainer>
  );
};

export default TicketsList;
