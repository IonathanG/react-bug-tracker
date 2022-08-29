import React from "react";
import styled from "styled-components";
import TagInfo from "../Tags/Tag_Info";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";

const Header = styled.div`
  // background-color: #e3f5dcb4;
  display: flex;
  align-items: flex-start;
  gap: 10px;

  padding: 10px 20px 5px 20px;
  font-size: 14px;
`;

const UserAvatar = styled.img`
  width: 45px;
  height: auto;
`;

const UserDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1px;

  padding: 5px;
`;

const UserName = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  font-weight: 600;
`;

const ArrowDropDown = styled(ArrowDropDownOutlinedIcon)`
  transform: scale(0.9);
`;

const NavbarHeader = () => {
  return (
    <Header>
      <UserAvatar src="/avatar/admin_01" alt="user_picture" />
      <UserDetails>
        <div>Welcome,</div>
        <UserName>
          Demo Admin <ArrowDropDown />
        </UserName>
        {/* User Role Info */}
        <TagInfo tagColor={"Cyan"} tagText={"admin"} />
      </UserDetails>
    </Header>
  );
};

export default NavbarHeader;
