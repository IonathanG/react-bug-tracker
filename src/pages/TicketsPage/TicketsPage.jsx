import React from "react";
import { SectionContent } from "../../shared/Section";
import { TicketList as Data_TicketList } from "../../data/Data_TicketList";
import TicketsList from "./_TicketsList";
//import styled from "styled-components";

const TicketsPage = () => {
  return (
    <SectionContent>
      <h1>My Tickets</h1>
      <TicketsList ticketList={Data_TicketList} />
    </SectionContent>
  );
};

export default TicketsPage;
