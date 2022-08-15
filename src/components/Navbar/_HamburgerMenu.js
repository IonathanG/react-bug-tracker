import React from "react";
import styled from "styled-components";
import { device } from "../../shared/breakpoints";

const MenuHamburger = styled.div`
  z-index: 20;
  font-size: 20px;
  cursor: pointer;
  position: absolute;
  top: 20px;
  left: 10px;

  @media ${device.phone} {
    display: none;
  }

  div:nth-child(2) {
    width: 25px;
  }

  div:nth-child(3) {
    width: 20px;
  }

  &:hover {
    div:nth-child(2),
    div:nth-child(3) {
      width: 30px;
    }
  }
`;

const Slice = styled.div`
  display: block;
  height: 2px;
  width: 30px;
  background: ${({ theme }) => theme.hamburger_Theme};
  margin: 8px 0;
  transition: all 0.7s ease;
`;

const TopSlice = styled(Slice)`
  transform: ${(props) => props.showMenu && "translateY(10px) rotateZ(405deg)"};
  background-color: ${(props) =>
    props.showMenu && props.theme.active_HamburgerColor};
  width: ${(props) => props.showMenu && "30px"} !important;
`;

const BottomSlice = styled(Slice)`
  transform: ${(props) =>
    props.showMenu && "translateY(-10px) rotateZ(-405deg)"};
  background-color: ${(props) =>
    props.showMenu && props.theme.active_HamburgerColor};
  width: ${(props) => props.showMenu && "30px"} !important;
`;

const MiddleSlice = styled(Slice)`
  width: ${(props) => props.showMenu && "0px"} !important;
`;

const HamburgerMenu = ({ showMenu }) => {
  return (
    <MenuHamburger showMenu={showMenu}>
      <TopSlice showMenu={showMenu}></TopSlice>
      <MiddleSlice showMenu={showMenu}></MiddleSlice>
      <BottomSlice showMenu={showMenu}></BottomSlice>
    </MenuHamburger>
  );
};

export default HamburgerMenu;
