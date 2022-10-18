import React from "react";
import styled from "styled-components";
import GeneralInfoCard from "./_GeneralInfoCard";

const CardsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  justify-content: space-between;
  grid-gap: 40px;
`;

const Card = styled.div`
  height: 350px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.background_Block};
  box-shadow: ${({ theme }) => theme.boxShadow_Block};
  color: ${({ theme }) => theme.background_Block};
`;

const CompanyInfoCard = styled(Card)``;
const ProjectPriorityCard = styled(Card)``;
const ProjectRoleCard = styled(Card)``;

const ChartCards = () => {
  return (
    <CardsContainer>
      <GeneralInfoCard />
      <CompanyInfoCard></CompanyInfoCard>
      <ProjectPriorityCard></ProjectPriorityCard>
      <ProjectRoleCard></ProjectRoleCard>
    </CardsContainer>
  );
};

export default ChartCards;
