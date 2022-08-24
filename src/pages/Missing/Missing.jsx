import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const Container = styled.div`
  margin-top: 30px;

  a {
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.scrollbar_Color};
  }
`;

const Missing = () => {
  return (
    <Container>
      <h1>404 - The Page you are looking for does not Exist</h1>
      <Link to={"/"}>
        Back to Homepage <KeyboardArrowRightIcon />
      </Link>
    </Container>
  );
};

export default Missing;
