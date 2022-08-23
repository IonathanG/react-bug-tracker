import React from "react";
import styled from "styled-components";
import BlockTypeData from "../../components/Blocks/Block_TypeData";

const UserListContainer = styled.div`
  flex: 3;
  margin-top: 50px;
`;

const Styles = {
  EntryFlex: ["1", "2", "1"],
  EntryItem: { padding: "10px 0" },
  ShowOptions: true,
};

const HeaderText = {
  mainText: "Ticket Comments",
  subText: "All comments for this Ticket",
};
const ListCategories = ["Commenter", "Message", "Created"];

const TicketComments = ({ ticketComments }) => {
  return (
    <UserListContainer>
      {/* <div>Add a Comment</div> */}
      <BlockTypeData
        Styles={Styles}
        HeaderText={HeaderText}
        ListCategories={ListCategories}
        ListData={ticketComments}
        Links={null}
      />
    </UserListContainer>
  );
};

export default TicketComments;
