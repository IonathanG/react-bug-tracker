import React from "react";
import styled from "styled-components";

const InputField = styled.input`
  width: ${(props) => (props.style.width ? `${props.style.width}` : "100px")};
  padding: ${(props) => (props.style.padding ? `${props.style.padding}` : "")};

  border: 0.5px solid ${({ theme }) => theme.border_Form};
  border-radius: 8px;

  background-color: ${({ theme }) => theme.form_Background};
  box-shadow: ${({ theme }) => theme.border_Form_Shadow};

  color: ${({ theme }) => theme.main_Font_Color};
  transition: 0.3s ease-out;

  &:focus {
    outline: 0.5px solid ${({ theme }) => theme.active_Link};
  }

  &::placeholder {
    font-family: sans-serif;
    opacity: 0.7;
    color: ${({ theme }) => theme.main_Font_Color};
    font-size: 14px;
  }
`;

const Input = ({ style, value, setValue }) => {
  return (
    <>
      <InputField
        style={style}
        name="search"
        type="text"
        placeholder="Search..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        required
      />
    </>
  );
};

export default Input;
