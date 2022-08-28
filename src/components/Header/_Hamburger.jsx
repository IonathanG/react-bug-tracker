import React from "react";
import styled from "styled-components";
import { device } from "../../shared/breakpoints";

const HamburgerContainer = styled.div`
  display: none;
  cursor: pointer;

  @media ${device.navbarBreakpoint} {
    display: block;
  }

  // width of each Slice
  div:nth-child(1) {
    width: 25px;
  }

  div:nth-child(2) {
    width: 22px;
  }

  div:nth-child(3) {
    width: 19px;
  }

  &:hover {
    div:nth-child(2),
    div:nth-child(3) {
      width: 25px;
    }
  }
`;

// Slice basic properties
const Slice = styled.div`
  display: block;
  height: 2.5px;

  margin: 5px 0;
  transition: all 0.5s ease;

  background-color: ${(props) =>
    props.showMenu
      ? props.theme.color_active_Hamburger
      : props.theme.color_Hamburger};

  //background-color: ${({ theme }) => theme.color_Hamburger};
`;

const TopSlice = styled(Slice)`
  transform: ${(props) => props.showMenu && "translateY(10px) rotateZ(405deg)"};
  width: ${(props) => props.showMenu && "25px"} !important;
`;

const MiddleSlice = styled(Slice)`
  width: ${(props) => props.showMenu && "0px"} !important;
`;

const BottomSlice = styled(Slice)`
  transform: ${(props) =>
    props.showMenu && "translateY(-10px) rotateZ(-405deg)"};
  width: ${(props) => props.showMenu && "25px"} !important;
`;

const Hamburger = ({ showMenu }) => {
  return (
    <HamburgerContainer showMenu={showMenu}>
      <TopSlice showMenu={showMenu}></TopSlice>
      <MiddleSlice showMenu={showMenu}></MiddleSlice>
      <BottomSlice showMenu={showMenu}></BottomSlice>
    </HamburgerContainer>
  );
};

export default Hamburger;
