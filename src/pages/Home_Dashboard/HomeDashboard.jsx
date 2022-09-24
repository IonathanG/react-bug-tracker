import React from "react";
import styled from "styled-components";
import MembersDashboard from "./_Members";
import ProjectsDashboard from "./_Projects";
import TicketsDashboard from "./_Tickets";

const Container = styled.div``;

const Header = styled.header`
  margin-bottom: 20px;
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
      <Header>Dashboard</Header>
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
