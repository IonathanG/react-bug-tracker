import React from "react";
import styled from "styled-components";
import TagInfo from "../Tags/Tag_Info";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import useAuth from "../../hooks/useAuth";
import { useSelector } from "react-redux";

const Header = styled.div`
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
  const { auth } = useAuth();
  const users = useSelector((state) => state.users.Users);

  return (
    <Header>
      <UserAvatar src={`/avatar/${auth?.id}`} alt="user_picture" />
      <UserDetails>
        <div>Welcome,</div>
        <UserName>
          {auth?.user} <ArrowDropDown />
        </UserName>
        {/* User Role Info */}
        <TagInfo tagColor={"Cyan"} tagText={users[auth?.id]?.user_role} />
      </UserDetails>
    </Header>
  );
};

export default NavbarHeader;
