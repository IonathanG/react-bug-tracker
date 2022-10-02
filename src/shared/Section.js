import styled from "styled-components";
import { device } from "./breakpoints";
//import { device } from "./breakpoints";

export const SectionPage = styled.section`
  min-height: 100vh;
  width: 100%;

  background-color: ${({ theme }) => theme.background_MainSection};
  color: ${({ theme }) => theme.color_Font_Main};
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
  min-height: 100vh;

  // margin for side Navbar
  margin-left: 250px;
  padding: 15px;
  transition: 0.3s ease;

  @media ${device.navbarBreakpoint} {
    margin-left: 0px;
  }
`;
