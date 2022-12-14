import React from "react";
import styled from "styled-components";
import { device } from "../../shared/breakpoints";
import NavbarHeader from "./_NavbarHeader";
import MenuModal from "./_MenuModal";
import { useSelector } from "react-redux";

const NavbarContainer = styled.nav`
  width: 250px;
  height: calc(100% - 70px);

  position: fixed;
  top: 70px;
  left: 0;

  display: flex;
  flex-direction: column;
  gap: 20px;

  transition: 0.6s ease;
  background-color: ${({ theme }) => theme.background_MainSection};
  z-index: 10;

  // Navbar automatically slides out on Breakpoint
  @media ${device.navbarBreakpoint} {
    left: ${(props) => (props.showMenu ? "0" : "-500px")};
    box-shadow: 10px 0 5px -5px ${({ theme }) => theme.boxShadow_Navbar};
  }

  /* ----- Hiding Scrollbar on Side Navbar ----- */
  overflow-y: scroll;
  /* Hide scrollbar for Chrome, Safari and Opera */
  ::-webkit-scrollbar {
    display: none;
  }
  /* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;

const Navbar = () => {
  const showMenu = useSelector((state) => state.menu.showMenu);

  return (
    <NavbarContainer showMenu={showMenu}>
      {/* Navbar Header + User Options */}
      <NavbarHeader />

      {/* Menu Modal => Switch view between Navigation and Theme Settings */}
      <MenuModal />
    </NavbarContainer>
  );
};

export default Navbar;
