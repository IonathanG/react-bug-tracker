import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import { Section, SectionContent } from "../shared/Section";

const ProjectsPage = () => {
  return (
    <Section>
      <Navbar />
      <SectionContent>
        <Header />
        <h1>Projects Page</h1>
      </SectionContent>
    </Section>
  );
};

export default ProjectsPage;
