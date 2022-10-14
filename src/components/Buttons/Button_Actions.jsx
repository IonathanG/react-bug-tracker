import React from "react";
import styled from "styled-components";

const Button = styled.button`
  font-family: "Ubuntu", "sans-serif";
  letter-spacing: 0.1px;
  transition: 0.25s ease;

  cursor: pointer;
  background-color: transparent;
  border: 1px solid
    ${(props) =>
      props.buttonStyle?.theme
        ? `${props.buttonStyle.theme}`
        : props.theme.background_ButtonBasic};

  color: ${(props) =>
    props.buttonStyle?.theme
      ? `${props.buttonStyle.theme}`
      : props.theme.color_ButtonBasic};
  font-size: 14px;

  border-radius: 4px;

  padding: ${(props) =>
    props.buttonStyle?.padding ? `${props.buttonStyle.padding}` : "8px 12px"};
  margin: ${(props) =>
    props.buttonStyle?.margin ? `${props.buttonStyle.margin}` : "0px"};

  &:hover {
    background-color: ${(props) =>
      props.buttonStyle?.theme && `${props.buttonStyle.theme}`};

    color: ${(props) =>
      props.buttonStyle?.hover.color && `${props.buttonStyle.hover.color}`};
  }
`;

const ButtonActions = ({ buttonStyle, text, callback = null }) => {
  return (
    <Button buttonStyle={buttonStyle} type="submit">
      {text}
    </Button>
  );
};

export default ButtonActions;
