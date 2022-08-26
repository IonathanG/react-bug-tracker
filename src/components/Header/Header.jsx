import React from "react";
import styled from "styled-components";
import { device } from "../../shared/breakpoints";
import SearchField from "./_SearchField";
import Notification from "./_Notification";
import UserAction from "./_UserAction";

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 20px;
  width: 100%;
  transition: 0.3s ease;

  @media ${device.phone_Small} {
    gap: 30px;
  }
  @media ${device.phone} {
    gap: 40px;
  }
`;

const Divider = styled.div`
  background-color: ${({ theme }) => theme.divider_Color};
  height: 100%;
  width: 1px;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <SearchField />
      <Notification />
      <Divider />
      <UserAction />
    </HeaderContainer>
  );
};

export default Header;
