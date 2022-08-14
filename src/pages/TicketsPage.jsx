import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import { Section, SectionContent } from "../shared/Section";

const TicketsPage = () => {
  return (
    <Section>
      <Navbar />
      <SectionContent>
        <Header />
        <h1>Tickets Page</h1>
      </SectionContent>
    </Section>
  );
};

export default TicketsPage;
