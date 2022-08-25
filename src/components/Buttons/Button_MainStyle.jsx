import React from "react";
import styled from "styled-components";

const Button = styled.button`
  text-transform: uppercase;
  letter-spacing: 0.4px;

  cursor: pointer;
  background-color: ${({ theme }) => theme.button_Color};
  color: ${({ theme }) => theme.button_Text_Color};

  border: none;
  border-radius: 4px;

  padding: ${(props) =>
    props.style.padding ? `${props.style.padding}` : "0px"};
  margin: ${(props) => (props.style.margin ? `${props.style.margin}` : "0px")};
`;

const ButtonMainStyle = ({ buttonStyle, text, handleSubmit }) => {
  return (
    <Button style={buttonStyle} onClick={handleSubmit} type="submit">
      {text}
    </Button>
  );
};

export default ButtonMainStyle;
