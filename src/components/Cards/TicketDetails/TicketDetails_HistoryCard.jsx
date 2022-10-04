import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 20px;

  border-radius: 5px;
  background-color: ${({ theme }) => theme.background_Block};
  box-shadow: ${({ theme }) => theme.boxShadow_Block};
`;

const Title = styled.div`
  font-size: 16px;
  font-weight: 500;
  line-height: 38px;
`;

const TicketDetailsHistoryCard = ({ history = null }) => {
  return (
    <CardContainer>
      <Title>Ticket History</Title>
    </CardContainer>
  );
};

export default TicketDetailsHistoryCard;
