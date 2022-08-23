import React from "react";
import styled from "styled-components";
import BlockTypeData from "../../components/Blocks/Block_TypeData";

const Container = styled.div``;

const Styles = {
  EntryFlex: ["3", "2", "2", "2"],
  EntryItem: { padding: "10px 0" },
  ShowOptions: true,
};

const HeaderText = {
  mainText: "Ticket History",
  subText: "All History Information for this Ticket",
};
const ListCategories = ["Property", "Old Value", "New Value", "Date Changed"];

const TicketHistory = ({ ticketHistory }) => {
  return (
    <Container>
      {/* <div>Add a Comment</div> */}
      <BlockTypeData
        Styles={Styles}
        HeaderText={HeaderText}
        ListCategories={ListCategories}
        ListData={ticketHistory}
        Links={null}
      />
    </Container>
  );
};

export default TicketHistory;
