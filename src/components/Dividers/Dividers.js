import styled from "styled-components";

export const Divider_Horizontal = styled.div`
  background-color: ${({ theme }) => theme.divider_Color};
  height: 1px;
  width: 100%;
`;

export const Divider_Vertical = styled.div`
  background-color: ${({ theme }) => theme.divider_Color};
  height: 100%;
  width: 0.5px;
`;
