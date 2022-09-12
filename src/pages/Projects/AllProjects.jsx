import React from "react";
import styled from "styled-components";
import BasicTable from "../../components/Tables/BasicTable";
import { AllProjects_Columns } from "../../data/TableColumns";
import MOCK_DATA from "../../data/MOCK_DATA.json";

const Container = styled.div``;

const Header = styled.header`
  margin-bottom: 20px;
`;

const AllProjects = () => {
  return (
    <Container>
      <Header>All Projects</Header>
      <BasicTable COLUMNS={AllProjects_Columns} MOCK_DATA={MOCK_DATA} />
    </Container>
  );
};

export default AllProjects;
