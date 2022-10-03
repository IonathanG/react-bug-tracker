import React from "react";
import styled from "styled-components";

const Button = styled.button`
  font-family: "Ubuntu", "sans-serif";
  letter-spacing: 0.1px;
  transition: 0.25s ease;

  cursor: pointer;
  background-color: ${(props) =>
    props.buttonStyle?.background
      ? `${props.buttonStyle.background}`
      : props.theme.background_ButtonBasic};
  color: ${({ theme }) => theme.color_ButtonBasic};
  font-size: 14px;

  border: none;
  border-radius: 4px;

  padding: ${(props) =>
    props.buttonStyle?.padding ? `${props.buttonStyle.padding}` : "10px 14px"};
  margin: ${(props) =>
    props.buttonStyle?.margin ? `${props.buttonStyle.margin}` : "0px"};

  &:hover {
    background-color: ${(props) =>
      props.buttonStyle?.hover.background
        ? `${props.buttonStyle.hover.background}`
        : props.theme.background_ButtonBasic_Hover};

    color: ${(props) =>
      props.buttonStyle?.hover.color && `${props.buttonStyle.hover.color}`};
  }
`;

const ButtonActions = ({ buttonStyle, text, callback = null }) => {
  return (
    <Button buttonStyle={buttonStyle} onClick={callback} type="submit">
      {text}
    </Button>
  );
};

export default ButtonActions;
