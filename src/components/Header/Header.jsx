import React from "react";
import styled from "styled-components";
//import { device } from "../../shared/breakpoints";
import Logo from "./_Logo";
import SearchField from "./_SearchField";
import NewTicket from "./_NewTicket";
import Notification from "./_Notification";
import Settings from "./_Settings";
import Logout from "./_Logout";

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;

  width: 100%;
  height: 70px;
  padding: 0px 20px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: ${({ theme }) => theme.background_Header};
  transition: 0.3s ease;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 70px;
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
`;

const Header = () => {
  return (
    <HeaderContainer>
      {/* Left side Header => Logo + Input Search */}
      <Left>
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
