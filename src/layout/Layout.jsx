import React from "react";
import { Outlet } from "react-router-dom";
import { SectionPage, SectionMain, SectionContent } from "../shared/Section";
import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Header/Header";

const Layout = () => {
  // const isLoggedIn = false;
  const isLoggedIn = true;

  return (
    <>
      {isLoggedIn && (
        <SectionPage>
          {/* Top Header */}
          <Header />
          {/* Main Section => Side Navbar + Main Content */}
          <SectionMain>
            {/* Side Navbar */}
            <Navbar />
            {/* Main Content */}
            <SectionContent>
              <Outlet />
            </SectionContent>
          </SectionMain>
        </SectionPage>
      )}
      {!isLoggedIn && <Outlet />}
    </>
  );
};

export default Layout;
