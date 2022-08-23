import styled from "styled-components";

export const InputField = styled.input`
  border-radius: 8px;
  border: 0.5px solid ${({ theme }) => theme.border_Form};
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
  }
`;
