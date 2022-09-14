import React from "react";
import styled from "styled-components";

const Input = styled.input`
  width: ${(props) => (props.style?.width ? `${props.style.width}` : "100%")};
  padding: ${(props) => (props.style?.padding ? `${props.style.padding}` : "")};

  border: 1px solid ${({ theme }) => theme.border_Input};
  border-radius: 4px;
  transition: 0.3s ease-out;

  font-family: "Ubuntu", "sans-serif";
  letter-spacing: 0.1px;

  &:focus {
    outline: none;
  }

  &::placeholder {
    font-family: "Ubuntu", "sans-serif";
    letter-spacing: 0.1px;
    font-size: 14px;
    opacity: 0.9;
    padding-left: 0px;
  }
`;

const InputBasic = ({ style, value, setValue }) => {
  return (
    <Input
      style={style}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export default InputBasic;
