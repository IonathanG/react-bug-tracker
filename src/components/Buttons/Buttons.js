import styled from "styled-components";

export const Button_MainStyle = styled.button`
  text-transform: uppercase;
  letter-spacing: 0.4px;

  cursor: pointer;
  background-color: ${({ theme }) => theme.button_Color};
  color: ${({ theme }) => theme.button_Text_Color};

  border: none;
  border-radius: 4px;
  padding: 10px;
`;
