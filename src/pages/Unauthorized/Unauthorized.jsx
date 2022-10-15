import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Navigation from "../../components/Navigation/Navigation";

const Container = styled.div`
  a {
    display: flex;
    align-items: center;
    padding: 0px 0px;
    color: ${({ theme }) => theme.color_Font_Light};
  }
`;

const AccessWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Unauthorized = () => {
  return (
    <Container>
      <Navigation headerText={"Unauthorized Access"} />

      <AccessWrap>
        <h1>Unauthorized Access.</h1>
        <h2>This page is restricted with your current Role.</h2>
        <h2>Contact an Administrator if this is a mistake.</h2>
        <Link to={"/"}>
          Back to Homepage <KeyboardArrowRightIcon />
        </Link>
      </AccessWrap>
    </Container>
  );
};

export default Unauthorized;
