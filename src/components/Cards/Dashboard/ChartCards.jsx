import React from "react";
import styled from "styled-components";
import useChartsData from "../../../hooks/useChartsData";
import CompanyInfoCard from "./_CompanyInfoCard";
import GeneralInfoCard from "./_GeneralInfoCard";
import ProjectPriorityCard from "./_ProjectPriorityCard";
import ProjectRoleCard from "./_ProjectRoleCard";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const CardsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  justify-content: space-between;
  grid-gap: 40px;
`;

const CardData = styled.div`
  height: 120px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.background_Block};
  box-shadow: ${({ theme }) => theme.boxShadow_Block};
  color: ${({ theme }) => theme.color_Charts};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;

  span:nth-child(1) {
    font-weight: 700;
    font-size: 22px;
  }
  span:nth-child(2) {
    font-size: 16px;
    letter-spacing: 0.3px;
  }
`;

const ChartCards = () => {
  const [
    projectCount,
    ticketCount,
    unassignedTickerCount,
    assignTicketCount,
    userCount,
    ticketDevelopment,
    devCount,
    projectPriorities,
    roleDataCount,
  ] = useChartsData();

  return (
    <Container>
      <CardsContainer>
        <CardData style={{ backgroundColor: "rgba(22,162,184,255)" }}>
          <span>{projectCount}</span>
          <span>Active Projects</span>
        </CardData>
        <CardData style={{ backgroundColor: "rgba(109,117,125,255)" }}>
          <span>{ticketCount}</span>
          <span>Total Tickets</span>
        </CardData>
        <CardData style={{ backgroundColor: "rgba(254,192,9,255)" }}>
          <span>{unassignedTickerCount}</span>
          <span>Unassigned Tickets</span>
        </CardData>
        <CardData style={{ backgroundColor: "rgba(52,58,64,255)" }}>
          <span>{assignTicketCount}</span>
          <span>Assigned Tickets</span>
        </CardData>
      </CardsContainer>

      <CardsContainer>
        <GeneralInfoCard
          userCount={userCount}
          ticketDevelopment={ticketDevelopment}
          devCount={devCount}
        />
        <CompanyInfoCard
          userCount={userCount}
          projectCount={projectCount}
          ticketCount={ticketCount}
        />
        <ProjectPriorityCard
          projectCount={projectCount}
          projectPriorities={projectPriorities}
        />
        <ProjectRoleCard
          projectCount={projectCount}
          roleDataCount={roleDataCount}
        />
      </CardsContainer>
    </Container>
  );
};

export default ChartCards;
