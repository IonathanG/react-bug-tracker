import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const Container = styled.div`
  margin: 20px;

  h1 {
    padding: 20px 0px;
  }

  h2 {
    padding: 5px 0px;
  }

  a {
    display: flex;
    align-items: center;
    padding: 20px 0px;
    color: ${({ theme }) => theme.color_Font_Light};
  }
`;

const Unauthorized = () => {
  return (
    <Container>
      <h1>Unauthorized Access.</h1>
      <h2>This page is restricted with your current Role.</h2>
      <h2>Contact an Administrator if this is a mistake.</h2>
      <Link to={"/"}>
        Back to Homepage <KeyboardArrowRightIcon />
      </Link>
    </Container>
  );
};

export default Unauthorized;
