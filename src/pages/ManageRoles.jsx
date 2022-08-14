import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import { Section, SectionContent } from "../shared/Section";

const ManageRoles = () => {
  return (
    <Section>
      <Navbar />
      <SectionContent>
        <Header />
        <h1>Manage Role Page</h1>
      </SectionContent>
    </Section>
  );
};

export default ManageRoles;
