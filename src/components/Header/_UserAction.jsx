import React from "react";
import styled from "styled-components";
import { device } from "../../shared/breakpoints";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

const UserContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const UserIconWrap = styled.div`
  background-color: ${({ theme }) => theme.icon_Background};
  border-radius: 50%;
  width: 38px;
  height: 38px;
  display: grid;
  place-items: center;
  cursor: pointer;
`;

const UserIcon = styled(PersonOutlineOutlinedIcon)`
  transform: scale(1.3);
  color: ${({ theme }) => theme.profile_Color};
`;

const UserName = styled.div`
  letter-spacing: 0.5px;
  font-size: 14px;
  display: none;

  @media ${device.phone} {
    display: block;
  }
`;

const UserAction = () => {
  return (
    <UserContainer>
      <UserName>Ionny Test</UserName>
      <UserIconWrap>
        <UserIcon />
      </UserIconWrap>
    </UserContainer>
  );
};

export default UserAction;
