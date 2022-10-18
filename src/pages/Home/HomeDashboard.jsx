import React from "react";
import styled from "styled-components";
import ChartCards from "../../components/Cards/Dashboard/ChartCards";
import DataCards from "../../components/Cards/Dashboard/DataCards";
import Navigation from "../../components/Navigation/Navigation";
import MembersDashboard from "./_Members";
import ProjectsDashboard from "./_Projects";
import TicketsDashboard from "./_Tickets";

const Container = styled.div``;

const ChartsContainer = styled.div`
  margin: 30px 0px 35px 0px;

  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const TablesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const TopTablesContainer = styled.div`
  display: flex;
  gap: 25px;
  //overflow-x: hidden;
`;

const HomeDashboard = () => {
  return (
    <Container>
      {" "}
      <Navigation headerText={"Dashboard"} />
      <ChartsContainer>
        <DataCards />
        <ChartCards />
      </ChartsContainer>
      <TablesContainer>
        <TopTablesContainer>
          <MembersDashboard />
          <ProjectsDashboard />
        </TopTablesContainer>
        <TicketsDashboard />
      </TablesContainer>
    </Container>
  );
};

export default HomeDashboard;
