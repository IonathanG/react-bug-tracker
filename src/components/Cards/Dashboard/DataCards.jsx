import React from "react";
import styled from "styled-components";
import useChartsData from "../../../hooks/useChartsData";

const CardsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  justify-content: space-between;
  grid-gap: 40px;
`;

const Card = styled.div`
  height: 120px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.background_Block};
  box-shadow: ${({ theme }) => theme.boxShadow_Block};
  color: ${({ theme }) => theme.background_Block};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;

  span:nth-child(1) {
    font-weight: 700;
    font-size: 23px;
  }
  span:nth-child(2) {
    font-size: 16px;
    letter-spacing: 0.3px;
  }
`;

const DataCards = () => {
  const [projectCount, ticketCount, unassignedTickerCount, assignTicketCount] =
    useChartsData();

  return (
    <CardsContainer>
      <Card style={{ backgroundColor: "rgba(22,162,184,255)" }}>
        <span>{projectCount}</span>
        <span>Active Projects</span>
      </Card>
      <Card style={{ backgroundColor: "rgba(109,117,125,255)" }}>
        <span>{ticketCount}</span>
        <span>Total Tickets</span>
      </Card>
      <Card style={{ backgroundColor: "rgba(254,192,9,255)" }}>
        <span>{unassignedTickerCount}</span>
        <span>Unassigned Tickets</span>
      </Card>
      <Card style={{ backgroundColor: "rgba(52,58,64,255)" }}>
        <span>{assignTicketCount}</span>
        <span>Assigned Tickets</span>
      </Card>
    </CardsContainer>
  );
};

export default DataCards;
