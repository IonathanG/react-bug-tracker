import React from "react";
import styled from "styled-components";
import Hamburger from "./_Hamburger";
import Logo from "./_Logo";
import SearchField from "./_SearchContent";
import NewTicket from "./_NewTicket";
import Notification from "./_Notification";
import Settings from "./_Settings";
import Logout from "./_Logout";
//import { device } from "../../shared/breakpoints";

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;

  width: 100%;
  height: 70px;
  padding: 0px 20px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  color: ${({ theme }) => theme.color_Font_Light};
  background-color: ${({ theme }) => theme.background_Header};
  transition: 0.3s ease;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 70px;
  transition: 0.3s ease;
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
  transition: 0.3s ease;
`;

const Header = () => {
  return (
    <HeaderContainer>
      {/* Left side Header => Logo + Input Search */}
      <Left>
        <Hamburger />
        <Logo />
        <SearchField />
      </Left>

      {/* Right side Header => New Ticket + Notifications + Settings + Logout */}
      <Right>
        <NewTicket />
        <Notification />
        <Settings />
        <Logout />
      </Right>
    </HeaderContainer>
  );
};

export default Header;
