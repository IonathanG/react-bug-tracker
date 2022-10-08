import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const UserAvatar = styled.img`
  cursor: pointer;
  width: 32px;
  height: auto;
  margin-left: -6px;
  border-radius: 50%;
  border: 2px solid rgb(255, 255, 255);
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
  transition: 0.2s ease-out;

  &:hover {
    transform: translateY(-5px);
  }
`;

const UserAvatars = ({ team }) => {
  return (
    <div>
      {team.map((user) => (
        <Link to={`/MemberProfile/${user.user_id}`}>
          <UserAvatar src={"/avatar/" + user.user_id} alt="user_picture" />
        </Link>
      ))}
    </div>
  );
};

export default UserAvatars;
