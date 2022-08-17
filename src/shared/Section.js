import styled from "styled-components";
import { device } from "./breakpoints";

export const Section = styled.section`
  display: flex;
  position: relative;
  transition: 0.3s ease;
  color: ${({ theme }) => theme.main_Font_Color};
`;

export const SectionMain = styled.section`
  //background-color: blanchedalmond;
  width: 100%;
  margin: 25px 25px;
  margin-left: 65px;
  transition: 0.3s ease;

  display: flex;
  flex-direction: column;
  gap: 45px;

  @media ${device.phone} {
    flex: 4;
    margin: 25px 50px;
    gap: 90px;
  }
`;

export const SectionContent = styled.div``;
