import React from "react";
import styled from "styled-components";
import { device } from "../../shared/breakpoints";
import {
  Block,
  Block_Header,
  Block_Options,
  Block_EntriesContainer,
  Block_EntryFlexList,
  Block_EntryTitle,
  Block_EntryItem,
} from "../Shared/Block";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

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
    flex: 2;
  }
`;
const EntryTitle = styled(Block_EntryTitle)`
  font-size: 12px;

  @media ${device.phone} {
    font-size: 13px;
  }
  @media ${device.tablet} {
    font-size: 14px;
  }
`;
const EntryItem = styled(Block_EntryItem)`
  padding: 8px 0;
  font-size: 12px;

  @media ${device.tablet} {
    font-size: 13px;
  }
`;

const TicketsList = ({ ticketsList }) => {
  return (
    <TicketsContainer>
      {/* ----- Header ----- */}
      <Header>
        <span>Your Tickets</span>
        <span>All the tickets in your database</span>
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
          <EntryTitle>|</EntryTitle>
        </EntryFlexList>

        {/* ----- Data ----- */}
        {ticketsList.map((item) => (
          <EntryFlexList key={item.id}>
            <EntryItem>
              <span>{item.title}</span>
            </EntryItem>
            <EntryItem>
              <span>{item.project_name}</span>
            </EntryItem>
            <EntryItem>
              <span>{item.developer_assigned}</span>
            </EntryItem>
            <EntryItem>
              <span>{item.priority}</span>
            </EntryItem>
            <EntryItem>
              <span>{item.status}</span>
            </EntryItem>
            <EntryItem>
              <span>{item.type}</span>
            </EntryItem>
            <EntryItem>
              <span>{item.created}</span>
            </EntryItem>
            <EntryItem>
              <div className="links">
                <span>
                  Edit/Assign
                  <KeyboardArrowRightIcon />
                </span>
                <span>
                  Details
                  <KeyboardArrowRightIcon />
                </span>
              </div>
            </EntryItem>
          </EntryFlexList>
        ))}
      </EntriesContainer>
    </TicketsContainer>
  );
};

export default TicketsList;
