import styled from "styled-components";
//import { device } from "./breakpoints";

export const SectionPage = styled.section`
  min-height: 100vh;
  width: 100%;

  background-color: ${({ theme }) => theme.background_MainSection};
  color: ${({ theme }) => theme.main_Font_Color};
  font-family: "Ubuntu", "sans-serif";
  transition: 0.3s ease;
`;

export const SectionMain = styled.section`
  // very-wide screen case
  // max-width: 1440px;

  // margin for Top Header height
  margin-top: 70px;

  width: 100%;
  background-color: ${({ theme }) => theme.background_MainSection};
  transition: 0.3s ease;
`;

export const SectionContent = styled.section`
  padding: 15px 20px 20px 20px;
  transition: 0.3s ease;
`;
