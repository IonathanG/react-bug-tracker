import React from "react";
import styled from "styled-components";

const Logo = styled.div`
  //cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  font-weight: 600;

  img {
    width: 30px;
    height: 30px;
  }
`;

const LogoMenu = () => {
  return (
    <Logo>
      <img src="/icons/Logo.svg" alt="logo" /> Bug_Tracker
    </Logo>
  );
};

export default LogoMenu;
