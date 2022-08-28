import React, { useState } from "react";
import styled from "styled-components";
import { device } from "../../shared/breakpoints";
import { useTheme } from "../../context/ThemeContext";
import NavbarHeader from "./_NavbarHeader";
import NavigationMenu from "./_NavigationMenu";
import SwitchThemeIcon from "./_SwitchThemeIcon";

const NavbarContainer = styled.nav`
  //background-color: beige;
  width: 260px;
  height: 100%;

  position: fixed;
  top: 70px;
  left: 0;

  display: flex;
  flex-direction: column;
  gap: 20px;

  transition: 0.6s ease;
  z-index: 10;

  @media ${device.navbarBreakpoint} {
    left: ${(props) => (props.showMenu ? "0" : "-500px")};
  }
`;

const SwitchTheme = styled.div`
  background-color: #f5e5dcc6;
`;

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <NavbarContainer showMenu={showMenu}>
      {/* Navbar Header + User Options */}
      <NavbarHeader />

      {/* Main Navigation Menu */}
      <NavigationMenu setShowMenu={setShowMenu} />

      {/* Theme Switch */}
      <SwitchTheme onClick={() => toggleTheme()}>
        <SwitchThemeIcon checked={theme === "dark" ? true : false} />
      </SwitchTheme>
    </NavbarContainer>
  );
};

export default Navbar;
