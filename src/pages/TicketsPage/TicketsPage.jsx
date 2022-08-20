import React from "react";
import { SectionContent } from "../../shared/Section";
import styled from "styled-components";
import { PageTitle } from "../Shared/PageTitle";

const Title = styled(PageTitle)``;

const TicketsPage = () => {
  return (
    <SectionContent>
      <Title>Tickets Page</Title>
    </SectionContent>
  );
};

export default TicketsPage;
