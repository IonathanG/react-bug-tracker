import React from "react";
import styled from "styled-components";
import { InputStyle } from "../Input/InputStyle";

const Input = styled(InputStyle)`
  width: 100px;
`;

const InputBlock = () => {
  return (
    <>
      <Input />
    </>
  );
};

export default InputBlock;
