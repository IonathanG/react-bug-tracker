import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { device } from "../../shared/breakpoints";

const LogoImg = styled.img`
  cursor: pointer;

  @media ${device.phone} {
    display: none;
  }
`;

const Logo = () => {
  return (
    <Link to={"/"}>
      <LogoImg src="/logo/BugTrackerLogo.svg" alt="logo" />
    </Link>
  );
};

export default Logo;
