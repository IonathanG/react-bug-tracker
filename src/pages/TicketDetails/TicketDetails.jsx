import React from "react";
import { useParams } from "react-router-dom";
import TicketInfo from "./_TicketInfo";
import TicketComments from "./_TicketComments";
import TicketHistory from "./_TicketHistory";
import TicketAttachments from "./_TicketAttachments";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: beige;
`;

const BlocksContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  gap: 15px;
  //background-color: aqua;
  div:nth-child(1),
  div:nth-child(2) {
    flex: 1;
  }
`;

const TicketDetails = () => {
  const { id } = useParams();
  console.log(id);

  const ticketData = {
    comments: [
      {
        commenter: "Tromso One",
        message: "Keep it up",
        created: "21/08/22 11:11:11PM",
      },
    ],
    history: [
      {
        title: "Ticket title 1",
        submitter: "TromsoSeven",
        developer: "TromsoOne",
        status: "Open",
        created: "21/08/22 11:11:11PM",
      },
    ],
    attachments: [
      { user_name: "Tromso One", email: "tromso_1@tromso.com", role: "Admin" },
    ],
  };

  return (
    <Container>
      <BlocksContainer>
        <TicketInfo />
        <TicketComments ticketComments={ticketData.comments} />
      </BlocksContainer>

      <BlocksContainer>
        <TicketHistory ticketHistory={ticketData.history} />
        <TicketAttachments ticketAttachments={ticketData.attachments} />
      </BlocksContainer>
    </Container>
  );
};

export default TicketDetails;
