import React from "react";
import { SectionContent } from "../../shared/Section";
import styled from "styled-components";
import { PageTitle } from "../Shared/PageTitle";
import TicketsList from "./_TicketsList";
import { TicketsList as Data_TicketsList } from "../../data/Data_TicketsList";

const Title = styled(PageTitle)``;

const TicketsPage = () => {
  return (
    <SectionContent>
      <Title>My Tickets</Title>
      <TicketsList ticketsList={Data_TicketsList} />
    </SectionContent>
  );
};

export default TicketsPage;
