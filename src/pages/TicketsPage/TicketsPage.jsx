import React from "react";
import { SectionContent } from "../../shared/Section";
import { TicketsList as Data_TicketsList } from "../../data/Data_TicketsList";
import TicketsList from "./_TicketsList";
//import styled from "styled-components";

const TicketsPage = () => {
  return (
    <SectionContent>
      <h1>My Tickets</h1>
      <TicketsList ticketsList={Data_TicketsList} />
    </SectionContent>
  );
};

export default TicketsPage;
