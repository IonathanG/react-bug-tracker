import React from "react";
import styled from "styled-components";
import SearchInput from "./_SearchInput";
import Notification from "./_Notification";

const HeaderContainer = styled.header`
  //background-color: aquamarine;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 40px;
  width: 100%;
  //height: 60px;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <SearchInput />
      <Notification></Notification>
    </HeaderContainer>
  );
};

export default Header;
