import React from "react";
import { SectionContent } from "../../shared/Section";
import { PageTitle as Title } from "../../components/Titles/PageTitle";
import { TicketsList as Data_TicketsList } from "../../data/Data_TicketsList";
import TicketsList from "./_TicketsList";
//import styled from "styled-components";

const TicketsPage = () => {
  return (
    <SectionContent>
      <Title>My Tickets</Title>
      <TicketsList ticketsList={Data_TicketsList} />
    </SectionContent>
  );
};

export default TicketsPage;
