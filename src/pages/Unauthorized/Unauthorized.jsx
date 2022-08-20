import React from "react";
import styled from "styled-components";
import { PageTitle } from "../Shared/PageTitle";

const Title = styled(PageTitle)``;

const Unauthorized = () => {
  return (
    <>
      <Title>Unauthorized Page</Title>
    </>
  );
};

export default Unauthorized;
