import React from "react";
import styled from "styled-components";

const NavbarContainer = styled.nav``;

const Navbar = () => {
  return (
    <NavbarContainer>
      <div>Logo</div>
      <ul>
        <li>Dashboard Home</li>
        <li>Manage Role Assignment</li>
        <li>Manage Project Users</li>
        <li>My Projects</li>
        <li>My Tickets</li>
        <li>User Profile</li>
      </ul>
      <div>Theme Switch</div>
    </NavbarContainer>
  );
};

export default Navbar;
