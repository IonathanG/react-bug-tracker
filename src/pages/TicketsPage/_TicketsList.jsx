import React from "react";
import styled from "styled-components";
import BlockTypeData from "../../components/Blocks/Block_TypeData";

const TicketsContainer = styled.div`
  margin-top: 50px;
`;

const Styles = {
  EntryFlex: ["2", "3", "3", "2", "2", "2", "3", "2"],
  EntryTitle: { fontSize: "12px" },
  EntryItem: { padding: "2px 0", fontSize: "12px" },
  ShowOptions: true,
};

const HeaderText = {
  mainText: "Your Tickets",
  subText: "All the tickets in your database",
};
const ListCategories = [
  "Title",
  "Project Name",
  "Assigned To",
  "Priority",
  "Status",
  "Type",
  "Created",
  "",
];

const Links = [
  { title: "Edit/Assign", route: "ticket" },
  { title: "Details", route: "ticket" },
];

const TicketsList = ({ ticketsList }) => {
  return (
    <TicketsContainer>
      <BlockTypeData
        Styles={Styles}
        HeaderText={HeaderText}
        ListCategories={ListCategories}
        ListData={ticketsList}
        Links={Links}
      />
    </TicketsContainer>
  );
};

export default TicketsList;
