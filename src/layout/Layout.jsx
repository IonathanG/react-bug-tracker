import React from "react";
import { Outlet } from "react-router-dom";
import { SectionPage, SectionMain, SectionContent } from "../shared/Styles";
import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Header/Header";
import useAuth from "../hooks/useAuth";

const Layout = () => {
  const { auth } = useAuth();

  return (
    <>
      {auth && (
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
      {!auth && <Outlet />}
    </>
  );
};

export default Layout;
