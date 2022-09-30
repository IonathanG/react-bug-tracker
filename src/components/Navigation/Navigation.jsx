import React from "react";
import TransitEnterexitIcon from "@mui/icons-material/TransitEnterexit";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 30px;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 22px;
  font-weight: 500;
`;

const Bottom = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.color_SubNavItem};
`;

const ArrowIcon = styled(TransitEnterexitIcon)`
  cursor: pointer;
  transform: rotate(45deg) scale(0.8);
  color: ${({ theme }) => theme.background_ButtonBasic};
  transition: 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.background_ButtonBasic_Hover};
  }
`;

const HomeIcon = styled(HomeOutlinedIcon)`
  cursor: pointer;
  transform: scale(0.8);
  color: ${({ theme }) => theme.background_ButtonBasic};
  transition: 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.background_ButtonBasic_Hover};
  }
`;

const Navigation = ({ headerText }) => {
  const navigate = useNavigate();

  return (
    <Container>
      <Top>
        <ArrowIcon onClick={() => navigate(-1)} />
        {headerText}
      </Top>

      <Bottom>
        <Link to={"/"}>
          <HomeIcon />
        </Link>
        <span>/</span>
        {headerText}
      </Bottom>
    </Container>
  );
};

export default Navigation;
