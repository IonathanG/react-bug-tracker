import React from "react";
import styled from "styled-components";

const CardsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  justify-content: space-between;
  grid-gap: 40px;
`;

const Card = styled.div`
  height: 130px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.background_Block};
  box-shadow: ${({ theme }) => theme.boxShadow_Block};
  color: ${({ theme }) => theme.background_Block};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  span:nth-child(1) {
    font-weight: 700;
    font-size: 20px;
  }
`;

const DataCards = () => {
  return (
    <CardsContainer>
      <Card style={{ backgroundColor: "rgba(22,162,184,255)" }}>
        <span>{5}</span>
        <span>Active Projects</span>
      </Card>
      <Card style={{ backgroundColor: "rgba(109,117,125,255)" }}>
        <span>{25}</span>
        <span>Total Tickets</span>
      </Card>
      <Card style={{ backgroundColor: "rgba(254,192,9,255)" }}>
        <span>{15}</span>
        <span>Unassigned Tickets</span>
      </Card>
      <Card style={{ backgroundColor: "rgba(52,58,64,255)" }}>
        <span>{10}</span>
        <span>Assigned Tickets</span>
      </Card>
    </CardsContainer>
  );
};

export default DataCards;
