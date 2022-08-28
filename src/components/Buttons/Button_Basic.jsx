import React from "react";
import styled from "styled-components";

const Button = styled.button`
  font-family: "Ubuntu", "sans-serif";
  letter-spacing: 0.1px;
  transition: 0.25s ease;

  cursor: pointer;
  background-color: ${({ theme }) => theme.background_ButtonBasic};
  color: ${({ theme }) => theme.color_ButtonBasic};
  font-size: 14px;

  border: none;
  border-radius: 4px;

  padding: ${(props) =>
    props.style?.padding ? `${props.style.padding}` : "10px 14px"};
  margin: ${(props) => (props.style?.margin ? `${props.style.margin}` : "0px")};

  &:hover {
    background-color: ${({ theme }) => theme.background_ButtonBasic_Hover};
  }
`;

const ButtonBasic = ({ buttonStyle, text, callback = null }) => {
  return (
    <Button style={buttonStyle} onClick={callback} type="submit">
      {text}
    </Button>
  );
};

export default ButtonBasic;
