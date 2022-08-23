import React from "react";
import styled from "styled-components";
import BlockTypeData from "../../components/Blocks/Block_TypeData";

const Container = styled.div``;

const Styles = {
  EntryFlex: ["2", "2", "2", "2"],
  EntryItem: { padding: "10px 0" },
  ShowOptions: true,
};

const HeaderText = {
  mainText: "Ticket Attachments",
  subText: "All files attached to this Ticket",
};
const ListCategories = ["File", "Uploader", "Notes", "Created"];

const TicketAttachments = ({ ticketAttachments }) => {
  return (
    <Container>
      {/* <div>Add a Comment</div> */}
      <BlockTypeData
        Styles={Styles}
        HeaderText={HeaderText}
        ListCategories={ListCategories}
        ListData={ticketAttachments}
        Links={null}
      />
    </Container>
  );
};

export default TicketAttachments;
