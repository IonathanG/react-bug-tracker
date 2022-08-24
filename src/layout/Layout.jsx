import React from "react";
import { Outlet } from "react-router-dom";
import { Section, SectionMain } from "../shared/Section";
import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Header/Header";

const Layout = () => {
  const isLoggedIn = true;

  return (
    <>
      {isLoggedIn && (
        <Section>
          <Navbar />
          <SectionMain>
            <Header />
            <Outlet />
          </SectionMain>
        </Section>
      )}
      {!isLoggedIn && <Outlet />}
    </>
  );
};

export default Layout;