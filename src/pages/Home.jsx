import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import { Section, SectionContent } from "../shared/Section";

const Home = () => {
  return (
    <Section>
      <Navbar />
      <SectionContent>
        <Header />
        <h1>Home Page - Analytics Overview</h1>
      </SectionContent>
    </Section>
  );
};

export default Home;
